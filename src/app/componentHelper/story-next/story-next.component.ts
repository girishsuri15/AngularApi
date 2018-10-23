import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { App_Prop } from '../../app.properties';
@Component({
  selector: 'app-story-next',
  templateUrl: './story-next.component.html',
  styleUrls: ['./story-next.component.css']
})
export class StoryNextComponent implements OnInit {
@Input() TotalArticles: number;
@Output() PageNumber = new EventEmitter();
limit:number;
currentPage:number=1;
totalPages:Array<number>;
  constructor() { }
  ngOnInit() {
    this.limit=App_Prop.StoryPerPage;
    this.totalPages= Array.from(new Array(Math.ceil(+this.TotalArticles / this.limit)), (val, index) => index + 1);
  }
  setPageTo(pageNumber){
    this.currentPage=pageNumber;
    this.PageNumber.emit(this.currentPage);
  }

}
