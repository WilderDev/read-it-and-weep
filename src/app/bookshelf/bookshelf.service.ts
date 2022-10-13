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
  private bsServiceBooks: Book[] = [
    new Book(
      "Howl's Moving Castle",
      "Diana Wynne Jones",
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Howl%27s_Moving_Castle_%28Book_Cover%29.jpg/220px-Howl%27s_Moving_Castle_%28Book_Cover%29.jpg",
      "sdfklajvj23klj"
    ),
    new Book(
      "Brian's Hunt",
      "Gary Paulsen",
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/Paulsen_-_Brian%27s_Hunt_Coverart.jpg/220px-Paulsen_-_Brian%27s_Hunt_Coverart.jpg",
      "324j32kljfkdsf"
    ),
    new Book(
      "Fight Club",
      "Chuck Palahniuk",
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Fightclubcvr.jpg/200px-Fightclubcvr.jpg",
      "kl3jlkjfksjfsd"
    )
  ];

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
    const book = this.bsServiceBooks.slice().filter(b => b.id === id)[0];
    return book;
  }

  // UPDATE
  updateSingleBook(id, bookDetails) {}

  // DELETE
  deleteSingleBook(id: string) {
    const updatedBookArr = this.bsServiceBooks.filter(book => book.id !== id);

    this.bsServiceBooks = updatedBookArr;

    this.bookListChanged.next(this.bsServiceBooks.slice());
  }
}
