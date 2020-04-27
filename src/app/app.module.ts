import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from '@modules/todo/todo.component';
import { SignInComponent } from '@modules/sign-in/sign-in.component';
import { SignUpComponent } from '@modules/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
