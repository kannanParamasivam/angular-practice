import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { AngularIfElseComponent } from './angular-if-else/angular-if-else.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    AngularIfElseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
