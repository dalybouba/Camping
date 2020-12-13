import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToThemeComponent } from './add-to-theme.component';

describe('AddToThemeComponent', () => {
  let component: AddToThemeComponent;
  let fixture: ComponentFixture<AddToThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
