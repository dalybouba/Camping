import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToDesertComponent } from './add-to-desert.component';

describe('AddToDesertComponent', () => {
  let component: AddToDesertComponent;
  let fixture: ComponentFixture<AddToDesertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToDesertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToDesertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
