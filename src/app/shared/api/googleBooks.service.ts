import { LibraryService } from 'src/app/library/library.service';
import { GOOGLE_BOOKS } from 'src/constants/google';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Book } from '../book/book.model';

@Injectable({
  providedIn: "root"
})
export class GoogleBookService {
  constructor(
    private http: HttpClient,
    private libraryService: LibraryService
  ) {}

  // Fetch Books from Google Books API
  searchBooksFromGoogle(query: string) {
    this.http.get(GOOGLE_BOOKS + query).subscribe((googleResponse: any) => {
      // turn the data into something our code/project understands
      const updatedBooks = googleResponse.items.slice(0, 6).map(item => {
        const book = new Book(
          item.volumeInfo.title || "unknown",
          item.volumeInfo.authors[0] || "unknown",
          item.volumeInfo.imageLinks.thumbnail || "unknown"
        );

        return book;
      });

      this.libraryService.saveBooks(updatedBooks);
    });
  }
}
