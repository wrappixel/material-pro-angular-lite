import { Component, OnInit } from '@angular/core';
import { Activity, activities } from './activity-timeline-data';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-activity-timeline',
  standalone: true,
  imports: [DemoMaterialModule, NgIf, NgFor],
  templateUrl: './activity-timeline.component.html'
})
export class ActivityTimelineComponent implements OnInit {

  activityData: Activity[];

  constructor() {

    this.activityData = activities;
  }


  ngOnInit(): void {
  }

}
