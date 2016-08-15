import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { routing, APP_ROUTER_PROVIDERS} from './app.route';
import { AppComponent }  from './app.component';
//import {ROUTER_DIRECTIVES} from '@angular/router'
import {HomeComponent} from './home.component'
import {AboutComponent} from './about.component'

@NgModule({
  imports:      [ BrowserModule 
  //, routing
  ],
  declarations: [ AppComponent, HomeComponent, AboutComponent],
  //providers:    [APP_ROUTER_PROVIDERS,ROUTER_DIRECTIVES],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }