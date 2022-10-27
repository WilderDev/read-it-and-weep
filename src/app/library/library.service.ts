import { Injectable } from '@angular/core';

import { Book } from '../shared/book/book.model';

@Injectable({
  providedIn: "root"
})
export class LibraryService {
  private apiBooks: Book[] = [];

  constructor() {}

  // Get API Results (array of books)
  getAllBooks() {
    return this.apiBooks.slice();
  }
}
