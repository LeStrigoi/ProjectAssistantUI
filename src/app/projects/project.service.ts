import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Project } from './project';



@Injectable({ providedIn: 'root' })
export class ProjectService {

  private projectsUrl = 'https://localhost:5001/api/projects';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ){ }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl)
      .pipe(
        catchError(this.handleError<Project[]>('getProjects', []))
      );
  }

  getProject(projectGuid): Observable<Project> {
    const url = `${this.projectsUrl}/${projectGuid}`;
    return this.http.get<Project>(url).pipe(
      catchError(this.handleError<Project>(`getProject id=${projectGuid}`))
    );
  }

  addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.projectsUrl, project, this.httpOptions).pipe(
      catchError(this.handleError<Project>('addProject'))
    );
  }

  deleteProject(projectGuid): Observable<Project> {
    const url = `${this.projectsUrl}/${projectGuid}`;

    return this.http.delete<Project>(url, this.httpOptions).pipe(
      catchError(this.handleError<Project>('deleteProject'))
    );
  }

  updateProject(project: Project): Observable<any> {
    const url = `${this.projectsUrl}/${project.id}`;
    return this.http.put(url, project, this.httpOptions).pipe(
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