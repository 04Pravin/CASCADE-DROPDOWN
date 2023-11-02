import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  userName!:string;

  constructor(private _activeRoute:ActivatedRoute, private _router:Router){}
  ngOnInit(): void {
    
  }

  logOut(){
    this._router.navigate(['login']);
  }

}
