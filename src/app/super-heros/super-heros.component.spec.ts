import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHerosComponent } from './super-heros.component';

describe('SuperHerosComponent', () => {
  let component: SuperHerosComponent;
  let fixture: ComponentFixture<SuperHerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperHerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
