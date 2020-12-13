import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayThemeComponent } from './display-theme.component';

describe('DisplayThemeComponent', () => {
  let component: DisplayThemeComponent;
  let fixture: ComponentFixture<DisplayThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
