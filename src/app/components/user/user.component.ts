import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  userId:number|null = null;
  user:User|null = null;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService  ) {}

    ngOnInit() {
      // get user id on param change
      this.userId = Number(this.route.snapshot.paramMap.get('id'));

      // load the user infos
      if(this.userId) {
          this.userService.getUser(this.userId).subscribe((res:any) => {this.user = res;})
        }
    }
}
