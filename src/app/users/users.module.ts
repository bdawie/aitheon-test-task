import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UsersComponent } from './users.component';
import { NewUserModule } from './new-user/new-user.module';
import { UsersService } from './users.service';

@NgModule({
  imports: [CommonModule, NgbModule, HttpClientModule, ReactiveFormsModule, NewUserModule],
  exports: [UsersComponent],
  declarations: [UsersComponent],
  providers: [UsersService]
})
export class UsersModule { }
