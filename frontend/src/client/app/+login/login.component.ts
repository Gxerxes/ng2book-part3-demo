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
import { UserService } from './user.service';
import { UserValidators } from './user.validators';
import { ROUTER_DIRECTIVES } from '@angular/router';

/**
 * This class represents the lazy loaded LoginComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'login',
  providers: [UserService],
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class LoginComponent {

  form: ControlGroup;
  username: Control;
  password: Control;
  
  constructor(private builder: FormBuilder, private userService: UserService) {
    
    this.username = new Control(
      "",
      Validators.compose([Validators.required, UserValidators.username])
    );

    this.password = new Control(
      "",
      Validators.compose([Validators.required, UserValidators.password])
    );
    
    this.form = builder.group({
      username:  this.username,
      password:  this.password,
    });
  }

  model = new User('', '');

  logined = false;
  loginMessage = '';
  onSubmit() {
    this.addUser(this.model.username, this.model.password);
  }

  success(result:any) {
    if (result.success) {
      this.logined = true;
    } else {
      this.loginMessage = result.message;
    }
  }

  error(error:any) {
    console.error(error);
  }

  addUser(username:string, password:string) {
    if (!username || !password) { return; }
    this.userService
        .addUser(username, password)
        .subscribe(this.success, this.error);
  }

  active = true;
  reset() {
    this.model = new User('', '');
    this.active = false;
    this.loginMessage = '';
    setTimeout(()=> this.active=true, 0);
  }
}
