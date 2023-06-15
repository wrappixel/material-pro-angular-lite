import {Component} from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { DemoMaterialModule } from 'src/app/demo-material-module';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports:[DemoMaterialModule, MatTabsModule],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

}
