import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PersistanceService } from "./persistance.service";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private persistanceService: PersistanceService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = this.persistanceService.get("accessToken");

    if (accessToken) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: "Token " + accessToken
        }
      });

      return next.handle(cloned);
    }

    return next.handle(req);
  }
}
