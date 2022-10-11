import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-bookshelf",
  templateUrl: "./bookshelf.component.html",
  styleUrls: ["./bookshelf.component.css"]
})
export class BookshelfComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  openBookForm() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }
}
