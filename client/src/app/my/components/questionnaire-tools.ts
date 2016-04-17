import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { QuestionnaireService } from '../../services/questionnaire.service';
import { QuestionnaireModel, QuestionnaireState } from '../../models/questionnaire.model';

@Component({
  selector:'questionnaire-tools',
  providers:[QuestionnaireService],
  template:`
  <div class="section" *ngIf="questionnaire" [ngSwitch]="questionnaire.state">
    <template [ngSwitchWhen]="1">
      <a class="waves-effect waves-light btn-large" (click)="gotoEditPage(questionnaire.id)"><i class="material-icons left">library_books</i>编辑问卷</a>
      <a class="waves-effect waves-light btn-large" (click)="publishQuestionnaire(questionnaire.id)"><i class="material-icons left">play_circle_filled</i>开始回收</a>
      <a class="waves-effect waves-light btn-large"><i class="material-icons left">not_interested</i>删除问卷</a>
    </template>
    <template [ngSwitchWhen]="2">
      <a class="waves-effect waves-light btn-large"><i class="material-icons left">pause_circle_filled</i>结束回收</a>
      <a class="waves-effect waves-light btn-large"><i class="material-icons left">schedule</i>统计信息</a>
      <a class="waves-effect waves-light btn-large"><i class="material-icons left">not_interested</i>删除问卷</a>
    </template>
    <template [ngSwitchWhen]="3">
      <a class="waves-effect waves-light btn-large"><i class="material-icons left">stars</i>发送结果</a>
      <a class="waves-effect waves-light btn-large"><i class="material-icons left">schedule</i>完整统计</a>
      <a class="waves-effect waves-light btn-large"><i class="material-icons left">not_interested</i>删除问卷</a>
    </template>
  </div>
  `,
  inputs:['questionnaire']
})

export class QuestionnaireToolsComponent{
  private questionnaire:QuestionnaireModel;

  constructor(private _questionnaireService: QuestionnaireService, private _router:Router){
  }

  gotoEditPage(id:string){
    this._router.navigate(['Edit',{id:id}]);
  }

  publishQuestionnaire(id:string){
    this._questionnaireService.publishQuestionnaire(this.questionnaire)
      .subscribe(
        questionnaire => this._router.navigate(['Published',{id:id}]),
        error => console.error(error)
    );
  }
}
