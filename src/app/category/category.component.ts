import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../task.service';
import { Category } from '../cat.model';
import { Task } from '../task.model';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(public TaskService: TaskService) { }

  @Input() catList: Category[];
  @Input() taskList: Task[];
  ngOnInit() {
    this.catList = this.TaskService.getCategory();
    this.TaskService.catAdded
      .subscribe(() => {
        this.catList = this.TaskService.getCategory();

      })

      this.taskList = this.TaskService.getTask();
    this.TaskService.taskAdded
      .subscribe(() => {
        this.taskList = this.TaskService.getTask();
        
        
      })
      
  }
  findTask(info){
    this.TaskService.pushTask(info);
  }

}
