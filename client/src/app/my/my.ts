import {Component,OnInit} from 'angular2/core';
import {QuestionnaireService} from '../services/questionnaire.service';
import { QuestionnaireModel } from '../models/questionnaire.model';
import { QuestionnaireItemComponent } from './components/questionnaire-item';
import { QuestionnaireDetailComponent } from './components/questionnaire-detail';
import { QuestionnaireToolsComponent } from './components/questionnaire-tools';

console.log('`My Page` component loaded asynchronously');

@Component({
  inputs:['questionnaire'],
  providers:[QuestionnaireService],
  selector: 'my-page',
  templateUrl: 'app/my/my.html',
  directives:[QuestionnaireItemComponent, QuestionnaireDetailComponent,QuestionnaireToolsComponent]
})
export class MyPage implements OnInit{
  questionnaires: QuestionnaireModel[];
  selectedQuestionnaire:QuestionnaireModel;
  constructor(private _questionnaireService: QuestionnaireService) {
  }

  ngOnInit() {
    this._questionnaireService.getQuestionnaires()
            .subscribe(
                    questionnaires => this.questionnaires = questionnaires,
                    error => console.error(error)
            );
  }

  onSelect(questionnaire:QuestionnaireModel){
    this.selectedQuestionnaire = questionnaire;
  }
}
