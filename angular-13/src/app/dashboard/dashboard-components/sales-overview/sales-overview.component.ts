import { Component, OnInit, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexGrid
} from "ng-apexcharts";

export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexGrid;
}

@Component({
  selector: "app-sales-overview",
  templateUrl: "./sales-overview.component.html"
})
export class SalesOverviewComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent = Object.create(null);
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Pixel",
          data: [44, 55, 57, 56, 61, 58],
        },
        {
          name: "Ample",
          data: [76, 85, 101, 98, 87, 105],
        },
      ],
      chart: {
        type: "bar",
        fontFamily: "Poppins,sans-serif",
        height: 320,
      },
      grid: {
        borderColor: "rgba(0,0,0,.2)",
        strokeDashArray: 3,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "30%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      },

      legend: {
        show: false,
      },
      fill: {
        colors: ["#26c6da", "#1e88e5"],
        opacity: 1,
      },
      tooltip: {
        theme: "dark",
      },
    };
  }

  ngOnInit(): void {}
}
