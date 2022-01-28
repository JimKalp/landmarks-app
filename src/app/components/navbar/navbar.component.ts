import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from 'src/app/User';
import { LoginService } from 'src/app/services/login.service';

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

  constructor(
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('sessionToken');
  }

  login() {
    this.loginService.loginUser({username: this.username.value, password: this.password.value})
      .subscribe(res => localStorage.setItem('sessionToken', res.sessionToken));
  }

  logout(){
    this.loginService.logoutUser().subscribe(res => localStorage.removeItem('sessionToken'))
    this.router.navigate(['/landmarks'])
  }
}
