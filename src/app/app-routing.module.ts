import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceXComponent } from './space-x/space-x.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoListCompComponent } from './todo-list-comp/todo-list-comp.component';

const routes: Routes = [
  {path : 'list', component : TodoListCompComponent},
  {path : 'details', component : TodoDetailsComponent},
  {path : 'SpaceX-api', component : SpaceXComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
