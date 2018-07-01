import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  pageTitle: string = 'Car List';
  carNameUpdateStatus: string = "Car name not updated";
  carNameEntered: string = "";
  carNameModelVariable:string="";

  constructor() { }

  onCarNameUpdate(event: Event) {
    this.carNameUpdateStatus = "Car name updated";
    this.carNameEntered = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
  }

}
