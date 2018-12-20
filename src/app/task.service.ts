import { Injectable, EventEmitter } from '@angular/core';
import { Category } from './cat.model';
import { Task } from './task.model';
import { AddTaskComponent } from './add-task/add-task.component';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // Category
  catAdded = new EventEmitter<void>()
  private catList: Category[] = [
    new Category('Test','For testing','')

  ]

  constructor() { }

  addCategory(newCategoryInfo){
    this.catList.push(newCategoryInfo)
    console.log(this.catList)
    this.catAdded.emit()

  }
  getCategory(){
    return this.catList.slice();
  }

  // Task
  taskAdded = new EventEmitter<void>()
  private taskList: Task[] = [
    new Task('title','desc','cat','duedate','id','pending')
  ]

  addTask(newTaskInfo){
    this.taskList.push(newTaskInfo)
    console.log(this.taskList)
    this.taskAdded.emit()
    
  }
  getTask(){
    return this.taskList.slice();
  }

  // Delete completed
  // source https://stackoverflow.com/questions/34336633/remove-object-from-js-array-knowing-its-id

  removeTask(taskId){
    var index = this.taskList.map(x => {
      return x.taskId;
    }).indexOf(taskId);
    
    this.taskList.splice(index, 1);
    console.log("success");
    this.taskAdded.emit();
    console.log(this.taskList);

  }
}
