/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlvesaContentIconComponent } from './alvesa-content-icon.component';

describe('AlvesaContentIconComponent', () => {
  let component: AlvesaContentIconComponent;
  let fixture: ComponentFixture<AlvesaContentIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlvesaContentIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlvesaContentIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
