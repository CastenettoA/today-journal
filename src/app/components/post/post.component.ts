import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../models/post';
import { User } from '../../models/user';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  @Input() post:Post | undefined;
  users:User[] = [];
  @Output() postId_event = new EventEmitter<number>();

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe((res) => this.users = res );
  }

  /** return the user username */
  getUsername(userId:number) {
    let index = userId - 1;

    if(!this.users[index] || !this.users[index].username)
     return 'Unknown Author'; // todo: why return null sometimes?

    return this.users[index].username;
  }

  /** return the user first letter from his name and surname.
   *  to implement:
   *     - be aware how name starting with 'mrs.'
   *     - be avare of name starting with double names.
   */
  getUserInitials(userId:number) {
    let index = userId - 1;
    let letters = 'U.A.'; // unknown author as default

    if(this.users[index] && this.users[index].name) {
      let name = this.users[index].name;
      let letters = name.split(' ')[0][0] + name.split(' ')[1][0];
    }

    return letters;
  }
}
