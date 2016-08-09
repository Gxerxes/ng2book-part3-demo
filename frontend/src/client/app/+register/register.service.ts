import { Injectable }       from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { FieldBase }     from '../+field/field-base';
import { FieldText }     from '../+field/field-text';
import { FieldRadio }     from '../+field/field-radio';
import { FieldValidators } from '../+field/field-validators';

class User {
  constructor(
    public username: string,
    public password: string
  ) { }
}

@Injectable()
export class RegisterService {

  constructor(private http: Http) { }

  private add_user_url = 'http://localhost:8100/user/add';

  getFields() {
    let fields: FieldBase<any>[] = [
      new FieldText({
        key: 'username',
        label: '用户名',
        value: '',
        required: true,
        pattern: 'username',
        order: 1
      }),
      new FieldText({
        key: 'password',
        label: '密码',
        type: 'password',
        value: '',
        required: true,
        pattern: 'password',
        order: 2
      }),
      // new FieldRadio({
      //   key: 'gender',
      //   label: '性别',
      //   type: 'radio',
      //   value: '',
      //   required: false,
      //   items: [{
      //     name: '男',
      //     value: 'male'
      //   }, {
      //     name: '女',
      //     value: 'female'
      //   }],
      //   order: 3
      // }),
      // new FieldText({
      //   key: 'showpassword',
      //   label: '显示密码',
      //   type: 'checkbox',
      //   value: false,
      //   required: false,
      //   order: 4
      // }),
    ];
    return fields.sort((a, b) => a.order - b.order);
  }

  toFormGroup(fields: FieldBase<any>[]) {
    let group: any = {};

    fields.forEach(field => {
      group[field.key] =
        field.pattern ?
          new FormControl(field.value || '', FieldValidators[field.pattern]) :
          field.required ?
            new FormControl(field.value || '', Validators.required) :
            new FormControl(field.value || '');
    });
    return new FormGroup(group);
  }

  addUser(data: Object) {
    let body = JSON.stringify(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(this.add_user_url, body, { headers });
  }
}
