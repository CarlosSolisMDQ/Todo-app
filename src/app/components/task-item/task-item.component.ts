import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASK } from 'src/app/mock-task';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task = TASK[0];

  constructor() { }

  ngOnInit(): void {
  }

}
