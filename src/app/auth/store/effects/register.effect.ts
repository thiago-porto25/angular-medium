import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";

import {
  registerAction,
  registerSuccessAction,
  registerFailureAction
} from "src/app/auth/store/actions/register.action";
import { AuthService } from "src/app/auth/services/auth.service";
import { PersistanceService } from "src/app/shared/services/persistance.service";

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      mergeMap(({ request }) =>
        this.authService.register(request).pipe(
          map((currentUser) => {
            this.persistanceService.set("accessToken", currentUser.token);
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

  redirectAfterSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => {
          this.router.navigateByUrl("/");
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}
}
