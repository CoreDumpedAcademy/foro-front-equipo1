import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  constructor(private http: HttpClient, private router: Router) { }


  createPost(){

  }

  getAll(){
    this.http.get('http://localhost:3000/post/get')
  }
  
  Delete(data){
    this.http.delete('http://localhost:3000/post/delete', data)
  }
}
