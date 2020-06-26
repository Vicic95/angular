import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  minValue = 1;
  maxValue = 2;
  options: Options = {
    floor: 0,
    ceil: 5,
    step: 0.5
  };
}
