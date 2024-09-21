import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { DemoMaterialModule } from 'src/app/demo-material-module';

@Component({
  selector: 'app-expansion',
  standalone: true,
  imports: [DemoMaterialModule],
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.scss']
})
export class ExpansionComponent {
  panelOpenState = false;
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
