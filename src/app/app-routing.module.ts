import { ViewSingleProductComponent } from './components/view-single-product/view-single-product.component';
import { ViewProductsComponent } from './components/view-products/view-products.component';
import { AddSingleProductComponent } from './components/add-single-product/add-single-product.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { WorkstationComponent } from './pages/workstation/workstation.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthEmpGuard } from './guards/auth-emp.guard';

const routes: Routes = [
  { path : '' , redirectTo : "/login", pathMatch : "full" },
  { path : 'login' , component : EmployeeLoginComponent },
  { path : 'register' , component : EmployeeRegisterComponent },
  { 
    path : 'workstation',
    canActivate : [AuthEmpGuard] ,
    component : WorkstationComponent,
    children:[
      { path : '' , redirectTo : '/home', pathMatch : 'full'},
      { path : 'home' , component : HomeComponent, 
        children : [
          { path : 'addsingleproduct' , component : AddSingleProductComponent },
          { path : 'viewproducts' , component : ViewProductsComponent },
          { path : 'viewproducts/:productid' , component : ViewSingleProductComponent }
        ] },
      { path : 'employee' , component : EmployeeComponent }
  ] },
  { path : '**' , component : PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
