import {Component,OnInit} from 'angular2/core';
import {RouteParams, Router } from 'angular2/router';
import {QuestionnaireService} from '../services/questionnaire.service';
import { QuestionType, QuestionModel } from '../models/question.model';
import { QuestionnaireModel, QuestionnaireState } from '../models/questionnaire.model';
import {QuestionControlList} from './components/questionnaire.controls';
import { QuestionnaireOutline } from './components/questionnaire.outline';
import {QuestionnairePage} from '../common/components/questionnaire.page';

console.log('`edit` page component loaded asynchronously');

@Component({
  selector: 'edit-page',
  template: require('./edit.html'),
  providers:[QuestionnaireService],
  directives:[QuestionControlList, QuestionnaireOutline, QuestionnairePage],
  styles: [`
    .tabs {
      overflow: hidden;
    }
  `]
})
export class EditPage implements OnInit{
  questionnaire:QuestionnaireModel;
  private _id:string;
  constructor(
    private _questionnaireService:QuestionnaireService,
    routeParams:RouteParams, private _router:Router) {
    this._id = routeParams.get('id');
  }

  addQuestion(type:QuestionType){
    let question;
    switch(type){
      case QuestionType.Text:
        question = {
          desc:'',
          type:type,
          answer:''
        };
        break;
      case QuestionType.SingleSelect:
        question = {
          desc:'',
          type:type,
          options:[{key:0, value:''},{key:1, value:''}],
          answer:''
        };
        break;
      case QuestionType.MultiSelect:
        question = {
          desc:'',
          type:type,
          options:[{key:0, value:''},{key:1, value:''}],
          answer:''
        };
        break;
      case QuestionType.Score:
        question = {
          desc:'',
          type:type,
          answer:''
        };
        break;
      default:
        question = {
          desc:'',
          type:type,
          answer:''
        };
        break;

    }
    this.questionnaire.questionList.push(question);
  }

  saveQuestionnaire(questionnaire:QuestionnaireModel){
    if(!questionnaire) {return;}
    this._questionnaireService.updateQuestionnaire(questionnaire)
      .subscribe(
        questionnaire => this._router.navigate(['My']),
        error=> console.error(error));
  }

  ngOnInit() {
    console.log('hello `Edit Page` component');
    $('ul.tabs').tabs();
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
