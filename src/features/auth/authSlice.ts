// features/auth/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  signedIn: boolean;
  flowId: string | null;
  eula: string | null;
}

const initialState: AuthState = {
  signedIn: false,
  flowId: null,
  eula: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<boolean>) => {
      state.signedIn = action.payload;
    },
    signOut: (state) => {
      state.signedIn = false;
      state.flowId = null;
      state.eula = null;
    },
    setFlowId: (state, action: PayloadAction<string>) => {
      state.flowId = action.payload;
    },
    setEula: (state, action: PayloadAction<string>) => {
      state.eula = action.payload;
    },
  },
});

export const { signIn, signOut, setFlowId, setEula } = authSlice.actions;
export default authSlice.reducer;
