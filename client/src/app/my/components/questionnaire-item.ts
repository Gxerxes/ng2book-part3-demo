import { Component } from 'angular2/core';
import { QuestionnaireModel, QuestionnaireState } from '../../models/questionnaire.model';

@Component({
  selector:'questionnaire-item',
  template:`
    <div *ngIf="questionnaire" [ngSwitch]="questionnaire.state">
    <template [ngSwitchWhen]="1">
      <span class="blue-text text-darken-2">{{questionnaire.title}}</span>
    </template>
    <template [ngSwitchWhen]="2">
      <span class="purple-text text-darken-2">{{questionnaire.title}}</span>
    </template>
    <template [ngSwitchWhen]="3">
      <span class="green-text text-darken-2">{{questionnaire.title}}</span>
    </template>
    <span class="secondary-content">{{questionnaire.createDate}}</span>
  </div>
  `,
  inputs:['questionnaire']
})

export class QuestionnaireItemComponent{
  private questionnaire:QuestionnaireModel;

  constructor(){
  }
}
