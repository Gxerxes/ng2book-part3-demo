//问题类型
export const enum QuestionType{
  Text,
  SingleSelect,
  MultiSelect,
  Score
}

export interface QuestionModel{
  desc:string; //问题标题（描述）
  type:QuestionType; //问题类型
  options?:any[];//问题选项
  answer:any; //问题答案
}
