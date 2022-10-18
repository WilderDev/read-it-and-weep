import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { BookshelfService } from '../../bookshelf.service';

@Component({
  selector: "app-book-update",
  templateUrl: "./book-update.component.html",
  styleUrls: ["./book-update.component.css"]
})
export class BookUpdateComponent implements OnInit {
  bookDetails: FormGroup;
  bookId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bsService: BookshelfService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.bookId = params.id;

      let { title, author, coverImagePath } = this.bsService.getSingleBook(
        this.bookId
      );

      this.bookDetails = new FormGroup({
        title: new FormControl(title, Validators.required),
        author: new FormControl(author, Validators.required),
        coverImagePath: new FormControl(coverImagePath, Validators.required)
      });
    });
  }

  onUpdateBook() {
    const { title, author, coverImagePath } = this.bookDetails.value;

    this.bsService.updateSingleBook(this.bookId, {
      title,
      author,
      coverImagePath
    });

    this.onReset();
  }

  onReset() {
    this.bookDetails.reset();

    this.router.navigate(["../"], { relativeTo: this.route });
  }
}
