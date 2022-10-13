import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookDetailsComponent } from './bookshelf/book-details/book-details.component';
import { BookshelfHomeComponent } from './bookshelf/bookshelf-home/bookshelf-home.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { SavedBookListComponent } from './bookshelf/saved-book-list/saved-book-list.component';
import { ApiResultListComponent } from './library/api-result-list/api-result-list.component';
import { BookSearchBarComponent } from './library/book-search-bar/book-search-bar.component';
import { LibraryComponent } from './library/library.component';
import { BookComponent } from './shared/book/book.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BookshelfFormComponent } from './bookshelf/bookshelf-form/bookshelf-form.component';
import { NotificationModalComponent } from './shared/notification-modal/notification-modal.component';

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
    ApiResultListComponent,
    BookshelfHomeComponent,
    DropdownDirective,
    BookshelfFormComponent,
    NotificationModalComponent
  ],
  imports: [AppRoutingModule, BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
