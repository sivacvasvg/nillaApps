import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [NgFor],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent {

  courseDetails:any[] = [
    {heading:'Course Code',category:['BA3102']},
    {heading:'Course Name',category:['Quantitative techniques']},
    {heading:'Course Type',category:['Program Elective']},
    {heading:'Course Period',category:['Semester - 1']},
    {heading:'Credits(4)',category:['Lecture - 3','Tutorial - 0','Practical - 1','Project - 0']},
  ]
}
