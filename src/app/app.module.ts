import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { FirstDirectiveDirective } from './first-directive.directive';
import { SetBackgroudDirectiveDirective } from './set-backgroud-directive.directive';
import { ModuloPipe } from './modulo.pipe';
import { ToUppercasePipe } from './to-uppercase.pipe';
import { CountriesComponent } from './countries/countries.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    FirstDirectiveDirective,
    SetBackgroudDirectiveDirective,
    ModuloPipe,
    ToUppercasePipe,
    CountriesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
