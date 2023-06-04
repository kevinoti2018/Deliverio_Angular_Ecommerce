import { Category1 } from './../../../Interfaces/Interfaces';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CategoryService } from 'src/app/services/categoryservices/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: false,
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
  slidesStore: Category1[] = [
    
  ];
  constructor(private categoryService:CategoryService){

  }

  ngOnInit(): void {
   this.getCategories()
  }
  getCategories(){
    this.categoryService.getCategory1().subscribe(
      (response)=> this.slidesStore = response
    )
  }
 
}
