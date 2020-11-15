## Table of Contents
- [Cài đặt môi trường](#cài-đặt-môi-trường)
- [Binding - data](#binding---data)
- [Style - binding](#style---binding)
- [Truyền sự kiện từ view sang component thông qua event binding](#truyền-sự-kiện-từ-view-sang-component-thông-qua-event-binding)
- [Event Binding - Handle Click form](#event-binding---handle-click-form)
- [Two way binding - binding 2 chiều](#two-way-binding---binding-2-chiều)
- [Build-in Directives](#build-in-directives)
- [Structural directives](#structural-directives)
- [ngIF -> else ?](#ngif---else-)
- [ngFor](#ngfor)
- [ngSwichCase](#ngswichcase)
- [Attribute directives](#attribute-directives)
- [ngClass](#ngclass)
- [ngStyle](#ngstyle)
- [Input](#input)
- [OutPut](#output)
- [Pipe - biến đổi dữ liệu trước khi hiển thị cho user](#pipe---biến-đổi-dữ-liệu-trước-khi-hiển-thị-cho-user)
- [Pipe - Tự xây dựng pipe](#pipe---tự-xây-dựng-pipe)
- [Custom Pipe
](#custom-pipe)
- [Filter pipe](#filter-pipe)
- [Sort Pipe](#sort-pipe)
- [Thư viện lodash](#thư-viện-lodash)
- [Template Reference Variables - @ViewChild](#template-reference-variables---viewchild)
- [Lifecycle hook](#lifecycle-hook)
- [ngOnInit,ngOnDestroy](#ngoninitngondestroy)
- [ngOnChange, ngDoCheck](#ngonchange-ngdocheck)
- [ngContent](#ngcontent)
- [ngAfterContentInit](#ngaftercontentinit)
- [ContentChild](#contentchild)
- [ngAfterContentChecked](#ngaftercontentchecked)
- []()


## Cài đặt môi trường
- cài đặt `nodejs`
- cài đặt typescript
```sh
npm install -g typescript
```
- cài đặt angular
```sh
npm install -g @angular/cli
```
- Tạo mới project
```sh
ng new my-app
```
- Mở ứng dụng
```sh
ng serve --o
```
- Tạo mới component 
```sh
ng g c my-component
```

## Binding - data
- **Interpolation** `{{value}}`<br>
Hiển thị 1 string, number, toán tử 3 ngôi, 1 genter, 1 nullable,
- **Property** [property-name] = "value" hoặc có thể viết theo cách `bind-src = "value"`
ví dụ src, href, vallue, disable, hidden <br>
vd `src`: 
```js
<img [src]="imgLink" alt="'Hình kênh 14'" [width]="imgWidth">
```
vd `disabled`
```js
<button 
    type="button"
    class="btn btn-primary"
    [disabled]="isValid">
    Đăng nhập
</button>
```
- **Attribute binding**
`[attr.attribute-name] = "value"` <br>
ví dụ `[attr.width] = "tbWidth"`

- **Binding Class**
Cú pháp [class.class_name]="value"<br>
>note: chỉ sử dụng cho 1 class

```js
<span class="badge" 
    [class.badge-danger] = "isCheck===1"
    [class.badge-success] = "isCheck !==1"
>Label
</span>
```

## Style - binding
Cú pháp `[style.style_name] = "value"`<br>
>note: chỉ áp dụng cho 1 style
ví dụ
```js
<div [style.background-color]="isSpeacial ? 'red' : 'cyan'"
    [style.color]="'white'"
    [style.font-size.px] = "size">
    Lập trình angular Style binding
</div>
```

## Truyền sự kiện từ view sang component thông qua event binding
Cú pháp `(click)="onClickMe()`
```js
<button type="button" class="btn btn-primary" (click)="onClickMe()">Click Me !</button>

onClickMe(){
    alert("hello");
}
```

## Event Binding - Handle Click form
cú pháp `(keyup)="handleKeyUp($event)`

```js
<input type="text" class="form-control" (keyup)="onKeyUp($event)">

onKeyUp(e){
console.log(e.target.value);
}
```

## Two way binding - binding 2 chiều
View -> Component -> View
- Cú pháp `[(ngModel)]="name"`
```js
//file ts
public name:string='';

//file html
 <input type="text" class="form-control" [(ngModel)]="name"/>
 ```
 - Nếu đưa vào trong thẻ `<form>` cần phải có thêm `[ngModelOptions]="{standalone: true}"`
```js
<form action="">
  <div class="form-group">
    <label>Họ tên: {{name}} </label>
    <input type="text" 
      class="form-control" 
      [(ngModel)]="name"
      [ngModelOptions]="{standalone: true}"/>
  </div>
</form>
```

## Build-in Directives
- Là một thành phần mở rộng HTML, hay nói cách khác là các thuộc tính property mà **Angular** định nghĩa thêm, vì nó là của angular nên phải tuân thủ nguyên tắc
### Structural directives

#### ngIF -> else ?
Cú pháp `*ngIf="expression"`
Ví dụ 
```js
//.html
<div class="form-check form-check-inline">
    <label class="form-check-label mr-2">
        <input class="form-check-input" type="radio" name="rdCheck" (click)="onChange(true)">Hợp lệ
    </label>
    <label class="form-check-label">
        <input class="form-check-input" type="radio" name="rdCheck" (click)="onChange(false)">Không hợp lệ
    </label>
</div>

<h3 *ngIf="isChecked; else elseKhongHopLe">Hợp Lệ</h3>
<ng-template #elseKhongHopLe>
    <h3>Không hợp Lệ</h3>
</ng-template>

//.ts
public isChecked : boolean = false;

onChange(value) {
    this.isChecked=value
}
```

#### Lưu ý sử dụng form 
Cần import thư viện form module vào `app.module.ts`
```js
import { FormsModule } from '@angular/forms'

imports: [
    //...
    FormsModule,
],
```
ví dụ tiếp theo, đưa `ngIf` vào thẻ `<ng-container>`
```js
<div class="form-group">
  <label>Tuổi: </label>
  <input type="text" name="" class="form-control" [(ngModel)]="age" >
</div>

<ng-container *ngIf="age > 18; else elseAge">
    <h3>Đủ tuổi</h3>  
</ng-container>
<ng-template #elseAge>
    <h3>Chưa đủ tuổi</h3>
</ng-template>
```

#### ngFor

- Cú pháp `*ngFor="let item of list"`
```js
<ul class="list-group">
    <li class="list-group-item" *ngFor="let item of names">
        {{item}}
    </li>
</ul>
```
**Các biến cục bộ của ngFor:**
- index: chỉ số hiện tại
- first: trả về true nếu là phần tử đầu tiên
- last: trả về true nếu là phần tử cuối
- even: trả về true nếu là phần tử chẵn
- odd: trả về true nếu là phần tử lẻ
- trackBy: Dữ liệu đầu vào (item,index) => return về thuộc tính duy nhất (vd id, isbn, mã,vv)<br>

Ví dụ về các biến cục bộ, đổ màu cho dòng chẳn, lẻ, đầu, cuối của 1 table
`trackBy: myTrachById` chỉ load lại dữ liệu khác dựa trên id
```js
<tbody>
    <tr 
        *ngFor="let item of products; 
        let i = index 
        let f = first 
        let l = last
        let e = even
        let o = odd
        trackBy: myTrachById"

        [style.background-color]="
        f===true ?'gray':
        l ===true ? 'cyan':
        e===true ?'blue':'yellow'"
        
    >
        <td scope="row">{{i + 1}}</td>
        <td>{{item.name}}</td>
        <td>{{item.price}} VNĐ</td>
    </tr>
</tbody>
<button type="button" class="btn btn-primary" (click)="onLoadData()">Lấy dữ liệu</button>

//
myTrachById(item,index) {
return item
}
onLoadData(){
    this.products = this.productsFromServe;
}

```
#### ngSwichCase
- Dùng để thay thế cho việc *ngIf lặp lại nhiều lần
- các biến cần quan tâm: [ngSwich], *ngSwichCase, *ngSwichDefault

```js
<li class="list-group-item" 
    *ngFor="let user of usersList"
    [ngSwitch]="user.country"
>
    <span *ngSwitchCase="'VN'" class="text-danger">
        {{user.name}} - {{user.country}}
    </span>
    <span *ngSwitchCase="'USA'" class="text-primary">
        {{user.name}} - {{user.country}}
    </span>
    <span *ngSwitchDefault class="text-warning">
        {{user.name}} - {{user.country}}
    </span>
</li>
```
### Attribute directives

#### ngClass
- Dùng để thêm hoặc xóa nhiều CSS class cùng 1 lúc => ngClass
- Viết trực tiếp trong Template hoặc Class Typescript
- Cú pháp, có nhiều cách viết:
[ngClass]=[]<br>
<some-element [ngClass]="'first second'">...</some-element><br>
<some-element [ngClass]="['first', 'second']">...</some-element><br>
<some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element><br>
<some-element [ngClass]="stringExp|arrayExp|objExp">...</some-element><br>
<some-element [ngClass]="{'class1 class2 class3' : true}">...</some-element>
- Ví dụ `ngClass` Thay đổi class dựa trên điều kiện
```js
public isSpecial : boolean = true;

<p
    [ngClass]="{
        'bg-green' : isSpecial,
        'pd-10': isSpecial
    }"
>
```
- Sử dụng ngClass trong function typeScript

```js
<p
    [ngClass]="setClasses()"
>
    Thêm class bằng function() trong TypeScript
</p>

setClasses(){
    return {
      'bg-purple' : this.isSpecial,
      'pd-10': this.isSpecial,
      'cl-white': this.isSpecial
    }
}
```
#### ngStyle
- Sử dụng tương tự ngClass
```js
<p
    [ngStyle]="{
        'color': isSpecial ? 'red' : '',
        'border': isSpecial ? '2px solid blue' : '',
        'padding.px' : isSpecial ? '10':''
    }"
    (click)="changeColor()"
>
    click me để đổi màu
</p>

//
public isSpecial : boolean = true;
changeColor(){
    this.isSpecial=!this.isSpecial
}
```
## Từ đây bắt đầu training trên stackblitz
https://stackblitz.com/

## Input
Link demo: https://bitly.com.vn/bhcj2y

- Sử dụng để truyền dữ liệu từ component cha vào component con
- Cần import vào trước khi sử dụng `import { Input } from '@angular/core';`
- Cú pháp [bien-truyen-di]="function"
- Xem ví dụ dưới như mối quan hệ giữa component cha và component con
```js
<parent-component>
  <child-component [item]="currentItem"></child-component>
</parent-component>
```

##### Componet con - child component
Link demo: https://bitly.com.vn/bhcj2y

- Trong componet con `item-detail.component.ts`
```js
import { Component, Input } from '@angular/core'; // Đầu tiên, import Input
export class ItemDetailComponent {
  @Input() item: string; // Khai báo thuộc tính @Input()
}
```
- Trong componet con `item-detail.component.html`
```js
<p>
  Today's item: {{item}}
</p>
```
##### Componet cha - parent component
- Trong component cha `app.component.html`
```js
<app-item-detail [item]="currentItem"></app-item-detail>
```
- Trong component cha `app.component.ts`
```js
export class AppComponent {
  currentItem = 'Television';
}
```

## OutPut
- Sử dụng để : truyền dữ liệu từ component con ra ngoài component cha
- Cần import `Output`, `EventEmmitter` trước khi sử dụng `import { Output, EventEmitter } from '@angular/core';`
- Cú pháp: `() = ""`
- Xem ví dụ dưới như mối quan hệ giữa component cha và component con
```js
<parent-component>
  <child-component (newItemEvent)="addItem($event)"></child-component>
</parent-component>
```
##### Trong component con - child component
- Trong component con `item-output.component.ts`
```js
import { Output, EventEmitter } from '@angular/core';

export class ItemOutputComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
```

- Trong component con `item-output.component.html`
```js
<label>Add an item: <input #newItem></label>
<button (click)="addNewItem(newItem.value)">Add to parent's list</button>
```

##### Trong component cha - parent component
- Trong component cha `app.component.ts`

```js
export class AppComponent {
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
```
- Trong component cha `app.component.html`

```js
<app-item-output (newItemEvent)="addItem($event)"></app-item-output>

<ul>
  <li *ngFor="let item of items">{{item}}</li>
</ul>
```

## Pipe - biến đổi dữ liệu trước khi hiển thị cho user
link demo: https://bitly.com.vn/nok406
- Dùng để: biến đổi dữ liệu trước khi hiển thị cho người dùng
- Nhận vào 1 giá trị và trả ra ngoài 1 giá trị khác
- Cần import module `@angular/common`
- Cách sử dụng có sẳn của angular: 
In hoa `uppercase`, thường `lowercase`, viết hoa chữ đầu `titlecase`, cắt kí tự `slice`<br>
Xử lý số thực `decimal`, phần trăm `percent`<br>
Xử lý ngày tháng `date`<br>
Hiển thị dữ liệu dạng Object, Json `Json`<br>
Kết hợp các Pipe<br>
Có thể tự định nghĩa 1 pipe (custom pipe)
>Note: Decimal `{{amout| number : '1.0-3' }}`<br>`số | number : '1.0-3'` //min.min-max<br>
            //1 : phần nguyên, nếu thiếu tự thêm số 0<br>
            //0 : phần thập phân, nếu thiếu tự thêm số 0<br>
            //3 : số thập phân tối đa
>Note: Percent : số | percent : '1.0-3' //tự * 100 và thêm dấu %<br>

Xem thêm về các pipe https://angular.io/api/common#pipes

## Pipe - Tự xây dựng pipe
```sh
ng g pipe format-name
```
- Ví dụ sau đây dùng để cắt 1 chuỗi sau đó thêm dấu '...'<br>
demo link https://bom.to/YjC1IQs

```js
<td>{{content | formatDataPipe : 0: 40}}</td>

transform(value: any, start?: any, end?: any): any {
    return value.substr(start, end) + "..."; //substr -> dùng cắt chuỗi, từ vị trí start đến vị trí end
}

//content: Netflix cho biết ủng hộ việc triển khai những cơ chế cần thiết để các doanh nghiệp
//result: Netflix cho biết ủng hộ việc triển khai ...
```

## Custom Pipe
- Tự xây dựng 1 custom pipe theo riêng mình.

#### Filter pipe
Xem demo: https://bitly.com.vn/25kztm

#### Sort Pipe
Xem demo: https://bitly.com.vn/3uc44t

## Thư viện lodash
lodash là thư viện của javascript https://lodash.com/
- Import lodash ở file muốn dùng `import "lodash"`
- khai báo `declare var_;`
- Sử dụng thông qua: `_.ten_ham()`
- link demo https://bitly.com.vn/lyeb05

## Template Reference Variables - @ViewChild
- link demo: https://bitly.com.vn/usggho
- Một Template Reference Variables là một tham chiếu đến một phần tử DOM hoặc directive trong template.<br>
Sử dụng biến tham chiếu , ta có thể truy cập vào các giá trị  thuộc tính phần tử DOM
- Để thao tác với Template Variables có 2 cách : <br>
**Tại Template**: `#name` hoặc `ref-name`<br>
**Tại Component** : `@ViewChild("name1")name2:ElemementRef`

- Ví dụ cách 1
```js
//.html
<input type="text" class="form-control mb-2" #txtName>
<button class="btn btn-danger" (click)="handleGetData(txtName.value)">Lấy dữ liệu</button>

//.ts
handleGetData(txtName) {
    console.log(txtName);
}

```

- Ví dụ cách 2 - @ViewChild
```js
//.html
<input type="text" class="form-control mb-2" #txtName>
<button class="btn btn-danger" (click)="onGetDataView()">Lấy dữ liệu</button>

//.ts
@ViewChild("txtName") name: ElementRef;
  onGetDataView() {
    console.log(this.name.nativeElement.value);
  }
```

## Lifecycle hook
Link demo: https://bom.to/PJJXCJd
- Là các phương thức của Directive và Component như việc tạo ra, thay đổi, hủy
- Mỗi hook sẽ thuộc về 1 interface. Ex: ngOnInit thuộc OnInit<br><br>

![alt text](https://v2.angular.io/resources/images/devguide/lifecycle-hooks/hooks-in-sequence.png)
<br>

#### **ngOnInit**,**ngOnDestroy**
```sh
-  Contructor: Gọi trước tất cả Lifecycle hook, thường dùng để tiêm các Dependency Injection như các Service.
Chú ý: đây không phải là 1 hook method

- ngOnInit:
    - Thời gian: 
        - Khởi tạo directive/component sau khi hiển thị lần đầu và set các thuộc tính đầu vào của directive/component
        - Chỉ gọi 1 lần duy nhất, sau khi hook ngOnChange() được gọi lần đầu tiên
    - Dùng để khởi tạo giá trị

- ngOnDestroy: 
    - Được gọi khi component bị hủy, dùng để hủy các kết nối, giải phóng bộ nhớ
    - Vd: component kết nối api, database, route -> nên hủy để giải phóng bộ nhớ
```
#### ngOnChange, ngDoCheck
```sh
- ngOnChange: được thực hiện khi **Input** có sự thay đổi, được quản lý thông qua đối tượng **SimpleChange**, được gọi trước cả **ngOninit**
    - Cho ta 1 đổi tượng kiểu SimpleChange
    - SimpleChange: thuộc về @angular/core
    - Dùng để xử lý khi @input có sự thay đổi
        - currenValue: giá trị hiện tại
        - previosValue: giá trị trước đó
        - isFirstChange(): thay đổi lần đầu tiên ? True, False

- ngDoCheck: được gọi sau ngOnChange và ngOnInit, cứ mỗi lần gọi ngOnChange sẽ được gọi
```

#### ngContent
link demo https://bom.to/0UtyXxh
- Truyền **html** từ component cha sang component con, giống như thuộc tính {props.children} ở reactJS
- Component con sẽ thừa kế từ component cha, sử dụng thẻ `<ng-content></ng-content>`
- Dùng `<ng-content select=".ten-class"></ng-content>` //để lấy 1 phần tử nào đó
```sh
    .class
    #id
    ten-tag     //ex: h1,span
    [ten-attribute]      //ex: <span myAttribute></span>
    [ten-attribute=value]
    [attribute1][attribute2]
```

```js
//component cha = app.component.html
<app-ng-content>
    Đây là nội dung sẽ hiển thị trong thẻ ng-content
</app-ng-content>

//component con = ng-content.component.html
<ng-content></ng-content>
```
#### ngAfterContentInit
- Mỗi lần **component** con được gọi, nó sẽ chạy
- Sử dụng `ng-content` để kiểm tra - Sử dụng `@ContentChild` (Kiểu ElementRef) - Template Reference Variable
- **Chỉ được gọi 1 lần duy nhất** khi component con được render
- Chỉ dành cho component

##### ContentChild
- Sử dụng giống ViewChild, tuy nhiên dùng để **reference** lấy giá trị từ component cha
- ví dụ link demo https://bom.to/0UtyXxh
```js
//component cha
//ng-content.component.html
<parent-component>
  <child-component>
    <h3  #contentValue>Nội dung: {{value}}</h3>
  </child-component>
</parent-component>
//ng-content.component.ts
public value : string = 'ABC'


//component con
@ContentChild("contentValue") contentValue: ElementRef;

ngAfterContentInit() {
    console.log(this.contentValue);
  }
```

#### ngAfterContentChecked
- Được gọi nhiều lần, mỗi khi có **update giá trị** trong ng-content>
- Chỉ dành cho component

- Ví dụ dưới mỗi lần click vào `onClick()`,  giá trị `{{content}}` được update <br>
**ngAfterContentChecked** được gọi

```js
//app.component.html
<app-ng-content>
 <h2 #contentValue>ContentChild: {{content}}</h2>
</app-ng-content>

//app.component.ts
public content: string = "ABC";
<input type="text" class="form-control" #textInput />
<button class="btn btn-danger" (click)="onClick(textInput.value)">Click me !</button>

onClick(value) {
    this.content = value;
  }
```

#### ngAfterView
Được gọi mỗi khi **View có sự thay đổi**<br>
- Chính là phần view hiện tại
- Xử lý **Template** + **Template Reference Variables**
- Sử dụng `@Viewchild`
- Chú ý khi dùng template ref (#tên-biến) cũng sử dụng ViewChild<br>
vd: `<my-component #abc>`

Link demo: https://bom.to/TtGwYYu

#### ngAfterViewChecked
- Được gọi nhiều lần
- Chỉ dành cho component
Link demo: https://bom.to/TtGwYYu

## Servive - Là một ứng dụng của DI
- Dependency Injection: là một design pattern quan trọng để xây dựng ứng dụng<br>
Angular sở hữu DI, **Giảm sự phụ thuộc giữa các lớp với nhau**<br>
- Giảm thiểu việc lặp code
- Angular tích hợp sẳn DI<br>
- Cách sử dụng service: 
```sh
- Khai báo kèm theo @Injectable
- Khai báo provider trong module hoặc provider trong component (nếu chỉ xài riêng cho component đó)
- Inject vào constructor để sử dụng mà không cần khởi tạo đối tượng.
```
- Cú pháp tạo
```sh
ng g service my-new-service
```

Link demo: https://bom.to/zfA3IuA

```js
//first.component.html
<button class="btn btn-danger" (click)="handleClick()">Click me !</button>

//first.component.ts
import { LogginServiceService } from "./../services/loggin-service.service";

export class FirstComponent implements OnInit {
  constructor(private _LogginServiceService: LogginServiceService) {}

  handleClick() {
    this._LogginServiceService.loggin();
  }
}


//loggin-service.service
import { Injectable } from "@angular/core";

@Injectable()
export class LogginServiceService {
  constructor() {}

  loggin(): void {
    console.log("hello");
  }

}

```

- Link demo bài tập thực tế: https://bom.to/BrREqqI


## Route (Routing)

Link demo https://bom.to/2JjHYee

- Thực hiện chuyển trang, thay đổi component mà không cần load lại<br>
- Trong nav cần gắn `[routerLink]="['/']` thay cho href
- Cần tạo 1 mãng các routes
- import vào trong app.module `imports:RouterModule.forRoot(appRoutes)]`

```js
//app.module.ts
const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/index",
    pathMatch: "full"
  },
  {
    path: "index",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports:RouterModule.forRoot(appRoutes)]
})
```

```js
//app.component.html
app.component.html

//header.component.html
<ul class="navbar-nav">
    <li class="nav-item active">
        <a class="nav-link" [routerLink]="['/']">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="/about" [routerLink]="['/about']">About</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="/contact" [routerLink]="['/contact']">Contact</a>
    </li>
</ul>
```
- Muốn thêm class active thêm vào `routerLinkActive="active"`

```js
<ul class="navbar-nav">
    <li class="nav-item" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
        <a class="nav-link" [routerLink]="['/index']">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item" routerLinkActive="active">
        <a class="nav-link" href="/about" [routerLink]="['/about']">About</a>
    </li>
    <li class="nav-item" routerLinkActive="active">
        <a class="nav-link" href="/contact" [routerLink]="['/contact']">Contact</a>
    </li>
</ul>
```

### Cách 2: có thể chuyển trang bằng Event Binding
- Cần Import Router từ @angular/router
- Inject router như 1 service
- Sử dụng navigate: `navigate(['/ten_router','params'])`
- Sử dụng navigateByUrl: `navigateByUrl('ten_router')`

```js
<button type="button" class="btn mr-2" (click)="navigate('index')">Home</button>
<button type="button" class="btn mr-2" (click)="navigate('about')">About</button>
<button type="button" class="btn mr-2" (click)="navigate('contact')">Contact</button>


//app.component.ts
import { Router } from "@angular/router";

export class AppComponent {
  constructor(public _Router: Router) {}

  navigate(url: string) {
    // this._Router.navigate([url]); //cái nào cũng ok
    this._Router.navigateByUrl(url);
  }
}
```

## Router - lấy tham số params trên router
Link demo : https://bom.to/f1pcSIv
```js
// app.module
const appRoutes: Routes = [
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "products/:id",
    component: ProductDetailComponent
  }
]
```

```js
//products.component.html
<tr *ngFor="let item of products">
    <td>{{item.id}}</td>
    <td>{{item.name}}</td>
    <td>{{item.price | currency: 'VND': true}}</td>
    <td>{{item.status ? "Active" : "Deactive"}}</td>
</tr>
```

```js
//products.component.ts
import { Component, OnInit } from "@angular/core";
import { Product_Class } from "../../models/product.class";
import { ProductService } from "../../services/product.service";

export class ProductsComponent implements OnInit {
  public products: Product_Class[] = [];

  constructor(public _ProductService: ProductService) {}

  ngOnInit() {
    let getProducts = (this.products = this._ProductService.getAllproducts());
    console.log(getProducts);
  }
}
```

#### Tiến hành lấy tham số trên router - ActivatedRoute - Snapshot
- Khai báo `ActivatedRoute` từ `@angular/router`<br>
để lấy url bất cứ thứ gì bạn nhập vào<br>
- Tiến hành Inject như 1 Service
- Lấy tham số `params` trên đường dẫn (ex: /products/1)
- Sau khi có tham số đường dẫn, tiến hành kiểm tra `params` với `id của products`<br>
=> nếu trùng khớp thì lấy ra product của id đó

```js
//product-detail.component.ts
import { ActivatedRoute } from "@angular/router";

export class ProductDetailComponent implements OnInit {
  public products: Product_Class = null;

  constructor(
    public _ActivatedRoute: ActivatedRoute,
    public _ProductService: ProductService
  ) {}

  ngOnInit() {
    let id_params = +this._ActivatedRoute.snapshot.params.id;
    this.products = this._ProductService.getProductById(id_params); //truyền id_params
  }
}
```

```js
//product-detail.component.html  => lúc này product-detail đã có data
<h1>Id: {{products.id}}</h1>
<h2>{{products.name}}</h2>
<h3>{{products.price | currency: 'VND': true}}</h3>
<h4>{{products.status ? 'Active' : 'Deactive'}}</h4>
```

```js
//product.service.ts

  getProductById(id_params: number) {
    let result = null;
    for (var i = 0; i < this.products.length; i++) {

    //kiểm tra id_params = id của list product => trả về đúng object product đó
      if (this.products[i].id == id_params) {  
        result = this.products[i];
        break;
      }
    }
    return result;
  }
```