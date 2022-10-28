import { FIREBASE_BOOKS } from 'src/constants/firebase';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Book } from '../book/book.model';

@Injectable({
  providedIn: "root"
})
export class FirebaseService {
  constructor(private http: HttpClient) {}

  // Fetch Books from Firebase
  fetchBooksFromFirebase() {
    return this.http.get(FIREBASE_BOOKS + ".json");
  }

  // Save Single Book to Firebase
  saveBooktoFirebase(bookDetails: Book) {
    this.http.post(FIREBASE_BOOKS + ".json", bookDetails).subscribe();
  }

  // Delete Single Book from Firebase
  deleteBookFromFirebase(bookId: string) {
    this.http.delete(FIREBASE_BOOKS + "/" + bookId + ".json").subscribe();
  }
}
