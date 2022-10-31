import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  isCollapsed = false;
  isAuth = false;

  constructor() {}

  ngOnInit(): void {
    // TODO: Subscribe to Auth User to see if user is logged in
  }
}
