/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlvesaContentComponent } from './alvesa-content.component';

describe('AlvesaContentComponent', () => {
  let component: AlvesaContentComponent;
  let fixture: ComponentFixture<AlvesaContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlvesaContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlvesaContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
