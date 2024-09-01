import { Component, ViewChild } from "@angular/core";


import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  NgApexchartsModule,
  ApexYAxis
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-student-attendance-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './student-attendance-chart.component.html',
  styleUrl: './student-attendance-chart.component.scss'
})
export class StudentAttendanceChartComponent {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Attendance",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 43,32,53,30,67,34]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Student's Attendance",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "1/7",
          "8/7",
          "15/7",
          "22/7",
          "29/7",
          "5/8",
          "12/8",
          "19/8",
          "26/8",
          "29/7",
          "2/9",
          "9/9",
          "16/9",
          "23/9",
          "30/9",
          "14/10",
          "21/10"
        ],
        title: {
          text: 'Weeks'
        }
      },
      yaxis: {
        title: {
          text: 'Attendance'
        },
        
      }
    };
  }
}
