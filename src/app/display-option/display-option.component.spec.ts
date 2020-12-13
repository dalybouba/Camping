import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayOptionComponent } from './display-option.component';

describe('DisplayOptionComponent', () => {
  let component: DisplayOptionComponent;
  let fixture: ComponentFixture<DisplayOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
