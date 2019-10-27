import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersComponent } from './users.component';
import { CommonModule } from '@angular/common';
import { NewUserModule } from './new-user/new-user.module';

@NgModule({
  imports: [CommonModule, NgbModule, ReactiveFormsModule, NewUserModule],
  exports: [UsersComponent],
  declarations: [UsersComponent]
})
export class UsersModule { }
