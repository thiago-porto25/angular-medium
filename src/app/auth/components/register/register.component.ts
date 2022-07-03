import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { passwordMatchingValidator } from "src/app/shared/directives/password-match.validator";
import { registerAction } from "src/app/auth/store/actions";
import { isSubmittingSelector } from "src/app/auth/store/selectors";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup(
    {
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.pattern("[a-zA-Z0-9]+")
      ]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]),
      confirmPassword: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])
    },
    { validators: passwordMatchingValidator }
  );
  isSubmitting$: Observable<boolean> = this.store.pipe(
    select(isSubmittingSelector)
  );

  constructor(private store: Store) {}

  onRegister(): void {
    if (this.registerForm.valid) {
      this.store.dispatch(
        registerAction({
          request: {
            username: this.registerForm.value?.username,
            email: this.registerForm.value?.email,
            password: this.registerForm.value?.password
          }
        })
      );
    }
  }
}
