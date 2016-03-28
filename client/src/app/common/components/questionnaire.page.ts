import { Component, OnInit, ChangeDetectionStrategy, EventEmitter } from 'angular2/core';
import {Http, Response} from 'angular2/http';
import { QuestionType, QuestionModel } from '../../models/question.model';
import { QuestionnaireModel } from '../../models/questionnaire.model';
import { QuestionTextCmp } from './question.text';
import { QuestionRadioCmp} from './question.radio';
import { QuestionCheckboxCmp} from './question.checkbox';
import { QuestionScoreCmp} from './question.score';

@Component({
  inputs:['questionnaire'],
  outputs:['saveQuestionnaireRequest'],
  selector:'questionnaire-page',
  directives:[QuestionTextCmp, QuestionRadioCmp, QuestionCheckboxCmp, QuestionScoreCmp],
  template:`
    <h1><input placeholder="请输入问卷标题" [(ngModel)]="questionnaire.title"></h1>
    <p><input placeholder="请输入开始欢迎语" [(ngModel)]="questionnaire.starter"></p>
    <br/>
    <ul>
    <li *ngFor="#q of questionnaire.questionList" [ngSwitch]="q.type">
      <template [ngSwitchWhen]="0">
        <question-text [question] = "q" (delQuestionRequest)="delQuestion($index)" [isPublished] = "isPublished"></question-text>
      </template>

      <template [ngSwitchWhen]="1">
        <question-radio [question] = "q" (delQuestionRequest)="delQuestion($index)" [isPublished] = "isPublished"></question-radio>
      </template>

      <template [ngSwitchWhen]="2">
         <question-checkbox [question] = "q" (delQuestionRequest)="delQuestion($index)" [isPublished] = "isPublished"></question-checkbox>
      </template>

      <template [ngSwitchWhen]="3">
        <question-score [question] = "q" (delQuestionRequest)="delQuestion($index)" [isPublished] = "isPublished"></question-score>
      </template>
      <template ngSwitchDefault>Unknown: {{q.type}}</template>
    </li>
  </ul>
  <br/>
   <p><input placeholder="请输入结束欢迎语" [(ngModel)]="questionnaire.ending"></p>

 <button class="btn waves-effect waves-light" type="submit" name="action" (click)="toSaveQuestionnaire($event)">提交
    <i class="material-icons right">send</i>
  </button>
  `
})

export class QuestionnairePage implements OnInit{
  questionnaire:QuestionnaireModel;
  isPublished:boolean = false;
  saveQuestionnaireRequest:EventEmitter<any> = new EventEmitter();
  data:string;

  constructor(private http:Http){}

  ngOnInit():void{
  }

  toSaveQuestionnaire(event:any){
    this.saveQuestionnaireRequest.emit(this.questionnaire);
  }

  logError(err) {
    console.error('There was an error: ' + err);
  }

  delQuestion(index){
    this.questionnaire.questionList.splice(index, 1);
  }
}
