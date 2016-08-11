import {RouterConfig, provideRouter} from "@angular/router";

import { AboutComponent } from '../+about/index';
import { LoginComponent } from '../+login/index';
import { RegisterComponent } from '../+register/index';
import { HomeComponent } from '../+home/index';
import { HelpComponent } from '../+help/index';

export const AppRouters: RouterConfig = [
  {
    path: "",
    redirectTo: "home",
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "help",
    component: HelpComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(AppRouters)
];