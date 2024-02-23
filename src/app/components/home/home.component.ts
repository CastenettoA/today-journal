import { Component } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  posts:Post[] = [];
  postId:number|null = null;

  constructor(private postService: PostService) {
    this.loadPosts();
  }

  // get all posts from backend
  private loadPosts() {
    this.postService.getPosts().subscribe((res) => this.posts = res );
  }
}
