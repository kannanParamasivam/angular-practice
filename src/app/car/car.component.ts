import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input() index: number = 0;
  rgbColor: string = "";

  constructor() {
    this.rgbColor = "rgb(" + Math.floor(Math.random() * 255)
      + "," + Math.floor(Math.random() * 255)
      + "," + Math.floor(Math.random() * 255) + ")";
  }

  ngOnInit() {
  }

  getColor() {
    return this.rgbColor;
  }

}
