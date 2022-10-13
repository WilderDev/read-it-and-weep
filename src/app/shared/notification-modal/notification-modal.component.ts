import { Component, OnInit } from '@angular/core';

import { BookshelfService } from '../../bookshelf/bookshelf.service';
import { Book } from '../book/book.model';

@Component({
  selector: "app-notification-modal",
  templateUrl: "./notification-modal.component.html",
  styleUrls: ["./notification-modal.component.css"]
})
export class NotificationModalComponent implements OnInit {
  bookData: Book;

  constructor(private bsService: BookshelfService) {}

  ngOnInit(): void {
    this.bsService.bookAddedEmitter.subscribe((recentBook: Book) => {
      this.bookData = recentBook;

      setTimeout(() => (this.bookData = null), 1750);
    });
  }
}
