import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../todos/storage.service';
import { UserResponse } from './model/user-response';
import {User} from './model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: User[];

  constructor(private http: HttpClient, private storage: StorageService,) { }

  ngOnInit(): void {
    this.getUsers().subscribe(
      response => {
        this.users = response.data;
      },
    );
  }

  public getUsers() {
    return this.http.get<UserResponse>('https://reqres.in/api/users',);
  }

}
