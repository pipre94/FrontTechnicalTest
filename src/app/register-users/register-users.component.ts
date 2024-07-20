import { Component, OnInit } from '@angular/core';
import { UsersModel } from '../models/usersModel';
import { FormsModule } from '@angular/forms';
import { UsersServicesService } from '../services/users-services.service';

@Component({
  selector: 'app-register-users',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-users.component.html',
  styleUrl: './register-users.component.css'
})
export class RegisterUsersComponent implements OnInit{
user = new UsersModel();

constructor(private userServices:UsersServicesService){}
ngOnInit(): void {
  
}

saveUsers(){
  this.user.creationDate = new Date();;
  this.userServices.addNewUsers(this.user).subscribe(
    (data) => {
      console.log(data);
      alert('Usuario guardado exitosamente!');
    },
    (error) => {
      console.error('Error:', error);
      alert('Ocurrió un error al guardar el usuario.');
    }
  );
}
}
