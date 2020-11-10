import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgIfStructuralComponent } from './components/ng-if-structural/ng-if-structural.component';
import { NgForStructuralComponent } from './components/ng-for-structural/ng-for-structural.component';
import { NgForCombineNgIfComponent } from './components/ng-for-combine-ng-if/ng-for-combine-ng-if.component';
import { NgSwichCaseStructuralComponent } from './components/ng-swich-case-structural/ng-swich-case-structural.component';
import { NgClassAttributeComponent } from './components/ng-class-attribute/ng-class-attribute.component';
import { NgStyleAttributeComponent } from './components/ng-style-attribute/ng-style-attribute.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfStructuralComponent,
    NgForStructuralComponent,
    NgForCombineNgIfComponent,
    NgSwichCaseStructuralComponent,
    NgClassAttributeComponent,
    NgStyleAttributeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
