import { Component }       from '@angular/core';

import { DynamicFormComponent }     from './dynamic-form.component';
import { QuestionService } from './question.service';

@Component({
  selector: 'register',
  templateUrl: 'app/+question/register.component.html',
  styleUrls: ['app/+question/register.component.css'],
  directives: [DynamicFormComponent],
  providers:  [QuestionService]
})
export class RegisterComponent {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/