import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewToComponentComponent } from './components/view-to-component/view-to-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewToComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
