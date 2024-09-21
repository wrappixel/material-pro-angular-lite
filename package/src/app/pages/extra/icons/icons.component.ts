import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './icons.component.html',
})
export class AppIconsComponent { }
