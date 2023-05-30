import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
const routes: Routes = [
  {path:'', component:HeroComponent},
  {path:'login' ,component:LoginComponent},
  {path:'register' ,component:RegisterComponent},
  {path:'help', component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
