import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

const taskRoutes: Routes = [
  { path: 'tasks',  component: TaskListComponent},
  { path: 'task/new', component: TaskDetailComponent},
  { path: 'task/:id', component: TaskDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(taskRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TasksRoutingModule { }