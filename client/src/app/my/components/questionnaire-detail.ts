import { Component } from 'angular2/core';
import { QuestionnaireModel, QuestionnaireState } from '../../models/questionnaire.model';

@Component({
    selector:'questionnaire-detail',
    template:`
    <ul class="questionnaire-list" *ngIf="questionnaire">
       <li>问卷ID：  {{questionnaire.id}}</li>
       <li>问卷标题：{{questionnaire.title}}</li>
       <li>问卷状态：{{stateLabel[questionnaire.state]}}</li>
       <li>创建时间：{{questionnaire.createDate}}</li>
       <li>问题总数：{{questionnaire.questionList.length}}</li>
    </ul>
    `,
    styles:[`
      .questionnaire-list li{
        line-height:36px;
      }
    `],
    inputs:['questionnaire']
})

export class QuestionnaireDetailComponent{
  private questionnaire:QuestionnaireModel;
  private stateLabel:Object = {};

  constructor(){
    this.stateLabel[QuestionnaireState.Edit] = "可编辑";
    this.stateLabel[QuestionnaireState.Published] = "回收中";
    this.stateLabel[QuestionnaireState.Finished] = "已完成";
  }
}
