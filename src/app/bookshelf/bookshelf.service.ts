import { Subject } from 'rxjs';

import { Injectable } from '@angular/core';

import { Book } from '../shared/book/book.model';

@Injectable({
  providedIn: "root"
})
export class BookshelfService {
  // Emitters/Subjects
  bookSelected = new Subject<Book>();
  bookListChanged = new Subject<Book[]>();
  bookAddedEmitter = new Subject<Book>();

  // Data
  private bsServiceBooks: Book[] = [];

  constructor() {}

  // CREATE
  saveSingleBook(bookDetails: Book) {
    const { title, author, coverImagePath, id } = bookDetails;
    let randomId = id ?? Math.floor(Math.random() * 12 + 3);

    const bookToAdd = new Book(
      title,
      author,
      coverImagePath,
      randomId.toString()
    );

    this.bsServiceBooks.push(bookToAdd);

    this.bookAddedEmitter.next(bookToAdd);

    this.bookListChanged.next(this.bsServiceBooks.slice());
  }

  // READ
  getAllBooks() {
    return this.bsServiceBooks.slice(); // Returns copy of myBooks array
  }
  getSingleBook(id: string) {
    const book = this.bsServiceBooks.slice().find(book => book.id === id);
    return book;
  }

  // UPDATE
  updateSingleBook(id: string, bookDetails: Partial<Book>) {
    this.bsServiceBooks = this.bsServiceBooks.map(book => {
      if (book.id === id) {
        return { ...book, ...bookDetails };
      } else {
        return book;
      }
    });

    this.bookListChanged.next(this.bsServiceBooks);
  }

  // DELETE
  deleteSingleBook(id: string) {
    const updatedBookArr = this.bsServiceBooks.filter(book => book.id !== id);

    this.bsServiceBooks = updatedBookArr;

    this.bookListChanged.next(this.bsServiceBooks.slice());
  }
}
