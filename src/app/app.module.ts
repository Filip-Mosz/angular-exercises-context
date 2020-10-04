import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { FirstDirectiveDirective } from './first-directive.directive';
import { SetBackgroudDirectiveDirective } from './set-backgroud-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    FirstDirectiveDirective,
    SetBackgroudDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
