import { Component,OnInit } from '@angular/core';
import {  Category1, Slide } from 'src/Interfaces/Interfaces';
import { CategoryService } from 'src/app/services/categoryservices/category.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  categories:Category1[]=[]
  constructor(private categoryService:CategoryService){

  }

  ngOnInit(): void {
    this.getCategories()
    // console.log(this.categories)
  }
  getCategories(){
    this.categoryService.getCategory1().subscribe(
      (response)=> this.categories = response
    )
  }
}
