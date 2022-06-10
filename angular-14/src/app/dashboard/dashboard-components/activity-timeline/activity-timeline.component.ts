import { Component, OnInit } from '@angular/core';
import { Activity, activities } from './activity-timeline-data';

@Component({
  selector: 'app-activity-timeline',
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
