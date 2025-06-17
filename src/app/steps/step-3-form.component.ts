import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'step-3-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="form">
      <input formControlName="jmeno" placeholder="Jméno" />
    </form>
  `,
})
export class Step3FormComponent implements OnInit {
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
