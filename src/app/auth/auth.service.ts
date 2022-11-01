import { BehaviorSubject, tap } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { AuthRes } from './auth.types';
import { User } from './user.model';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user = new BehaviorSubject<User | null>(null); // Subscribable User

  private expTimer: any;

  constructor(private http: HttpClient, private router: Router) {}

  // Sign up
  signUp(email: string, password: string) {
    return this.http
      .post<AuthRes>(
        environment.firebase.authSignUp + environment.firebase.apiKey,
        {
          email,
          password,
          returnSecureToken: true
        }
      )
      .pipe(
        tap(res =>
          this.authHandler(res.email, res.localId, res.idToken, +res.expiresIn)
        )
      );
  }

  // Sign in
  signIn(inputEmail: string, inputPassword: string) {
    const requestBody = {
      email: inputEmail,
      password: inputPassword,
      returnSecureToken: true
    };

    return this.http
      .post<AuthRes>(
        environment.firebase.authSignIn + environment.firebase.apiKey,
        requestBody
      )
      .pipe(
        tap(res =>
          this.authHandler(res.email, res.localId, res.idToken, +res.expiresIn)
        )
      );
  }

  // Sign out
  signOut() {
    // Emit null through the behavior subject
    this.user.next(null);

    // Remove the User Instance from localStorage
    localStorage.removeItem("riaw_user");

    // Reset Token Expiration Timer
    if (this.expTimer) clearTimeout(this.expTimer);

    // Navigate to the root auth page of the app
    this.router.navigate(["auth"]);
  }

  // Auto sign in
  autoSignIn() {
    const lsUser = JSON.parse(localStorage.getItem("riaw_user"));

    if (!lsUser) return;

    const { email, id, _token, _tokenExpirationDate } = lsUser;

    const user = new User(email, id, _token, new Date(_tokenExpirationDate));

    if (user.token) this.user.next(user);

    const expirationDate =
      new Date(_tokenExpirationDate).getTime() - new Date().getTime();

    this.autoSignOut(expirationDate);
  }

  // Auto sign out
  autoSignOut(expirationDuration: number) {
    this.expTimer = setTimeout(() => {
      this.signOut();
    }, expirationDuration);
  }

  // Auth Handler
  private authHandler(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    // Create Expiration Date for Token
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

    // Create new User Instance
    const authUser = new User(email, userId, token, expirationDate);

    // Emit the new User Instance through the behavior subject
    this.user.next(authUser);

    // Set a new timer for Expiration Token
    this.autoSignOut(expiresIn * 1000);

    // Save the stringified User Instance to localStorage
    localStorage.setItem("riaw_user", JSON.stringify(authUser));
  }
}
