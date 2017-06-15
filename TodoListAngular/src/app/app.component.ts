import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public saisie: string = 'Default value';
  public todos: Array<any> = [];

  constructor(private http: Http) {
    http.get('http://localhost:8000/api/todos')
      .map((res: Response) => res.json())
      .subscribe(todos => {
        this.todos = todos;
      });
  }

  addTodo() {
    const todo = {
      done: false,
      value: this.saisie,
    };
    this.todos.push(todo);
    this.saisie = '';
    this.http.post('http://localhost:8000/api/todos', todo)
      .subscribe(() => {

      });
  }

  removeTodo(todo) {
    const i = this.todos.indexOf(todo);
    this.todos.splice(i, 1);
  }

  toggleAll(e) {
    this.todos = this.todos.map((todo) => {
      return {
        done: e.target.checked,
        value: todo.value,
      }
    });
  }

  isAllToggle() {
    return this.todos.reduce((acc, todo) => acc && todo.done, true);
  }



}
