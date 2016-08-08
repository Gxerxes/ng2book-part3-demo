import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';

@Injectable()
export class QuestionService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new TextboxQuestion({
        key: 'username',
        label: '用户名',
        value: '',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'password',
        label: '密码',
        type: 'password',
        value: '',
        required: true,
        order: 2
      }),

      new DropdownQuestion({
        key: 'gender',
        label: '性别',
        options: [
          { key: 'male', value: '男' },
          { key: 'female', value: '女' },
        ],
        order: 3
      }),
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/