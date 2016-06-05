import { FORM_DIRECTIVES } from '@angular/common';
import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import {Title} from './services/title';
import {XLarge} from './directives/x-large'
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,

  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'app'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title,
    HTTP_PROVIDERS
  ],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [
    FORM_DIRECTIVES,
    XLarge
  ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls:[ 'home.component.css'],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: 'home.component.html'
})
export class HomeComponent {

  // Set our default values
  data = { value: '' };
  // TypeScript public modifiers
  constructor(public title: Title) {

  }

  ngOnInit() {
    console.log('hello `Home` component');
    let swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true
    });
    // this.title.getData().subscribe(data => this.data = data);
  }

}
