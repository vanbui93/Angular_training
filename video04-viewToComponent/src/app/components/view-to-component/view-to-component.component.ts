import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view-to-component',
  templateUrl: './view-to-component.component.html',
  styleUrls: ['./view-to-component.component.css']
})
export class ViewToComponentComponent implements OnInit {
  public title: string = "Event binding";
  constructor() { }

  ngOnInit(): void {
  }
  
  onClickMe(e){
    console.log("hello",e.target.innerText);
  }

}
