import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurThemeChildComponent } from './our-theme-child.component';

describe('OurThemeChildComponent', () => {
  let component: OurThemeChildComponent;
  let fixture: ComponentFixture<OurThemeChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurThemeChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurThemeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
