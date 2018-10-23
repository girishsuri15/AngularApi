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
  constructor(private articleService:ArticleService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
   // const paramId: any = this.route.snapshot.params['slug'];
  }
  submit(data:NgForm){
    this.articleService.postRequest(data.value,'newArticle').subscribe((data)=>{
     console.log(data);
     this.router.navigateByUrl("home");
    });
  }
}
