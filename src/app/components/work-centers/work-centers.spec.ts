import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCenters } from './work-centers';

describe('WorkCenters', () => {
  let component: WorkCenters;
  let fixture: ComponentFixture<WorkCenters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkCenters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkCenters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
