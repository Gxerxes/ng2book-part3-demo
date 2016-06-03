import { Component } from '@angular/core';
import {
  NgForm,
  Control,
  ControlGroup,
  Validators,
  FormBuilder,
  FORM_DIRECTIVES
} from '@angular/common';
import { User } from './user';
import { UserValidators } from './user.validators';

/**
 * This class represents the lazy loaded LoginComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent {

  form: ControlGroup;
  username: Control;
  
  constructor(private builder: FormBuilder) {
    
    this.username = new Control(
      "",
      Validators.compose([Validators.required, UserValidators.username])
    );
    
    this.form = builder.group({
      username:  this.username
    });
  }

  model = new User(1, 'admin', 'admin');

  submitted = false;
  onSubmit() { this.submitted = true; }

  active = true;
  newUser() {
    this.model = new User(2, '', '');
    this.active = false;
    setTimeout(()=> this.active=true, 0);
  }
}
