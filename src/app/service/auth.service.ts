import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { App_Prop } from '../app.properties';
import { Observable } from 'rxjs';
import { JwtService } from '../service/jwt.service';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.tokenAvailable());
  get isLoggedIn() {
    return this.loggedIn.asObservable(); 
  }
  tokenAvailable():boolean{
    if(this.jwt.getToken() !==null && this.jwt.getToken()!==undefined)
    return true;
    else return false;
  }
  constructor(private http: HttpClient,private jwt: JwtService) { }

/*auth request for new user*/
  postNewUserRequest(dataParam:any){
    let obser: Observable<any>;
    let body:any={user:dataParam};
    const httpcontent = {
       headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
    };
    if(dataParam.username) {
      obser = this.http.post(App_Prop.url_signUp,body,httpcontent);
    }
    else{
      obser = this.http.post(App_Prop.url_login,body,httpcontent); 
    }
    return obser;
  }

  /*function for making loggedIn varibale set*/
 login(token:string){
    this.jwt.saveToken(token);
    this.loggedIn.next(true);
 }
 logout() {    
   this.jwt.destroyToken();                        
 this.loggedIn.next(false);
 }

 getUserName(){
  return window.localStorage["userName"];
}
setUserName(name:string){
  window.localStorage["userName"]=name;
}
destroyUserName(){
  window.localStorage.removeItem("userName");
}

makeCurrentUserRequest() {
      const httpOptions = {
                          headers: new HttpHeaders({
                          Authorization: "Token" + " " + this.jwt.getToken()  
      })
    };
return this.http.get(App_Prop.url_currentUser, httpOptions);
} 
 
}