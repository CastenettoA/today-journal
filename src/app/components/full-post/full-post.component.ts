import { Component, Input, SimpleChanges } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrl: './full-post.component.scss'
})
export class FullPostComponent {
  @Input() postId:number|null = null;
  post: Post | null = null;
  users:User[] = [];

  constructor(private postService: PostService,
    private userService: UserService) {
    this.userService.getUsers().subscribe((res) => {
      this.users = res;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['postId'] && !changes['postId'].firstChange) {
      // Check if postId changed and it's not the first change
      this.loadPost();
    }
  }

  private loadPost(): void {
    if (this.postId !== null) {
      // Call the PostService to get the post based on postId
      this.postService.getPost(this.postId).subscribe(
        (post:any) => {
          this.post = post;
          this.scrollToTop();
        },
        (error) => {
          console.error('Error loading post:', error);
        }
      );
    }
  }

  private scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /** return the user username */
  getUsername() {
    if(!this.post) return '';

    let index = this.post.userId - 1;
    return this.users[index].username;
  }

  /** return the user full name */
  getName() {
    if(!this.post) return '';

    let index = this.post.userId - 1;
    return this.users[index].name;
  }
}
