import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

@Input() resAdd:number=0;

  constructor() { }

  ngOnInit(): void {
  }
  

}
