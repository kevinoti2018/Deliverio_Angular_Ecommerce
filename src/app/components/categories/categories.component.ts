import { Component, OnInit } from '@angular/core';
import { Category } from 'src/Interfaces/Interfaces';
import { CategoryService } from 'src/app/services/categoryservices/category.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  imgCollection:Category[]=[]
  constructor(private categoryService:CategoryService){}
  ngOnInit(): void {
    //  this.categoryService.getCategory()
    this.fetchCategories()
  }
  
  fetchCategories() {
    const categories = this.categoryService.getCategory();

    this.imgCollection = categories.map(category => ({
      id:category.id,
      image: category.image,
      thumbImage: category.image,
      name: category.name,
      alt: category.name
    }));
  }
}
