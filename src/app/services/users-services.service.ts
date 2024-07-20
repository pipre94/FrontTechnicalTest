import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersModel } from '../models/usersModel';
import { LoginModel } from '../models/loginModel';

@Injectable({
  providedIn: 'root'
})
export class UsersServicesService {

  private apiRoute = "https://localhost:7138/"
  constructor(private http: HttpClient) { }
  addNewUsers(usersModel: UsersModel): Observable<any> {
    var route = `${this.apiRoute}Users/CreateUsers`
    return this.http.post(route, usersModel);
  }

  getUsers(){
    return this.http.get(`${this.apiRoute}Users/GetAllUsers`);
  }

  getUserLogin(loginModel: LoginModel): Observable<any> {
    var route = `${this.apiRoute}Users/Login`
    return this.http.post(route, loginModel);
  }
}
