import { Component, OnInit } from '@angular/core';
import {ArticleService } from '../service/article.service';
import {NgForm} from '@angular/forms'
import {Router,ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
 isSubmittingProcess:boolean=false;
 paramId:string;
  constructor(private articleService:ArticleService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.params.hasOwnProperty('slug')){
     this.paramId = this.route.snapshot.params['slug'];
  }
console.log(this.paramId);
  }
  submit(data:NgForm){
    if(this.paramId==="" || this.paramId===undefined){
        this.articleService.postRequest(data.value,'newArticle').subscribe((data)=>{
        this.router.navigateByUrl("home");
      });
    }
    else{
      this.articleService.putArticle('updateArticle',this.paramId,data.value).subscribe((data)=>{
        this.router.navigateByUrl("article/"+this.paramId);
      });
    }
  }
}
