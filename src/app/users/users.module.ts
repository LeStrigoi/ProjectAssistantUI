import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { UserListComponent }    from './user-list/user-list.component';
import { UserDetailComponent }    from './user-detail/user-detail.component';
import { UserCreateComponent }    from './user-create/user-create.component';
import { UsersRoutingModule } from './users-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule
  ],
  declarations: [
    UserDetailComponent,
    UserCreateComponent,
    UserListComponent
  ]
})
export class UsersModule {
}