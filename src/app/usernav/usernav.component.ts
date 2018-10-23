import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import { Observable } from 'rxjs';
import{Router} from '@angular/router';
@Component({
  selector: 'app-usernav',
  templateUrl: './usernav.component.html',
  styleUrls: ['./usernav.component.css']
})
export class UsernavComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;  
  userName:string=this.auth.getUserName();
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {
   this.isLoggedIn$ = this.auth.isLoggedIn;
   //this.userName=this.auth.getUserName();

  }
  onLogout(){
    this.auth.logout();     
    this.auth.destroyUserName();     
    this.router.navigateByUrl("home");            
  }

}
