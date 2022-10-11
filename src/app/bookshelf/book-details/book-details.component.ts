import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Book } from '../../shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: "app-book-details",
  templateUrl: "./book-details.component.html",
  styleUrls: ["./book-details.component.css"]
})
export class BookDetailsComponent implements OnInit {
  book: Book;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bsService: BookshelfService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((newParams: Params) => {
      this.book = this.bsService.getSingleBook(newParams.id as string);
    });
  }

  openEditBook() {
    // Do it this way because . . .
    this.router.navigate(["../", this.book.id, "edit"], {
      relativeTo: this.route
    });
  }

  onRemoveBook() {
    this.bsService.deleteSingleBook(this.book.id);
    this.router.navigate(["../"], { relativeTo: this.route });
  }
}
