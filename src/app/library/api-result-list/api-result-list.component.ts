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
    this.apiBooks = this.libraryService.getAllBooks();
    console.log("this.apiBooks:", this.apiBooks);
    console.log("this.bsService.getAllBooks:", this.bsService.getAllBooks());
  }

  onSaveBook(book: Book) {
    this.bsService.saveSingleBook(book);
  }

  checkIfInBookshelf(id: string) {
    const foundBook = this.bsService.getSingleBook(id);

    return foundBook ? true : false;
  }
}
