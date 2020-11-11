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

## Pipi - biến đổi dữ liệu trước khi hiển thị cho user
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

