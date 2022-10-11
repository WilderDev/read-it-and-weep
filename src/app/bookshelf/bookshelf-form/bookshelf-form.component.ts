import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: "app-bookshelf-form",
  templateUrl: "./bookshelf-form.component.html",
  styleUrls: ["./bookshelf-form.component.css"]
})
export class BookshelfFormComponent implements OnInit {
  isEditMode = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((newParams: Params) => {
      // Bang Bang -> You're a boolean
      this.isEditMode = !!newParams.id;
    });
  }
}
