import { Component, ViewChild } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexLegend,
  ApexTooltip,
  ApexNonAxisChartSeries,
  ApexResponsive,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { MaterialModule } from 'src/app/material.module';

export interface ourvisitorChart {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  responsive: ApexResponsive[] | any;
  labels: any;
  tooltip: ApexTooltip | any;
  legend: ApexLegend | any;
  colors: string[] | any;
  stroke: any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
}

@Component({
  selector: 'app-our-visitors',
  standalone: true,
  imports: [NgApexchartsModule, MaterialModule, TablerIconsModule],
  templateUrl: './our-visitors.component.html',
})
export class AppSalesOurVisitorsComponent {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);

  public ourvisitorChart!: Partial<ourvisitorChart> | any;

  constructor() {
    this.ourvisitorChart = {
      series: [45, 15, 27, 18],
      chart: {
        type: 'donut',
        fontFamily: 'Poppins,sans-serif',
        height: 253,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '85%',
            background: 'transparent',
          },
        },
      },
      tooltip: {
        fillSeriesColor: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0,
      },
      legend: {
        show: false,
      },
      labels: ['Mobile', 'Tablet', 'Desktop', 'Other'],
      colors: ['#1e88e5', '#26c6da', '#745af2', '#eceff1'],
      responsive: [{ breakpoint: 480, options: { chart: { height: 230 } } }],
    };
  }
}
