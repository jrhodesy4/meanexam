import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NewQComponent } from './new-q/new-q.component';
import { NewAComponent } from './new-a/new-a.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'newQ', component: NewQComponent },
    { path: 'answers/:id', component: NewAComponent },
    { path: 'questions/:id', component: ShowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
