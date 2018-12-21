import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() taskList: Task[];

  searchStr = "";


  constructor( public TaskService: TaskService) { }

  ngOnInit() {

    this.taskList = this.TaskService.getTask();
    this.TaskService.taskAdded
      .subscribe(() => {
        this.taskList = this.TaskService.getTask();

      })

  }


  // triggering the remove function
  remove(taskId){
    this.TaskService.removeTask(taskId);

  }
  
  completed(taskId){
    this.TaskService.completeTask(taskId);
  }

  edit(taskId){
    this.TaskService.editTask(taskId);
  }
}
