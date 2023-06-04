import { Component,OnInit } from '@angular/core';
import {  Category1, Slide } from 'src/Interfaces/Interfaces';
import { CategoryService } from 'src/app/services/categoryservices/category.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  categories:Slide[]=[]
  constructor(private categoryService:CategoryService){

  }

  ngOnInit(): void {
    this.getCategories()
   
  }
  getCategories(){
    this.categories= this.categoryService.getCategory()
   }
  }
  

