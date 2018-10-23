import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ArticleService } from '../../service/article.service';
import {AuthService} from '../../service/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-full',
  templateUrl: './article-full.component.html',
  styleUrls: ['./article-full.component.css']
})
export class ArticleFullComponent implements OnInit {
  feed:any;
  comment:any;
  user:string;
  isLoggedIn$: Observable<boolean>;  
  isSubmiiting:boolean=false;
  isDataAvailable:boolean;
  constructor(private route:ActivatedRoute,private articleService:ArticleService,private auth :AuthService,private router:Router) { }

  ngOnInit() {
    const paramId: any = this.route.snapshot.params['slug'];
    console.log(paramId);
    this.getData(paramId);
    this.getCommentData(paramId);
    this.isLoggedIn$ = this.auth.isLoggedIn;
    this.user=this.auth.getUserName();
  }
  
  getData(slug:string){
  this.articleService.getRequestFor('article',slug).subscribe((data)=>{
    this.feed=data.article;
  });
}
getCommentData(slug:string){
  this.articleService.getRequestFor('articlecomment',slug).subscribe((data)=>{
    this.comment=data.comments;
    if(this.comment.length==0){
        this.comment=false;
    }
    this.isDataAvailable=true;
  });
}
submit(data:NgForm,body:any){
  const slug=this.route.snapshot.params['slug'];
 this.isSubmiiting=true;
  this.articleService.postRequest(data.value,slug).subscribe((dataFromServer)=>{
   this.getCommentData(slug);
   body.value="";
   this.isSubmiiting=false;
    })
}
authPageShow(value:string){
  this.router.navigateByUrl('/'+value);
}
deleteArticle(slug:string){
  ///api/articles/:slug
  this.articleService.delete("/articles/"+slug).subscribe((data)=>{
    this.router.navigateByUrl("myarticle");  
});
}
deleteComment(slug:string,id:string){
  // /api/articles/:slug/comments/:id
  this.articleService.delete("/articles/"+slug+"/comments/"+id).subscribe((data)=>{
    this.getCommentData(slug);
});
}
editArticle(slug:string){
    console.log(slug);
    this.router.navigateByUrl("newarticle"+"/"+slug);
}

}
