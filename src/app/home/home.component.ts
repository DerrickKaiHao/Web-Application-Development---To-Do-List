import { Component, OnInit } from '@angular/core';
import { AddCatComponent } from '../add-cat/add-cat.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  today = "";
  tomorrow = "";
  ngOnInit() {
    const date = new Date;
    const day = (date.getDate());
    const month = (date.getMonth())+1;
    const year = (date.getFullYear());
    this.today = day + "/" + month + "/" + year;
    console.log(this.today);

    const tomorrowDay = (date.getDate()+1)
    this.tomorrow = tomorrowDay  + "/" + month + "/" + year;
    console.log(this.tomorrow)
  }


}
