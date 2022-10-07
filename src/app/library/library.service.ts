import { Injectable } from '@angular/core';

import { Book } from '../shared/book/book.model';

@Injectable({
  providedIn: "root"
})
export class LibraryService {
  private apiBooks: Book[] = [
    new Book(
      "Lost Souls?",
      "Poppy Z. Brite",
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1420793346i/452244.jpg",
      "3490823094"
    ),
    new Book(
      "Of Mice & Men",
      "John Steinbeck",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Of_Mice_and_Men_%281937_1st_ed_dust_jacket%29.jpg/220px-Of_Mice_and_Men_%281937_1st_ed_dust_jacket%29.jpg",
      "435253543"
    )
  ];

  // READ
  getAllBooks() {
    return this.apiBooks.slice();
  }
}
