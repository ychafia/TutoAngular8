import { IndexComponent } from './index.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [IndexComponent],
  exports: [IndexComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IndexModule { }
