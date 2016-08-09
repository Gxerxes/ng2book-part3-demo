import { Component, Input } from '@angular/core';
import { FormGroup, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { FieldBase } from './field-base';

@Component({
  selector: 'field',
  templateUrl: 'app/+field/field.component.html',
  styleUrls: ['app/+field/field.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class FieldComponent {
  @Input() field: FieldBase<any>;
  @Input() form: FormGroup;
  get isValid() {
    return this.form.controls[this.field.key].valid;
  }
  get isEmpty() {
    let errors = this.form.controls[this.field.key].errors || {};
    return errors['empty'];
  }
}