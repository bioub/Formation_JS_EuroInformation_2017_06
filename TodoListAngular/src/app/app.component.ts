import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public saisie: string = 'Default value';
  public todos: Array<any> = [];

  addTodo() {
    this.todos.push({
      done: false,
      value: this.saisie,
    });
    this.saisie = '';
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
