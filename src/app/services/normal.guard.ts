import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})

/**
 * Verificar si esta logueado y su rol, sino redireccionar al login
 */
export class NormalGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.loginService.isLoggedIn() && this.loginService.getUserRole() == 'NORMAL') {
        return true;
      }
      
      this.router.navigate(['login'])
      return false;
  }
  
}
