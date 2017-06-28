import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuestionService } from './question.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NewQComponent } from './new-q/new-q.component';
import { NewAComponent } from './new-a/new-a.component';
import { ShowComponent } from './show/show.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NewQComponent,
    NewAComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
