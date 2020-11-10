import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-combine-ng-if',
  templateUrl: './ng-for-combine-ng-if.component.html',
  styleUrls: ['./ng-for-combine-ng-if.component.css']
})
export class NgForCombineNgIfComponent implements OnInit {
  public names : string[] = ["TpHCM", "Hà Nội", "Đà Nẵng", "Hải Phòng"];
  public products : any[] = []

  public productsFromServe : any[] = [
    {
      id: 1,
      name: "Iphone 11 plus",
      price: 1500000
    },
    {
      id: 2,
      name: "Iphone XS Max",
      price: 3200000
    },
    {
      id: 3,
      name: "Samsung note 10",
      price: 2100000
    },
    {
      id: 4,
      name: "Oppo Camera seo phì",
      price: 1100000
    },
    {
      id: 5,
      name: "Samsung S10",
      price: 1600000
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onLoadData(){
    this.products = this.productsFromServe;
  }
  myTrachById(item,index) {
    return item
  }

}
