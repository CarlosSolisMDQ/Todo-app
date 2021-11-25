import { Injectable } from '@angular/core';
import { TASK } from '../mock-task';
import { Task } from '../Task';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';


const httpOptions ={
  headers: new HttpHeaders({'content-type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiURL = 'http://localhost:5000/tasks';

  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiURL);

  }
  deleteTask(task: Task): Observable<Task[]>{
    const url = `${this.apiURL}/${task.id}`
    return this.http.delete<Task[]>(url);
  }
  toggleUpdate(task: Task): Observable<Task>{
    const url = `${this.apiURL}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions)
  }
  addNewTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiURL, task, httpOptions);
  }
}
