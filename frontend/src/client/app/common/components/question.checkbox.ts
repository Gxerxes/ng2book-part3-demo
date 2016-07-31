import {Component} from '@angular/core';
import {QuestionComponent} from './question.component';

@Component({
    inputs: ['question', 'isPublished'],
    outputs: ['delQuestionRequest'],
    selector: 'question-radio',
    template: `
			<p>多选题</p>

			<template [ngIf] = "isPublished">
				<p>{{newQuestion.title}}</p>
				<input type = "hidden" name = "selected" [(ngModel)] = "newQuestion.answer.selected" />
				<p *ngFor = #option of newQuestion.options">
					<input name = "group1" type = "checkbox" id = "option{{option.key}}" (change) = "setSelectedValue($event.target.checked, option.value)" />
					<label attr.for = "option{{option.key}}">{{option.value}}</label>
				</p>
			</template>

			<template [ngIf] = "!isPublished && isEdit">
				<input placeholder = "请输入问题" [(ngModel)] = "newQuestion.title" required />
				<div *ngFor = "#option of newQuestion.options">
					<div class = "row">
						<div class = "col s6">
							<input placeholder = "请填写选项" [(ngModel)] = "option.value" type = "text" />
						</div>
						<div class = "col s2">
							<span class="del-icon" (click) = "toDelOption($index)">X</span>
						</div>
					</div>
				</div>
				<button type = "button" (click) = "toSave()" class = "btn btn-default">保存</button>
				<button type = "button" (click) = "toAddOption()" class = "btn btn-default">添加选项</button>
				<button type = "button" (click) = "toCancel()" class = "btn btn-default">取消</button>
			</template>

			<template [ngIf] = "!isPublished && !isEdit">
				<p>{{newQuestion.title}}</p>
				<p *ngFor = "#option of newQuestion.options">
					<input name = "group1" disabled = "disabled" type = "checkbox" id = "option{{option.key}}" />
					<label attr.for = "option{{option.key}}">{{option.value}}</label>
				</p>
				<button type = "button" (click) = "toEdit()" class = "btn btn-default">编辑</button>
				<button type = "button" (click) = "toDelete()" class= "btn btn-default">删除</button>
			</template>
		`
})

export class QuestionRadioCmp extends QuestionComponent {
    key: number;

    toDelOption(index:number){
        if(this.newQuestion.options.length <= 2）{
            return;
        }

        this.newQuestion.options.slice(index, 1);
    }

    toAddOption(){
        this.newQuestion.options.push({key: this.key++, value:''});
    }

    setSelectedValue(checked, value){
        let selected = this.newQuestion.answer.selected;
        let index:number = selected.indexOf(value);
        if(checked){
            if(index < 0){
                selected.push(value);
            }
        }else{
            inf(index > -1){
                selected.splice(index, 1);
            }
        }
    }

    ngOnInit(): void{
        super.ngOnInit();
        let options = this.newQuestion.options;
        if(!options || options.length == 0){
            options = [{
                key: 0,
                value:'选项1'
            }, {
                key: 1,
                value: '选项2'
            }];
        }

        if(!this.newQuestion.answer.selected){
            this.newQuestion.answer.selected = [];
        }

        this.key = options.length - 1;
    }
}

