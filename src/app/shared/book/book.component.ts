import { Component, Input, OnInit } from '@angular/core';

import { BookshelfService } from '../../bookshelf/bookshelf.service';
import { Book } from './book.model';

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"]
})
export class BookComponent implements OnInit {
  @Input() bookDetails: Book;

  constructor() {}

  ngOnInit(): void {}
}
