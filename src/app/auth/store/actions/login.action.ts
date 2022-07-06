import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "src/app/auth/store/actionTypes";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";

import { LoginUserRequestInterface } from "src/app/auth/types/loginUserRequest.interface";
import { RegisterErrorsInterface } from "src/app/auth/types/RegisterErrors.interface";

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ request: LoginUserRequestInterface }>()
);

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ errors: RegisterErrorsInterface }>()
);
