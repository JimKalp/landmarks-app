import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandmarkFullpageComponent } from './landmark-fullpage.component';

describe('LandmarkFullpageComponent', () => {
  let component: LandmarkFullpageComponent;
  let fixture: ComponentFixture<LandmarkFullpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandmarkFullpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandmarkFullpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
