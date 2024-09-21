import { Component, ViewChild } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexLegend,
  ApexStroke,
  ApexTooltip,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexYAxis,
  ApexGrid,
  ApexPlotOptions,
  ApexFill,
  ApexMarkers,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { MaterialModule } from 'src/app/material.module';

export interface salesChart {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  yaxis: ApexYAxis | any;
  xaxis: ApexXAxis | any;
  fill: ApexFill | any;
  tooltip: ApexTooltip | any;
  stroke: ApexStroke | any;
  legend: ApexLegend | any;
  grid: ApexGrid | any;
  marker: ApexMarkers | any;
}

@Component({
  selector: 'app-sales-overview',
  standalone: true,
  imports: [NgApexchartsModule, TablerIconsModule, MaterialModule],
  templateUrl: './sales-overview.component.html',
})
export class AppSalesOverviewComponent {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);

  public salesChart!: Partial<salesChart> | any;

  constructor() {
    this.salesChart = {
      series: [
        { name: 'Ample', data: [355, 390, 300, 350, 390, 180, 250] },
        { name: 'Pixel', data: [280, 250, 325, 215, 250, 310, 170] },
      ],
      chart: {
        type: 'bar',
        height: 320,
        toolbar: { show: false },
        foreColor: '#adb0bb',
        fontFamily: 'Poppins',
        sparkline: { enabled: false },
      },
      grid: {
        show: false,
      },
      plotOptions: {
        bar: { horizontal: false, columnWidth: '35%', borderRadius: 0 },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        type: 'category',
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: true,
        min: 100,
        max: 400,
        tickAmount: 3,
      },
      stroke: {
        show: true,
        width: 5,
        lineCap: 'butt',
        colors: ['transparent'],
      },

      legend: {
        show: false,
      },
      fill: {
        colors: ['#26c6da', '#1e88e5'],
        opacity: 1,
      },
      tooltip: {
        theme: 'dark',
      },
    };
  }
}
