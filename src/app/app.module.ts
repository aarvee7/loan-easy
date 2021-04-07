import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { ROUTES } from './app.routes';
import { HelperService } from './services/helper.service';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ROUTES, HttpClientModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [HelperService],
  bootstrap: [AppComponent],
})
export class AppModule {}
