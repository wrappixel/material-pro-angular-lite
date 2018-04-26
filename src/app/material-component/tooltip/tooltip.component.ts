import { Component } from '@angular/core';
import { TooltipPosition } from '@angular/material';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  position = 'before';
}
