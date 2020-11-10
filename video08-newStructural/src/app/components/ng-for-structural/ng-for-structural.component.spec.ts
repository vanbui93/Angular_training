import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForStructuralComponent } from './ng-for-structural.component';

describe('NgForStructuralComponent', () => {
  let component: NgForStructuralComponent;
  let fixture: ComponentFixture<NgForStructuralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForStructuralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForStructuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
