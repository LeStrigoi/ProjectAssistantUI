import { Component, OnInit } from '@angular/core';
import { USERS } from '../mock-users';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.html',
})
export class UserListComponent implements OnInit {

  users = USERS;

  constructor() { }

  ngOnInit(): void {}

}
