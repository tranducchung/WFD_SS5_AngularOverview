import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  output: number;
  first: number;
  second: number;
  operantor = '+' ;
  onFirstChange(value) {
    this.first = Number(value);
  }
  onSecondChange(value) {
    this.second = Number(value);
  }
  onSelectChange(value) {
    this.operantor = value;
  }
  calculate() {
    switch (this.operantor) {
      case '+': this.output = this.first + this.second;
                break;
      case '-': this.output = this.first - this.second;
                break;
      case '*': this.output = this.first * this.second;
                break;
      case '/': this.output = this.first / this.second;
                break;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
