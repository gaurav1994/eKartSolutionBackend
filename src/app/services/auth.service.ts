import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isEmpLogin : boolean;
  empLogin(employeeCred){
    if(employeeCred.email == 'adm@gmail.com' && employeeCred.password == 'adm'){ 
      console.log(employeeCred)
      this.isEmpLogin = true
      return true
    }else{ 
      this.isEmpLogin = false
      return false 
    }
  }
}
