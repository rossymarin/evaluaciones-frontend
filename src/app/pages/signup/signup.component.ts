import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user = {
    username : '',
    password : '',
    nombre : '',
    apellido : '',
    email : '',
    telefono : ''
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }

  formSubmit() {
    if (this.user.username == '' || this.user.username == null) {
      alert('El nombre de usuario es requerido');
      return;
    }

    this.userService.registrarUsuario(this.user).subscribe(
      (data) => {
        console.log(data);
        alert("Usuario guardado con exito");
      }, (error) => {
        console.log(error);
        alert("Ha ocurrido un error");
      }     
    )
  }

}
