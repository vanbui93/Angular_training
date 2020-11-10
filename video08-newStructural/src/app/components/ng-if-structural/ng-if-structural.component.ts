import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-structural',
  templateUrl: './ng-if-structural.component.html',
  styleUrls: ['./ng-if-structural.component.css']
})
export class NgIfStructuralComponent implements OnInit {
  public isShow : boolean = false;
  public username : string = 'Vân Vui Vẻ';
  public isChecked : boolean = false;
  public age : number
  constructor() { }

  ngOnInit(): void {
  }

  onToggle(){
    this.isShow = !this.isShow;
  }

  onChange(value) {
    this.isChecked=value
  }

}
