import { Component, ViewChild } from '@angular/core';
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
  selector: 'app-assessment-progress-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './assessment-progress-chart.component.html',
  styleUrl: './assessment-progress-chart.component.scss'
})
export class AssessmentProgressChartComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor() {
    this.chartOptions = {
      series: [{
        name: 'Completed',
        data: [44, 55, 57, 106]
      }, {
        name: 'Pending',
        data: [76, 35, 20, 58,]
      }],
      chart: {
        height: 350,
        type: "bar",
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
        text: "Assessment Progress ",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#a6c88f", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Assignment",
          "Quiz",
          "Presentation",
          "Lab"
        ],
        title: {
          text: 'Weeks'
        }
      },
      yaxis: {
        title: {
          text: ''
        },
        
      }
    };
  }

}
