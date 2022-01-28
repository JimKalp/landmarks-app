import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = 'https://firefighter-5325.instashop.ae/api/users/login'
  private logoutUrl = 'https://firefighter-5325.instashop.ae/api/users/logout'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'x-sessionToken': this.getSessionToken()})
  };

  constructor(private http:HttpClient) { }

  loginUser(user: User) {

    return this.http.post<any>(this.loginUrl, user)
  }

  logoutUser(){
    return this.http.get(this.logoutUrl, this.httpOptions)
  }

  getSessionToken() {
    const token = localStorage.getItem('sessionToken');
    console.log(token);
    if (token) {
      return token;
    }
    else
      return "";
  }
}
