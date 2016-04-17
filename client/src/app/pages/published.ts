import {Component,OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {QuestionnaireService} from '../services/questionnaire.service';
import { QuestionType, QuestionModel } from '../models/question.model';
import { QuestionnaireModel, QuestionnaireState } from '../models/questionnaire.model';
import {QuestionnairePage} from '../common/components/questionnaire.page';

console.log('`published` page component loaded asynchronously');

@Component({
  selector: 'published-page',
  template: require('./page.html'),
  styles:[`
    .questionnaire-page{
      padding:50px;
    }
  `],
  providers:[QuestionnaireService],
  directives:[ QuestionnairePage]
})
export class PublishedPage implements OnInit{
  questionnaire:QuestionnaireModel;
  private _id:string;
  constructor(
    private _questionnaireService:QuestionnaireService,
    routeParams:RouteParams) {
    this._id = routeParams.get('id');
  }

  ngOnInit() {
    this.questionnaire = {
      title:'',
      starter:'',
      ending:'',
      state: QuestionnaireState.Create,
      questionList:[]
    };
    this._questionnaireService.getQuestionnaireById(this._id)
      .subscribe(
        questionnaire => this.questionnaire = questionnaire,
        error => console.error(error)
    );
  }
}
