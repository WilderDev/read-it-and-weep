import { Component, OnInit } from '@angular/core';

import { Book } from '../../shared/book/book.model';

@Component({
  selector: "app-api-result-list",
  templateUrl: "./api-result-list.component.html",
  styleUrls: ["./api-result-list.component.css"]
})
export class ApiResultListComponent implements OnInit {
  apiBooks: Book[] = [
    new Book(
      "Lost Souls?",
      "Poppy Z. Brite",
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1420793346i/452244.jpg"
    ),
    new Book(
      "Of Mice & Men",
      "John Steinbeck",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Of_Mice_and_Men_%281937_1st_ed_dust_jacket%29.jpg/220px-Of_Mice_and_Men_%281937_1st_ed_dust_jacket%29.jpg"
    )
  ];

  constructor() {}

  ngOnInit(): void {}
}
