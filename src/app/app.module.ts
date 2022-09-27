import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BookComponent } from './shared/book/book.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { SavedBookListComponent } from './bookshelf/saved-book-list/saved-book-list.component';
import { BookDetailsComponent } from './bookshelf/book-details/book-details.component';
import { LibraryComponent } from './library/library.component';
import { BookSearchBarComponent } from './library/book-search-bar/book-search-bar.component';
import { ApiResultListComponent } from './library/api-result-list/api-result-list.component';

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
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
