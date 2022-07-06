import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";

import {
  loginAction,
  loginSuccessAction,
  loginFailureAction
} from "src/app/auth/store/actions/login.action";
import { AuthService } from "src/app/auth/services/auth.service";
import { PersistanceService } from "src/app/shared/services/persistance.service";

@Injectable()
export class LoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      mergeMap(({ request }) =>
        this.authService.login(request).pipe(
          map((currentUser) => {
            this.persistanceService.set("accessToken", currentUser.token);
            return loginSuccessAction({ currentUser });
          }),
          catchError((errResponse: HttpErrorResponse) => {
            return of(loginFailureAction({ errors: errResponse.error.errors }));
          })
        )
      )
    )
  );

  redirectAfterSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
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
