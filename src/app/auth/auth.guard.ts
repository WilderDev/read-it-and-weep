import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor() {}

  canActivate() {
    return true;
  }
}

// TODO:  Check if the !!user is authenticated. If so, return true. If not, return router.createUrlTree(['auth']).
