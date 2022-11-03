import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {
    NotificationModalComponent
} from './shared/notification-modal/notification-modal.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, NotificationModalComponent],
  imports: [AppRoutingModule, BrowserModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
