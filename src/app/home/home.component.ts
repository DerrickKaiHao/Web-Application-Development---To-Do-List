import { Component, OnInit } from '@angular/core';
import { AddCatComponent } from '../add-cat/add-cat.component';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  findInfo = "";
  constructor(public TaskService: TaskService) { }
  today = "";
  tomorrow = "";
  ngOnInit() {
    const date = new Date;
    const day = (date.getDate());
    const month = (date.getMonth());
    const year = (date.getFullYear());
    this.today = day + "/" + month + 1 + "/" + year;
    console.log(this.today);

    const tomorrowDay = (date.getDate())
    this.tomorrow = tomorrowDay + 1  + "/" + month + 1 + "/" + year;
    // console.log(this.tomorrow)
  }
  findTask(info){
    this.TaskService.pushTask(info);
  }


}
