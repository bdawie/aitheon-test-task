import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../model/user.model';
import { NewUserService } from './new-user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  /**
   * Component Input property
   */
  editUser = false;

  /**
   * Component Input property
   */
  user: User | undefined = undefined;

  /**
   * Output property
   */
  userCreated = new EventEmitter<User>();

  /**
   * Output property
   */
  userDeleted = new EventEmitter<User>();

  userForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    city: ['']
  });

  ngOnInit(): void {
    if (this.editUser) {
      this.userForm.setValue({
        name: this.user.name,
        email: this.user.email,
        city: this.user.city || ''
      });
    }
  }

  constructor(public modal: NgbActiveModal, private fb: FormBuilder) { }

  createOrUpdateUser() {
    const newUser: User = {
      name: this.userForm.value.name,
      email: this.userForm.value.email,
      city: this.userForm.value.city
    };

    if (this.user !== undefined) {
      this.user.name = newUser.name;
      this.user.email = newUser.email;
      this.user.city = newUser.city;
      this.modal.close();
      return;
    }
    this.userCreated.emit(newUser);
    this.modal.close();
  }

  deleteUser() {
    this.userDeleted.emit(this.user);
    this.modal.close();
  }

  get name() { return this.userForm.get('name'); }
  get email() { return this.userForm.get('email'); }
}
