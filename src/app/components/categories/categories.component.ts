import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Slide } from 'src/Interfaces/Interfaces';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  // standalone:true
})

export class CategoriesComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      50: {
        items: 2
      },
      100: {
        items: 3
      },
      150: {
        items: 4
      }
    },
    nav: true
  }
  
  slidesStore: Slide[] = [
    {
      id: '1',
      src: '/assets/images/camera1.png',
      // alt: 'Slide 1',
      title: 'Slide 1 Title'
    },
    {
      id: '2',
      src: '/assets/images/camera1.png',
      // alt: 'Slide 2',
      title: 'Slide 2 Title'
    },
    {
      id: '2',
      src: '/assets/images/camera1.png',
      // alt: 'Slide 2',
      title: 'Slide 2 Title'
    },
    {
      id: '2',
      src: '/assets/images/camera1.png',
      // alt: 'Slide 2',
      title: 'Slide 5 Title'
    },
    {
      id: '2',
      src: '/assets/images/camera1.png',
      // alt: 'Slide 2',
      title: 'Slide 4 Title'
    },
    {
      id: '2',
      src: '/assets/images/camera1.png',
      // alt: 'Slide 2',
      title: 'Slide 3 Title'
    },
  ];
}
