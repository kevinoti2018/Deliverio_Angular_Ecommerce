import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category1, Product } from 'src/Interfaces/Interfaces';
import { CategoryService } from 'src/app/services/categoryservices/category.service';
import { ProductsService } from 'src/app/services/productservices/products.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
})
export class AddproductComponent implements OnInit {
  productForm!: FormGroup;
  product!: Product;
  categories!: Category1[];
  existingproduct!: Product;
  action!: 'add' | 'update'

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private categoryService: CategoryService,
    private route:ActivatedRoute
  ) {}

  ngOnInit() {
    // this.action='add'
    this.productForm = this.formBuilder.group({
      category: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      images: ['', Validators.required],
      price: [
        '',
        [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)],
      ],
    });

    this.getCategories();
     console.log(this.route.snapshot.params['id'])
    if(this.route.snapshot.params['id']){
      this.action = 'update'

      this.productService.getsingleproduct(this.route.snapshot.params['id']).subscribe((res)=>{
          console.log(res);
          
          this.productForm.setValue({
            category: res.category_id,
            name: res.name,
            description: res.description,
            images: res.images,
            price: res.price  
            
          })
      })
  }
  else{
    this.action ='add'
  }
  }

  onSubmit() {
    if (this.productForm.invalid) {
      return;
    }
    const product: Product = this.productForm.value;
    if(this.action == 'add')
    {
     
      console.log(product);
      this.productService.AddproductComponent(product).subscribe(
        (response) => {
          console.log('Product added successfully!', response);
          this.productForm.reset();
        },
        (error) => {
          console.error('Failed to add product:', error);
        }
      );
    }
    else{
        this.productService.updateProduct(this.route.snapshot.params['id'],product).subscribe((res)=>{
           console.log('response=>',res);
           
        },
        (error) => {
          console.error('Failed to update product:', error);
          }
          )
        
    }
    alert(`${this.action} successfull`)
  }


  getCategories() {
    this.categoryService.getCategory1().subscribe((response) => {
      this.categories = response;
    });
  }
}
