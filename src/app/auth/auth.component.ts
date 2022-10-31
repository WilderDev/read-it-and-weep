import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

type authMode = "LOGIN" | "REGISTER";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  mode: authMode = "LOGIN"; // Switch between Login and Register Modes

  constructor() {}

  ngOnInit(): void {}

  // Form Submission Logic
  onAuth(form: NgForm) {
    if (!form.valid) return; // Ensure the form is valid before moving forward

    const { email, password } = form.value; // Destructure the form values / user input

    console.log(this.mode, email, password); // Log the form values / user input

    // TODO: Send to server

    form.reset(); // Reset the form
  }
}
