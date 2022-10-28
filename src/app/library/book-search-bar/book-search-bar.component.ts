import { FirebaseService } from 'src/app/shared/api/firebaseService';
import { GoogleBookService } from 'src/app/shared/api/googleBooks.service';
import { transformToQuery } from 'src/utils/transformToQuery';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-book-search-bar",
  templateUrl: "./book-search-bar.component.html",
  styleUrls: ["./book-search-bar.component.css"]
})
export class BookSearchBarComponent implements OnInit {
  constructor(private googleAPI: GoogleBookService) {}

  ngOnInit(): void {}

  onSearchBooks(query: string) {
    const transformedQuery = query // query = " The Lord of the RinGS  "
      .toLowerCase() // query = " the lord of the rings   "
      .trim() // query = "the lord of the rings"
      .split(" ") // query = ["the", "lord", "of", "the", "rings"]
      .join("+"); // query = "the+lord+of+the+rings"

    this.googleAPI.searchBooksFromGoogle(transformedQuery);
  }
}
