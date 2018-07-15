import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Car } from '../shared/car.model';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit, AfterViewInit {

  cars: Car[];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    setTimeout(() => {
      this.cars = [new Car('Subaru', 'Forester', '2017'),
      new Car('Toyota', 'Corolla', '2012')]
    }, 2000);
  }

}
