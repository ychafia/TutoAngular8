import { FormsModule } from '@angular/forms';
import { SignupRoutes } from './signup.routes';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SignupComponent],
  exports: [SignupComponent],
  imports: [
    RouterModule.forChild(SignupRoutes),
    CommonModule,
    FormsModule,
  ]
})
export class SignupModule { }
