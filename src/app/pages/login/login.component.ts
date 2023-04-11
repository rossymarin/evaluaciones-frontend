import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData = {
    username : '',
    password : ''
  }

  constructor(private snack:MatSnackBar) { }

  ngOnInit(): void {

  }

  formSubmit() {
    if (this.loginData.username === '' || this.loginData.username === null) {
      this.snack.open("El nombre de usuario es requerido","Aceptar", {
        duration : 3000,
        verticalPosition : 'top',
        horizontalPosition : 'right'
      });
      return;
    }
    console.log("login")
  }

}
