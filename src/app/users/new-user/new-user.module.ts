import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { NewUserComponent } from './new-user.component';
import { NewUserService } from './new-user.service';

@NgModule({
  imports: [CommonModule, NgbModule, ReactiveFormsModule],
  declarations: [NewUserComponent],
  providers: [NewUserService],
  entryComponents: [NewUserComponent]
})
export class NewUserModule {

}
