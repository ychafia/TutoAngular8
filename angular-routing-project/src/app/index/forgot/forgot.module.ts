import { FormsModule } from '@angular/forms';
import { ForgotRoutes } from './forgot.routes';
import { RouterModule } from '@angular/router';
import { ForgotComponent } from './forgot.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ForgotComponent],
  exports: [ForgotComponent],
  imports: [
    RouterModule.forChild(ForgotRoutes),
    CommonModule,
    FormsModule,
  ]
})
export class ForgotModule { }
