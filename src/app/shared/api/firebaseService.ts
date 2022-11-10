import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { Book } from '../book/book.model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private http: HttpClient) {}

  // Fetch Books from Firebase
  fetchBooksFromFirebase() {
    return this.http.get(environment.firebase.dbBooks + '.json', {});
  }

  // Save Single Book to Firebase
  saveBooktoFirebase(bookDetails: Book) {
    this.http
      .post(environment.firebase.dbBooks + '.json', bookDetails, {})
      .subscribe();
  }

  // Update Single Book In Firebase
  updateBookInFirebase(bookId: string, bookDetails: Partial<Book>) {
    this.http
      .patch(environment.firebase.dbBooks + '/' + bookId + '.json', {
        ...bookDetails,
      })
      .subscribe();
  }

  // Delete Single Book from Firebase
  deleteBookFromFirebase(bookId: string) {
    this.http
      .delete(environment.firebase.dbBooks + '/' + bookId + '.json', {})
      .subscribe();
  }
}
