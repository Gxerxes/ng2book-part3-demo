import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { QuestionBase }                 from './question-base';
import { QuestionControlService }       from './question-control.service';

@Component({
  selector: 'dynamic-form',
  templateUrl: 'app/+question/dynamic-form.component.html',
  styleUrls: ['app/+question/dynamic-form.component.css'],
  directives: [DynamicFormQuestionComponent, REACTIVE_FORM_DIRECTIVES],
  providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  registered = false;

  constructor(private qcs: QuestionControlService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  register() {
    console.log(this.form.value, 'dfdfdf');
    this
      .qcs
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


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/