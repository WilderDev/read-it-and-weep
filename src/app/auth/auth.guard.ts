import { map, take } from 'rxjs';

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    return this.auth.user.pipe(
      take(1),
      map(user => {
        return !!user ? true : this.router.createUrlTree(["auth"]);
      })
    );
  }
}
