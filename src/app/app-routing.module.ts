import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AddNewProductComponent } from './components/add-new-product/add-new-product.component';

const routes: Routes = [
  {path:"login",component :LoginComponent},
  {path:"admin",component:AdminComponent},
  {path:"user" ,component :UserComponent},
  {path:"register",component:RegisterComponent},
  {path:"",component:HomeComponent},
  {path:"addNewProduct",component:AddNewProductComponent}

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
