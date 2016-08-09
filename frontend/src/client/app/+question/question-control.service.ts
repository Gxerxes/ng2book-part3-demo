import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base';
import { FormValidators } from './form.validators';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

class User {
  constructor(
    public username: string,
    public password: string
  ) { }
}


@Injectable()
export class QuestionControlService {
  constructor(private http: Http) { }

  private add_user_url = 'http://localhost:8100/user/add';
  private login_url = 'http://localhost:8100/login';

  toFormGroup(questions: QuestionBase<any>[]) {
    let group: any = {};

    questions.forEach(question => {
      group[question.key] =
        question.pattern ?
          new FormControl(question.value || '', FormValidators[question.pattern]) :
          question.required ?
            new FormControl(question.value || '', Validators.required) :
            new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }

  addUser(data: Object) {
    let body = JSON.stringify(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(this.add_user_url, body, { headers});
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/