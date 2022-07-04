import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { RegisterErrorsInterface } from "./RegisterErrors.interface";

export interface AuthStateInterface {
  isSubmitting: boolean;
  isLoggedIn: boolean | null;
  currentUser: CurrentUserInterface | null;
  errors: RegisterErrorsInterface | null;
}
