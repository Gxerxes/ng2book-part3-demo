import './rx.operators';
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
//import {RouterActive} from './common/directives/router-active';

import { FORM_PROVIDERS } from '@angular/common';
import { AboutComponent } from './+about/index';
import { LoginComponent } from './+login/index';
import { RegComponent } from './+reg/index';
import { HomeComponent } from './+home/index';
import { HelpComponent } from './+help/index';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'app',
  viewProviders: [...FORM_PROVIDERS],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  pipes: [],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular DEMO - 问卷系统';
  url = 'https://github.com/gf-rd';
  constructor(route: ActivatedRoute){
    console.log(route);
  }
}
