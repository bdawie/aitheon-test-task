import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { NewUserComponent } from './new-user.component';

@Injectable()
export class NewUserService {

  constructor(private modelService: NgbModal) { }

  openNewUserModal() {
    this.modelService.open(NewUserComponent);
  }
}
