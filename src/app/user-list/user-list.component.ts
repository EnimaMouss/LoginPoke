import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UsersTableComponent } from '../users-table/users-table.component';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})

export class UserListComponent implements OnInit {

users = [];
error = '';

constructor(private userService: UserService) { }

  // Chargement des le montage du composant
  ngOnInit() {
  this.userService.getUsers()
                .subscribe(
                  data => this.users = data,
                  error => this.error = error
                );
  }
}
