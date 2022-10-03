import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Book } from './book.model';

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"]
})
export class BookComponent implements OnInit {
  @Output() bookClickedEmitter = new EventEmitter<void>();
  @Input() bookDetails: Book;

  constructor() {}

  ngOnInit(): void {}

  onClickBook() {
    this.bookClickedEmitter.emit();
  }
}
