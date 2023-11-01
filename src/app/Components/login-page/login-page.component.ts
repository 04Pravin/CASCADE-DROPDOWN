import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  
  hide = true;

  users = [
    {
      username:'Pravin',
      password:'123'
    },
    {
      username:'Dinesh',
      password:'abc'
    }
  ];

  constructor(private _router:Router, private _snackBar: MatSnackBar){}

  enteredUsername: any;
  enteredPassword!: string;
  loginError = false;
  userName!:string;

  login() {
    const user = this.users.find(u => u.username === this.enteredUsername);
    if (user && user.password === this.enteredPassword) {
      this.userName = this.enteredUsername;
      this._router.navigate(['/home']);
      this._snackBar.open('Login successful!', 'Close', {duration: 2000});
    } else {
      this.loginError = true;
    }
  }

}
