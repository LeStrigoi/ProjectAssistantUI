import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { Project } from '../project';

@Component({
  selector: 'project-detail',
  templateUrl: './project-detail.html',
  styleUrls: ['./project-detail.css']
})
export class ProjectDetailComponent implements OnInit {

  project: Project = {
    name: '',
    description: ''
  };

  constructor(private router: Router, private route: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit(): void {
    const routeParam = this.route.snapshot.paramMap.get('id');

    this.getProjectByGuid(routeParam);
  }

  getProjectByGuid(projectGuid): void {
    this.projectService.getProject(projectGuid)
    .subscribe(project => this.project = project);
  }

  onDeleteProject(projectGuid): void {
    this.projectService.deleteProject(projectGuid)
    .subscribe(
      r =>  this.router.navigate(['/projects'])
    )
  }

  onUpdateProject(): void {
    this.projectService.updateProject(this.project)
    .subscribe(r => this.router.navigate(['/projects']));
  }

}
