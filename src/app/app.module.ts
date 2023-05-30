import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderComponent } from './components/order/order.component';
import { CarouselComponent } from "./components/carousel/carousel.component";
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HeroComponent,
        LoginComponent,
        RegisterComponent,
        CategoriesComponent,
        FooterComponent,
        ContactUsComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        OrderComponent,
        CarouselComponent,
        NgImageSliderModule,
    ]
})
export class AppModule { }
