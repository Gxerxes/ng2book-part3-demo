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
  describe('Login component', () => {


    it('should work',
      inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        tcb.createAsync(TestComponent)
          .then((rootTC: any) => {
            let loginDOMEl = rootTC.debugElement.children[0].nativeElement;

	    expect(getDOM().querySelectorAll(loginDOMEl, 'h2')[0].textContent).toEqual('Features');
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  directives: [LoginComponent],
  template: '<login></login>'
})
class TestComponent {}
