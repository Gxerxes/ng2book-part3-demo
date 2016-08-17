import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { FieldBase } from '../+field/field-base';
import { FieldComponent } from '../+field/field.component';
import { LoginService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: 'app/+login/login.component.html',
  styleUrls: ['app/+login/login.component.css'],
  directives: [FieldComponent, REACTIVE_FORM_DIRECTIVES],
  providers:  [LoginService]
})

export class LoginComponent implements OnInit {

  form: FormGroup;
  logined = false;
  fields: FieldBase<any>[] = [];

  constructor(private rs: LoginService) {
    this.fields = rs.getFields();
  }

  ngOnInit() {
    this.form = this.rs.toFormGroup(this.fields);
  }

  login() {
    this.rs
      .login(this.form.value)
      .subscribe(res => {
        let body = res.json();
        if (body && body.success) {
          this.logined = true;
        }
      }, error => {
        console.error(error);
      });
  }
}
