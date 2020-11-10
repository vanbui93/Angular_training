import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-swich-case-structural',
  templateUrl: './ng-swich-case-structural.component.html',
  styleUrls: ['./ng-swich-case-structural.component.css']
})
export class NgSwichCaseStructuralComponent implements OnInit {
  public usersList : any[] =[
    {
      name: "Vân Bùi",
      country: 'VN'
    },
    {
      name: "John Smith",
      country: 'UK'
    },
    {
      name: "Maria",
      country: 'Australia'
    },
    {
      name: "Donan Trump",
      country: 'USA'
    },
    {
      name: "Chi Pheo",
      country: 'CHINA'
    }
  ]
  constructor() { }

  ngOnInit(): void {

  }

}
