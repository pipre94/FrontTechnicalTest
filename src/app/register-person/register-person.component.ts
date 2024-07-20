import { Component, OnInit } from '@angular/core';
import { PersonsServicesService } from '../services/persons-services.service';
import { FormsModule } from '@angular/forms';
import { PersonsModel } from '../models/personsModel';

@Component({
  selector: 'app-register-person',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-person.component.html',
  styleUrl: './register-person.component.css'
})
export class RegisterPersonComponent implements OnInit{
  persons = new PersonsModel()
  constructor(private personServices: PersonsServicesService){}
  ngOnInit(): void {
    this.personServices.getPersons().subscribe((data) => console.log(data));
  }
  savePersons(){
    this.persons.creationDate = new Date();;
    this.personServices.addNewPerson(this.persons).subscribe(
      (data) => {
        console.log(data);
        alert('Usuario guardado exitosamente!');
      },
      (error) => {
        console.error('error', error);
        alert('Ocurrió un error al guardar el usuario.');
      }
    );
  }

}
