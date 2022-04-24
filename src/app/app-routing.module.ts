import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { TimerComponent } from './timer/timer.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: 'timer',
    component: TimerComponent,
  },
  {
    path: 'todos',
    component: TodosComponent,
  
  },
  
  {
    path: '**',
    component: TodosComponent,
    pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
