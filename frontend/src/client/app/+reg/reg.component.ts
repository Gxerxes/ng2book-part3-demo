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
 * This class represents the lazy loaded RegComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'reg',
  providers: [UserService],
  templateUrl: 'reg.component.html',
  styleUrls: ['reg.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class RegComponent {

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

  reged = false;
  regMessage = '';
  onSubmit() {
    this.addUser(this.model.username, this.model.password);
  }

  addUser(username:string, password:string) {
    if (!username || !password) { return; }
    this.userService
        .addUser(username, password)
        .subscribe(
          (data) => {
            if (data.success) {
              this.reged = true;
            } else {
              this.regMessage = data.message;
            }
          },
          error =>  console.log('error', error)
        );
  }

  active = true;
  reset() {
    this.model = new User('', '');
    this.active = false;
    this.regMessage = '';
    setTimeout(()=> this.active=true, 0);
  }
}
