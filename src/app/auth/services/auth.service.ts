import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

import { environment } from "src/environments/environment";

import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { RegisterUserRequestInterface } from "src/app/auth/types/registerUserRequest.interface";
import { AuthResponseInterface } from "src/app/auth/types/authResponse.interface";
import { LoginUserRequestInterface } from "../types/loginUserRequest.interface";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  private getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user;
  }

  register(
    data: RegisterUserRequestInterface
  ): Observable<CurrentUserInterface> {
    return this.http
      .post<AuthResponseInterface>(`${environment.API_BASE_URL}/users`, data)
      .pipe(map(this.getUser));
  }

  login(data: LoginUserRequestInterface): Observable<CurrentUserInterface> {
    return this.http
      .post<AuthResponseInterface>(
        `${environment.API_BASE_URL}/users/login`,
        data
      )
      .pipe(map(this.getUser));
  }
}
