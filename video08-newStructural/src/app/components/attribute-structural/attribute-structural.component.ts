import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-structural',
  templateUrl: './attribute-structural.component.html',
  styleUrls: ['./attribute-structural.component.css']
})
export class AttributeStructuralComponent implements OnInit {
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
