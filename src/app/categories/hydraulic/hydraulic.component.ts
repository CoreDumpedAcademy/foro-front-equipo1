import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post';
import { PostserviceService } from '../../services/postservice.service';
@Component({
  selector: 'app-hydraulic',
  templateUrl: './hydraulic.component.html',
  styleUrls: ['./hydraulic.component.css']
})
export class HydraulicComponent implements OnInit {

  constructor( private postService: PostserviceService) { }
  post: Post;
  posts: Post[];
  category = 'hydraulic'
  ngOnInit() {
    this.postService.sendCategoryPosts(this.category).subscribe((data: Post[]) => {
      console.log(data);
      this.posts = data;
      
    });
  }

  setStorage(data){
    localStorage.removeItem('header');
    localStorage.setItem('header', data)
  }

}
