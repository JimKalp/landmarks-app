import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from './login.service'; 
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class CurrentuserService {
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  
  
}
