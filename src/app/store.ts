// store.ts
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '@/features/auth/authSlice'; // Update the path accordingly

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers as needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
