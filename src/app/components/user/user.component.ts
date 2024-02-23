import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  userId:number|null = null;

  constructor(
    private route: ActivatedRoute  ) {}

    ngOnInit() {
      this.userId = Number(this.route.snapshot.paramMap.get('id'));
    }
}
