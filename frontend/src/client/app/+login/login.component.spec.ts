import { TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import {
  describe,
  expect,
  inject,
  it
} from '@angular/core/testing';
import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';

import { LoginComponent } from './login.component';

export function main() {
}

@Component({
  selector: 'test-cmp',
  directives: [LoginComponent],
  template: '<login></login>'
})
class TestComponent {}
