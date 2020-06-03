import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const projectsRoutes: Routes = [
  { path: 'projects',  component: ProjectListComponent},
  { path: 'project/new', component: ProjectDetailComponent},
  { path: 'project/:id', component: ProjectDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(projectsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectsRoutingModule { }