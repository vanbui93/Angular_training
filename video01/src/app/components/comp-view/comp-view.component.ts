import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-view',
  templateUrl: './comp-view.component.html',
  styleUrls: ['./comp-view.component.css']
})
export class CompViewComponent implements OnInit {
  public name : string = 'Vân Vui Vẻ';
  public age : number = 20;
  public isMarried : boolean = false;
  public user = { 
    name: "Trần văn A",
    age: 22,
    isMarried: false
  }

  public imgLink: string = 'https://kenh14cdn.com/thumb_w/640/2020/3/15/facebook-avatar-copy-15842840740221065127091-crop-15842841007301305571389.jpg'
  public link: string = 'https://kenh14.vn/'
  public textLink: string = 'Go to kenh14.vn'

  constructor() { }

  ngOnInit(): void {
  }

  showInfo(){
    return `Tên: ${this.user.name}`;
  }

}
