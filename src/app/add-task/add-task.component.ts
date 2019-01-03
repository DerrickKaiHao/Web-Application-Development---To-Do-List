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
  @Input() taskList: Task[];
  inputInfo: Task = new Task('','','','','',0,'')
  dateInput : Date;
  contactForm : FormGroup;
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

sum =0;
  onAddTask(){

    console.log('clicked')
    this.sum = 0;
    for(var i =0; i<this.taskList.length;i++){
      if(this.contactForm.value.title === this.taskList[i].title){
        this.sum = this.sum  + 1;
        console.log(this.sum)
      }
    }
    this.checkTask();
    console.log(this.sum);
    
  }

  checkTask(){
    if(this.sum == 0){
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
      else{
        alert("No repeats")
      }
  }



}
