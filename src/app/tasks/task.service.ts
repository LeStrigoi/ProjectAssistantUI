import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Task } from './task';



@Injectable({ providedIn: 'root' })
export class TaskService {

  private tasksUrl = 'https://localhost:5001/api/tasks';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ){ }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl)
      .pipe(
        catchError(this.handleError<Task[]>('getTasks', []))
      );
  }

  getTask(taskGuid): Observable<Task> {
    const url = `${this.tasksUrl}/${taskGuid}`;
    return this.http.get<Task>(url).pipe(
      catchError(this.handleError<Task>(`getTask id=${taskGuid}`))
    );
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksUrl, task, this.httpOptions).pipe(
      catchError(this.handleError<Task>('addTask'))
    );
  }

  deleteTask(taskGuid): Observable<Task> {
    const url = `${this.tasksUrl}/${taskGuid}`;

    return this.http.delete<Task>(url, this.httpOptions).pipe(
      catchError(this.handleError<Task>('deleteTask'))
    );
  }

  updateTask(task: Task): Observable<any> {
    const url = `${this.tasksUrl}/${task.id}`;
    return this.http.put(url, task, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateProject'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

}