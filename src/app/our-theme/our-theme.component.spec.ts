import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurThemeComponent } from './our-theme.component';

describe('OurThemeComponent', () => {
  let component: OurThemeComponent;
  let fixture: ComponentFixture<OurThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
