import {Component} from '@angular/core';

import {QuestionComponent} from './question.component';

@Component({
  inputs: ['question', 'isPublished'],
  outputs: ['delQuestionRequest'],
  selector: 'question-text',
  template:`
			<p>问答题</p>

			<template [ngIf] = "isPublished">
				<p>{{newQuestion.title}}</p>
				<input placeholder = "请输入问题的答案" [(ngModel)] = "newQuestion.answer" />
			</template>

			<template [ngIf] = "!isPublished && isEdit">
				<input placeholder = "请输入问题" [(ngModel)] = "newQuestion.title" required />
				<button type = "button" (click) = "toSave()" class = "btn btn-default">保存</button>
				<button type = "button" (click) = "toCancel()" class= "btn btn-default">取消</button>
			</template>

			<template [ngIf] = "!isPublished && !isEdit">
				<p>{{newQuestion.title}}</p>
				<input placeholder = "请输入问题的答案" disabled = "disabled" />
				<button type = "button" (click) = "toEdit()" class = "btn btn-default">编辑</button>
				<button type = "button" (click) = "toDelete()" class= "btn btn-default">删除</button>
			</template>
		`
})

export class QuestionTextCmp extends QuestionComponent{
}
