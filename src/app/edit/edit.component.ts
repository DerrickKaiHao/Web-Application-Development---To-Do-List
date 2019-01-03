import { Component, OnInit, Input} from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { Category } from '../cat.model';
import { FormGroup, FormControl, Validators } from "@angular/forms"


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor( public TaskService: TaskService) { }
  @Input() EditInfo: Task[];
  @Input() catList: Category[];
  contactForm : FormGroup;
  inputInfo: Task = new Task('','','','','',0,'')
  
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

      this.contactForm = new FormGroup({
        'title': new FormControl(null, [Validators.required, this.blankSpaces] ),
        'desc': new FormControl(null , [Validators.required, Validators.maxLength(500)]),
        'cat': new FormControl(null, [Validators.required]),
        'dueDate': new FormControl(null, [Validators.required])
        
    
      });
    
  }
  editted(info){
    // console.log(info);
    // console.log(taskId);
    // console.log(this.inputInfo.taskId);
    // console.log(this.EditInfo);

    // link to services 
    // create update function in services
    this.TaskService.updateTask(info);

    this.EditInfo = [];

  }

  blankSpaces(control: FormControl) : {[s: string] : boolean}{
  
    if(control.value != null && control.value.trim().length === 0){
      return {'blackSpaces':true};
    }
  
    return null; // no error found return null
  }

}
