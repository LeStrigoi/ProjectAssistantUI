import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { ProjectService } from '../../projects/project.service';
import { UserService } from '../../users/user.service';
import { Task } from '../task';
import { User } from '../../users/user';
import { Project } from '../../projects/project';

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.html',
  styleUrls: ['task-detail.css']
})
export class TaskDetailComponent implements OnInit {

  task: Task = {
    name: '',
    description: '',
    projectId: 1,
    userId: 1,
  };

  projects: Project[];
  users: User[];

  selectedProjectId: number;
  selectedUserId: number;

  constructor(private router: Router, private route: ActivatedRoute, private taskService: TaskService, private projectService: ProjectService, private userService: UserService) { }
  ngOnInit(): void {
    const routeParam = this.route.snapshot.paramMap.get('id');
    this.getProjects();
    this.getUsers();
    this.getTaskByGuid(routeParam);
  }

  getTaskByGuid(taskGuid): void {
    this.taskService.getTask(taskGuid)
    .subscribe(task => {
      this.task = task
      this.selectedProjectId = task.projectId;
      this.selectedUserId = task.userId;
    });
  }

  getProjects(): void {
    this.projectService.getProjects()
    .subscribe(projects => this.projects = projects);
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }

  onDeleteTask(taskGuid): void {
    this.taskService.deleteTask(taskGuid)
    .subscribe(
      r =>  this.router.navigate(['/tasks'])
    )
  }
  
  onUpdateTask(): void {
    this.task.projectId = this.selectedProjectId;
    this.task.userId = this.selectedUserId;
    this.taskService.updateTask(this.task)
    .subscribe(r => this.router.navigate(['/tasks']));
  }

}
