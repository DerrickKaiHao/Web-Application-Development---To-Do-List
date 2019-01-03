import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../task.service';
import { Category } from '../cat.model';
import { FormGroup, FormControl, Validators } from "@angular/forms"



@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.css']
})
export class AddCatComponent implements OnInit {

  inputInfo : Category = new Category("","","")
  @Input() catList: Category[];
  contactForm : FormGroup;
  sum = 0;



  constructor(public TaskService: TaskService) { }

  ngOnInit() {
    this.catList = this.TaskService.getCategory();
    this.TaskService.catAdded
      .subscribe(() => {
        this.catList = this.TaskService.getCategory();

      })

      this.contactForm = new FormGroup({
        'title': new FormControl(null, [Validators.required, this.blankSpaces] )
        
    
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


  onAddCategory(){
    console.log('clicked')
    this.sum = 0;
    for(var i =0; i<this.catList.length;i++){
      if(this.contactForm.value.title === this.catList[i].title){
        this.sum = this.sum  + 1;
        console.log(this.sum)
      }
    }
    this.checkCat();
    console.log(this.sum);
  }

  checkCat(){
    if(this.sum == 0){
      
      console.log("catadded");
      console.log(this.inputInfo);

      //Creating random number as Category ID // set length to 8
      const Catid = this.randomString(8);
      console.log(Catid);

      //pushing to services
      this.TaskService.addCategory(
        new Category(
          this.contactForm.value.title,
          this.inputInfo.desc,
          Catid
        )
      )

      this.contactForm.reset()
  }
  else{
    alert("no")
  }
  }

  

}
