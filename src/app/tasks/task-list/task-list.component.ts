import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';


@Component({
  selector: 'task-list',
  templateUrl: './task-list.html',
})
export class TaskListComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks()
    .subscribe(tasks => this.tasks = tasks);
  }

  onDeleteTask(taskGuid): void {
    this.taskService.deleteTask(taskGuid)
    .subscribe(
      r => this.getTasks()
    )
  }

}
