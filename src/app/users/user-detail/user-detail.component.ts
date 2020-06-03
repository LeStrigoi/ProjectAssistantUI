import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { USERS } from '../mock-users';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.html',
})
export class UserDetailComponent implements OnInit {

  user = USERS[1];
  type = "edit";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParam = this.route.snapshot.paramMap.get('id');

    if (routeParam === null) {
      this.type = "create";
    }
  }

}
