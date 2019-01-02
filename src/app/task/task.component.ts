import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { pipe } from '../pipe.model';
import { statusModel } from '../status.model';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() taskList: Task[];
  @Input() inputInfo : pipe = new pipe("","");
  @Input() findInfo : pipe= new pipe("","");

  searchStr = "";
  searchType = "";

  findType ="";
  findStr ="";
    



  constructor( public TaskService: TaskService) { }

  ngOnInit() {

    this.taskList = this.TaskService.getTask();
    this.TaskService.taskAdded
      .subscribe(() => {
        this.taskList = this.TaskService.getTask();

      })
      // console.log(this.inputInfo);

      this.searchStr = this.inputInfo.searchStr;
      this.searchType = this.inputInfo.searchType;

      this.findType = this.findInfo.searchType;
      this.findStr = this.findInfo.searchStr;
      // console.log(this.findInfo)
      

      this.TaskService.findInfo
        .subscribe(() => {
          // console.log(this.TaskService.getFindInfo());
          this.findInfo = this.TaskService.getFindInfo();
          this.findType = this.findInfo.searchType;
          this.findStr = this.findInfo.searchStr;
          
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
