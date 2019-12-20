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

  login(data) {
    this.userService.login(data.value).subscribe((res) => {
      const token = {
        userData: res['registerPayload'],
        token: res['token']
      }

      localStorage.setItem('token', JSON.stringify(token));
      this.router.navigate(['home']);
    }, (error) => {
      alert('Incorrect user');
      console.log(error);
      }
    );
  }

  saveData(data){
    localStorage.setItem('userName', data.userName);
    this.login(data);
  }
}
