import { HttpClient } from '@angular/common/http';
/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { TodoService } from './todo.service';

fdescribe('TodoService', () => {
  let service: TodoService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(TodoService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve chamar o metodo GET com o endpoint correto', ()=>{
    const spy = spyOn(http, 'get').and.callThrough();
    service.getTodos();
    expect(spy).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos');
  })
});
