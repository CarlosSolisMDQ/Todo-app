import { Injectable } from '@angular/core';
import { TASK } from '../mock-task';
import { Task } from '../Task';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';

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
}
