import { ApiCallsService } from './services/api-calls.service';
import { AuthService } from './services/auth.service';
import { AuthEmpGuard} from './guards/auth-emp.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { WorkstationComponent } from './pages/workstation/workstation.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { AddSingleProductComponent } from './components/add-single-product/add-single-product.component';
import { ViewProductsComponent } from './components/view-products/view-products.component';
import { ViewSingleProductComponent } from './components/view-single-product/view-single-product.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegisterComponent,
    EmployeeLoginComponent,
    PageNotFoundComponent,
    HomeComponent,
    WorkstationComponent,
    EmployeeComponent,
    AddSingleProductComponent,
    ViewProductsComponent,
    ViewSingleProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule ,
    HttpClientModule
  ],
  providers: [ApiCallsService,AuthEmpGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
