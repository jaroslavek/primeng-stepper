import { Component, ViewChild } from '@angular/core';
import { ImportsModule } from './imports';
import { Step1FormComponent } from './steps/step-1-form.component';
import { Step2FormComponent } from './steps/step-2-form.component';
import { Step3FormComponent } from './steps/step-3-form.component';

@Component({
  selector: 'stepper-vertical-demo',
  templateUrl: './stepper-vertical-demo.html',
  standalone: true,
  imports: [ImportsModule, Step1FormComponent, Step2FormComponent, Step3FormComponent],
})
export class StepperVerticalDemo {
  @ViewChild(Step1FormComponent) step1Ref!: Step1FormComponent;
  @ViewChild(Step2FormComponent) step2Ref!: Step2FormComponent;
  @ViewChild(Step3FormComponent) step3Ref!: Step3FormComponent;

  step1Valid = false;
  step2Valid = false;
  step3Valid = false;

  onStepValid(stepIndex: number, isValid: boolean) {
    switch (stepIndex) {
      case 1:
        this.step1Valid = isValid;
        break;
      case 2:
        this.step2Valid = isValid;
        break;
      case 3:
        this.step3Valid = isValid;
        break;
    }
  }

  goToStep2(activateCallback: (value: number) => void) {
    this.step1Ref.submit();
    if (this.step1Valid) {
      activateCallback(2);
    }
  }

  goToStep3(activateCallback: (value: number) => void) {
    this.step2Ref.submit();
    if (this.step2Valid) {
      activateCallback(3);
    }
  }

  finishStepper() {
    this.step3Ref.submit();
    if (this.step3Valid) {
      console.log('Všechny kroky validní, odesílám finální data!');
    }
  }
}
