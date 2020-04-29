import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    //AppComponent,
    LoginComponent,
    SuccessComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }
