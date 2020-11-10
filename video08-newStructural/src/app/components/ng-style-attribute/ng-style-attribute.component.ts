import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-attribute',
  templateUrl: './ng-style-attribute.component.html',
  styleUrls: ['./ng-style-attribute.component.css']
})
export class NgStyleAttributeComponent implements OnInit {
  public isSpecial : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  changeColor(){
    this.isSpecial=!this.isSpecial
  }

  setStyle(){
    return {
      'color': this.isSpecial ? 'red' : '',
      'border': this.isSpecial ? '2px solid blue' : '',
      'padding.px' : this.isSpecial ? '10':''
    }
  }

}
