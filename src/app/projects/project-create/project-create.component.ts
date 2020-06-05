import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { Project } from '../project';

@Component({
  selector: 'project-create',
  templateUrl: './project-create.html',
  styleUrls: ['./project-create.css']
})
export class ProjectCreateComponent implements OnInit {

  project: Project = {
    id: 1,
    name: '',
    description: ''
  };

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit(): void {
  }

  onCreateProject(): void {
    this.projectService.addProject(this.project)
    .subscribe(r => this.router.navigate(['/projects']));
  }

}
