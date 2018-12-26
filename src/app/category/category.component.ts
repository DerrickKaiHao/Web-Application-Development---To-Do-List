import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(public TaskService: TaskService) { }

  ngOnInit() {
  }
  findTask(info){
    this.TaskService.pushTask(info);
  }

}
