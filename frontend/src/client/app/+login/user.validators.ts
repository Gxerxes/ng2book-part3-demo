import {  Control } from '@angular/common';

const REG = {
  USERNAME: /^\w{1,20}$/,
  PASSWORD: /^\w{6,20}$/
};

interface ValidationResult {
  [key:string]:boolean;
}

export class UserValidators {

  static username(control: Control): ValidationResult { 

    if (REG.USERNAME.test(control.value)) {
      return null;
    }

    return { 'invalid': true };
  }

}