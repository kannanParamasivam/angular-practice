import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { AngularIfElseComponent } from './angular-if-else/angular-if-else.component';
import { NgStyleInbuiltDirectiveComponent } from './ng-style-inbuilt-directive/ng-style-inbuilt-directive.component';
import { EmissionTestComponent } from './emission-test/emission-test.component';
import { DueForServiceComponent } from './due-for-service/due-for-service.component';
import { NgClassBuiltinDirectiveComponent } from './ng-class-builtin-directive/ng-class-builtin-directive.component';
import { CarComponent } from './car/car.component';
import { NgForBuiltinDirectiveComponent } from './ng-for-builtin-directive/ng-for-builtin-directive.component';
import { NgTemplateInbuiltElementComponent } from './ng-template-inbuilt-element/ng-template-inbuilt-element.component';
import { NgContainerComponent } from './ng-container/ng-container.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    AngularIfElseComponent,
    NgStyleInbuiltDirectiveComponent,
    EmissionTestComponent,
    DueForServiceComponent,
    NgClassBuiltinDirectiveComponent,
    CarComponent,
    NgForBuiltinDirectiveComponent,
    NgTemplateInbuiltElementComponent,
    NgContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
