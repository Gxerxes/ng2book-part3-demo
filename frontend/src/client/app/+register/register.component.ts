import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { FieldBase } from '../+field/field-base';
import { FieldComponent } from '../+field/field.component';
import { RegisterService } from './register.service';

@Component({
  selector: 'register',
  templateUrl: 'app/+register/register.component.html',
  styleUrls: ['app/+register/register.component.css'],
  directives: [FieldComponent, REACTIVE_FORM_DIRECTIVES],
  providers:  [RegisterService]
})

export class RegisterComponent implements OnInit {

  form: FormGroup;
  registered = false;
  fields: FieldBase<any>[] = [];

  constructor(private rs: RegisterService) {
    this.fields = rs.getFields();
  }

  ngOnInit() {
    this.form = this.rs.toFormGroup(this.fields);
  }

  showPassword () {
    this.fields.forEach(field => {
      if (field.key === 'password') {
        field.type = field.type === 'password' ? 'text' : 'password';
      }
    });
  }

  register() {
    this.rs
      .addUser(this.form.value)
      .subscribe(res => {
        let body = res.json();
        if (body && body.success) {
          this.registered = true;
        }
      }, error => {
        console.error(error);
      });
  }
}
