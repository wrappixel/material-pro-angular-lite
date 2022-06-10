import { Component } from '@angular/core';
import { TooltipPosition, MatTooltipModule } from '@angular/material/tooltip';


@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  position = 'before';
}
