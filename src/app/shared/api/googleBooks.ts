import { LibraryService } from 'src/app/library/library.service';
import { GOOGLE_BOOKS } from 'src/constants/google';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Book } from '../book/book.model';

@Injectable({
  providedIn: "root"
})
export class GoogleBookService {
  constructor() {}

  // Fetch Books from Google Books API
  searchBooksFromGoogle(query: string) {}
}
