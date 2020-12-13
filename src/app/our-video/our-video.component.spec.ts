import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurVideoComponent } from './our-video.component';

describe('OurVideoComponent', () => {
  let component: OurVideoComponent;
  let fixture: ComponentFixture<OurVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
