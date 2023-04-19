import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  /**
   * Constructor con inyeccion de dependencias
   */
  constructor(public login : LoginService) { }

  ngOnInit() : void {

  }

  /**
   * logout
   */
  public logout() {
    this.login.logout();
    window.location.reload();
  }

}
