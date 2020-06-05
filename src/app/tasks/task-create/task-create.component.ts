import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { ProjectService } from '../../projects/project.service';
import { UserService } from '../../users/user.service';
import { Task } from '../task';
import { User } from '../../users/user';
import { Project } from '../../projects/project';
import { Guid } from 'guid-typescript';
@Component({
  selector: 'task-create',
  templateUrl: './task-create.html',
  styleUrls: ['./task-create.css']
})
export class TaskCreateComponent implements OnInit {

  task: Task = {
    id: 1,
    name: '',
    description: '',
    projectId: 1,
    userId: 1,
  };

  projects: Project[];
  users: User[];

  selectedProjectId: number;
  selectedUserId: number;

  constructor(private router: Router, private taskService: TaskService, private projectService: ProjectService, private userService: UserService) { }

  ngOnInit(): void {
    this.getProjects();
    this.getUsers();
  }

  getProjects(): void {
    this.projectService.getProjects()
    .subscribe(projects => this.projects = projects);
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }

  onCreateTask(): void {
    this.task.projectId = this.selectedProjectId;
    this.task.userId = this.selectedUserId;
    this.taskService.addTask(this.task)
    .subscribe(r => this.router.navigate(['/tasks']));
  }

}
