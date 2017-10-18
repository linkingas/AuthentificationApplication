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
require("rxjs/add/operator/map");
var http_1 = require("@angular/http");
var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var url = 'http://localhost:11857/api/Authenticate';
        var model = { Email: username, password: password };
        var body = JSON.stringify(model);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(url, body, options)
            .map(function (response) {
            var token = response.json() && response.json().token;
            if (token) {
                var email = response.json() && response.json().dbUser.email;
                localStorage.setItem('currentUser', JSON.stringify({ username: email, token: token }));
                return true;
            }
            else
                return false;
        });
    };
    AuthenticationService.prototype.GetUserCredentials = function (email, token) {
        var url = 'http://localhost:11857/api/Confidential';
        var model = { Email: email, password: "", Token: token };
        var body = JSON.stringify(model);
        var headers = new http_1.Headers({
            'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token
        });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(url, body, options)
            .map(function (response) {
            if (response.json())
                return true;
            return false;
        });
    };
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map