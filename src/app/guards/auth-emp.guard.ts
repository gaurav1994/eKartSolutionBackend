import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthEmpGuard implements CanActivate {
  constructor(private _route : Router, private _authemp_login : AuthService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this._authemp_login.isEmpLogin ){
      return true;
    }else{
      this._route.navigateByUrl('/login')
      return false;
    }
    return false
  }
  
}
