import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {};
  constructor( private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  register(data) {
    this.userService.Register(data.value).subscribe((res) => {      
      const token = {
        userData: res['registerPayload'],
        token: res['token']
      }

      localStorage.setItem('token', JSON.stringify(token));
      this.router.navigate(['home']);
    }, (error) => {
      alert('Registration error');
      console.log(error);
      }
    );
  }

}
