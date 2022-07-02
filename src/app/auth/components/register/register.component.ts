import { Component } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
  ValidationErrors
} from "@angular/forms";

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
    { validators: this.passwordMatchingValidator }
  );

  passwordMatchingValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get("password");
    const confirmation = control.get("confirmPassword");

    return password?.value === confirmation?.value
      ? null
      : { notmathced: true };
  }

  onRegister(): void {
    console.log(this.registerForm.value);
    this.registerForm.reset();
  }
}
