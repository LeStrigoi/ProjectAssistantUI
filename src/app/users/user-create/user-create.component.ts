import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ProjectService } from '../../projects/project.service';
import { User } from '../user';
import { Project } from '../../projects/project';
import { Guid } from 'guid-typescript';
@Component({
  selector: 'user-create',
  templateUrl: './user-create.html',
  styleUrls: ['./user-create.css']
})
export class UserCreateComponent implements OnInit {

  user: User = {
    id: Guid.create().toString(),
    name: '',
    role: '',
    projectId: '',
  };

  projects: Project[];

  selectedProjectId: string;

  constructor(private router: Router, private userService: UserService, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects()
    .subscribe(projects => this.projects = projects);
  }

  changeProjectId($event) {
    console.log($event);
  }

  onCreateUser(): void {
    this.user.projectId = this.selectedProjectId;
    this.userService.addUser(this.user)
    .subscribe(r => this.router.navigate(['/users']));
  }

}
