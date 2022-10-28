import { Component, OnInit } from '@angular/core';

import { BookshelfService } from '../../bookshelf/bookshelf.service';
import { Book } from '../../shared/book/book.model';
import { LibraryService } from '../library.service';

@Component({
  selector: "app-api-result-list",
  templateUrl: "./api-result-list.component.html",
  styleUrls: ["./api-result-list.component.css"]
})
export class ApiResultListComponent implements OnInit {
  apiBooks: Book[] = [];

  constructor(
    private libraryService: LibraryService,
    private bsService: BookshelfService
  ) {}

  ngOnInit(): void {
    this.libraryService.apiBooksChanged.subscribe((books: Book[]) => {
      this.apiBooks = books;
    });
  }

  onSaveBook(book: Book) {
    this.bsService.saveSingleBook(book);
  }

  checkIfInBookshelf(title: string) {
    const foundBook = this.bsService.getBookByTitle(title);

    return foundBook ? true : false;
  }
}
