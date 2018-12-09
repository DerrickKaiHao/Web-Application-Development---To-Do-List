import { Injectable, EventEmitter } from '@angular/core';
import { Category } from './cat.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  catAdded = new EventEmitter<void>()
  private catList: Category[] = [
    new Category('','',''),
  ]

  constructor() { }

  addCategory(newCategoryInfo){
    this.catList.push(newCategoryInfo)
    console.log(this.catList)

  }
  getCategory(){
    return this.catList.slice();
  }
}
