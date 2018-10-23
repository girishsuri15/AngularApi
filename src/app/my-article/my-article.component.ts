import { Component, OnInit } from '@angular/core';
import {ArticleService } from '../service/article.service';
import { App_Prop } from '../app.properties';
import {AuthService} from '../service/auth.service';
@Component({
  selector: 'app-my-article',
  templateUrl: './my-article.component.html',
  styleUrls: ['./my-article.component.css']
})
export class MyArticleComponent implements OnInit {
  compData:Array<object>;
  compCount:number;
  constructor(private articleService:ArticleService,private auth:AuthService) { }

  ngOnInit() {
    this.showNextPage(0);
  }
  showNextPage(offset){
    let user=this.auth.getUserName();
    user=user.replace(' ','+'); 
    this.articleService.getRequest("/articles?author="+user+"&limit="+"5"+"&offset="+offset).subscribe((data)=>{
      this.compData=data.articles;
      this.compCount=data.articlesCount;
    });
  }
}
