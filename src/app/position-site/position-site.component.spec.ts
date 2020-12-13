import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionSiteComponent } from './position-site.component';

describe('PositionSiteComponent', () => {
  let component: PositionSiteComponent;
  let fixture: ComponentFixture<PositionSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
