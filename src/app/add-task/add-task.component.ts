import { Component, OnInit, Input} from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { Category } from '../cat.model';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Input() catList: Category[];
  inputInfo: Task = new Task('','','','','','')


  constructor( public TaskService: TaskService ) { }

 
  ngOnInit() {
    this.catList = this.TaskService.getCategory();
    this.TaskService.catAdded
      .subscribe(() => {
        this.catList = this.TaskService.getCategory();

      })
    

  }

  randomString(length) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

    if (! length) {
        length = Math.floor(Math.random() * chars.length);
    }

    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}


  onAddTask(){

    const Taskid = this.randomString(8);
    this.inputInfo.taskId = Taskid;
    const status = "pending";
    this.inputInfo.status = status;
    

    this.TaskService.addTask(
      new Task(
        this.inputInfo.title,
        this.inputInfo.desc,
        this.inputInfo.catName,
        this.inputInfo.dueDate,
        this.inputInfo.taskId,
        this.inputInfo.status

      )
    )
    console.log(this.inputInfo);



  }

}
