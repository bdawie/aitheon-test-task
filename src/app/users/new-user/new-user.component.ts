import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {

  userForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    city: ['']
  });

  constructor(public modal: NgbActiveModal, private fb: FormBuilder) { }

  createUser() {
    console.log(this.userForm);
    this.modal.close();
  }

  get name() { return this.userForm.get('name'); }
  get email() { return this.userForm.get('email'); }
}
