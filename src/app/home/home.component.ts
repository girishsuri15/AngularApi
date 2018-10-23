import { Component, OnInit } from '@angular/core';
import {ArticleService } from '../service/article.service';
import { App_Prop } from '../app.properties';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  compData:Array<object>;
  compCount:number;
  isDataAvailable:boolean;
  constructor(private articleService:ArticleService) { }

  ngOnInit() {
    this.showNextPage(0);
  }
  showNextPage(offset){
    this.articleService.getRequest("/articles?limit="+App_Prop.StoryPerPage+"&offset="+offset).subscribe((data)=>{
      this.compData=data.articles;
      this.compCount=data.articlesCount;
      this.isDataAvailable=true;
    });
  }

}
