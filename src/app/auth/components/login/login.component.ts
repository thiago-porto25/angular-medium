import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { loginAction } from "src/app/auth/store/actions/login.action";
import {
  isSubmittingSelector,
  validationErrorsSelector
} from "src/app/auth/store/selectors";
import { RegisterErrorsInterface } from "src/app/auth/types/RegisterErrors.interface";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html"
})
export class LoginComponent {
  isSubmitting$: Observable<boolean> = this.store.pipe(
    select(isSubmittingSelector)
  );
  backendErrors$: Observable<RegisterErrorsInterface | null> = this.store.pipe(
    select(validationErrorsSelector)
  );

  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30)
    ])
  });

  constructor(private store: Store) {}

  onLogin(): void {
    this.store.dispatch(
      loginAction({
        request: {
          user: {
            email: this.loginForm.value?.email,
            password: this.loginForm.value?.password
          }
        }
      })
    );
  }
}
