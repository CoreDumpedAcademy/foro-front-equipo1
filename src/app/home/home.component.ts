import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { PostserviceService } from '../services/postservice.service';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService, private postService: PostserviceService) { }

post: Post;
posts: Post[];

  ngOnInit() {
      this.postService.getPosts().subscribe((data: Post[]) => {
        console.log(data);
        this.posts = data;
        
      });
}

  logout(){
    this.userService.Logout();
  }



  setStorage(data){
    localStorage.removeItem('header');
    localStorage.setItem('header', data)
  }
}
