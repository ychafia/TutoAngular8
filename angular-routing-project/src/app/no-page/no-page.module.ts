import { NoPageComponent } from './no-page.component';
import { NoPageRoutes } from './no-page.router';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NoPageComponent],
  exports: [NoPageComponent],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NoPageModule { }
