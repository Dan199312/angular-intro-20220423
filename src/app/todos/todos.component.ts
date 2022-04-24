import {Component, OnInit} from '@angular/core';
import {todo} from './model/todo';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  public todos: todo[] = [];
  public text: string = '';

  public style = {
    fontSize: '24px',
    backgroundColor: '#eef',
  };

  public clear() {
    this.text = '';
  }

  public addTodo() {
    const todo: todo = {
      text: this.text,
      created: Date.now(),
      done: false,
      priority: Math.ceil(Math.random() * 3),
    };
    this.todos.push(todo);
    this.clear();

    this.storageService.saveTodos(this.todos);
  }

  public deleteTodo(todo: todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);

    this.storageService.saveTodos(this.todos);

  }

  constructor(private storageService: StorageService,) {}

  ngOnInit(): void {
    this.todos = this.storageService.loadTodos();
  }
}