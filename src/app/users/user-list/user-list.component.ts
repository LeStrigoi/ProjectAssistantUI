import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'user-list',
  templateUrl: './user-list.html',
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }

  onDeleteUser(userGuid): void {
    this.userService.deleteUser(userGuid)
    .subscribe(
      r => this.getUsers()
    )
  }

}
