import { ProductCategoryComponent } from './product-category/product-category.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { HeroComponent } from './components/hero/hero.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';



const routes:Routes=[
  {path:'',component:HeroComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'products',component:ProductsComponent},
  {path:'products/:categoryId',component:ProductCategoryComponent},
  {path:'help',component:ContactUsComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout/:id',component:OrderComponent},
  {path:'product/:id',component:ProductDetailComponent},
  {path:'**',component:NotfoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
