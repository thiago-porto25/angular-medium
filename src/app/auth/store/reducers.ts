import { createReducer, on } from "@ngrx/store";

import { AuthStateInterface } from "src/app/auth/types/authState.interface";
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction
} from "src/app/auth/store/actions/register.action";

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoggedIn: null,
  errors: null,
  currentUser: null
};

export const authReducer = createReducer(
  initialState,
  on(registerAction, (state) => ({
    ...state,
    isSubmitting: true,
    errors: null
  })),
  on(registerSuccessAction, (state, action) => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: true,
    currentUser: action.currentUser
  })),
  on(registerFailureAction, (state, action) => ({
    ...state,
    isSubmitting: false,
    errors: action.errors
  }))
);
