import { SettingsRoutes } from './settings.routes';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SettingsComponent],
  exports: [SettingsComponent],
  imports: [
    RouterModule.forChild(SettingsRoutes),
    CommonModule
  ]
})
export class SettingsModule { }
