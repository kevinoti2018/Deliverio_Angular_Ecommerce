import { NgModule, isDevMode} from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
// import { NgImageSliderModule } from 'ng-image-slider';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productreducer } from './components/store/reducers/products.reducer';
import { ProductEffects } from './components/store/effects/products.effects';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';

// import { NzCollapseModule } from 'ng-zorro-antd/collapse';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HeroComponent,
        LoginComponent,
        RegisterComponent,
        CategoriesComponent,
        FooterComponent,
        ProductCategoryComponent,
        ResetPasswordComponent,
        AddproductComponent,
      
       
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        // NgImageSliderModule,
        ReactiveFormsModule,
        FormsModule,
        NgbModule,
        CarouselComponent,
        ProductsComponent,
        ContactUsComponent,
        ProductDetailComponent,
        // NzCollapseModule,
        HttpClientModule,
        CarouselModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({products:productreducer},{}),
        EffectsModule.forRoot([ProductEffects]),
        // StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
    

    ]
        
})
export class AppModule { }
