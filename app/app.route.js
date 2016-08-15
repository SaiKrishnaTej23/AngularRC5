"use strict";
var router_1 = require('@angular/router');
var router_2 = require('@angular/router');
var home_component_1 = require('./home.component');
var about_component_1 = require('./about.component');
var APP_ROUTES = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(APP_ROUTES)
];
exports.routing = router_2.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.route.js.map