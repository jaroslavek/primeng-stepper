import { Component } from '@angular/core';
import { ImportsModule } from './imports';
import { Step1FormComponent } from './steps/step-1-form.component';
@Component({
  selector: 'stepper-vertical-demo',
  templateUrl: './stepper-vertical-demo.html',
  standalone: true,
  imports: [ImportsModule, Step1FormComponent],
})
export class StepperVerticalDemo {
  stepValidities: boolean[] = [false, false, false];

  onStepValid(index: number, isValid: boolean) {
    this.stepValidities[index] = isValid;
  }
}
