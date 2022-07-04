import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "src/app/auth/store/actionTypes";
import { RegisterUserRequestInterface } from "src/app/auth/types/registerUserRequest.interface";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { RegisterErrorsInterface } from "../../types/RegisterErrors.interface";

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterUserRequestInterface }>()
);

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ errors: RegisterErrorsInterface }>()
);
