import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from 'src/app/User';
import { LoginService } from 'src/app/services/login.service';
import { CurrentuserService } from 'src/app/services/currentuser.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: User;
  username = new FormControl('');
  password = new FormControl('');
  token: string | null;
  isUserLoggedIn: boolean;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private currentUserService: CurrentuserService) { 
    }

  ngOnInit(): void {
    this.token = localStorage.getItem('sessionToken');
  }

  login() {
    this.loginService.loginUser({username: this.username.value, password: this.password.value})
      .subscribe(res => { localStorage.setItem('sessionToken', res.sessionToken);
      window.location.reload();});
      //this.router.navigate(['/landmarks']);
  }

  logout(){
    this.loginService.logoutUser().subscribe(res => { localStorage.removeItem('sessionToken');
    window.location.reload();
    });
    this.router.navigate(['/landmarks']);
  }

}
