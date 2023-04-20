import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  user : any = null;

  constructor(private loginService: LoginService, private router : Router) { }

  ngOnInit(): void {
    this.user = this.loginService.getUser();
  }

}
