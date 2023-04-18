import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData = {
    username: '',
    password: ''
  }

  constructor(private snack: MatSnackBar, private loginService: LoginService) { }

  ngOnInit(): void {

  }

  formSubmit() {
    if (this.loginData.username === '' || this.loginData.username === null) {
      this.snack.open("El nombre de usuario es requerido", "Aceptar", {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    if (this.loginData.password === '' || this.loginData.password === null) {
      this.snack.open("La contraseña es requerida", "Aceptar", {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    this.loginService.generateToken(this.loginData).subscribe(
      (data: any) => {
        this.loginService.loginUser(data.token);
        console.log(data);
        this.loginService.getCurrentUser().subscribe((user : any) => {
          console.log(user);
        });
      }, (error) => {
        console.log(error);
      }
    )
  }

}
