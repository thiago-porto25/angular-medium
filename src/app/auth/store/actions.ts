import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "src/app/auth/store/actionTypes";
import { RegisterUserRequestInterface } from "src/app/auth/types/registerUserRequest.interface";

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterUserRequestInterface }>()
);
