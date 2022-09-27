import { Component, OnInit } from '@angular/core';

import { Book } from '../../shared/book/book.model';

@Component({
  selector: "app-saved-book-list",
  templateUrl: "./saved-book-list.component.html",
  styleUrls: ["./saved-book-list.component.css"]
})
export class SavedBookListComponent implements OnInit {
  myBooks: Book[] = [
    new Book(
      "Howl's Moving Castle",
      "Diana Wynne Jones",
      // "https://source.unsplash.com/150x124/?book,mystery"
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Howl%27s_Moving_Castle_%28Book_Cover%29.jpg/220px-Howl%27s_Moving_Castle_%28Book_Cover%29.jpg"
    ),
    new Book(
      "Brian's Hunt",
      "Gary Paulsen",
      // "https://source.unsplash.com/150x124/?book,sci-fi"

      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/Paulsen_-_Brian%27s_Hunt_Coverart.jpg/220px-Paulsen_-_Brian%27s_Hunt_Coverart.jpg"
    ),
    new Book(
      "Fight Club",
      "Chuck Palahniuk",
      // "https://source.unsplash.com/150x124/?book,romance"

      "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Fightclubcvr.jpg/200px-Fightclubcvr.jpg"
    )
  ];

  constructor() {}

  ngOnInit(): void {}
}
