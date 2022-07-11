import { createReducer, on } from "@ngrx/store";

import { AuthStateInterface } from "src/app/auth/types/authState.interface";
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction
} from "src/app/auth/store/actions/register.action";
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction
} from "./actions/login.action";
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction
} from "./actions/get-current-user.action";
import { state } from "@angular/animations";

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
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
  })),
  on(loginAction, (state) => ({
    ...state,
    isSubmitting: true,
    errors: null
  })),
  on(loginSuccessAction, (state, action) => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: true,
    currentUser: action.currentUser
  })),
  on(loginFailureAction, (state, action) => ({
    ...state,
    isSubmitting: false,
    errors: action.errors
  })),
  on(getCurrentUserAction, (state) => ({
    ...state,
    isLoading: true
  })),
  on(getCurrentUserSuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    currentUser: action.currentUser,
    isLoggedIn: true
  })),
  on(getCurrentUserFailureAction, (state) => ({
    ...state,
    isLoading: false,
    isLoggedIn: false,
    currentUser: null
  }))
);
