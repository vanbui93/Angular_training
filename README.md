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