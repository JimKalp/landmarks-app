import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { LoginService } from 'src/app/services/login.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: User;
  username = new FormControl('');
  password = new FormControl('');

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.loginUser({username: this.username.value, password: this.password.value})
      .subscribe(res => localStorage.setItem('sessionToken', res.sessionToken));
  }
}
