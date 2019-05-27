import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chose-color',
  templateUrl: './chose-color.component.html',
  styleUrls: ['./chose-color.component.scss']
})
export class ChoseColorComponent implements OnInit {
  color = 'red';
  updateColor(color) {
    this.color = color;
  }
  constructor() { }

  ngOnInit() {
  }

}
