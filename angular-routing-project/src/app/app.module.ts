import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { routes } from './app.router';
import { IndexModule } from './index/index.module';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    NoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    IndexModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
