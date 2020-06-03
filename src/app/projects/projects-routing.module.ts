import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectCreateComponent } from './project-create/project-create.component';

const projectsRoutes: Routes = [
  { path: 'projects',  component: ProjectListComponent},
  { path: 'project/new', component: ProjectCreateComponent},
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