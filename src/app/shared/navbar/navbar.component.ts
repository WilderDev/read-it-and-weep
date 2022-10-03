import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  @Output() newPageEmitter = new EventEmitter<string>();

  showDropdown = false;
  isCollapsed = false;

  constructor() {}

  ngOnInit(): void {}

  changePage(pageName: string) {
    this.newPageEmitter.emit(pageName);
  }
}
