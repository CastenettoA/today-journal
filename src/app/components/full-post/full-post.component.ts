import { Component, Input, SimpleChanges } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrl: './full-post.component.scss'
})
export class FullPostComponent {
  @Input() postId:number|null = null;
  post: Post | null = null;

  constructor(private postService: PostService,
    private userService: UserService) {  }

  // listen to selected post id changes
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['postId'] && !changes['postId'].firstChange) {
      // Check if postId changed and it's not the first change
      this.loadPost();
    }
  }

  /** load the selected post and scroll to top */
  private loadPost(): void {
    if (this.postId !== null) {
      this.postService.getPost(this.postId).subscribe((post:any)=> {
        this.post = post;
        this.scrollToTop();
      });
    }
  }

  /** scroll user to top of page  */
  private scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /** return the user username */
  getUsername() {
    if(!this.post) return '';

    let index = this.post.userId - 1;
    return this.userService.users[index].username;
  }

  /** return the user full name */
  getName() {
    if(!this.post) return '';

    let index = this.post.userId - 1;
    return this.userService.users[index].name;
  }
}
