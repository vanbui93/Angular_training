import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgIfStructuralComponent } from './components/ng-if-structural/ng-if-structural.component';
import { NgForStructuralComponent } from './components/ng-for-structural/ng-for-structural.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfStructuralComponent,
    NgForStructuralComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
