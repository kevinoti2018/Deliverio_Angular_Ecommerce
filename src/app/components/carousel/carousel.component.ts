import { Component } from '@angular/core';
import { NgbCarouselModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-carousel',
  standalone:true,
  imports:[NgbCarouselModule, NgIf,NgFor,RouterModule,CommonModule ],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images = [

  '/assets/images/camera1.png',
  '/assets/images/fridge1.png',
  '/assets/images/headphones1.png',
  '/assets/images/oil1.png',


];
showNavigationArrows = false;
showNavigationIndicators = true;

  constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.interval = 2000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = true;
}
}
