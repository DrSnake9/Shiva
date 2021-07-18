import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCovidComponent } from './daily-covid.component';

describe('DailyCovidComponent', () => {
  let component: DailyCovidComponent;
  let fixture: ComponentFixture<DailyCovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyCovidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
