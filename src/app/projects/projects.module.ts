import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { ProjectListComponent }    from './project-list/project-list.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectDetailComponent }  from './project-detail/project-detail.component';
import { ProjectCreateComponent }  from './project-create/project-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProjectsRoutingModule
  ],
  declarations: [
    ProjectDetailComponent,
    ProjectListComponent,
    ProjectCreateComponent
  ]
})
export class ProjectsModule {
}