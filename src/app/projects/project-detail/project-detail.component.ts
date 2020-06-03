import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PROJECTS } from '../mock-projects';

@Component({
  selector: 'project-detail',
  templateUrl: './project-detail.html',
  styleUrls: ['./project-detail.css']
})
export class ProjectDetailComponent implements OnInit {

  project = PROJECTS[1];
  type = "edit";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParam = this.route.snapshot.paramMap.get('id');

    if (routeParam === null) {
      this.type = "create";
    }
  }

}
