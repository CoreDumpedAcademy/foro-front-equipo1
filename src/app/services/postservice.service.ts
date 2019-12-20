import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  constructor(private http: HttpClient, private router: Router) { }

  private adress = 'http://localhost:3000/';


  createPost(data){
    this.http.post('http://localhost:3000/post/create', data)
  }

  getPosts() {
    return this.http.get(`${this.adress}get/`);
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
    return this.http.post('http://localhost:3000/post/postAndRes',data)
  }

  sendCategoryPosts(data){
    return this.http.post('http://localhost:3000/post/sendCategory', data)
  }
}
