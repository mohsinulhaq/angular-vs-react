import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit(form.value)">
      <input type="text" placeholder="Name" [formControl]="form.controls.name">
      <input type="text" placeholder="Branch" [formControl]="form.controls.branch">
      <input type="submit" value="Add">
    </form>
  `
})
export class FormComponent {
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      'name': [''],
      'branch': ['']
    });
  }

  onSubmit(value) {
    this.formSubmit.emit(value);
  }
}
