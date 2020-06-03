import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { TaskListComponent }    from './task-list/task-list.component';
import { TaskDetailComponent }    from './task-detail/task-detail.component';
import { TasksRoutingModule } from './tasks-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TasksRoutingModule
  ],
  declarations: [
    TaskDetailComponent,
    TaskListComponent
  ]
})
export class TasksModule {
}