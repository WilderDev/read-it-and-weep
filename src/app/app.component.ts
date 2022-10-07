import { Component } from '@angular/core';

type pageName = "BOOKSHELF" | "LIBRARY";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  currPageName: pageName = "BOOKSHELF";
}
