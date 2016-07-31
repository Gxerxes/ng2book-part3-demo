import {Component} from '@angular/core';

import {QuestionComponent} from './question.component';

@Component({
  inputs: ['question', 'isPublished'],
  outputs: ['delQuestionRequest'],
  selector: 'question-score',
  template: `
			<p>分值题</p>

			<template [ngIf] = "isPublished">
				<p>{{newQuestion.title}}</p>
				<p class = "range-field">
					<label>分值：{{newQuestion.answer}}</label>
					<input type = "range" [(ngModel)] = "newQuestion.answer" min = "0" max = "100" />
				</p>
			</template>

			<template [ngIf] = "isPublished && isEdit">
				<input placeholder = "请输入问题" [(ngModel)] = "newQuestion.title" required />
				<button type = "button" (click) = "toSave()" class = "btn btn-default">保存</button>
				<button type = "button" (click) = "toCancel()" class= "btn btn-default">取消</button>
			</template>

			<template [ngIf] = "isPublished && !isEdit">
				<p>{{newQuestion.title}}</p>
				<p class = "range-field">
					<label>分值：50</label>
					<input type = "range" disabled = "disabled" value = "50" min = "0" max = "100" />
				</p>
				<button type = "button" (click) = "toEdit()" class = "btn btn-default">编辑</button>
				<button type = "button" (click) = "toDelete()" class= "btn btn-default">删除</button>
			</template>
		`
})

export class QuestionScoreCmp extends QuestionComponent {
}
