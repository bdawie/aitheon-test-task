import { Component } from '@angular/core';
import { NewUserService } from './new-user/new-user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent {

  constructor(private newUserService: NewUserService) { }

  openNewUserModal() {
    this.newUserService.openNewUserModal();
  }
}
