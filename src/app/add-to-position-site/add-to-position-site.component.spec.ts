import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToPositionSiteComponent } from './add-to-position-site.component';

describe('AddToPositionSiteComponent', () => {
  let component: AddToPositionSiteComponent;
  let fixture: ComponentFixture<AddToPositionSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToPositionSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToPositionSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
