import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookCreateComponent } from './bookshelf-form/book-create/book-create.component';
import { BookUpdateComponent } from './bookshelf-form/book-update/book-update.component';
import { BookshelfFormComponent } from './bookshelf-form/bookshelf-form.component';
import { BookshelfHomeComponent } from './bookshelf-home/bookshelf-home.component';
import { BookshelfRoutingModule } from './bookshelf-routing.module';
import { BookshelfComponent } from './bookshelf.component';
import { SavedBookListComponent } from './saved-book-list/saved-book-list.component';

@NgModule({
  declarations: [
    BookshelfComponent,
    SavedBookListComponent,
    BookDetailsComponent,
    BookshelfHomeComponent,
    BookshelfFormComponent,
    BookUpdateComponent,
    BookCreateComponent
  ],
  imports: [SharedModule, BookshelfRoutingModule]
})
export class BookshelfModule {}
