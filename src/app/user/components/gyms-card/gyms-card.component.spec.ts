import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymsCardComponent } from './gyms-card.component';

describe('GymsCardComponent', () => {
  let component: GymsCardComponent;
  let fixture: ComponentFixture<GymsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GymsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
