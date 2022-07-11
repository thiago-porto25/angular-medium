import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "src/app/auth/store/actionTypes";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";

import { RegisterErrorsInterface } from "src/app/auth/types/RegisterErrors.interface";

export const getCurrentUserAction = createAction(ActionTypes.GET_CURRENT);

export const getCurrentUserSuccessAction = createAction(
  ActionTypes.GET_CURRENT_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const getCurrentUserFailureAction = createAction(
  ActionTypes.GET_CURRENT_FAILURE
  // props<{ errors: RegisterErrorsInterface }>()
);
