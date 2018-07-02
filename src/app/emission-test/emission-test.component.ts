import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emission-test',
  templateUrl: './emission-test.component.html',
  styleUrls: ['./emission-test.component.css']
})
export class EmissionTestComponent implements OnInit {

  testScore: number = 0;
  testPassed: boolean = false;
  testResult: string = this.testPassed ? "Passed" : "Failed";

  constructor() {
    this.testScore = Math.random();
    this.testPassed = this.testScore > 0.5 ? true : false;
  }

  ngOnInit() {
  }

  getColor() {
    return this.testPassed ? "green" : "red";
  }

}
