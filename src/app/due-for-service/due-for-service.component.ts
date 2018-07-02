import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-due-for-service',
  templateUrl: './due-for-service.component.html',
  styleUrls: ['./due-for-service.component.css']
})
export class DueForServiceComponent implements OnInit {

  dueInMiles: number;
  isCritical: boolean = false;

  constructor() {
    this.dueInMiles = Math.random();
    this.isCritical = this.dueInMiles <= 0.5 ? true : false;
  }

  ngOnInit() {
  }



}
