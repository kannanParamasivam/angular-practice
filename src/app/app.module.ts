import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { AngularIfElseComponent } from './angular-if-else/angular-if-else.component';
import { NgStyleInbuiltDirectiveComponent } from './ng-style-inbuilt-directive/ng-style-inbuilt-directive.component';
import { EmissionTestComponent } from './emission-test/emission-test.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    AngularIfElseComponent,
    NgStyleInbuiltDirectiveComponent,
    EmissionTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
