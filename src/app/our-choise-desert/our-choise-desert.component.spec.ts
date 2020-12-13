import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurChoiseDesertComponent } from './our-choise-desert.component';

describe('OurChoiseDesertComponent', () => {
  let component: OurChoiseDesertComponent;
  let fixture: ComponentFixture<OurChoiseDesertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurChoiseDesertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurChoiseDesertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
