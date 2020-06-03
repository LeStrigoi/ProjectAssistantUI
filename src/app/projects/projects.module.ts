import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { ProjectListComponent }    from './project-list/project-list.component';
import { ProjectsRoutingModule } from './projects-routing.module';
// import { HeroDetailComponent }  from './hero-detail/hero-detail.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProjectsRoutingModule
  ],
  declarations: [
    // HeroListComponent,
    ProjectListComponent
  ]
})
export class ProjectsModule {
}