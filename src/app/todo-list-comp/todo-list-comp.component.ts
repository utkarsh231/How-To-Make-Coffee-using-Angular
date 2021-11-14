import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
@Component({
  selector: 'app-todo-list-comp',
  templateUrl: './todo-list-comp.component.html',
  styleUrls: ['./todo-list-comp.component.css']
})
export class TodoListCompComponent implements OnInit {

  todo : any = []

  constructor(private todoList: TodoServiceService) { }

  ngOnInit(): void {
    this.todo = this.todoList.getTodo()
  }

}
