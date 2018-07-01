import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-if-else',
  templateUrl: './angular-if-else.component.html',
  styleUrls: ['./angular-if-else.component.css']
})
export class AngularIfElseComponent implements OnInit {

  carCreated: boolean = false;
  carName: string = "";

  constructor() { }

  ngOnInit() {
  }

  onCreateCar() {
    this.carCreated = true;
  }

}
