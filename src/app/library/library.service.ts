import { Subject } from 'rxjs';

import { Injectable } from '@angular/core';

import { Book } from '../shared/book/book.model';

@Injectable({
  providedIn: "root"
})
export class LibraryService {
  apiBooksChanged = new Subject<Book[]>();

  private apiBooks: Book[] = [];

  constructor() {}

  // Get API Results (array of books)
  getAllBooks() {
    return this.apiBooks.slice();
  }

  // Save API Results (array of books)
  saveBooks(books: Book[]) {
    this.apiBooks = books;

    this.apiBooksChanged.next(this.apiBooks.slice());
  }
}
