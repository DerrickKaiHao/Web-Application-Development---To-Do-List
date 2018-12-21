import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { AddCatComponent } from './add-cat/add-cat.component';
import { TaskComponent } from './task/task.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { FindPipe } from './find.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    AddCatComponent,
    TaskComponent,
    HomeComponent,
    EditComponent,
    FindPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
