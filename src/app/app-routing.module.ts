import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { NewUserComponent } from './Components/new-user/new-user.component';

const routes: Routes = [
  {path:'home', component: HomePageComponent},
  { path: 'login', component: LoginPageComponent },
  { path: 'newUser', component: NewUserComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
