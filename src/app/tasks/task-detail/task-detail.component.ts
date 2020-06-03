import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TASKS } from '../mock-tasks';

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.html',
})
export class TaskDetailComponent implements OnInit {

  task = TASKS[1];
  type = "edit";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParam = this.route.snapshot.paramMap.get('id');

    if (routeParam === null) {
      this.type = "create";
    }
  }

}
