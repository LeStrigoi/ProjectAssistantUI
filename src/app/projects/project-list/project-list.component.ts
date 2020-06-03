import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.html',
  styleUrls: ['./project-list.css']
})
export class ProjectListComponent implements OnInit {

  projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects()
    .subscribe(projects => this.projects = projects);
  }

  onDeleteProject(projectGuid): void {
    this.projectService.deleteProject(projectGuid)
    .subscribe(
      r => this.getProjects()
    )
  }

}
