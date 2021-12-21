import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/interface/todo-models';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  readonly API = 'https://jsonplaceholder.typicode.com/todos';

constructor(private http: HttpClient) { }

getTodos(){
  return this.http.get<Todo[]>(`${this.API}`);
 }
}
