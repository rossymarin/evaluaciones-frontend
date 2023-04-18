import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  /**
   * generar token
   */
  public generateToken(loginData : any) {
    return this.http.post(`${baseUrl}/generate-token`, loginData)
  }

  /**
   * Iniciar session
   * Almacenar token en localStorage
   */
  public loginUser(token : any) {
    localStorage.setItem('token', token);
  }

  /**
   * isLoggedIn
   */
  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * Cerrar session
   * Eliminar token de localStorage
   */
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  /**
   * getToken
   */
  public getToken() {
    return localStorage.getItem('token');
  }

  /**
   * setUser
   */
  public setUser(user : any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  /**
   * getUser
   */
  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      return this.logout();
    }
  }

  /**
   * getUserRole
   */
  public getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }

  /**
   * getCurrentUser
   */
  public getCurrentUser() {
    return this.http.get(`${baseUrl}/actual-user`);
  }
}
