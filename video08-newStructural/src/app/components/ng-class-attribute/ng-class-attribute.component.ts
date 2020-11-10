import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-attribute',
  templateUrl: './ng-class-attribute.component.html',
  styleUrls: ['./ng-class-attribute.component.css']
})
export class NgClassAttributeComponent implements OnInit {
  public isSpecial : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  onToggleClass() {
    this.isSpecial=!this.isSpecial;
  }

  setClasses(){
    return {
      'bg-purple' : this.isSpecial,
      'pd-10': this.isSpecial,
      'cl-white': this.isSpecial
    }
  }

}
