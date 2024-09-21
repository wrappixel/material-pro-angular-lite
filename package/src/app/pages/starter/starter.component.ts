import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { AppSalesOverviewComponent } from 'src/app/components/sales-overview/sales-overview.component';

import { AppActivityTimelineComponent } from 'src/app/components/activity-timeline/activity-timeline.component';
import { AppMyContactsComponent } from 'src/app/components/my-contacts/my-contacts.component';
import { AppSalesOurVisitorsComponent } from 'src/app/components/our-visitors/our-visitors.component';
import { AppProfileCardComponent } from 'src/app/components/profile-card/profile-card.component';


@Component({
  selector: 'app-starter',
  standalone: true,
  imports: [
    MaterialModule,
    AppSalesOverviewComponent,
    AppSalesOurVisitorsComponent,
    AppProfileCardComponent,
    AppMyContactsComponent,
    AppActivityTimelineComponent
  ],
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StarterComponent { }