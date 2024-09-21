import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { DemoMaterialModule } from 'src/app/demo-material-module';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [DemoMaterialModule, MatMenuModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent { }
