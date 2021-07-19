import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCountryComponent } from './one-country.component';

describe('OneCountryComponent', () => {
  let component: OneCountryComponent;
  let fixture: ComponentFixture<OneCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
