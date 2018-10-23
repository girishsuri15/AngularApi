import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms'
import {AuthService} from '../service/auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  title:string;
  authType:string;
  isSubmittingProcess:boolean=false;
  userInputError:boolean=false;
  isUserExist:boolean=false;
  constructor(private route: ActivatedRoute,
    private authService:AuthService,
    private router:Router) { 
  }

  ngOnInit() {
    this.route.url.subscribe(data => {
      this.authType = data[data.length - 1].path;
    this.title = (this.authType === 'login') ? 'logIn' : 'Signup';
  })
  }
  
  submit(data:NgForm){
    this.userInputError=false;
    this.isSubmittingProcess=true;
    let isValidated:boolean=this.validation(data.value);
     if(isValidated)
     {
      this.isUserExist=false;
        this.authService.postNewUserRequest(data.value).subscribe((data)=>{
          this.authService.login(data.user.token);
          this.authService.setUserName(data.user.username);
          this.router.navigateByUrl("home");
          },
          error=>{
            if(error.status===422){
              this.isUserExist=true;
            }
          });
      }
    else
    {
        this.userInputError=true;
    }
    this.isSubmittingProcess=false;
  }
    
  validation(validData:any):boolean{
    var valid:boolean=false;

    if(this.authType != 'login') 
    {
      if(validData.username.length>4)
        {
          valid=true;
        }
    }
    if(validData.email.indexOf(".com")>-1 && (validData.password.length>8))
      {
         valid=true;
      }
   else
    {
      valid=false;
    }
    return valid;
  }
}
