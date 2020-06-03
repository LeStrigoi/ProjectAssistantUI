import { Component, OnInit } from '@angular/core';
import { TASKS } from '../mock-tasks';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.html',
})
export class TaskListComponent implements OnInit {

  tasks = TASKS;

  constructor() { }

  ngOnInit(): void {}

}
