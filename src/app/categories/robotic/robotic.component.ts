import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post';
import { PostserviceService } from '../../services/postservice.service';
@Component({
  selector: 'app-robotic',
  templateUrl: './robotic.component.html',
  styleUrls: ['./robotic.component.css']
})
export class RoboticComponent implements OnInit {

  constructor( private postService: PostserviceService) { }
  post: Post;
  posts: Post[];
  
  category = 'robotic'


  ngOnInit() {
    this.postService.sendCategoryPosts(this.category).subscribe((data: Post[]) => {
      console.log(data);
      this.posts = data;
    });
  }

  setStorage(data){
    localStorage.removeItem('post');
    localStorage.setItem('post', JSON.stringify({header: data.header, date: data.date, username: data.username}))
  }

}
