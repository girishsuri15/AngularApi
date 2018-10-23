import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {ArticleService} from '../../service/article.service'
@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  @Output() tagData = new EventEmitter();
compData:any;
isDataAvailable:boolean
  constructor(private articleService :ArticleService) { }

  ngOnInit() {
    this.getTagData()
  }
  getTagData(){
    this.articleService.getRequestFor('getTags').subscribe((data)=>{
      this.compData=data.tags;
      console.log(data.tags);
      this.isDataAvailable=true;
    });
  }
  openTagArticle(tag:string){
    console.log(tag);
    this.articleService.getRequestFor('getTagsArticle',tag).subscribe((data)=>{
      this.tagData.emit({comp:data.articles,tagName:tag});
    });
  }
  
}
