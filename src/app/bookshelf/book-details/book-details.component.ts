import { Component, OnInit } from '@angular/core';

import { Book } from '../../shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: "app-book-details",
  templateUrl: "./book-details.component.html",
  styleUrls: ["./book-details.component.css"]
})
export class BookDetailsComponent implements OnInit {
  book: Book;

  constructor(private bsService: BookshelfService) {}

  ngOnInit(): void {
    this.bsService.bookSelected.subscribe((selectedBook: Book) => {
      this.book = selectedBook;
    });
  }
}
