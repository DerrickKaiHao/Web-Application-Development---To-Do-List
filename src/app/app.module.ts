import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { AddCatComponent } from './add-cat/add-cat.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    AddCatComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
