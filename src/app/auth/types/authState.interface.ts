import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { RegisterErrorsInterface } from "./RegisterErrors.interface";

export interface AuthStateInterface {
  isSubmitting: boolean;
  isLoading: boolean;
  isLoggedIn: boolean | null;
  currentUser: CurrentUserInterface | null;
  errors: RegisterErrorsInterface | null;
}
