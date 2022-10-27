import { FIREBASE_BOOKS } from 'src/constants/firebase';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Book } from '../book/book.model';

@Injectable({
  providedIn: "root"
})
export class FirebaseService {
  constructor() {}

  // Fetch Books from Firebase
  fetchBooksFromFirebase() {}

  // Save Single Book to Firebase
  saveBooktoFirebase(bookDetails: Book) {}

  // Delete Single Book from Firebase
  deleteBookFromFirebase(bookId: string) {}
}
