import {OnInit, ChangeDetectionStrategy, EventEmitter} from '@angular/core';
import { QuestionModel } from '../../models/question.model';

export class QuestionComponent implements OnInit {
  question:QuestionModel;
  newQuestion:QuestionModel;
  isEdit:boolean = false;
  isPublished:boolean = false;
  delQuesitonRequest: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.newQuestion = new QuestionModel();
  }

  toEdit() {
    this.isEdit = true;
  }

  toSave() {
    this.question = this.newQuestion;
    this.isEdit = false;
  }

  toDelete() {
    this.delQuestionRequest.emit(this.question);
  }

  toCancel() {
    this.newQuestion = this.question;
    this.isEdit = false;
  }

  ngOnInit(): void {
    this.question == null ? this.isEdit = true :
        this.newQuestion = this.question;
  }
}
