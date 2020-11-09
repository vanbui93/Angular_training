import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view-to-component',
  templateUrl: './view-to-component.component.html',
  styleUrls: ['./view-to-component.component.css']
})
export class ViewToComponentComponent implements OnInit {
  public title: string = "Event binding";
  public count: number = 0;
  public username: string='';
  constructor() { }

  ngOnInit(): void {
  }
  
  onClickMe(e){
    console.log("hello",e.target.innerText);
  }

  onDbClickMe(e){
    console.log(e.target.innerText);
  }

  onIncrease(){
    this.count ++
  }

  onKeyUp(e){
    console.log(e.target.value);
    this.username = e.target.value;
  }

}
