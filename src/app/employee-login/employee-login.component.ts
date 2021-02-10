import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.scss']
})
export class EmployeeLoginComponent implements OnInit {

  constructor(private _route : Router, private _authemp_login : AuthService) { }

  ngOnInit(): void {
  }

  loginAsEmployee(email,password){
    // [routerLink]="['/workstation/home']"
    const employeeCredentials = {
      email : email,
      password : password
    }
    this._authemp_login.empLogin(employeeCredentials)
    if(this._authemp_login.isEmpLogin)
      this._route.navigate(['/workstation/home'])
  }

}
