import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from '@modules/todo/todo.component';
import { SignInComponent } from '@modules/sign-in/sign-in.component';
import { SignUpModule } from '@modules/sign-up/sign-up.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SignUpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
