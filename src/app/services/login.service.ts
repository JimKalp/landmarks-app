import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = 'https://firefighter-5325.instashop.ae/api/users/login'

  httpOptions = {
    
  };

  constructor(private http:HttpClient) { }

  loginUser(user: User) {

    return this.http.post<any>(this.loginUrl, user)
  }
}
