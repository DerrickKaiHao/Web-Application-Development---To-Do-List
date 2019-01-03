import { Component, OnInit, Input} from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms"
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
  inputInfo: Task = new Task('','','','','',0,'')
  dateInput : Date;
  contactForm : FormGroup;

  @Input() taskList: Task[];
  checkTitle = [];

  inputTitle = ""

  constructor( public TaskService: TaskService ) { }

 
  ngOnInit() {
    this.catList = this.TaskService.getCategory();
    this.TaskService.catAdded
      .subscribe(() => {
        this.catList = this.TaskService.getCategory();

      })

    this.taskList = this.TaskService.getTask();
    for(var i=0;i<this.taskList.length;i++){
      this.checkTitle.push(this.taskList[i].title)
      console.log(this.checkTitle)
    }
    this.TaskService.taskAdded
      .subscribe(() => {
        this.taskList = this.TaskService.getTask();
        this.checkTitle = [];
        for(var i=0;i<this.taskList.length;i++){
          this.checkTitle.push(this.taskList[i].title)
          console.log(this.checkTitle)
        }
        
      })
      

      this.contactForm = new FormGroup({
        'title': new FormControl(null, [Validators.required, this.blankSpaces] ),
        'desc': new FormControl(null , [Validators.required, Validators.maxLength(500)]),
        'cat': new FormControl(null, [Validators.required]),
        'dueDate': new FormControl(null, [Validators.required])
        
    
      });

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

blankSpaces(control: FormControl) : {[s: string] : boolean}{
  
  if(control.value != null && control.value.trim().length === 0){
    return {'blackSpaces':true};
  }

  return null; // no error found return null
}


  onAddTask(){

    const Taskid = this.randomString(8);
    this.inputInfo.taskId = Taskid;
    const status = 0;
    this.inputInfo.status = status;
    console.log(this.contactForm.value)
    this.contactForm.value.dueDate = this.contactForm.value.dueDate.getDate()+ "/" + this.contactForm.value.dueDate.getMonth()+ 1+"/" +this.contactForm.value.dueDate.getFullYear()
    console.log(this.contactForm.value.dueDate)
    this.TaskService.addTask(
      new Task(
        this.contactForm.value.title,
        this.contactForm.value.desc,
        this.contactForm.value.cat,
        this.contactForm.value.dueDate,
        this.inputInfo.taskId,
        this.inputInfo.status,
        this.inputInfo.statusDesc

      )
    )
    this.contactForm.reset()
    
  }


}
