import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {

  constructor(public TaskService: TaskService) { }

  ngOnInit() {
  }
  findTask(info){
    this.TaskService.pushTask(info);
  }

}
