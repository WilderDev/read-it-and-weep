import { exhaustMap, take } from 'rxjs';

import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  // Intercept the request and add the token to the header if user is authenticated
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authUserObs = this.auth.user.pipe(
      take(1),
      exhaustMap(user => {
        // If there is no user, return the request as is
        if (!user) {
          return next.handle(req);
        }

        // If there is a user, clone the request and add the token to the params
        const modifiedReq = req.clone({
          params: new HttpParams().set("auth", user.token)
        });

        // Return the modified request
        return next.handle(modifiedReq);
      })
    );

    // Return the observable
    return authUserObs;
  }
}
