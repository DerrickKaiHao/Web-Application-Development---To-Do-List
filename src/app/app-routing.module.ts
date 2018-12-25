import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompletedComponent } from './completed/completed.component';
import { PendingComponent } from './pending/pending.component';
import { CategoryComponent } from './category/category.component';


const appRoutes: Routes = [
  {path: '',redirectTo: '/home',pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'completed',component:CompletedComponent},
  {path: 'pending',component:PendingComponent},
  {path: 'category',component:CategoryComponent},
  {path: '**',redirectTo: '/home'}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
