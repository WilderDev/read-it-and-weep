import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { BookDetailsComponent } from './bookshelf/book-details/book-details.component';
import { BookshelfFormComponent } from './bookshelf/bookshelf-form/bookshelf-form.component';
import { BookshelfHomeComponent } from './bookshelf/bookshelf-home/bookshelf-home.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { LibraryComponent } from './library/library.component';

const routes: Routes = [
  { path: "", redirectTo: "/bookshelf", pathMatch: "full" },
  { path: "auth", component: AuthComponent },
  {
    path: "bookshelf",
    component: BookshelfComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", component: BookshelfHomeComponent },
      { path: "new", component: BookshelfFormComponent },
      { path: ":id", component: BookDetailsComponent },
      { path: ":id/edit", component: BookshelfFormComponent }
    ]
  },
  { path: "library", component: LibraryComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
