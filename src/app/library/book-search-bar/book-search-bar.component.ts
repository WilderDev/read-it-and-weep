import { FirebaseService } from 'src/app/shared/api/firebaseService';
import { GoogleBookService } from 'src/app/shared/api/googleBooks';
import { transformToQuery } from 'src/utils/transformToQuery';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-book-search-bar",
  templateUrl: "./book-search-bar.component.html",
  styleUrls: ["./book-search-bar.component.css"]
})
export class BookSearchBarComponent implements OnInit {
  // TODO: Inject Google Books Service
  constructor() {}

  ngOnInit(): void {}

  // TODO: Implement searchBook() method -> Format Query & Call Google Books API
}
