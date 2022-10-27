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

  // Create Single Book
  createSingleBook(book: Book) {
    const { title, author, coverImagePath, id } = book;
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

  // Save Single Book to Firebase
  saveSingleBook(bookDetails: Partial<Book>) {
    const { title, author, coverImagePath } = bookDetails;

    // TODO
  }

  // Get Books from Firebase
  getBooksFromFirebase() {
    // TODO
  }

  // Get All Books
  getAllBooks() {
    return this.bsServiceBooks.slice(); // Returns copy of myBooks array
  }

  // Get Single Book
  getSingleBook(id: string) {
    const book = this.bsServiceBooks.slice().find(book => book.id === id);
    return book;
  }

  // Update Single Book
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

  // Delete Single Book
  deleteSingleBook(id: string) {
    const updatedBookArr = this.bsServiceBooks.filter(book => book.id !== id);

    this.bsServiceBooks = updatedBookArr;

    this.bookListChanged.next(this.bsServiceBooks.slice());
  }
}
