import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { NewUserComponent } from './new-user.component';
import { User } from '../model/user.model';
import { Subject } from 'rxjs';

@Injectable()
export class NewUserService {

  userCreated: Subject<User> = new Subject<User>();
  userDeleted: Subject<User> = new Subject<User>();

  constructor(private modelService: NgbModal) { }

  openNewUserModal() {
    const modalRef = this.modelService.open(NewUserComponent);
    (modalRef.componentInstance as NewUserComponent).userCreated.subscribe(newUser => {
      this.userCreated.next(newUser);
    });
  }

  openEditUserModal(user: User) {
    const modalRef = this.modelService.open(NewUserComponent);
    (modalRef.componentInstance as NewUserComponent).editUser = true;
    (modalRef.componentInstance as NewUserComponent).user = user;
    (modalRef.componentInstance as NewUserComponent).userDeleted.subscribe(deletedUser => {
      this.userDeleted.next(deletedUser);
    });
  }
}
