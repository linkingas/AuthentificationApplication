"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var home_component_1 = require("./home/home.component");
var app_component_1 = require("./app.component");
var pageNotFound_component_1 = require("./Others/pageNotFound.component");
var authentication_service_1 = require("./login/authentication.service");
var router_1 = require("@angular/router");
var login_component_1 = require("./login/login.component");
var index_1 = require("./_guards/index");
var appRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: '', component: home_component_1.HomeComponent, canActivate: [index_1.AuthGuard] },
    { path: '**', component: login_component_1.LoginComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, login_component_1.LoginComponent, pageNotFound_component_1.PageNotFoundComponent, home_component_1.HomeComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [authentication_service_1.AuthenticationService, index_1.AuthGuard]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map