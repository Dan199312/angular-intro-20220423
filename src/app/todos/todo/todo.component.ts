import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { todo } from '../model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() public todoInput: todo;

  @Output() public delete = new EventEmitter<todo>();

  public onDeleteClick () {
    this.delete.emit(this.todoInput);

  }

  constructor() { }

  ngOnInit(): void {
  }

}
