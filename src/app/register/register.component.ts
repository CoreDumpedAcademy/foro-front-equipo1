import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {}
  constructor( private userService: UserService, ) { }

  ngOnInit() {
  }

  registerUser(){
    this.userService.Register(this.registerUserData).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
