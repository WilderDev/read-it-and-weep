import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookDetailsComponent } from './bookshelf/book-details/book-details.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { SavedBookListComponent } from './bookshelf/saved-book-list/saved-book-list.component';
import { ApiResultListComponent } from './library/api-result-list/api-result-list.component';
import { BookSearchBarComponent } from './library/book-search-bar/book-search-bar.component';
import { LibraryComponent } from './library/library.component';
import { BookComponent } from './shared/book/book.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookComponent,
    BookshelfComponent,
    SavedBookListComponent,
    BookDetailsComponent,
    LibraryComponent,
    BookSearchBarComponent,
    ApiResultListComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
