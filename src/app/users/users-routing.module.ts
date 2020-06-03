import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const userRoutes: Routes = [
  { path: 'users',  component: UserListComponent},
  { path: 'user/new', component: UserDetailComponent},
  { path: 'user/:id', component: UserDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }