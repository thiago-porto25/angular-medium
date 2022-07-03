import { createReducer, on } from "@ngrx/store";

import { AuthStateInterface } from "src/app/auth/types/authState.interface";
import { registerAction } from "src/app/auth/store/actions";

const initialState: AuthStateInterface = {
  isSubmitting: false
};

export const authReducer = createReducer(
  initialState,
  on(registerAction, (state) => ({ ...state, isSubmitting: true }))
);
