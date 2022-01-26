import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = 'https://firefighter-5325.instashop.ae/api/users/login'

  httpOptions = {
    
  };

  constructor(private http:HttpClient) { }

  loginUser() {
   // return this.http.post<>(this.loginUrl, user)
  }
}
