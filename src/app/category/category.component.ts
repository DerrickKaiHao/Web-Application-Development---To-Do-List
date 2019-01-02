import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../task.service';
import { Category } from '../cat.model';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(public TaskService: TaskService) { }

  @Input() catList: Category[];
  ngOnInit() {
    this.catList = this.TaskService.getCategory();
    this.TaskService.catAdded
      .subscribe(() => {
        this.catList = this.TaskService.getCategory();

      })
  }
  findTask(info){
    this.TaskService.pushTask(info);
  }

}
