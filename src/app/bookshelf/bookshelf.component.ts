import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-bookshelf",
  templateUrl: "./bookshelf.component.html",
  styleUrls: ["./bookshelf.component.css"]
})
export class BookshelfComponent implements OnInit {
  sortBy: "title" | "author" = "title";

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  openBookForm() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }

  onSort() {
    this.sortBy === "title"
      ? (this.sortBy = "author")
      : (this.sortBy = "title");
  }
}
