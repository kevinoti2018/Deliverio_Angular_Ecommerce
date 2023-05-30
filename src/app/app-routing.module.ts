import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';


const routes:Routes=[
  {path:'',component:AppComponent},
  {path:'products',component:ProductsComponent},
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
