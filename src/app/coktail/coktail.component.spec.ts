import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoktailComponent } from './coktail.component';

describe('CoktailComponent', () => {
  let component: CoktailComponent;
  let fixture: ComponentFixture<CoktailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoktailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
