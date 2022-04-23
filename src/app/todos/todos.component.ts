import { Component, OnInit } from '@angular/core';
import { todo } from './model/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public todos: todo[]=[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
