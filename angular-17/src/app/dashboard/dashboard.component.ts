import { Component, AfterViewInit } from '@angular/core';
import { SalesOverviewComponent } from './dashboard-components/sales-overview/sales-overview.component';
import { OurVisiterComponent } from './dashboard-components/our-visiter/our-visiter.component';
import { ProfileComponent } from './dashboard-components/profile/profile.component';
import { ContactsComponent } from './dashboard-components/contacts/contacts.component';
import { ActivityTimelineComponent } from './dashboard-components/activity-timeline/activity-timeline.component';

@Component({
	selector: 'app-dashboard',
	standalone: true,
	imports: [SalesOverviewComponent, OurVisiterComponent, ProfileComponent, ContactsComponent, ActivityTimelineComponent],
	templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {

	ngAfterViewInit() { }

}
