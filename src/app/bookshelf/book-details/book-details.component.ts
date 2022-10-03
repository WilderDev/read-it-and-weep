import { Component, Input, OnInit } from '@angular/core';

import { Book } from '../../shared/book/book.model';

@Component({
  selector: "app-book-details",
  templateUrl: "./book-details.component.html",
  styleUrls: ["./book-details.component.css"]
})
export class BookDetailsComponent implements OnInit {
  @Input() bookDetails: Book;

  constructor() {}

  ngOnInit(): void {}
}
