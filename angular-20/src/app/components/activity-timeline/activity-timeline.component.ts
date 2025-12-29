import { Component } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-activity-timeline',
  imports: [MaterialModule, TablerIconsModule],
  templateUrl: './activity-timeline.component.html',
})
export class AppActivityTimelineComponent {
  // Timeline
  mytimelines = [
    {
      from: 'Andrew McDownland',
      time: '(5 minute ago)',
      image: 'assets/images/profile/user-1.jpg',
      attachment: 'assets/images/blog/blog-img2.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    },
    {
      from: 'Christopher Jamil',
      time: '(3 minute ago)',
      image: 'assets/images/profile/user-2.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
      buttons: 'primary',
    },
    {
      from: 'Julia Roberts',
      time: '(1 minute ago)',
      image: 'assets/images/profile/user-3.jpg',
      attachment: 'assets/images/blog/blog-img1.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    },
    {
      from: 'James Johnson',
      time: '(1 minute ago)',
      image: 'assets/images/profile/user-4.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
      buttons: 'warn',
    },
  ];

  constructor() { }
}
