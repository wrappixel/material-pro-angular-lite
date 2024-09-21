import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: [],
  standalone: true,
  imports: [RouterOutlet, MaterialModule, CommonModule],
})
export class BlankComponent {
  constructor() {}
}
