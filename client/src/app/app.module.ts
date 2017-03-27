import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';
import { AppRoutes } from './app.routing';

import { AppComponent } from './app.component';
import { SignUpComponent } from './authentication/sign-up';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutes
  ],
  providers: [ Angular2TokenService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
