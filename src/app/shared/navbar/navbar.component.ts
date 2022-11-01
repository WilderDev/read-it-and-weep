import { Component, OnDestroy, OnInit } from '@angular/core';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit, OnDestroy {
  isCollapsed = false;
  isAuth = false;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.user.subscribe(user => {
      this.isAuth = !!user; // !! -> Bang Bang -> Boolean
    });
  }

  ngOnDestroy(): void {
    // TODO: Destroy Subscription
  }
}
