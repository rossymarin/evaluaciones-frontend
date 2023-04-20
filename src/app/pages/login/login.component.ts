import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    username: '',
    password: ''
  }

  constructor(private snack: MatSnackBar, private loginService: LoginService, private router : Router, private cd : ChangeDetectorRef) { }

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
        this.loginService.getCurrentUser().subscribe((user : any) => {
          this.loginService.setUser(user);
          if (this.loginService.getUserRole() == "ADMIN") {
            //window.location.href = 'admin';
            this.loginService.loginStatusSubject.next(true); //
            this.router.navigate(['admin']);
          } else if (this.loginService.getUserRole() == "NORMAL") {
            //window.location.href = 'user-dashboard';
            this.loginService.loginStatusSubject.next(true);
            this.router.navigate(['user-dashboard']);
          } else {
            this.loginService.logout();
          }
        });
      }, (error) => {
        this.snack.open('Detalles invalidos, vuelva a intentarlo', 'Aceptar'), {
          duration : 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        }
      }
    )
  }

}
