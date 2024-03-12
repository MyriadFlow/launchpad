import { tap } from '@/lib/utils';
import Session from '@/lib/session';
import { NextRequest, NextResponse } from 'next/server';
import { SiweErrorType, SiweMessage, generateNonce } from 'siwe';
import { getWeb3Auth } from '@/lib/api/auth_api/get_flowId';
import { signIn, signOut, setFlowId, setEula } from '@/features/auth/authSlice';
import { store } from '@/app/store';
import { globalState } from "@/app/globals";

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  const session = await Session.fromRequest(req);

  const fetchPayload = async () => {
    try {
      const data = await getWeb3Auth(session.address);
      console.log(data)
    } catch (error) {
      console.error('Error fetching authentication data:', error);
    }
  };

  const signedIn = session.address && session.chainId;

  if (signedIn) {
    fetchPayload();
  }

  return NextResponse.json(session.toJSON());
};

export const PUT = async (req: NextRequest): Promise<NextResponse> => {
  const session = await Session.fromRequest(req);
  if (!session?.nonce) session.nonce = generateNonce();

  // Set the nonce as a cookie
  const response = new NextResponse(session.nonce);
  session.persist(response);

  return tap(response, res => session.persist(res));
};

export const POST = async (req: NextRequest) => {
  const { message, signature } = await req.json();
  const session = await Session.fromRequest(req);

  try {
    const siweMessage = new SiweMessage(message);
    const { data: fields } = await siweMessage.verify({
      signature,
      nonce: session.nonce,
    });

    if (fields.nonce !== session.nonce) {
      return tap(new NextResponse('Invalid nonce.', { status: 422 }), res => session.clear(res));
    }

    session.address = fields.address;
    session.chainId = fields.chainId;
  } catch (error) {
    switch (error) {
      case SiweErrorType.INVALID_NONCE:
      case SiweErrorType.INVALID_SIGNATURE:
        return tap(new NextResponse(String(error), { status: 422 }), res => session.clear(res));

      default:
        return tap(new NextResponse(String(error), { status: 400 }), res => session.clear(res));
    }
  }

  return tap(new NextResponse(''), res => session.persist(res));
};

export const DELETE = async (req: NextRequest) => {
  const session = await Session.fromRequest(req);

  // Dispatch actions to Redux store
  store.dispatch(signOut()) && console.log('signed out state works');

  // Clear the session and remove the nonce cookie
  return tap(new NextResponse(''), res => session.clear(res));
};
