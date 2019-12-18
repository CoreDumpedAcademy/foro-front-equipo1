import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  constructor(private http: HttpClient, private router: Router) { }


  createPost(data){
    this.http.post('http://localhost:3000/post/create', data)
  }

  getPosts(){
    this.http.get('http://localhost:3000/post/get')
  }
  
  Delete(data){
    this.http.delete('http://localhost:3000/post/delete', data)
  }
 
  getPostByUser(data){
    this.http.post('http://localhost:3000/post/searchByUsername', data)
  }

  getPostByHeader(data){
    this.http.post('http://localhost:3000/post/searchByHeader',data)
  }

  sendPostAndRes(data){
    this.http.post('http://localhost:3000/post/postAndRes',data)
  }
}
