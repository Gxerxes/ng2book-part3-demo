import { TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import {
  describe,
  expect,
  inject,
  it
} from '@angular/core/testing';
import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';

import { RegComponent } from './reg.component';

export function main() {
}

@Component({
  selector: 'test-cmp',
  directives: [RegComponent],
  template: '<reg></reg>'
})
class TestComponent {}
