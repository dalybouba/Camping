import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionSiteChildComponent } from './position-site-child.component';

describe('PositionSiteChildComponent', () => {
  let component: PositionSiteChildComponent;
  let fixture: ComponentFixture<PositionSiteChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionSiteChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionSiteChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
