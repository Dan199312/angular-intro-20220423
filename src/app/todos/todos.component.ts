import { Component, OnInit } from '@angular/core';
import { todo } from './model/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public todos: todo[]=[];
  public text: string = 'type something';

  public clear (){
    this.text = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
