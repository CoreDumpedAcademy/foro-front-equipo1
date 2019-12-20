import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { PostserviceService } from '../services/postservice.service';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-showpost',
  templateUrl: './showpost.component.html',
  styleUrls: ['./showpost.component.css']
})
export class ShowpostComponent implements OnInit {

  constructor(private userService: UserService, private postService: PostserviceService) { }

  postandresp: Post;
  postsandresps: Post[];
  data1: String;
  ngOnInit() {
  }

  getPosts() {
    this.data1 = JSON.parse(localStorage.getItem('post'));
    this.postService.sendPostAndRes(this.data1).subscribe((data: Post[]) => {
      console.log(data);
      this.postsandresps = data;
    });
  }

  clear(){
    localStorage.removeItem('post')
  }
}
