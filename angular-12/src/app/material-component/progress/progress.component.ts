import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {
  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;

}
