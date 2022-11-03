import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/auth.guard';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookshelfFormComponent } from './bookshelf-form/bookshelf-form.component';
import { BookshelfHomeComponent } from './bookshelf-home/bookshelf-home.component';
import { BookshelfComponent } from './bookshelf.component';

const routes: Routes = [
  {
    path: "",
    component: BookshelfComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", component: BookshelfHomeComponent },
      { path: "new", component: BookshelfFormComponent },
      { path: ":id", component: BookDetailsComponent },
      { path: ":id/edit", component: BookshelfFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookshelfRoutingModule {}
