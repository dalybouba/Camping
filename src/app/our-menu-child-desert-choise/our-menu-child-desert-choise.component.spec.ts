import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurMenuChildDesertChoiseComponent } from './our-menu-child-desert-choise.component';

describe('OurMenuChildDesertChoiseComponent', () => {
  let component: OurMenuChildDesertChoiseComponent;
  let fixture: ComponentFixture<OurMenuChildDesertChoiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurMenuChildDesertChoiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurMenuChildDesertChoiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
