/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BiographieComponent } from './biographie.component';

describe('BiographieComponent', () => {
  let component: BiographieComponent;
  let fixture: ComponentFixture<BiographieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiographieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiographieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
