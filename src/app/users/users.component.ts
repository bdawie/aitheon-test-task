import { Component, OnInit } from '@angular/core';
import { NewUserService } from './new-user/new-user.service';
import { User } from './model/user.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private newUserService: NewUserService, private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });

    this.newUserService.userCreated.subscribe(newUser => {
      this.users.push(newUser);
    });

    this.newUserService.userDeleted.subscribe(deletedUser => {
      const index = this.users.indexOf(deletedUser);
      this.users.splice(index, 1);
    });
  }

  openNewUserModal() {
    this.newUserService.openNewUserModal();
  }

  openEditUserModal(user: User) {
    this.newUserService.openEditUserModal(user);
  }
}
