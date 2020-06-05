import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { ProjectService } from '../../projects/project.service';
import { User } from '../user';
import { Project } from '../../projects/project';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.html',
  styleUrls: ['user-detail.css']
})
export class UserDetailComponent implements OnInit {

  user: User = {
    name: '',
    role: ''
  };

  projects: Project[];

  selectedProjectId: number;

  constructor(private router: Router, private route: ActivatedRoute,  private userService: UserService, private projectService: ProjectService) { }
  ngOnInit(): void {
    const routeParam = this.route.snapshot.paramMap.get('id');
    this.getProjects();
    this.getUserByGuid(routeParam);
  }

  getUserByGuid(userGuid): void {
    this.userService.getUser(userGuid)
    .subscribe(user => {
      this.user = user
      this.selectedProjectId = user.projectId;
    });
  }

  getProjects(): void {
    this.projectService.getProjects()
    .subscribe(projects => this.projects = projects);
  }

  onDeleteUser(userGuid): void {
    this.userService.deleteUser(userGuid)
    .subscribe(
      r =>  this.router.navigate(['/users'])
    )
  }
  
  onUpdateUser(): void {
    this.user.projectId = this.selectedProjectId;
    this.userService.updateUser(this.user)
    .subscribe(r => this.router.navigate(['/users']));
  }

}
