import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'step-1-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="form">
      <input formControlName="jmeno" placeholder="Jméno" />
    </form>
  `,
})
export class Step1FormComponent implements OnInit {
  @Output() valid = new EventEmitter<boolean>();

  form = new FormGroup({
    jmeno: new FormControl('', Validators.required),
  });

  ngOnInit() {
    // Emituj počáteční validitu
    this.valid.emit(this.form.valid);

    // Sleduj změny ve validitě
    this.form.statusChanges.subscribe(() => {
      this.valid.emit(this.form.valid);
    });
  }
}
