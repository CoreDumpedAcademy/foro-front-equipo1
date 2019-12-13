 
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor( private userService: UserService, private router: Router) { }

  LogIn(data) {
    this.userService.LogIn(data.value).subscribe((response: { token: string }) => {
      console.log(data);
      localStorage.setItem('token', response.token);
      this.router.navigate(['foro']);
    }, (error) => {
      alert('Incorrect user');
      console.log(error);
      }
    );
  }
}