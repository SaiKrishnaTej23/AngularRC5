import { Component } from '@angular/core';
import {NavComponent} from './nav.component';
import {FooterComponent} from './footer.component';
//import {APP_ROUTER_PROVIDERS } from './app.route';
// import {HomeComponent} from './home.component'
// import {AboutComponent} from './about.component'
//import {ROUTER_DIRECTIVES} from '@angular/router'
  
@Component({
  selector: 'my-app',
  templateUrl: 'partials/app.component.html',
  directives:[NavComponent, FooterComponent]//,
  //providers:[ROUTER_DIRECTIVES]
})
export class AppComponent { }