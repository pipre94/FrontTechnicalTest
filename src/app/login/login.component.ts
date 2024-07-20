import { Component } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { UsersServicesService } from '../services/users-services.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  login = new LoginModel();
  constructor(private userServices:UsersServicesService){}

  loginValidateUsers(){

    this.userServices.getUserLogin(this.login).subscribe(
      (data) => {
        console.log(data);
        alert('Usuario inicio sesión exitosamente!');
      },
      (error) => {
        console.error('error', error);
        alert('Ocurrió un error, validar usuario y contraseña.');
      }
    );
  }

}
