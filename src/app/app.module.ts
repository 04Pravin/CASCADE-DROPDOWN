import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './Modules/materials/materials.module';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { NewUserComponent } from './Components/new-user/new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    NavBarComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
