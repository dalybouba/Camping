import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurChoiseComponent } from './our-choise.component';

describe('OurChoiseComponent', () => {
  let component: OurChoiseComponent;
  let fixture: ComponentFixture<OurChoiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurChoiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurChoiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
