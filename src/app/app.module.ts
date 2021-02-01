import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookentryComponent } from './bookentry/bookentry.component';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BasicauthinterceptorserviceService } from './service/basicauthinterceptorservice.service';


@NgModule({
  declarations: [
    AppComponent,
    BookentryComponent,
    AddEntryComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: BasicauthinterceptorserviceService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
