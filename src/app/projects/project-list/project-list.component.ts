import { Component, OnInit } from '@angular/core';
import { PROJECTS } from '../mock-projects';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.html',
  styleUrls: ['./project-list.css']
})
export class ProjectListComponent implements OnInit {

  projects = PROJECTS;

  constructor() { }

  ngOnInit(): void {
  }

}
