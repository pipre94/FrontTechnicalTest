import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonsModel } from '../models/personsModel';

@Injectable({
  providedIn: 'root'
})
export class PersonsServicesService {

  private apiRoute = "https://localhost:7138/"

  constructor(private http: HttpClient) { }

  addNewPerson(personsModel: PersonsModel): Observable<any> {
    var route = `${this.apiRoute}Persons/CreatePerson`
    return this.http.post(route, personsModel);
  }

  getPersons(){
    return this.http.get(`${this.apiRoute}Persons/GetAllPersons`);
  }
}
