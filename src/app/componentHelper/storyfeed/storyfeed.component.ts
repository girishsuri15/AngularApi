import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-storyfeed',
  templateUrl: './storyfeed.component.html',
  styleUrls: ['./storyfeed.component.css']
})
export class StoryfeedComponent implements OnInit {
  @Input() feed: any;
  constructor() { }

  ngOnInit() {
  }

}
