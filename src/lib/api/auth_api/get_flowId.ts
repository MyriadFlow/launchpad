// api.ts
import axios, { AxiosResponse } from 'axios';

export const makeApiGetCall = async <T>(
  url: string,
  params?: Record<string, string | number>
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// types.ts
interface ApiResponse<T> {
  statusCode: number;
  message: string;
  payload: T;
}

interface AuthResponsePayload {
  eula: string;
  flowId: string;
}

export interface AuthApiResponse extends ApiResponse<AuthResponsePayload> {}

// authApi.ts
export const getWeb3Auth = async (
  walletAddress: any
): Promise<AuthApiResponse> => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL_GATEWAY;
  const url = `${BASE_URL}/api/v1.0/auth/web3`;
  const params = { walletAddress };

  return makeApiGetCall<AuthApiResponse>(url, params);
};
