import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { BookshelfService } from '../../bookshelf.service';

@Component({
  selector: "app-book-create",
  templateUrl: "./book-create.component.html",
  styleUrls: ["./book-create.component.css"]
})
export class BookCreateComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bsService: BookshelfService
  ) {}

  ngOnInit(): void {}

  onCreateBook(formObj: NgForm) {
    const { title, author, coverImagePath } = formObj.value;

    this.bsService.createSingleBook({ title, author, coverImagePath });

    this.onReset(formObj);
  }

  onReset(form: NgForm) {
    form.reset();

    this.router.navigate(["../"], { relativeTo: this.route });
  }
}
