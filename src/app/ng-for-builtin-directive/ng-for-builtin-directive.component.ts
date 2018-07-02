import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-builtin-directive',
  templateUrl: './ng-for-builtin-directive.component.html',
  styleUrls: ['./ng-for-builtin-directive.component.css']
})
export class NgForBuiltinDirectiveComponent implements OnInit {
  carName: string = "";
  cars: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  onCreateCar() {
    this.cars.push("car");
    this.carName = "";
  }

}
