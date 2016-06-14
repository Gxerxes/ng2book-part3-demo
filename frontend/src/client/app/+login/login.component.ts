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

/**
 * This class represents the lazy loaded LoginComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'login',
  providers: [UserService],
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent {

  form: ControlGroup;
  username: Control;
  
  constructor(private builder: FormBuilder, private userService: UserService) {
    
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
  onSubmit() {
    console.log(this.model);
    this.submitted = true;
    this.addUser(this.model.username, this.model.password);
  }

  addUser(username:string, password:string) {
    if (!username || !password) { return; }
    this.userService
        .addUser(username, password)
        .subscribe(
          user  => console.log('add user', user),
          error =>  console.log('error', error)
        );
  }

  active = true;
  newUser() {
    this.model = new User(2, '', '');
    this.active = false;
    setTimeout(()=> this.active=true, 0);
  }
}
