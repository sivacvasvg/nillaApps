import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentProgressChartComponent } from './assessment-progress-chart.component';

describe('AssessmentProgressChartComponent', () => {
  let component: AssessmentProgressChartComponent;
  let fixture: ComponentFixture<AssessmentProgressChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssessmentProgressChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentProgressChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
