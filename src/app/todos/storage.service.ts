import { Injectable } from '@angular/core';
import { todo } from './model/todo';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  storageKey = 'savedTodos';

  constructor() { }

  public saveTodos(todos: todo[]): void {
    const savedTodos = JSON.stringify(todos);
    localStorage.setItem(this.storageKey, savedTodos);

  }

  public loadTodos(): todo[] {
    const savedTodos = localStorage.getItem(this.storageKey,);

    if (savedTodos === null){
      return [];
    }

    const todosObjects: todo[] = JSON.parse(savedTodos)
    return todosObjects;


  }
}
