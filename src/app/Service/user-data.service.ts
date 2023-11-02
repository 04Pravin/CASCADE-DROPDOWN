import { Injectable } from '@angular/core';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  private userData: any[] = [];

  setUserData(userData: any[]) {
    this.userData = userData;
  }

  getUserData() {
    return this.userData;
  }

  registerUser(username:string, password:string){
    const user = {username, password};
    this.userData.push(user);
  }
}
