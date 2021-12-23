import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../interface/todo-models';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor() { }

  @Input()

  todo: Todo = {
    userId: 0,
    id: 0,
    title: 'String',
    complement: true
  }

  ngOnInit(): void {
  }

}
