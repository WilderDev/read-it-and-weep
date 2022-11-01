import { Component, Input, OnInit } from '@angular/core';

import { Book } from '../../shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: "app-saved-book-list",
  templateUrl: "./saved-book-list.component.html",
  styleUrls: ["./saved-book-list.component.css"]
})
export class SavedBookListComponent implements OnInit {
  @Input() sort: "title" | "author";

  myBooks: Book[] = [];

  constructor(private bsService: BookshelfService) {}

  ngOnInit(): void {
    this.myBooks = this.bsService.getAllBooks();

    this.bsService.bookListChanged.subscribe((updatedBookList: Book[]) => {
      this.myBooks = updatedBookList;
    });
  }

  onRemoveBook(id: string) {
    this.bsService.deleteSingleBook(id);
  }
}
