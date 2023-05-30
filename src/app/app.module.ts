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
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NgImageSliderModule } from 'ng-image-slider';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    ProductsComponent,
    ProductDetailComponent,
    LoginComponent,
    RegisterComponent,
    CategoriesComponent,
    FooterComponent,
    ContactUsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(routes  ),
    BrowserAnimationsModule,
    NgbModule,
    CarouselComponent,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule , 
     NzDropDownModule,
    NzMenuModule,
    NgImageSliderModule 

  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
