"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var authentication_service_1 = require("../login/authentication.service");
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var current = JSON.parse(localStorage.getItem("currentUser"));
        var email = current && current.username ? current.username : '';
        var token = current && current.token ? current.token : '';
        this.checkIfConnected(email, token);
    };
    HomeComponent.prototype.checkIfConnected = function (email, token) {
        return this.authenticationService.GetUserCredentials(email, token)
            .subscribe(function (result) {
            if (result) {
                alert("connected");
            }
            else {
                alert("not connected");
            }
        });
    };
    HomeComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        // ReSharper disable once InvalidValue
        template: "\n         <h1>This is the home page</h1>\n\n<button (click)=\"logout()\"   class=\"width-35 pull-left btn btn-sm btn-primary\">\t<i class=\"ace-icon fa fa-key\"></i>\n      <span class=\"bigger-110\">Logout</span></button>\n          "
    }),
    __metadata("design:paramtypes", [router_1.Router, authentication_service_1.AuthenticationService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map