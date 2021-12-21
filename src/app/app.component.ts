import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from './interface/todo-models';
import { TodoService } from './shared/services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Unit-test-app'

  constructor(private todoService: TodoService){}

  subscriptions: Subscription[] = [];
  todos: Todo[] = [];

  ngOnInit(){
    this.todoService.getTodos().subscribe({
      next: todos => this.todos = todos,
      error: err => {}
    })
  }
}
