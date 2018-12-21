import { Component, OnInit, Input} from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { Category } from '../cat.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor( public TaskService: TaskService) { }
  @Input() EditInfo: Task[];
  @Input() catList: Category[];
  inputInfo: Task = new Task('','','','','','')
  
  ngOnInit() {
    this.TaskService.taskEdited
      .subscribe(()=>{
        this.EditInfo = this.TaskService.getEditTask();
        console.log(this.EditInfo);
      })
      this.catList = this.TaskService.getCategory();
      this.TaskService.catAdded
      .subscribe(() => {
        this.catList = this.TaskService.getCategory();

      })
    
  }
  editted(info){
    // console.log(info);
    // console.log(taskId);
    // console.log(this.inputInfo.taskId);
    // console.log(this.EditInfo);

    // link to services 
    // create update function in services
    this.TaskService.updateTask(info);

  }

}
