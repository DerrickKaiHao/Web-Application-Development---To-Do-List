import { Component, OnInit , Output} from '@angular/core';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  constructor(public TaskService: TaskService) { }

  ngOnInit() {
  }
  findTask(info){
    this.TaskService.pushTask(info);
  }
}
