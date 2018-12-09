import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Category } from '../cat.model';

@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.css']
})
export class AddCatComponent implements OnInit {

  inputInfo : Category = new Category("","","")



  constructor(public TaskService: TaskService) { }

  ngOnInit() {
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

  onAddCategory(){
    console.log("catadded");
    console.log(this.inputInfo);

    //Creating random number as Category ID // set length to 8
    const Catid = this.randomString(8);
    console.log(Catid);

    //pushing to services
    this.TaskService.addCategory(
      new Category(
        this.inputInfo.title,
        this.inputInfo.desc,
        Catid
      )
    )


    
  }

}
