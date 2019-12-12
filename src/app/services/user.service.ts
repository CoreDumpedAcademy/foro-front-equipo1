import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient, private router: Router) { }

  Register(data) {
    return this.http.post('http://localhost:3000/register', data)
  }

  LogIn(data) {
    return this.http.post('http://localhost:3000/login', data);
  }

  LoggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }
  
  Logout(){
    localStorage.removeItem('token')
    this.router.navigate(['home'])
  }
}
