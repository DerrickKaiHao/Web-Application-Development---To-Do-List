import { Injectable, EventEmitter } from '@angular/core';
import { Category } from './cat.model';
import { Task } from './task.model';
import { AddTaskComponent } from './add-task/add-task.component';
import { pipe } from './pipe.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  //pipe
  findInfo = new EventEmitter<void>()
  findList: pipe= new pipe("","");

  // Category
  catAdded = new EventEmitter<void>()
  private catList: Category[] = [
    new Category('School','For testing','asdfqwer')

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
    new Task('New Task','Complete WAD assignment','School','12/12/2018','awsdqwer',0,'pending')
  ]

  //Edit
  taskEdited = new EventEmitter<void>()
  private editList: Task[] = [
    
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

  // Status Update Completed
  completeTask(taskId){
    var index = this.taskList.map(x => {
      return x.taskId;
    }).indexOf(taskId);
    if(this.taskList[index].status === 1){
      this.taskList[index].status = 0;
      this.taskList[index].statusDesc = "pending";
    }
    else{
      this.taskList[index].status = 1;
      this.taskList[index].statusDesc = "completed";

    }
    
    this.taskAdded.emit();
    console.log(this.taskList);
  }

  editTask(taskId){
    var index = this.taskList.map(x => {
      return x.taskId;
    }).indexOf(taskId);
    console.log(this.taskList[index].catName);
    console.log(this.taskList[index].desc);
    console.log(this.taskList[index].dueDate);
    console.log(this.taskList[index].taskId);
    console.log(this.taskList[index].title);


    this.editList.push(
    new Task(
        this.taskList[index].title,
        this.taskList[index].desc,
        this.taskList[index].catName,
        this.taskList[index].dueDate,
        this.taskList[index].taskId,
        this.taskList[index].status,
        this.taskList[index].statusDesc
    ))
    
    this.taskEdited.emit();
    
    
  }

  getEditTask(){

    //get only 1 value --Last item in array
    return this.editList.slice(-1);
  }


  // update edits
  // update task button
  updateTask(info){
    var index = this.taskList.map(x => {
      return x.taskId;
    }).indexOf(info.taskId);
    this.taskList[index].title = info.title;
    this.taskList[index].catName = info.catName;
    this.taskList[index].desc = info.desc;
    this.taskList[index].dueDate = info.dueDate;
    console.log(this.taskList);
    this.taskAdded.emit();
  }

  pushTask(info){
    console.log(info);
    const type = "title";
    
    this.findList = new pipe (type,info)
    console.log(this.findList);   
    this.findInfo.emit();
  }

  getFindInfo(){
    return this.findList;
  }
  

}
