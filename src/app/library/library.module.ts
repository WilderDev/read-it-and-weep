import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { ApiResultListComponent } from './api-result-list/api-result-list.component';
import { BookSearchBarComponent } from './book-search-bar/book-search-bar.component';
import { LibraryComponent } from './library.component';

@NgModule({
  declarations: [
    LibraryComponent,
    BookSearchBarComponent,
    ApiResultListComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: "", component: LibraryComponent, canActivate: [AuthGuard] }
    ])
  ]
})
export class LibraryModule {}
