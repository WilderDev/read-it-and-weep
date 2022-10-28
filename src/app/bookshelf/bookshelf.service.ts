import { Subject } from 'rxjs';
import { objectToArray } from 'src/utils/objectToArray';

import { Injectable } from '@angular/core';

import { FirebaseService } from '../shared/api/firebaseService';
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

  constructor(private firebase: FirebaseService) {}

  // Save Single Book
  saveSingleBook(bookDetails: Book) {
    this.firebase.saveBooktoFirebase(bookDetails);

    this.bsServiceBooks.push({ ...bookDetails });

    this.bookAddedEmitter.next({ ...bookDetails });

    this.bookListChanged.next(this.bsServiceBooks.slice());
  }

  // Get Books from Firebase
  getBooksFromFirebase() {
    this.firebase.fetchBooksFromFirebase().subscribe((response: any) => {
      if (response) {
        const arrayOfBooks = objectToArray(response);

        this.bsServiceBooks = arrayOfBooks;

        this.bookListChanged.next(this.bsServiceBooks);
      }
    });
  }

  // Get All Books
  getAllBooks() {
    this.getBooksFromFirebase();

    return this.bsServiceBooks.slice(); // Returns copy of myBooks array
  }

  // Get Single Book
  getSingleBook(id: string) {
    const book = this.bsServiceBooks.slice().find(book => book.id === id);

    return book;
  }

  getBookByTitle(title: string) {
    const book = this.bsServiceBooks.slice().find(book => book.title === title);

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
    this.firebase.deleteBookFromFirebase(id);

    this.bsServiceBooks = this.bsServiceBooks.filter(b => b.id !== id);

    this.bookListChanged.next(this.bsServiceBooks.slice());
  }

  deleteSingleBookByTitle(title: string) {
    const bookToDel = this.bsServiceBooks.find(b => b.title === title);

    this.firebase.deleteBookFromFirebase(bookToDel.id);

    this.bsServiceBooks = this.bsServiceBooks.filter(b => b.title !== title);

    this.bookListChanged.next(this.bsServiceBooks.slice());
  }
}
