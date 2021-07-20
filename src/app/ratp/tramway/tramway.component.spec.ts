import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TramwayComponent } from './tramway.component';

describe('TramwayComponent', () => {
  let component: TramwayComponent;
  let fixture: ComponentFixture<TramwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TramwayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TramwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
