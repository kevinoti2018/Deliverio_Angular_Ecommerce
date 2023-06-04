import { Component, OnInit } from '@angular/core';
import { Product } from 'src/Interfaces/Interfaces';
import { ProductsService } from '../services/productservices/products.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/categoryservices/category.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})

export class ProductCategoryComponent implements OnInit{
  categoryId!: string;
  products: Product[]=[]
  constructor(private categoryService:CategoryService,
    private route:ActivatedRoute
    ){
   
  }
  ngOnInit(): void {

    this.route.params.subscribe((param)=>{
      this.categoryId=param['categoryId']
      this.categoryService.getProductsByCategory(this.categoryId).subscribe((product:Product[])=>{
        this.products=product
        console.log(this.products)})
        console.log(this.categoryId)
    })
  }

}
