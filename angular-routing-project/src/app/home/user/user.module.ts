import { UserRoutes } from './user.router';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UserComponent],
  exports: [UserComponent],
  imports: [
    RouterModule.forChild(UserRoutes),
    CommonModule
  ]
})
export class UserModule { }
