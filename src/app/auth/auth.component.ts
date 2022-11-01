import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { AuthRes } from './auth.types';

type authMode = "LOGIN" | "REGISTER";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  mode: authMode = "LOGIN"; // Switch between Login and Register Modes

  authObservable: Observable<AuthRes>;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  // Form Submission Logic
  onAuth(form: NgForm) {
    if (!form.valid) return; // Ensure the form is valid before moving forward

    const { email, password } = form.value; // Destructure the form values / user input

    if (this.mode === "REGISTER") {
      // Register the user
      this.authObservable = this.auth.signUp(email, password);
    } else {
      // Login the user
      this.authObservable = this.auth.signIn(email, password);
    }

    this.authObservable.subscribe({
      next: () => this.router.navigate(["bookshelf"]),
      error: error => alert(error.message)
    });

    form.reset(); // Reset the form
  }
}
