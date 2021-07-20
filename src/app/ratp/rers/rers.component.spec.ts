import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RersComponent } from './rers.component';

describe('RersComponent', () => {
  let component: RersComponent;
  let fixture: ComponentFixture<RersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
