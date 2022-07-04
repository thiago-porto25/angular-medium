import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";

import {
  registerAction,
  registerSuccessAction,
  registerFailureAction
} from "src/app/auth/store/actions/register.action";
import { AuthService } from "src/app/auth/services/auth.service";

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      mergeMap(({ request }) =>
        this.authService.register(request).pipe(
          map((currentUser) => {
            return registerSuccessAction({ currentUser });
          }),
          catchError((errResponse: HttpErrorResponse) => {
            return of(
              registerFailureAction({ errors: errResponse.error.errors })
            );
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
