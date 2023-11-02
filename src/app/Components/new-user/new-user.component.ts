import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { UserDataService } from 'src/app/Service/user-data.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {

  constructor(private _userDataService:UserDataService, private _router:Router){}

  hide:boolean = true;

  user!:any;
  username!:string;
  password!:string;


  create(){
    this._userDataService.registerUser(this.username, this.password);
    this._router.navigate(['login']);
    this.user = {};
  }
}
