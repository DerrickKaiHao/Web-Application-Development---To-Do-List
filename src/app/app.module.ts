import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatDatepickerModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule, MatNativeDateModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from'@angular/forms';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { AddCatComponent } from './add-cat/add-cat.component';
import { TaskComponent } from './task/task.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { FindPipe } from './find.pipe';
import { AppRoutingModule } from './app-routing.module';
import { CompletedComponent } from './completed/completed.component';
import { PendingComponent } from './pending/pending.component';
import { CategoryComponent } from './category/category.component';
import { StatusPipe } from './status.pipe';
import { StatusDirective } from './status.directive';
import { ChangeStatusDirective } from './task/change-status.directive';


@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    AddCatComponent,
    TaskComponent,
    HomeComponent,
    EditComponent,
    FindPipe,
    CompletedComponent,
    PendingComponent,
    CategoryComponent,
    StatusPipe,
    StatusDirective,
    ChangeStatusDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    [MatButtonModule, MatCheckboxModule],
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
