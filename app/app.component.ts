import { Component } from '@angular/core';
import {NavComponent} from './nav.component';
import {FooterComponent} from './footer.component';
@Component({
  selector: 'my-app',
  templateUrl: 'partials/app.component.html',
  directives:[NavComponent, FooterComponent]
})
export class AppComponent { }