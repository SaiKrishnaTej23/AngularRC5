import { provideRouter, RouterConfig } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
const APP_ROUTES: RouterConfig = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent }
];

export const APP_ROUTER_PROVIDERS: any[] = [
    provideRouter(APP_ROUTES)
];
    
export const routing = RouterModule.forRoot(APP_ROUTES);