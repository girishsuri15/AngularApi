import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { App_Prop } from '../app.properties';
import { Observable } from 'rxjs';
import { JwtService } from '../service/jwt.service';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http: HttpClient,private jwt:JwtService) { }
  //
  getRequest(resource:string,parameter?:string):Observable<any>{
    //send the get request with the para as the different paramters.
    //let obser: object;
    let obser: Observable<any>;
    if(parameter) {
      obser = this.http.get(App_Prop.app_url+resource+parameter);
    }
    else
      obser = this.http.get(App_Prop.app_url+resource);
    return obser;
  }
  postRequest(dataParam:any,resource:string):Observable<any>{
    let obser: Observable<any>;
    let body:any={article:dataParam};
    console.log(body);
    const httpcontent = {
       headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': "Token "+this.jwt.getToken()
        })
    };
    if(resource==='newArticle'){
            obser = this.http.post(App_Prop.url_newarticle,body,httpcontent);
    }
    else {
      body={comment:dataParam};
      obser = this.http.post(App_Prop.url_newarticle+"/"+resource+"/comments",body,httpcontent);
    }
    return obser;
  }
  getRequestFor(resource:string,parameter?:string):Observable<any>{
    let obser: Observable<any>;
    if(resource==='article') {
      obser = this.http.get(App_Prop.url_newarticle+'/'+parameter);
    }
    else if(resource==='articlecomment')
      obser = this.http.get(App_Prop.url_newarticle+'/'+parameter+"/comments");
      
    return obser;
  }
  delete(parameter:string):Observable<any>{
    let obser: Observable<any>;
    const httpcontent = {
      headers: new HttpHeaders({
       'Content-Type':  'application/json',
       'Authorization': "Token "+this.jwt.getToken()
       })
   };
    obser= this.http.delete(App_Prop.app_url+parameter,httpcontent);
    return obser; 
  }
  putArticle(resource:string,keys:any,dataParam:any):Observable<any>{
    let obser: Observable<any>;
    let body:any={article:dataParam};
    const httpOptions = {
        headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Token" + " " + this.jwt.getToken()
        })
    };
    if(resource==='updateArticle')
      {
        obser =this.http.put(App_Prop.url_newarticle+'/'+keys,body,httpOptions);
       }
    return obser;
  }
}
