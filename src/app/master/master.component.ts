import { Component } from '@angular/core';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { AssessmentProgressChartComponent } from './assessment-progress-chart/assessment-progress-chart.component';
import { StudentAttendanceChartComponent } from './student-attendance-chart/student-attendance-chart.component';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [CourseDetailsComponent,AssessmentProgressChartComponent,StudentAttendanceChartComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss'
})
export class MasterComponent {

}
