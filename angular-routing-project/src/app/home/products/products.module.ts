import { ProductsRoutes } from './products.routes';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ProductsComponent],
  exports: [ProductsComponent],
  imports: [
    RouterModule.forChild(ProductsRoutes),
    CommonModule
  ]
})
export class ProductsModule { }
