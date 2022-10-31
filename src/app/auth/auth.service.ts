import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';

import { AuthRes } from './auth.types';
import { User } from './user.model';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user = new BehaviorSubject<User | null>(null); // Subscribable User

  constructor() {}

  // Sign up
  signUp(email: string, password: string) {
    // TODO: Send Sign Up Request to firebase server -> Handle Auth (pipe/tap)
  }

  // Sign in
  signIn(email: string, password: string) {
    // TODO: Send Sign In Request to firebase server -> Handle Auth (pipe/tap)
  }

  // Sign out
  signOut() {
    // TODO
    // Emit null through the behavior subject
    // Remove the User Instance from localStorage
    // Navigate to the root auth page of the app
  }

  // Auto sign in

  // Auto sign out

  // Auth Handler
  private authHandler(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    // TODO
    // Create Expiration Date for Token
    // Create new User Instance
    // Emit the new User Instance through the behavior subject
    // Save the stringified User Instance to localStorage
  }
}
