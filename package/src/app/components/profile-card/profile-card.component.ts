import { Component } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [MaterialModule, TablerIconsModule],
  templateUrl: './profile-card.component.html',
})
export class AppProfileCardComponent {
  constructor() { }
}
