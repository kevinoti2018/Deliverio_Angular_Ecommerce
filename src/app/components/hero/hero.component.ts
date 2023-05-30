import { Component,OnInit } from '@angular/core';
import { Category } from 'src/Interfaces/Interfaces';
import { CategoryService } from 'src/app/services/categoryservices/category.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  categories:Category[]=[]
  constructor(private categoryService:CategoryService){

  }

  ngOnInit(): void {
    this.categories=this.categoryService.getCategory()
    // console.log(this.categories)
  }
}
