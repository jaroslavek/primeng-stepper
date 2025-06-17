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
  template: `
    <form [formGroup]="form">
      <input formControlName="jmeno" placeholder="Jméno" />
    </form>
  `,
  imports: [ReactiveFormsModule, CommonModule],
})
export class Step1FormComponent implements OnInit {
  @Output() valid = new EventEmitter<boolean>();
  form = new FormGroup({
    jmeno: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.form.statusChanges.subscribe(() => {
      this.valid.emit(this.form.valid);
    });
  }

  submit() {
    this.form.markAllAsTouched();
    this.valid.emit(this.form.valid);
  }
}
