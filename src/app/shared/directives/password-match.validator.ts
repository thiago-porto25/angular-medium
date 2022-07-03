import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordMatchingValidator(
  control: AbstractControl
): ValidationErrors | null {
  const password = control.get("password");
  const confirmation = control.get("confirmPassword");

  return password?.value === confirmation?.value ? null : { notmathced: true };
}
