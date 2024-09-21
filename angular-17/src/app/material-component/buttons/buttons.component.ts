import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DemoMaterialModule } from 'src/app/demo-material-module';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [DemoMaterialModule, MatButtonModule],
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  constructor() { }
}
