webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'ECE496';
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_service_auth_guard_service__ = __webpack_require__("../../../../../src/app/auth/service/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_service_auth_service__ = __webpack_require__("../../../../../src/app/auth/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__auth_auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_4__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* _ROUTES */])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__auth_service_auth_guard_service__["a" /* AuthGuardService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_register_register_component__ = __webpack_require__("../../../../../src/app/auth/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_notfound_notfound_component__ = __webpack_require__("../../../../../src/app/auth/notfound/notfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/home/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_search_search_component__ = __webpack_require__("../../../../../src/app/home/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_faq_faq_component__ = __webpack_require__("../../../../../src/app/home/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_create_create_component__ = __webpack_require__("../../../../../src/app/home/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_users_user_list_user_list_component__ = __webpack_require__("../../../../../src/app/home/users/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_users_user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/home/users/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_users_user_new_user_new_component__ = __webpack_require__("../../../../../src/app/home/users/user-new/user-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_users_user_edit_user_edit_component__ = __webpack_require__("../../../../../src/app/home/users/user-edit/user-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_teams_team_list_team_list_component__ = __webpack_require__("../../../../../src/app/home/teams/team-list/team-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_teams_team_create_team_create_component__ = __webpack_require__("../../../../../src/app/home/teams/team-create/team-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_teams_team_profile_team_profile_component__ = __webpack_require__("../../../../../src/app/home/teams/team-profile/team-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_teams_team_edit_team_edit_component__ = __webpack_require__("../../../../../src/app/home/teams/team-edit/team-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_projects_projectListing_projectListing_component__ = __webpack_require__("../../../../../src/app/home/projects/projectListing/projectListing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_projects_projectCreate_projectCreate_component__ = __webpack_require__("../../../../../src/app/home/projects/projectCreate/projectCreate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__home_projects_projectEdit_projectEdit_component__ = __webpack_require__("../../../../../src/app/home/projects/projectEdit/projectEdit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__home_projects_projectDetail_projectDetail_component__ = __webpack_require__("../../../../../src/app/home/projects/projectDetail/projectDetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__home_projects_project_profile_project_profile_component__ = __webpack_require__("../../../../../src/app/home/projects/project-profile/project-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__home_users_user_service_user_guard_service__ = __webpack_require__("../../../../../src/app/home/users/user-service/user-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__home_teams_team_service_team_guard_service__ = __webpack_require__("../../../../../src/app/home/teams/team-service/team-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__home_projects_project_service_project_guard_service__ = __webpack_require__("../../../../../src/app/home/projects/project-service/project-guard.service.ts");

























var _ROUTES = [
    // Main redirect
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
        children: [
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_5__home_dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { path: 'search', component: __WEBPACK_IMPORTED_MODULE_6__home_search_search_component__["a" /* SearchComponent */] },
            { path: 'faq', component: __WEBPACK_IMPORTED_MODULE_7__home_faq_faq_component__["a" /* FaqComponent */] },
            { path: 'create', component: __WEBPACK_IMPORTED_MODULE_8__home_create_create_component__["a" /* CreateComponent */] },
            { path: 'users', component: __WEBPACK_IMPORTED_MODULE_9__home_users_user_list_user_list_component__["a" /* UserListComponent */] },
            { path: 'users/create', component: __WEBPACK_IMPORTED_MODULE_11__home_users_user_new_user_new_component__["a" /* UserNewComponent */] },
            { path: 'users/:uid', canActivate: [__WEBPACK_IMPORTED_MODULE_22__home_users_user_service_user_guard_service__["a" /* UserGuardService */]], component: __WEBPACK_IMPORTED_MODULE_10__home_users_user_profile_user_profile_component__["a" /* UserProfileComponent */] },
            { path: 'users/:uid/edit', component: __WEBPACK_IMPORTED_MODULE_12__home_users_user_edit_user_edit_component__["a" /* UserEditComponent */] },
            { path: 'teams', component: __WEBPACK_IMPORTED_MODULE_13__home_teams_team_list_team_list_component__["a" /* TeamListComponent */] },
            { path: 'teams/create', component: __WEBPACK_IMPORTED_MODULE_14__home_teams_team_create_team_create_component__["a" /* TeamCreateComponent */] },
            { path: 'teams/:tid', canActivate: [__WEBPACK_IMPORTED_MODULE_23__home_teams_team_service_team_guard_service__["a" /* TeamGuardService */]], component: __WEBPACK_IMPORTED_MODULE_15__home_teams_team_profile_team_profile_component__["a" /* TeamProfileComponent */] },
            { path: 'teams/:tid/edit', canActivate: [__WEBPACK_IMPORTED_MODULE_23__home_teams_team_service_team_guard_service__["a" /* TeamGuardService */]], component: __WEBPACK_IMPORTED_MODULE_16__home_teams_team_edit_team_edit_component__["a" /* TeamEditComponent */] },
            { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_17__home_projects_projectListing_projectListing_component__["a" /* ProjectListingComponent */] },
            { path: 'projects/create', component: __WEBPACK_IMPORTED_MODULE_18__home_projects_projectCreate_projectCreate_component__["a" /* ProjectCreateComponent */] },
            { path: 'projects/projectEdit/:pid', component: __WEBPACK_IMPORTED_MODULE_19__home_projects_projectEdit_projectEdit_component__["a" /* ProjectEditComponent */] },
            { path: 'projects/:pid', canActivate: [__WEBPACK_IMPORTED_MODULE_24__home_projects_project_service_project_guard_service__["a" /* ProjectGuardService */]], component: __WEBPACK_IMPORTED_MODULE_20__home_projects_projectDetail_projectDetail_component__["a" /* ProjectDetailComponent */] },
            { path: 'projects/project-profile/:uid', component: __WEBPACK_IMPORTED_MODULE_21__home_projects_project_profile_project_profile_component__["a" /* ProjectProfileComponent */] }
        ]
    },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_0__auth_auth_component__["a" /* AuthComponent */],
        children: [
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__auth_login_login_component__["a" /* LoginComponent */] },
            { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__auth_register_register_component__["a" /* RegisterComponent */] },
            { path: 'notfound', component: __WEBPACK_IMPORTED_MODULE_3__auth_notfound_notfound_component__["a" /* NotfoundComponent */] }
        ]
    },
    { path: '**', redirectTo: 'login' }
];


/***/ }),

/***/ "../../../../../src/app/auth/auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"color-line\"></div> -->\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthComponent = (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-auth',
            template: __webpack_require__("../../../../../src/app/auth/auth.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_shared_shared_module__ = __webpack_require__("../../../../../src/app/home/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_auth_service__ = __webpack_require__("../../../../../src/app/auth/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_auth_guard_service__ = __webpack_require__("../../../../../src/app/auth/service/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__register_register_component__ = __webpack_require__("../../../../../src/app/auth/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__notfound_notfound_component__ = __webpack_require__("../../../../../src/app/auth/notfound/notfound.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__home_shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__auth_component__["a" /* AuthComponent */],
                __WEBPACK_IMPORTED_MODULE_10__notfound_notfound_component__["a" /* NotfoundComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__service_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_7__service_auth_guard_service__["a" /* AuthGuardService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__auth_component__["a" /* AuthComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterComponent */],
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"color-line\"></div>\n\n<div class=\"login-container\" *ngIf=\"cred\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"text-center m-b-md\">\n                <h3>PLEASE LOGIN TO ECE496</h3>\n            </div>\n            <div class=\"hpanel\">\n                <div class=\"panel-body\">\n                    <form (ngSubmit)=\"submit()\" #loginForm=\"ngForm\">\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"username\">Username</label>\n                            <input [(ngModel)]='cred.username' type=\"text\" placeholder=\"example@gmail.com\" title=\"Please enter you username\" required=\"\"\n                                value=\"\" name=\"username\" class=\"form-control\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"password\">Password</label>\n                            <input [(ngModel)]='cred.password' type=\"password\" title=\"Please enter your password\" placeholder=\"******\" required=\"\" value=\"\"\n                                name=\"password\" class=\"form-control\">\n                        </div>\n                        <!-- <div class=\"form-group\">\n                            <input type=\"checkbox\" class=\"i-checks\" checked> Remember login\n                            <p class=\"help-block small\">(if this is a private computer)</p>\n                        </div> -->\n                        <button class=\"btn btn-success btn-block\">Login</button>\n                        <a class=\"btn btn-default btn-block\" [routerLink]=\"['/register']\">Register</a>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("../../../../../src/app/auth/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_shared_service_home_service__ = __webpack_require__("../../../../../src/app/home/shared/service/home.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(_auth, _home, _router) {
        this._auth = _auth;
        this._home = _home;
        this._router = _router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cred = {
            username: "",
            password: ""
        };
        this.error = false;
        // if (this._auth.authed()) {
        //   this._router.navigate(['/dashboard'])
        // }
        this._home.get4id().subscribe(function (_data) {
            console.log("authed already");
            _this._router.navigate(['/dashboard']);
        });
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this._auth.login(this.cred).subscribe(function (_data) {
            console.log(document.cookie);
            _this._router.navigate(['/dashboard']);
        }, function (err) {
            if (err.status == 401) {
                swal({
                    title: "Unauthorized!",
                    text: err.error.message,
                    type: "error"
                });
            }
            else {
                swal({
                    title: "Unknow error!",
                    text: "Please clear cache & login again!",
                    type: "error"
                });
            }
        });
        //  this._router.navigate(['/dashboard']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/auth/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__home_shared_service_home_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/notfound/notfound.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/notfound/notfound.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"color-line\"></div>\n<!-- <div class=\"back-link\">\n    <a routerLink=\"['/dashboard']\" class=\"btn btn-primary\">Back to Dashboard</a>\n</div> -->\n\n<div class=\"error-container\">\n  <i class=\"pe-7s-way text-success big-icon\"></i>\n  <h1>404</h1>\n  <strong>Page Not Found</strong>\n  <p>\n    Sorry, but the page you are looking for has note been found. Try checking the URL for error, then hit the refresh button\n    on your browser or try found something else in our app.\n  </p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/auth/notfound/notfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotfoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notfound',
            template: __webpack_require__("../../../../../src/app/auth/notfound/notfound.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"register-container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"text-center m-b-md\">\n                <h3>Registration</h3>\n            </div>\n            <div class=\"hpanel\">\n                <div class=\"panel-body\">\n                    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n                        <div class=\"row\">\n                            <div class=\"form-group col-lg-12\">\n                                <label>First name</label>\n                                <div class=\"alert alert-danger\" *ngIf=\"(form.get('first').touched || form.get('first').dirty) && form.get('first').errors\">\n                                    <div *ngIf=\"form.get('first').errors.required\">Please enter your first name</div>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" id=\"first\" formControlName=\"first\" [formGroup]=\"form\" />\n                            </div>\n                            <div class=\"form-group col-lg-12\">\n                                <label>Last name</label>\n                                <div class=\"alert alert-danger\" *ngIf=\"(form.get('last').touched || form.get('last').dirty) && form.get('last').errors\">\n                                    <div *ngIf=\"form.get('last').errors.required\">Please enter your last name</div>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" id=\"last\" formControlName=\"last\" [formGroup]=\"form\" />\n                            </div>\n                            <div class=\"form-group col-lg-12\">\n                                <label>Email Address</label>\n                                <div class=\"alert alert-danger\" *ngIf=\"(form.get('email').touched || form.get('email').dirty) && form.get('email').errors\">\n                                    <div *ngIf=\"form.get('email').errors.required\">Please enter your email address</div>\n                                    <div *ngIf=\"form.get('email').errors.pattern\">Please enter a valid email address</div>\n                                </div>\n                                <input type=\"email\" class=\"form-control\" id=\"email\" formControlName=\"email\" [formGroup]=\"form\" />\n                            </div>\n                            <div class=\"form-group col-lg-12\">\n                                <label>Password</label>\n                                <div class=\"alert alert-danger\" *ngIf=\"(form.get('password').touched || form.get('password').dirty) && form.get('password').errors\">\n                                    <div *ngIf=\"form.get('password').errors.required\">Please enter your password</div>\n                                    <div *ngIf=\"form.get('password').errors.minlength\">Please enter a password with at least 8 characters</div>\n                                </div>\n                                <input type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"password\" [formGroup]=\"form\" />\n                            </div>\n                            <div class=\"form-group col-lg-12\">\n                                <label>Confirm Password</label>\n                                <div class=\"alert alert-danger\" *ngIf=\"(form.controls.confirmPassword.touched || form.controls.confirmPassword.dirty) && form.get('confirmPassword').errors \">\n                                    <div *ngIf=\"form.controls.confirmPassword.errors?.required\">Please re-enter your password</div>\n                                    <div *ngIf=\"form.controls.confirmPassword.errors?.checkPwd\">Password not match</div>\n                                </div>\n                                <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" formControlName=\"confirmPassword\" [formGroup]=\"form\" />\n                            </div>\n                            <div class=\"form-group col-lg-12\">\n                                <div class=\"alert alert-danger\" *ngIf=\"form.controls.role.touched && form.get('role').errors\">Please select your role</div>\n                                <label>I am a </label>\n                                <br>\n                                <label class=\"radio-inline\">\n                                    <input type=\"radio\" id=\"roleid2\" value=\"2\" formControlName=\"role\"> Student </label>\n                                <label class=\"radio-inline\">\n                                    <input type=\"radio\" id=\"roleid1\" value=\"1\" formControlName=\"role\"> Supervisor </label>\n                            </div>\n                        </div>\n                        <div class=\"text-center\">\n                            <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!form.valid\">Register</button>\n                            <button class=\"btn btn-default\" [routerLink]=\"['/login']\">Cancel</button>\n                        </div>\n\n\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/auth/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_auth_service__ = __webpack_require__("../../../../../src/app/auth/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




function checkPwd(AC) {
    var password = AC.get('password').value;
    var confirmPassword = AC.get('confirmPassword').value;
    if (password != confirmPassword) {
        AC.get('confirmPassword').setErrors({ checkPwd: true });
    }
    else {
        return null;
    }
}
var RegisterComponent = (function () {
    function RegisterComponent(fb, _auth, _router) {
        this.fb = fb;
        this._auth = _auth;
        this._router = _router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.roleneeded = false;
        this.role = [
            {
                "label": 'Student',
                "value": false
            },
            {
                "label": 'Professor',
                "value": false
            },
            {
                "label": 'Company',
                "value": false
            },
        ];
        this.form = this.fb.group({
            first: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]],
            last: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(8)]],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$")]],
            role: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
        }, {
            validator: checkPwd
        });
    };
    // selectrole(name) {
    //   for (let x = 0; x < this.role.length; x++) {
    //     if (this.role === this.role[x].label) {
    //       this.roleneeded = true;
    //       this.role[x].value = true;
    //     } else {
    //       this.roleneeded = false;
    //       this.role[x].value = false;
    //     }
    //   }
    // }
    RegisterComponent.prototype.onSubmit = function () {
        // let temp = " ";
        // for (let i = 0; i < this.role.length; i++) {
        //   if (this.role[i].value === true)
        //     temp = this.role[i].label;
        // }
        //console.log("role",this.role);
        var _this = this;
        this.User = {
            "username": this.form.value.email,
            "last_name": this.form.value.last,
            "first_name": this.form.value.first,
            "password": this.form.value.password,
            "email": this.form.value.email,
            "role": this.form.value.role
        };
        console.log("Reg Comp", this.User);
        this._auth.register(this.User).subscribe(function (_data) {
            // console.log("register comp", _data);
            swal({
                title: "Good Job!",
                text: "Please login",
                type: "success"
            });
            _this._router.navigate(['/login']);
        }, function (err) {
            swal({
                title: "Username already used",
                text: "Please enter another username",
                type: "error"
            });
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/auth/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/service/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth/service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(_router, _auth) {
        this._router = _router;
        this._auth = _auth;
    }
    AuthGuardService.prototype.canActivate = function () {
        // if (!this._auth.authed()) {
        //   // swal({
        //   //   title: "Not Logged In",
        //   //   type: "error"
        //   // });
        //   this._router.navigate(['/login']);
        //   return false;
        // }
        // this._auth.authed().subscribe(_data => {
        //   console.log("AuthGuard - canAct", _data);
        //   return true;
        // }, _err => {
        //   console.log("AuthGuard - Error", _err);
        //   return false;
        // });
        return true;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/service/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__endpoint__ = __webpack_require__("../../../../../src/app/endpoint.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthService = (function () {
    function AuthService(_http, _router) {
        this._http = _http;
        this._router = _router;
        this.url = __WEBPACK_IMPORTED_MODULE_7__endpoint__["a" /* endpoint */];
        this.rest = "/auth";
    }
    AuthService.prototype.handleError = function (err) {
        console.log(err.message);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err.message);
    };
    AuthService.prototype.httpOptions = function () {
        return {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
            }),
            withCredentials: true
        };
    };
    AuthService.prototype.authed = function () {
        // ping server with token
        console.log('checking token');
        return this._http.get(this.url + "/team_finder/getlogin", this.httpOptions());
    };
    AuthService.prototype.login = function (credentials) {
        return this._http.post(this.url + this.rest + "/login/", credentials, this.httpOptions());
    };
    AuthService.prototype.logout = function () {
        return this._http.get(this.url + this.rest + "/logout/", this.httpOptions());
    };
    AuthService.prototype.register = function (regform) {
        return this._http.post(this.url + this.rest + "/register/", regform, this.httpOptions());
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/endpoint.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return endpoint; });
var endpoint = "http://api.ece496.com";
//export const endpoint = "http://localhost:8000";


/***/ }),

/***/ "../../../../../src/app/home/create/create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <li>\n  <a [routerLink]=\"['/teams/create']\">New Team</a>\n</li>\n<li>\n  <a [routerLink]=\"['/projects/create']\">New Project</a>\n</li> -->\n<div class=\"small-header\">\n  <div class=\"hpanel\">\n    <div class=\"panel-body\">\n      <div id=\"hbreadcrumb\" class=\"pull-right\">\n        <ol class=\"hbreadcrumb breadcrumb\">\n          <li>\n            <a [routerLink]=\"['/dashboard']\">Dashboard</a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/create']\">Create</a>\n          </li>\n\n        </ol>\n      </div>\n      <h2 class=\"font-light m-b-xs\">\n        Create\n      </h2>\n      <small>Create your own project and team!</small>\n    </div>\n  </div>\n</div>\n<div class=\"content\">\n  <div style=\"margin-bottom:2%\">\n\n  </div>\n  <div class=\"row text-center\">\n    <div class=\"col-lg-6\" style=\"height:385px\">\n      <div class=\"hpanel hblue\">\n        <div class=\"panel-body\">\n          <h4>\n            <strong>Create</strong>\n          </h4>\n          <h4>\n            <strong>Your</strong>\n          </h4>\n          <br/>\n\n          <!--<span class=\"label label-info pull-right\">NEW</span>-->\n          <button [routerLink]=\"['/projects/create']\" type=\"button\" class=\"btn btn-info btn-sm\">PROJECT</button>\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"col-lg-6\" style=\"height:385px\">\n      <div class=\"hpanel hyellow\">\n        <div class=\"panel-body\">\n          <h4>\n            <strong>Create</strong>\n          </h4>\n          <h4>\n            <strong>Your</strong>\n          </h4>\n          <br/>\n          <!--<span class=\"label label-info pull-right\">NEW</span>-->\n          <button [routerLink]=\"['/teams/create']\" type=\"button\" class=\"btn btn-warning btn-sm\">TEAM</button>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateComponent = (function () {
    function CreateComponent() {
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create',
            template: __webpack_require__("../../../../../src/app/home/create/create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 text-center welcome-message\">\n            <h2>\n                Welcome to ECE496\n            </h2>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"hpanel\">\n                <div class=\"panel-heading\">\n                    <div class=\"panel-tools\">\n                    </div>\n                    Discover Projects, Users and Teams\n                </div>\n                <div class=\"panel-body\">\n                    <div class=\"row\">\n                        <div class=\"col-md-4 text-center\">\n                            <div class=\"hpanel hbgblue\">\n                                <div class=\"panel-body\">\n                                    <div class=\"text-center\">\n                                        <h3 [routerLink]=\"['../projects']\">Available Projects</h3>\n                                        <p class=\"text-big font-light\">\n                                            {{project_total}}\n                                        </p>\n\n                                        <p class=\"btn-group\">\n                                            <button [routerLink]=\"['../projects']\" class=\"btn btn-xs btn-default\">View </button>\n                                        </p>\n\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <div class=\"hpanel hbggreen\">\n                                <div class=\"panel-body\">\n                                    <div class=\"text-center\">\n                                        <h3>Available Users</h3>\n                                        <p class=\"text-big font-light\">\n                                            {{user_total}}\n                                        </p>\n                                        <p class=\"btn-group\">\n                                            <button [routerLink]=\"['../users']\" class=\"btn btn-xs btn-default\">View </button>\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <div class=\"hpanel hbgyellow\">\n                                <div class=\"panel-body\">\n                                    <div class=\"text-center\">\n                                        <h3>Available Teams</h3>\n                                        <p class=\"text-big font-light\">\n                                            {{team_total}}\n                                        </p>\n                                        <p class=\"btn-group\">\n                                            <button [routerLink]=\"['../teams']\" class=\"btn btn-xs btn-default\">View </button>\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n                <div class=\"panel-footer\">\n                    <!-- <span class=\"pull-right\">\n                          You have two new messages from <a href=\"\">Monica Bolt</a>\n                    </span> -->\n                    Last update: {{date | date:'yyyy-MM-dd HH:mm'}}\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"hpanel\">\n                <div *ngIf=\"timeline_ready\" class=\"v-timeline vertical-container animate-panel\" data-child=\"vertical-timeline-block\" data-delay=\"1\">\n                    <div class=\"vertical-timeline-block\">\n                        <div class=\"vertical-timeline-icon navy-bg\">\n                            <i class=\"fa fa-calendar\"></i>\n                        </div>\n                        <div class=\"vertical-timeline-content\">\n                            <div class=\"p-sm\">\n                                <form action=\"#\" id=\"dashboardForm\">\n                                    <div class=\"row\">\n                                        <div class=\"form-group col-lg-11\">\n                                            <input id=\"tlcontent\" type=\"text\" class=\"form-control\">\n                                        </div>\n                                        <div class=\"col-lg-1 text-center\">\n                                            <button (click)=\"post_timeline()\" class=\"btn btn-info btn-outline\">Post</button>\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"vertical-timeline-block\" *ngFor=\"let item of timeline\">\n                        <div class=\"vertical-timeline-icon navy-bg\">\n                            <i class=\"fa fa-calendar\"></i>\n                        </div>\n                        <div class=\"vertical-timeline-content\">\n                            <div class=\"p-sm\">\n                                <span class=\"vertical-date pull-right\">\n                                    <small>{{item.created | date:'yyyy-MM-dd@ h:m:s'}}</small>\n                                </span>\n\n                                <h2>{{item.owner.user.first_name}} {{item.owner.user.last_name}}</h2>\n                                <p>\n                                    {{item.content}}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__projects_project_service_project_service__ = __webpack_require__("../../../../../src/app/home/projects/project-service/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_user_service_user_service__ = __webpack_require__("../../../../../src/app/home/users/user-service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teams_team_service_team_service__ = __webpack_require__("../../../../../src/app/home/teams/team-service/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_home_service__ = __webpack_require__("../../../../../src/app/home/shared/service/home.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(_home, _projectService, _UserService, _TeamService) {
        this._home = _home;
        this._projectService = _projectService;
        this._UserService = _UserService;
        this._TeamService = _TeamService;
        this.timeline_ready = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // this._home.getTimeline().subscribe(_data => {
        //   this.timeline = _data;
        // })
        var _this = this;
        this._projectService.getOpenProject()
            .subscribe(function (_projects) {
            _this.project_total = _projects.count;
            //_projects = __projects['projects'];
            //this._projects = __projects['projects'];
            //console.log(typeof this.project_total);
            _this.data = _this.project_total;
            _this.data_to_render = _this.data;
        });
        this._UserService.getRealUsers()
            .subscribe(function (_users) {
            _this.user_total = _users.length;
            //_projects = __projects['projects'];
            //this._projects = __projects['projects'];
            // console.log(this.projects);
            _this.data = _this.user_total;
            _this.data_to_render = _this.data;
        });
        this._TeamService.getRealTeams()
            .subscribe(function (_teams) {
            _this.team_total = _teams.length;
            //_projects = __projects['projects'];
            //this._projects = __projects['projects'];
            // console.log(this.projects);
            _this.data = _this.team_total;
            _this.data_to_render = _this.data;
        });
        this._home.get4id().subscribe(function (_ids) {
            _this._UserService.getRealUser(_ids.user).subscribe(function (_data) {
                _this.user = {
                    id: _ids.user,
                    profile: _ids.profile,
                    first: _data.first_name,
                    last: _data.last_name,
                };
            });
        });
        this._home.getTimeline().subscribe(function (__data) {
            _this.timeline = __data;
            _this.timeline_ready = true;
        });
        this.date = new Date;
        this.data = this.date;
        this.data_to_render = this.data;
    };
    DashboardComponent.prototype.post_timeline = function () {
        var _this = this;
        if (!$('#tlcontent').val().trim())
            return;
        var item = {
            "userprofile_id": this.user.profile,
            "content": $('#tlcontent').val(),
        };
        // this.timeline.unshift(item);
        this._home.postTimeline(item).subscribe(function (__res) {
            _this._home.getTimeline().subscribe(function (__data) {
                _this.timeline = __data;
            });
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/home/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__shared_service_home_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_1__projects_project_service_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_2__users_user_service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__teams_team_service_team_service__["a" /* TeamService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/faq/faq.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/faq/faq.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"small-header \">\n  <div class=\"hpanel\">\n    <div class=\"panel-body\">\n\n\n      <div id=\"hbreadcrumb\" class=\"pull-right\">\n        <ol class=\"hbreadcrumb breadcrumb\">\n          <li>\n            <a [routerLink]=\"['/dashboard']\">Dashboard</a>\n          </li>\n          <li class=\"active\">\n            <span>FAQ</span>\n          </li>\n        </ol>\n      </div>\n      <h2 class=\"font-light m-b-xs\">\n        FAQ\n      </h2>\n    </div>\n  </div>\n</div>\n\n<div class=\"content\">\n\n\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"hpanel\">\n        <div class=\"panel-body\">\n          <div class=\"\">Frequently asked questions. Find the answer or contact with us on support email.</div>\n          <div class=\"m-t-sm\">\n            <div class=\"input-group\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Search question..\">\n              <div class=\"input-group-btn\">\n                <button class=\"btn btn-default\">\n                  <i class=\"fa fa-search\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <div class=\"hpanel panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n        <div class=\"panel-body\">\n          <h4 class=\"m-t-none m-b-none\">General questions</h4>\n          <small class=\"text-muted\">All general questions about our app.</small>\n        </div>\n        <div class=\"panel-body\">\n          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#q1\" aria-expanded=\"true\">\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\n            Where can I purchase Homer theme ?\n          </a>\n          <div id=\"q1\" class=\"panel-collapse collapse\">\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.\n          </div>\n        </div>\n        <div class=\"panel-body\">\n          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#q2\" aria-expanded=\"true\">\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\n            Many desktop publishing packages ?\n          </a>\n          <div id=\"q2\" class=\"panel-collapse collapse\">\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. </div>\n        </div>\n        <div class=\"panel-body\">\n          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#q3\" aria-expanded=\"true\">\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\n            Lorem Ipsum available, but the majority have ?\n          </a>\n          <div id=\"q3\" class=\"panel-collapse collapse\">\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. </div>\n        </div>\n        <div class=\"panel-body\">\n          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#q4\" aria-expanded=\"true\">\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\n            The generated Lorem Ipsum is therefore always ?\n          </a>\n          <div id=\"q4\" class=\"panel-collapse collapse\">\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. </div>\n        </div>\n        <div class=\"panel-body\">\n          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#q5\" aria-expanded=\"true\">\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\n            College in Virginia, looked up one of ?\n          </a>\n          <div id=\"q5\" class=\"panel-collapse collapse\">\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. </div>\n        </div>\n        <div class=\"panel-body\">\n          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#q6\" aria-expanded=\"true\">\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\n            Lorem Ipsum is simply dummy ?\n          </a>\n          <div id=\"q6\" class=\"panel-collapse collapse\">\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. </div>\n        </div>\n        <div class=\"panel-body\">\n          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#q7\" aria-expanded=\"true\">\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\n            The standard chunk of Lorem Ipsum used since ?\n          </a>\n          <div id=\"q7\" class=\"panel-collapse collapse\">\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. </div>\n        </div>\n        <div class=\"panel-body\">\n          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#q8\" aria-expanded=\"true\">\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\n            Many desktop publishing ?\n          </a>\n          <div id=\"q8\" class=\"panel-collapse collapse\">\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. </div>\n        </div>\n        <div class=\"panel-body\">\n          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#q9\" aria-expanded=\"true\">\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\n            Cicero are also reproduced in their exact original form, accompanied ?\n          </a>\n          <div id=\"q9\" class=\"panel-collapse collapse\">\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6\">\n      <div class=\"hpanel panel-group\" id=\"accordion2\" role=\"tablist\" aria-multiselectable=\"true\">\n        <div class=\"panel-body\">\n          <h4 class=\"m-t-none m-b-none\">Technical questions</h4>\n          <small class=\"text-muted\">All technical questions about our app.</small>\n        </div>\n        <div class=\"panel-body\">\n          <a data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#q10\" aria-expanded=\"true\">\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\n            The point of using Lorem Ipsum ?\n          </a>\n          <div id=\"q10\" class=\"panel-collapse collapse\">\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.\n          </div>\n        </div>\n        <div class=\"panel-body\">\n          <a data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#q11\" aria-expanded=\"true\">\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\n            Lorem Ipsum passage, and going through the cites ?\n          </a>\n          <div id=\"q11\" class=\"panel-collapse collapse\">\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. </div>\n        </div>\n        <div class=\"panel-body\">\n          <a data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#q12\" aria-expanded=\"true\">\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\n            Many desktop publishing packages and ?\n          </a>\n          <div id=\"q12\" class=\"panel-collapse collapse\">\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. </div>\n        </div>\n        <div class=\"panel-body\">\n          <a data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#q13\" aria-expanded=\"true\">\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\n            Aldus PageMaker including versions of Lorem Ipsum ?\n          </a>\n          <div id=\"q13\" class=\"panel-collapse collapse\">\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. </div>\n        </div>\n        <div class=\"panel-body\">\n          <a data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#q14\" aria-expanded=\"true\">\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\n            Nor again is there anyone who ?\n          </a>\n          <div id=\"q14\" class=\"panel-collapse collapse\">\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. </div>\n        </div>\n        <div class=\"panel-body\">\n          <a data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#q15\" aria-expanded=\"true\">\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\n            Neque porro quisquam est, qui dolorem ipsum ?\n          </a>\n          <div id=\"q15\" class=\"panel-collapse collapse\">\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. </div>\n        </div>\n        <div class=\"panel-body\">\n          <a data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#q16\" aria-expanded=\"true\">\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\n            Temporibus autem quibusdam ?\n          </a>\n          <div id=\"q16\" class=\"panel-collapse collapse\">\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. </div>\n        </div>\n        <div class=\"panel-body\">\n          <a data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#q17\" aria-expanded=\"true\">\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\n            Et harum quidem rerum facilis ?\n          </a>\n          <div id=\"q17\" class=\"panel-collapse collapse\">\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. </div>\n        </div>\n        <div class=\"panel-body\">\n          <a data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#q18\" aria-expanded=\"true\">\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\n            The wise man therefore always ?\n          </a>\n          <div id=\"q18\" class=\"panel-collapse collapse\">\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/faq/faq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqComponent = (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-faq',
            template: __webpack_require__("../../../../../src/app/home/faq/faq.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/faq/faq.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar *ngIf='app_ready'></app-nav-bar>\n\n<!-- Wrapper-->\n<div id=\"wrapper\" *ngIf='app_ready'>\n    <app-side-bar></app-side-bar>\n    <router-outlet></router-outlet>\n    <!-- Footer-->\n    <footer class=\"footer\">\n        <span class=\"pull-right\">\n            ECE496\n        </span>\n\n    </footer>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service_auth_service__ = __webpack_require__("../../../../../src/app/auth/service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(_router, _auth) {
        this._router = _router;
        this._auth = _auth;
        this.app_ready = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Home Component");
        this._auth.authed().subscribe(function (_data) {
            console.log("AuthGuard - canAct", _data);
            _this.app_ready = true;
        }, function (_err) {
            console.log("AuthGuard - Error", _err);
            _this._router.navigate(['/login']);
            _this.app_ready = false;
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service_auth_service__["a" /* AuthService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/home/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_message_module__ = __webpack_require__("../../../../../src/app/home/messages/message.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_user_module__ = __webpack_require__("../../../../../src/app/home/users/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__teams_team_module__ = __webpack_require__("../../../../../src/app/home/teams/team.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__projects_project_module__ = __webpack_require__("../../../../../src/app/home/projects/project.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search_service__ = __webpack_require__("../../../../../src/app/home/search/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/home/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_search_component__ = __webpack_require__("../../../../../src/app/home/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__faq_faq_component__ = __webpack_require__("../../../../../src/app/home/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__create_create_component__ = __webpack_require__("../../../../../src/app/home/create/create.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// import { HOME_ROUTES } from './home.routes';
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__messages_message_module__["a" /* MessageModule */],
                __WEBPACK_IMPORTED_MODULE_4__users_user_module__["a" /* UserModule */],
                __WEBPACK_IMPORTED_MODULE_5__teams_team_module__["a" /* TeamModule */],
                __WEBPACK_IMPORTED_MODULE_6__projects_project_module__["a" /* ProjectModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_router__["c" /* RouterModule */]
                //HOME_ROUTES
                // RouterModule.forChild([
                //   { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                //   //{ path: '**', redirectTo: 'dashboard'}, //component: NotFoundComponent},
                //   { path: 'dashboard', component: DashboardComponent },
                //   { path: 'search', component: SearchComponent },
                //   { path: 'faq', component: FaqComponent },
                // ])
                // RouterModule.forChild([
                //   {
                //     path: '', canActivate: [AuthGuardService], component: HomeComponent,
                //     children: [
                //       { path: 'dashboard', component: DashboardComponent },
                //       { path: 'search', component: SearchComponent },
                //       { path: 'faq', component: FaqComponent }
                //     ]
                //   },
                //   { path: '**', redirectTo: ''}, //component: NotFoundComponent},
                // ])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_11__faq_faq_component__["a" /* FaqComponent */],
                __WEBPACK_IMPORTED_MODULE_13__create_create_component__["a" /* CreateComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__search_search_service__["a" /* SearchService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_8__home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_11__faq_faq_component__["a" /* FaqComponent */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__messages_message_module__["a" /* MessageModule */],
                __WEBPACK_IMPORTED_MODULE_4__users_user_module__["a" /* UserModule */],
                __WEBPACK_IMPORTED_MODULE_5__teams_team_module__["a" /* TeamModule */],
                __WEBPACK_IMPORTED_MODULE_6__projects_project_module__["a" /* ProjectModule */],
            ],
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/messages/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/messages/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main Wrapper -->\n<div id=\"wrapper\">\n\n    <div class=\"small-header \">\n        <div class=\"hpanel\">\n            <div class=\"panel-body\">\n\n\n                <div id=\"hbreadcrumb\" class=\"pull-right\">\n                    <ol class=\"hbreadcrumb breadcrumb\">\n                        <li><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n                        <li class=\"active\">\n                            <span>Chat</span>\n                        </li>\n                    </ol>\n                </div>\n                <h2 class=\"font-light m-b-xs\">\n                    Chat\n                </h2>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"content\">\n\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"hpanel \">\n                    <div class=\"panel-heading hbuilt\">\n                        <div class=\"panel-tools\">\n                            <a class=\"closebox\"><i class=\"fa fa-times\"></i></a>\n                        </div>\n                        Chat room\n                    </div>\n                    <div class=\"panel-body no-padding\">\n\n\n                        <div class=\"row\">\n\n                            <div class=\"col-md-9 \">\n                                <div class=\"chat-discussion\">\n\n                                    <div class=\"chat-message left\">\n                                        <img class=\"message-avatar\" src=\"assets/a2.jpg\" alt=\"\" >\n                                        <div class=\"message\">\n                                            <a class=\"message-author\" href=\"#\"> Michael Smith </a>\n                                            <span class=\"message-date\">  Fri Jan 25 2015 - 11:12:36 </span>\n                                                <span class=\"message-content\">\n                          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.\n                                                </span>\n                                        </div>\n                                    </div>\n                                    <div class=\"chat-message right\">\n                                        <img class=\"message-avatar\" src=\"assets/a2.jpg\" alt=\"\" >\n                                        <div class=\"message\">\n                                            <a class=\"message-author\" href=\"#\"> Michael Smith </a>\n                                            <span class=\"message-date\">  Fri Jan 25 2015 - 11:12:36 </span>\n                                                <span class=\"message-content\">\n                          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.\n                                                </span>\n                                        </div>\n                                    </div>\n                                    <div class=\"chat-message left\">\n                                        <img class=\"message-avatar\" src=\"assets/a1.jpg\" alt=\"\" >\n                                        <div class=\"message\">\n                                            <a class=\"message-author\" href=\"#\"> Michael Smith </a>\n                                            <span class=\"message-date\"> Mon Jan 26 2015 - 18:39:23 </span>\n                                                <span class=\"message-content\">\n                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.\n                                                </span>\n                                        </div>\n                                    </div>\n                                    <div class=\"chat-message right\">\n                                        <img class=\"message-avatar\" src=\"assets/a4.jpg\" alt=\"\" >\n                                        <div class=\"message\">\n                                            <a class=\"message-author\" href=\"#\"> Karl Jordan </a>\n                                            <span class=\"message-date\">  Fri Jan 25 2015 - 11:12:36 </span>\n                                                <span class=\"message-content\">\n                          Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover.\n                                                </span>\n                                        </div>\n                                    </div>\n                                    <div class=\"chat-message left\">\n                                        <img class=\"message-avatar\" src=\"assets/a2.jpg\" alt=\"\" >\n                                        <div class=\"message\">\n                                            <a class=\"message-author\" href=\"#\"> Michael Smith </a>\n                                            <span class=\"message-date\">  Fri Jan 25 2015 - 11:12:36 </span>\n                                                <span class=\"message-content\">\n                          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.\n                                                </span>\n                                        </div>\n                                    </div>\n                                    <div class=\"chat-message right\">\n                                        <img class=\"message-avatar\" src=\"assets/a5.jpg\" alt=\"\" >\n                                        <div class=\"message\">\n                                            <a class=\"message-author\" href=\"#\"> Alice Jordan </a>\n                                            <span class=\"message-date\">  Fri Jan 25 2015 - 11:12:36 </span>\n                                                <span class=\"message-content\">\n                          All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.\n                                                    It uses a dictionary of over 200 Latin words.\n                                                </span>\n                                        </div>\n                                    </div>\n                                    <div class=\"chat-message left\">\n                                        <img class=\"message-avatar\" src=\"assets/a6.jpg\" alt=\"\" >\n                                        <div class=\"message\">\n                                            <a class=\"message-author\" href=\"#\"> Mark Smith </a>\n                                            <span class=\"message-date\">  Fri Jan 25 2015 - 11:12:36 </span>\n                                                <span class=\"message-content\">\n                          All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.\n                                                    It uses a dictionary of over 200 Latin words.\n                                                </span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-3\">\n                                <div class=\"chat-users\">\n\n                                    <div class=\"users-list\">\n\n                                        <div class=\"chat-user\">\n                                            <span class=\"pull-right label label-success\">Online</span>\n                                            <img class=\"chat-avatar\" src=\"assets/a3.jpg\" alt=\"\" >\n                                            <div class=\"chat-user-name\">\n                                                <a href=\"#\">Janet Smith</a>\n                                            </div>\n                                        </div>\n                                        <div class=\"chat-user\">\n                                            <img class=\"chat-avatar\" src=\"assets/a1.jpg\" alt=\"\" >\n                                            <div class=\"chat-user-name\">\n                                                <a href=\"#\">Monica Smith</a>\n                                            </div>\n                                        </div>\n                                        <div class=\"chat-user\">\n                                            <span class=\"pull-right label label-success\">Online</span>\n                                            <img class=\"chat-avatar\" src=\"assets/a2.jpg\" alt=\"\" >\n                                            <div class=\"chat-user-name\">\n                                                <a href=\"#\">Michael Smith</a>\n                                            </div>\n                                        </div>\n                                        <div class=\"chat-user\">\n                                            <img class=\"chat-avatar\" src=\"assets/a4.jpg\" alt=\"\" >\n                                            <div class=\"chat-user-name\">\n                                                <a href=\"#\">Karl Jordan</a>\n                                            </div>\n                                        </div>\n                                        <div class=\"chat-user\">\n                                            <img class=\"chat-avatar\" src=\"assets/a5.jpg\" alt=\"\" >\n                                            <div class=\"chat-user-name\">\n                                                <a href=\"#\">Alice Smith</a>\n                                            </div>\n                                        </div>\n                                        <div class=\"chat-user\">\n                                            <img class=\"chat-avatar\" src=\"assets/a6.jpg\" alt=\"\" >\n                                            <div class=\"chat-user-name\">\n                                                <a href=\"#\">Monica Cale</a>\n                                            </div>\n                                        </div>\n                                        <div class=\"chat-user\">\n                                            <img class=\"chat-avatar\" src=\"assets/a2.jpg\" alt=\"\" >\n                                            <div class=\"chat-user-name\">\n                                                <a href=\"#\">Mark Jordan</a>\n                                            </div>\n                                        </div>\n                                        <div class=\"chat-user\">\n                                            <span class=\"pull-right label \">Online</span>\n                                            <img class=\"chat-avatar\" src=\"assets/a3.jpg\" alt=\"\" >\n                                            <div class=\"chat-user-name\">\n                                                <a href=\"#\">Janet Smith</a>\n                                            </div>\n                                        </div>\n                                        <div class=\"chat-user\">\n                                            <img class=\"chat-avatar\" src=\"assets/a4.jpg\" alt=\"\" >\n                                            <div class=\"chat-user-name\">\n                                                <a href=\"#\">Karl Jordan</a>\n                                            </div>\n                                        </div>\n                                        <div class=\"chat-user\">\n                                            <img class=\"chat-avatar\" src=\"assets/a5.jpg\" alt=\"\" >\n                                            <div class=\"chat-user-name\">\n                                                <a href=\"#\">Alice Smith</a>\n                                            </div>\n                                        </div>\n                                        <div class=\"chat-user\">\n                                            <img class=\"chat-avatar\" src=\"assets/a6.jpg\" alt=\"\" >\n                                            <div class=\"chat-user-name\">\n                                                <a href=\"#\">Monica Cale</a>\n                                            </div>\n                                        </div>\n                                        <div class=\"chat-user\">\n                                            <img class=\"chat-avatar\" src=\"assets/a2.jpg\" alt=\"\" >\n                                            <div class=\"chat-user-name\">\n                                                <a href=\"#\">Mark Jordan</a>\n                                            </div>\n                                        </div>\n\n\n                                    </div>\n\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n                    <div class=\"panel-footer borders\">\n                        <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Type your message here...\">\n                            <span class=\"input-group-btn\">\n                                <button class=\"btn btn-success\">\n                                    Send</button>\n                            </span>\n                        </div>\n                    </div>\n\n                </div>\n\n\n            </div>\n\n        </div>\n\n\n    </div>\n\n        <!-- Right sidebar -->\n        <div id=\"right-sidebar\" class=\"animated fadeInRight\">\n\n            <div class=\"p-m\">\n                <button id=\"sidebar-close\" class=\"right-sidebar-toggle sidebar-button btn btn-default m-b-md\"><i class=\"pe pe-7s-close\"></i>\n                </button>\n                <div>\n                    <span class=\"font-bold no-margins\"> Analytics </span>\n                    <br>\n                    <small> Lorem Ipsum is simply dummy text of the printing simply all dummy text.</small>\n                </div>\n                <div class=\"row m-t-sm m-b-sm\">\n                    <div class=\"col-lg-6\">\n                        <h3 class=\"no-margins font-extra-bold text-success\">300,102</h3>\n\n                        <div class=\"font-bold\">98% <i class=\"fa fa-level-up text-success\"></i></div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <h3 class=\"no-margins font-extra-bold text-success\">280,200</h3>\n\n                        <div class=\"font-bold\">98% <i class=\"fa fa-level-up text-success\"></i></div>\n                    </div>\n                </div>\n                <div class=\"progress m-t-xs full progress-small\">\n                    <div style=\"width: 25%\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"25\" role=\"progressbar\"\n                         class=\" progress-bar progress-bar-success\">\n                        <span class=\"sr-only\">35% Complete (success)</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"p-m bg-light border-bottom border-top\">\n                <span class=\"font-bold no-margins\"> Social talks </span>\n                <br>\n                <small> Lorem Ipsum is simply dummy text of the printing simply all dummy text.</small>\n                <div class=\"m-t-md\">\n                    <div class=\"social-talk\">\n                        <div class=\"media social-profile clearfix\">\n                            <a class=\"pull-left\">\n                                <img src=\"assets/a1.jpg\" alt=\"profile-picture\">\n                            </a>\n\n                            <div class=\"media-body\">\n                                <span class=\"font-bold\">John Novak</span>\n                                <small class=\"text-muted\">21.03.2015</small>\n                                <div class=\"social-content small\">\n                                    Injected humour, or randomised words which don't look even slightly believable.\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"social-talk\">\n                        <div class=\"media social-profile clearfix\">\n                            <a class=\"pull-left\">\n                                <img src=\"assets/a3.jpg\" alt=\"profile-picture\">\n                            </a>\n\n                            <div class=\"media-body\">\n                                <span class=\"font-bold\">Mark Smith</span>\n                                <small class=\"text-muted\">14.04.2015</small>\n                                <div class=\"social-content\">\n                                    Many desktop publishing packages and web page editors.\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"social-talk\">\n                        <div class=\"media social-profile clearfix\">\n                            <a class=\"pull-left\">\n                                <img src=\"assets/a4.jpg\" alt=\"profile-picture\">\n                            </a>\n\n                            <div class=\"media-body\">\n                                <span class=\"font-bold\">Marica Morgan</span>\n                                <small class=\"text-muted\">21.03.2015</small>\n\n                                <div class=\"social-content\">\n                                    There are many variations of passages of Lorem Ipsum available, but the majority have\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"p-m\">\n                <span class=\"font-bold no-margins\"> Sales in last week </span>\n                <div class=\"m-t-xs\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-6\">\n                            <small>Today</small>\n                            <h4 class=\"m-t-xs\">$170,20 <i class=\"fa fa-level-up text-success\"></i></h4>\n                        </div>\n                        <div class=\"col-xs-6\">\n                            <small>Last week</small>\n                            <h4 class=\"m-t-xs\">$580,90 <i class=\"fa fa-level-up text-success\"></i></h4>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xs-6\">\n                            <small>Today</small>\n                            <h4 class=\"m-t-xs\">$620,20 <i class=\"fa fa-level-up text-success\"></i></h4>\n                        </div>\n                        <div class=\"col-xs-6\">\n                            <small>Last week</small>\n                            <h4 class=\"m-t-xs\">$140,70 <i class=\"fa fa-level-up text-success\"></i></h4>\n                        </div>\n                    </div>\n                </div>\n                <small> Lorem Ipsum is simply dummy text of the printing simply all dummy text.\n                    Many desktop publishing packages and web page editors.\n                </small>\n            </div>\n\n        </div>\n\n        <!-- Footer-->\n        <footer class=\"footer\">\n            <span class=\"pull-right\">\n                ECE496\n            </span>\n\n        </footer>\n\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/home/messages/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatComponent = (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chat',
            template: __webpack_require__("../../../../../src/app/home/messages/chat/chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/messages/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/messages/mail/email-compose/email-compose.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/messages/mail/email-compose/email-compose.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main Wrapper -->\n<div id=\"wrapper\">\n\n\n    <div class=\"small-header \">\n        <div class=\"hpanel\">\n            <div class=\"panel-body\">\n\n\n                <div id=\"hbreadcrumb\" class=\"pull-right\">\n                    <ol class=\"hbreadcrumb breadcrumb\">\n                        <li><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n                        <li class=\"active\">\n                            <span>Mailbox</span>\n                        </li>\n                    </ol>\n                </div>\n                <h2 class=\"font-light m-b-xs\">\n                    Mailbox\n                </h2>\n            </div>\n        </div>\n    </div>\n    <div class=\"content\">\n\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"hpanel\">\n                    <div class=\"panel-body\">\n\n                        <a [routerLink]=\"['/messages/mail/email-compose']\" class=\"btn btn-success btn-block m-b-md\">Compose</a>\n\n                        <ul class=\"mailbox-list\">\n                            <li>\n                                <a [routerLink]=\"['/messages/mail/mailbox']\">\n                                    <span class=\"pull-right\">12</span>\n                                    <i class=\"fa fa-envelope\"></i> Inbox\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\"><i class=\"fa fa-paper-plane\"></i> Sent</a>\n                            </li>\n                            <li>\n                                <a href=\"#\"><i class=\"fa fa-pencil\"></i> Draft</a>\n                            </li>\n                            <li>\n                                <a href=\"#\"><i class=\"fa fa-trash\"></i> Trash</a>\n                            </li>\n                        </ul>\n                        <hr>\n                        <ul class=\"mailbox-list\">\n                            <li>\n                                <a href=\"#\"><i class=\"fa fa-plane text-danger\"></i> Travel</a>\n                            </li>\n                            <li>\n                                <a href=\"#\"><i class=\"fa fa-bar-chart text-warning\"></i> Finance</a>\n                            </li>\n                            <li>\n                                <a href=\"#\"><i class=\"fa fa-users text-info\"></i> Social</a>\n                            </li>\n                            <li>\n                                <a href=\"#\"><i class=\"fa fa-tag text-success\"></i> Promos</a>\n                            </li>\n                            <li>\n                                <a href=\"#\"><i class=\"fa fa-flag text-primary\"></i> Updates</a>\n                            </li>\n                        </ul>\n                        <hr>\n                        <ul class=\"mailbox-list\">\n                            <li>\n                                <a href=\"#\"><i class=\"fa fa-gears\"></i> Settings</a>\n                            </li>\n                            <li>\n                                <a href=\"#\"><i class=\"fa fa-info-circle\"></i> Support</a>\n                            </li>\n                        </ul>\n\n\n                    </div>\n\n                </div>\n            </div>\n            <div class=\"col-md-9\">\n                <div class=\"hpanel email-compose\">\n                    <div class=\"panel-heading hbuilt\">\n                        <div class=\"p-xs h4\">\n\n                            New message\n\n                        </div>\n                    </div>\n                    <div class=\"panel-heading hbuilt\">\n                        <div class=\"p-xs\">\n\n                            <form method=\"get\" class=\"form-horizontal\">\n                                <div class=\"form-group\"><label class=\"col-sm-1 control-label text-left\">To:</label>\n\n                                    <div class=\"col-sm-11\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"example@email.com\"></div>\n                                </div>\n                                <div class=\"form-group\"><label class=\"col-sm-1 control-label text-left\">Cc:</label>\n\n                                    <div class=\"col-sm-11\"><input type=\"text\" class=\"form-control input-sm\"></div>\n                                </div>\n                                <div class=\"form-group\"><label class=\"col-sm-1 control-label text-left\">Subject:</label>\n\n                                    <div class=\"col-sm-11\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"Enter Email subject\"></div>\n                                </div>\n                            </form>\n\n\n                        </div>\n                    </div>\n                    <div class=\"panel-body no-padding\">\n                        <div class=\"summernote\">\n                            <h5>Hello Jonathan! </h5>\n\n                            <p>dummy text of the printing and typesetting industry. <strong>Lorem Ipsum has been the dustrys</strong> standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more\n                                <br/><br/>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.\n                                recently with.</p>\n\n                            <p>Mark Smith\n                            </p>\n                        </div>\n                    </div>\n\n\n                    <div class=\"panel-footer\">\n                        <div class=\"pull-right\">\n                            <div class=\"btn-group\">\n                                <button class=\"btn btn-default\"><i class=\"fa fa-edit\"></i> Save</button>\n                                <button class=\"btn btn-default\"><i class=\"fa fa-trash\"></i> Discard</button>\n                            </div>\n                        </div>\n                        <button class=\"btn btn-primary\">Send email</button>\n                        <div class=\"btn-group\">\n                            <button class=\"btn btn-default\"><i class=\"fa fa-paperclip\"></i> </button>\n                            <button class=\"btn btn-default\"><i class=\"fa fa-image\"></i> </button>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n    <!-- Right sidebar -->\n    <div id=\"right-sidebar\" class=\"animated fadeInRight\">\n\n        <div class=\"p-m\">\n            <button id=\"sidebar-close\" class=\"right-sidebar-toggle sidebar-button btn btn-default m-b-md\"><i class=\"pe pe-7s-close\"></i>\n            </button>\n            <div>\n                <span class=\"font-bold no-margins\"> Analytics </span>\n                <br>\n                <small> Lorem Ipsum is simply dummy text of the printing simply all dummy text.</small>\n            </div>\n            <div class=\"row m-t-sm m-b-sm\">\n                <div class=\"col-lg-6\">\n                    <h3 class=\"no-margins font-extra-bold text-success\">300,102</h3>\n\n                    <div class=\"font-bold\">98% <i class=\"fa fa-level-up text-success\"></i></div>\n                </div>\n                <div class=\"col-lg-6\">\n                    <h3 class=\"no-margins font-extra-bold text-success\">280,200</h3>\n\n                    <div class=\"font-bold\">98% <i class=\"fa fa-level-up text-success\"></i></div>\n                </div>\n            </div>\n            <div class=\"progress m-t-xs full progress-small\">\n                <div style=\"width: 25%\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"25\" role=\"progressbar\"\n                     class=\" progress-bar progress-bar-success\">\n                    <span class=\"sr-only\">35% Complete (success)</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"p-m bg-light border-bottom border-top\">\n            <span class=\"font-bold no-margins\"> Social talks </span>\n            <br>\n            <small> Lorem Ipsum is simply dummy text of the printing simply all dummy text.</small>\n            <div class=\"m-t-md\">\n                <div class=\"social-talk\">\n                    <div class=\"media social-profile clearfix\">\n                        <a class=\"pull-left\">\n                            <img src=\"images/a1.jpg\" alt=\"profile-picture\">\n                        </a>\n\n                        <div class=\"media-body\">\n                            <span class=\"font-bold\">John Novak</span>\n                            <small class=\"text-muted\">21.03.2015</small>\n                            <div class=\"social-content small\">\n                                Injected humour, or randomised words which don't look even slightly believable.\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"social-talk\">\n                    <div class=\"media social-profile clearfix\">\n                        <a class=\"pull-left\">\n                            <img src=\"images/a3.jpg\" alt=\"profile-picture\">\n                        </a>\n\n                        <div class=\"media-body\">\n                            <span class=\"font-bold\">Mark Smith</span>\n                            <small class=\"text-muted\">14.04.2015</small>\n                            <div class=\"social-content\">\n                                Many desktop publishing packages and web page editors.\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"social-talk\">\n                    <div class=\"media social-profile clearfix\">\n                        <a class=\"pull-left\">\n                            <img src=\"images/a4.jpg\" alt=\"profile-picture\">\n                        </a>\n\n                        <div class=\"media-body\">\n                            <span class=\"font-bold\">Marica Morgan</span>\n                            <small class=\"text-muted\">21.03.2015</small>\n\n                            <div class=\"social-content\">\n                                There are many variations of passages of Lorem Ipsum available, but the majority have\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"p-m\">\n            <span class=\"font-bold no-margins\"> Sales in last week </span>\n\n            <div class=\"m-t-xs\">\n                <div class=\"row\">\n                    <div class=\"col-xs-6\">\n                        <small>Today</small>\n                        <h4 class=\"m-t-xs\">$170,20 <i class=\"fa fa-level-up text-success\"></i></h4>\n                    </div>\n                    <div class=\"col-xs-6\">\n                        <small>Last week</small>\n                        <h4 class=\"m-t-xs\">$580,90 <i class=\"fa fa-level-up text-success\"></i></h4>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-6\">\n                        <small>Today</small>\n                        <h4 class=\"m-t-xs\">$620,20 <i class=\"fa fa-level-up text-success\"></i></h4>\n                    </div>\n                    <div class=\"col-xs-6\">\n                        <small>Last week</small>\n                        <h4 class=\"m-t-xs\">$140,70 <i class=\"fa fa-level-up text-success\"></i></h4>\n                    </div>\n                </div>\n            </div>\n            <small> Lorem Ipsum is simply dummy text of the printing simply all dummy text.\n                Many desktop publishing packages and web page editors.\n            </small>\n        </div>\n\n    </div>\n\n    <!-- Footer-->\n    <footer class=\"footer\">\n        <span class=\"pull-right\">\n            ECE496\n        </span>\n    </footer>\n\n</div>\n\n\n<script>\n\n    $(function () {\n\n        // Initialize summernote plugin\n        $('.summernote').summernote({\n            toolbar: [\n                ['headline', ['style']],\n                ['style', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear']],\n                ['textsize', ['fontsize']],\n                ['alignment', ['ul', 'ol', 'paragraph', 'lineheight']],\n            ]\n        });\n\n    });\n\n</script>\n"

/***/ }),

/***/ "../../../../../src/app/home/messages/mail/email-compose/email-compose.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailComposeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmailComposeComponent = (function () {
    function EmailComposeComponent() {
    }
    EmailComposeComponent.prototype.ngOnInit = function () {
    };
    EmailComposeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-email-compose',
            template: __webpack_require__("../../../../../src/app/home/messages/mail/email-compose/email-compose.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/messages/mail/email-compose/email-compose.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmailComposeComponent);
    return EmailComposeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/messages/mail/email-view/email-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/messages/mail/email-view/email-view.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main Wrapper -->\n<div id=\"wrapper\">\n\n\n    <div class=\"small-header \">\n        <div class=\"hpanel\">\n            <div class=\"panel-body\">\n\n\n                <div id=\"hbreadcrumb\" class=\"pull-right\">\n                    <ol class=\"hbreadcrumb breadcrumb\">\n                        <li><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n\n                        <li class=\"active\">\n                            <span>Mailbox</span>\n                        </li>\n                    </ol>\n                </div>\n                <h2 class=\"font-light m-b-xs\">\n                    Mailbox\n                </h2>\n            </div>\n        </div>\n    </div>\n    <div class=\"content\">\n\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"hpanel\">\n                    <div class=\"panel-body\">\n\n                        <a [routerLink]=\"['/messages/mail/email-compose']\" class=\"btn btn-success btn-block m-b-md\">Compose</a>\n\n                        <ul class=\"mailbox-list\">\n                            <li>\n                                <a [routerLink]=\"['/messages/mail/mailbox']\">\n                                    <span class=\"pull-right\">12</span>\n                                    <i class=\"fa fa-envelope\"></i> Inbox\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\"><i class=\"fa fa-paper-plane\"></i> Sent</a>\n                            </li>\n                            <li>\n                                <a href=\"#\"><i class=\"fa fa-pencil\"></i> Draft</a>\n                            </li>\n                            <li>\n                                <a href=\"#\"><i class=\"fa fa-trash\"></i> Trash</a>\n                            </li>\n                        </ul>\n                        <hr>\n                        <ul class=\"mailbox-list\">\n                            <li>\n                                <a href=\"#\"><i class=\"fa fa-plane text-danger\"></i> Travel</a>\n                            </li>\n                            <li>\n                                <a href=\"#\"><i class=\"fa fa-bar-chart text-warning\"></i> Finance</a>\n                            </li>\n                            <li>\n                                <a href=\"#\"><i class=\"fa fa-users text-info\"></i> Social</a>\n                            </li>\n                            <li>\n                                <a href=\"#\"><i class=\"fa fa-tag text-success\"></i> Promos</a>\n                            </li>\n                            <li>\n                                <a href=\"#\"><i class=\"fa fa-flag text-primary\"></i> Updates</a>\n                            </li>\n                        </ul>\n                        <hr>\n                        <ul class=\"mailbox-list\">\n                            <li>\n                                <a href=\"#\"><i class=\"fa fa-gears\"></i> Settings</a>\n                            </li>\n                            <li>\n                                <a href=\"#\"><i class=\"fa fa-info-circle\"></i> Support</a>\n                            </li>\n                        </ul>\n\n\n                    </div>\n\n                </div>\n            </div>\n            <div class=\"col-md-9\">\n                <div class=\"hpanel email-compose\">\n                    <div class=\"panel-heading hbuilt\">\n\n                        <div class=\"p-xs h4\">\n                        <small class=\"pull-right\">\n                            08:26 PM (16 hours ago)\n                        </small>\n                            Email view\n\n                        </div>\n                    </div>\n                    <div class=\"border-top border-left border-right bg-light\">\n                        <div class=\"p-m\">\n\n                            <div>\n                                <span class=\"font-extra-bold\">Subject: </span>\n                                Lorem Ipsum has been the industry's standard dummy text ever\n                            </div>\n                            <div>\n                                <span class=\"font-extra-bold\">From: </span>\n                                <a href=\"#\">example.@email.com</a>\n                            </div>\n                            <div>\n                                <span class=\"font-extra-bold\">Date: </span>\n                                14.10.2016\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"panel-body\">\n                        <div>\n                            <h4>Hello Jonathan! </h4>\n\n                            <p>dummy text of the printing and typesetting industry. <strong>Lorem Ipsum has been the dustrys</strong> standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more\n                                <br/><br/>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.\n                                recently with.</p>\n\n                            <p>Mark Smith\n                            </p>\n                        </div>\n                    </div>\n\n                    <div class=\"border-bottom border-left border-right bg-white p-m\">\n                        <p class=\"m-b-md\">\n                            <span><i class=\"fa fa-paperclip\"></i> 3 attachments - </span>\n                            <a href=\"#\" class=\"btn btn-default btn-xs\">Download all in zip format <i class=\"fa fa-file-zip-o\"></i> </a>\n                        </p>\n\n                        <div>\n                            <div class=\"row\">\n                                <div class=\"col-sm-3\">\n                                    <div class=\"hpanel\">\n                                        <div class=\"panel-body file-body\">\n                                            <i class=\"fa fa-file-pdf-o text-info\"></i>\n                                        </div>\n                                        <div class=\"panel-footer\">\n                                            <a href=\"#\">Documen2016.doc</a>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"hpanel\">\n                                        <div class=\"panel-body file-body\">\n                                            <i class=\"fa fa-file-audio-o text-warning\"></i>\n                                        </div>\n                                        <div class=\"panel-footer\">\n                                            <a href=\"#\">Audio_2016.doc</a>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"hpanel\">\n                                        <div class=\"panel-body file-body\">\n                                            <i class=\"fa fa-file-excel-o text-success\"></i>\n                                        </div>\n                                        <div class=\"panel-footer\">\n                                            <a href=\"#\">Sheets_2016.doc</a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n\n                        </div>\n                    </div>\n\n                    <div class=\"panel-footer text-right\">\n                        <div class=\"btn-group\">\n                            <button class=\"btn btn-default\"><i class=\"fa fa-reply\"></i> Reply</button>\n                            <button class=\"btn btn-default\"><i class=\"fa fa-arrow-right\"></i> Forward</button>\n                            <button class=\"btn btn-default\"><i class=\"fa fa-print\"></i> Print</button>\n                            <button class=\"btn btn-default\"><i class=\"fa fa-trash-o\"></i> Remove</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n    <!-- Right sidebar -->\n    <div id=\"right-sidebar\" class=\"animated fadeInRight\">\n\n        <div class=\"p-m\">\n            <button id=\"sidebar-close\" class=\"right-sidebar-toggle sidebar-button btn btn-default m-b-md\"><i class=\"pe pe-7s-close\"></i>\n            </button>\n            <div>\n                <span class=\"font-bold no-margins\"> Analytics </span>\n                <br>\n                <small> Lorem Ipsum is simply dummy text of the printing simply all dummy text.</small>\n            </div>\n            <div class=\"row m-t-sm m-b-sm\">\n                <div class=\"col-lg-6\">\n                    <h3 class=\"no-margins font-extra-bold text-success\">300,102</h3>\n\n                    <div class=\"font-bold\">98% <i class=\"fa fa-level-up text-success\"></i></div>\n                </div>\n                <div class=\"col-lg-6\">\n                    <h3 class=\"no-margins font-extra-bold text-success\">280,200</h3>\n\n                    <div class=\"font-bold\">98% <i class=\"fa fa-level-up text-success\"></i></div>\n                </div>\n            </div>\n            <div class=\"progress m-t-xs full progress-small\">\n                <div style=\"width: 25%\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"25\" role=\"progressbar\"\n                     class=\" progress-bar progress-bar-success\">\n                    <span class=\"sr-only\">35% Complete (success)</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"p-m bg-light border-bottom border-top\">\n            <span class=\"font-bold no-margins\"> Social talks </span>\n            <br>\n            <small> Lorem Ipsum is simply dummy text of the printing simply all dummy text.</small>\n            <div class=\"m-t-md\">\n                <div class=\"social-talk\">\n                    <div class=\"media social-profile clearfix\">\n                        <a class=\"pull-left\">\n                            <img src=\"images/a1.jpg\" alt=\"profile-picture\">\n                        </a>\n\n                        <div class=\"media-body\">\n                            <span class=\"font-bold\">John Novak</span>\n                            <small class=\"text-muted\">21.03.2015</small>\n                            <div class=\"social-content small\">\n                                Injected humour, or randomised words which don't look even slightly believable.\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"social-talk\">\n                    <div class=\"media social-profile clearfix\">\n                        <a class=\"pull-left\">\n                            <img src=\"images/a3.jpg\" alt=\"profile-picture\">\n                        </a>\n\n                        <div class=\"media-body\">\n                            <span class=\"font-bold\">Mark Smith</span>\n                            <small class=\"text-muted\">14.04.2015</small>\n                            <div class=\"social-content\">\n                                Many desktop publishing packages and web page editors.\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"social-talk\">\n                    <div class=\"media social-profile clearfix\">\n                        <a class=\"pull-left\">\n                            <img src=\"images/a4.jpg\" alt=\"profile-picture\">\n                        </a>\n\n                        <div class=\"media-body\">\n                            <span class=\"font-bold\">Marica Morgan</span>\n                            <small class=\"text-muted\">21.03.2015</small>\n\n                            <div class=\"social-content\">\n                                There are many variations of passages of Lorem Ipsum available, but the majority have\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"p-m\">\n            <span class=\"font-bold no-margins\"> Sales in last week </span>\n\n            <div class=\"m-t-xs\">\n                <div class=\"row\">\n                    <div class=\"col-xs-6\">\n                        <small>Today</small>\n                        <h4 class=\"m-t-xs\">$170,20 <i class=\"fa fa-level-up text-success\"></i></h4>\n                    </div>\n                    <div class=\"col-xs-6\">\n                        <small>Last week</small>\n                        <h4 class=\"m-t-xs\">$580,90 <i class=\"fa fa-level-up text-success\"></i></h4>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-6\">\n                        <small>Today</small>\n                        <h4 class=\"m-t-xs\">$620,20 <i class=\"fa fa-level-up text-success\"></i></h4>\n                    </div>\n                    <div class=\"col-xs-6\">\n                        <small>Last week</small>\n                        <h4 class=\"m-t-xs\">$140,70 <i class=\"fa fa-level-up text-success\"></i></h4>\n                    </div>\n                </div>\n            </div>\n            <small> Lorem Ipsum is simply dummy text of the printing simply all dummy text.\n                Many desktop publishing packages and web page editors.\n            </small>\n        </div>\n\n    </div>\n\n    <!-- Footer-->\n    <footer class=\"footer\">\n        <span class=\"pull-right\">\n            ECE496\n        </span>\n    </footer>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/messages/mail/email-view/email-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmailViewComponent = (function () {
    function EmailViewComponent() {
    }
    EmailViewComponent.prototype.ngOnInit = function () {
    };
    EmailViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-email-view',
            template: __webpack_require__("../../../../../src/app/home/messages/mail/email-view/email-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/messages/mail/email-view/email-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmailViewComponent);
    return EmailViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/messages/mail/mail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/messages/mail/mail.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/home/messages/mail/mail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MailComponent = (function () {
    function MailComponent() {
    }
    MailComponent.prototype.ngOnInit = function () {
    };
    MailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mail',
            template: __webpack_require__("../../../../../src/app/home/messages/mail/mail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/messages/mail/mail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MailComponent);
    return MailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/messages/mail/mailbox/mailbox.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/messages/mail/mailbox/mailbox.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main Wrapper -->\n<div id=\"wrapper\">\n\n\n    <div class=\"small-header \">\n        <div class=\"hpanel\">\n            <div class=\"panel-body\">\n\n\n                <div id=\"hbreadcrumb\" class=\"pull-right\">\n                    <ol class=\"hbreadcrumb breadcrumb\">\n                        <li><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n                        <li class=\"active\">\n                            <span>Mailbox</span>\n                        </li>\n                    </ol>\n                </div>\n                <h2 class=\"font-light m-b-xs\">\n                    Mailbox\n                </h2>\n            </div>\n        </div>\n    </div>\n    <div class=\"content\">\n\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"hpanel\">\n                    <div class=\"panel-body\">\n\n                        <a [routerLink]=\"['/messages/mail/email-compose']\" class=\"btn btn-success btn-block m-b-md\">Compose</a>\n\n                        <ul class=\"mailbox-list\">\n                            <li class=\"active\">\n                                <a [routerLink]=\"['/messages/mail/mailbox']\">\n                                    <span class=\"pull-right\">12</span>\n                                    <i class=\"fa fa-envelope\"></i> Inbox\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\"><i class=\"fa fa-paper-plane\"></i> Sent</a>\n                            </li>\n                            <li>\n                                <a href=\"#\"><i class=\"fa fa-pencil\"></i> Draft</a>\n                            </li>\n                            <li>\n                                <a href=\"#\"><i class=\"fa fa-trash\"></i> Trash</a>\n                            </li>\n                        </ul>\n                        <hr>\n                        <ul class=\"mailbox-list\">\n                            <li>\n                                <a href=\"#\"><i class=\"fa fa-plane text-danger\"></i> Travel</a>\n                            </li>\n                            <li>\n                                <a href=\"#\"><i class=\"fa fa-bar-chart text-warning\"></i> Finance</a>\n                            </li>\n                            <li>\n                                <a href=\"#\"><i class=\"fa fa-users text-info\"></i> Social</a>\n                            </li>\n                            <li>\n                                <a href=\"#\"><i class=\"fa fa-tag text-success\"></i> Promos</a>\n                            </li>\n                            <li>\n                                <a href=\"#\"><i class=\"fa fa-flag text-primary\"></i> Updates</a>\n                            </li>\n                        </ul>\n                        <hr>\n                        <ul class=\"mailbox-list\">\n                            <li>\n                                <a href=\"#\"><i class=\"fa fa-gears\"></i> Settings</a>\n                            </li>\n                            <li>\n                                <a href=\"#\"><i class=\"fa fa-info-circle\"></i> Support</a>\n                            </li>\n                        </ul>\n\n\n                    </div>\n\n                </div>\n            </div>\n            <div class=\"col-md-9\">\n                <div class=\"hpanel\">\n                    <div class=\"panel-heading hbuilt\">\n                        <div class=\"text-center p-xs font-normal\">\n                            <div class=\"input-group\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"Search email in your inbox...\"> <span class=\"input-group-btn\"> <button type=\"button\" class=\"btn btn-sm btn-default\">Search\n                            </button> </span></div>\n                        </div>\n                    </div>\n                    <div class=\"panel-body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6 m-b-md\">\n                                <div class=\"btn-group\">\n                                    <button class=\"btn btn-default btn-sm\"><i class=\"fa fa-refresh\"></i> Refresh</button>\n                                    <button class=\"btn btn-default btn-sm\"><i class=\"fa fa-eye\"></i></button>\n                                    <button class=\"btn btn-default btn-sm\"><i class=\"fa fa-exclamation\"></i></button>\n                                    <button class=\"btn btn-default btn-sm\"><i class=\"fa fa-trash-o\"></i></button>\n                                    <button class=\"btn btn-default btn-sm\"><i class=\"fa fa-check\"></i></button>\n                                    <button class=\"btn btn-default btn-sm\"><i class=\"fa fa-tag\"></i></button>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6 mailbox-pagination m-b-md\">\n                                <div class=\"btn-group\">\n                                    <button class=\"btn btn-default btn-sm\"><i class=\"fa fa-arrow-left\"></i></button>\n                                    <button class=\"btn btn-default btn-sm\"><i class=\"fa fa-arrow-right\"></i></button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"table-responsive\">\n                            <table class=\"table table-hover table-mailbox\">\n                                <tbody>\n                                <tr class=\"unread\">\n                                    <td class=\"\">\n                                        <div class=\"checkbox checkbox-single checkbox-success\">\n                                            <input type=\"checkbox\" checked>\n                                            <label></label>\n                                        </div>\n                                    </td>\n                                    <td><a [routerLink]=\"['/users/user-profile']\">Jeremy Massey</a></td>\n                                    <td><a [routerLink]=\"['/messages/mail/email-view']\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>\n                                    </td>\n                                    <td><i class=\"fa fa-paperclip\"></i></td>\n                                    <td class=\"text-right mail-date\">Tue, Nov 25</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"\">\n                                        <div class=\"checkbox\">\n                                            <input type=\"checkbox\">\n                                            <label></label>\n                                        </div>\n                                    </td>\n                                    <td><a href=\"#\">Marshall Horne</a></td>\n                                    <td><a href=\"#\">Praesent nec nisl sed neque ornare maximus at ac enim.</a>\n                                    </td>\n                                    <td></td>\n                                    <td class=\"text-right mail-date\">Wed, Jan 13</td>\n                                </tr>\n                                <tr class=\"active\">\n                                    <td class=\"\">\n                                        <div class=\"checkbox\">\n                                            <input type=\"checkbox\">\n                                            <label></label>\n                                        </div>\n                                    </td>\n                                    <td><a href=\"#\">Grant Franco</a> <span\n                                            class=\"label label-warning\">Finance</span></td>\n                                    <td><a href=\"#\">Etiam maximus tellus a turpis tempor mollis.</a></td>\n                                    <td></td>\n                                    <td class=\"text-right mail-date\">Mon, Oct 19</td>\n                                </tr>\n                                <tr class=\"unread active\">\n                                    <td class=\"\">\n                                        <div class=\"checkbox checkbox-single\">\n                                            <input type=\"checkbox\" checked>\n                                            <label></label>\n                                        </div>\n                                    </td>\n                                    <td><a href=\"#\">Ferdinand Meadows</a></td>\n                                    <td><a href=\"#\">Aenean hendrerit ligula eget augue gravida semper.</a></td>\n                                    <td><i class=\"fa fa-paperclip\"></i></td>\n                                    <td class=\"text-right mail-date\">Sat, Aug 29</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"\">\n                                        <div class=\"checkbox checkbox-single\">\n                                            <input type=\"checkbox\">\n                                            <label></label>\n                                        </div>\n                                    </td>\n                                    <td><a href=\"#\">Ivor Rios</a> <span class=\"label label-info\">Social</span>\n                                    </td>\n                                    <td><a href=\"#\">Sed quis augue in nunc venenatis finibus.</a></td>\n                                    <td><i class=\"fa fa-paperclip\"></i></td>\n                                    <td class=\"text-right mail-date\">Sat, Dec 12</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"\">\n                                        <div class=\"checkbox\">\n                                            <input type=\"checkbox\">\n                                            <label></label>\n                                        </div>\n                                    </td>\n                                    <td><a href=\"#\">Maxwell Murphy</a></td>\n                                    <td><a href=\"#\">Quisque eu tortor quis justo viverra cursus.</a></td>\n                                    <td></td>\n                                    <td class=\"text-right mail-date\">Sun, May 17</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"\">\n                                        <div class=\"checkbox\">\n                                            <input type=\"checkbox\">\n                                            <label></label>\n                                        </div>\n                                    </td>\n                                    <td><a href=\"#\">Henry Patterson</a></td>\n                                    <td><a href=\"#\">Aliquam nec justo interdum, ornare mi non, elementum\n                                        lacus.</a></td>\n                                    <td><i class=\"fa fa-paperclip\"></i></td>\n                                    <td class=\"text-right mail-date\">Thu, Aug 06</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"\">\n                                        <div class=\"checkbox\">\n                                            <input type=\"checkbox\">\n                                            <label></label>\n                                        </div>\n                                    </td>\n                                    <td><a href=\"#\">Brent Rasmussen</a></td>\n                                    <td><a href=\"#\">Nam nec turpis sed quam tristique sodales.</a></td>\n                                    <td></td>\n                                    <td class=\"text-right mail-date\">Sun, Nov 15</td>\n                                </tr>\n                                <tr class=\"unread\">\n                                    <td class=\"\">\n                                        <div class=\"checkbox checkbox-single checkbox-success\">\n                                            <input type=\"checkbox\" checked>\n                                            <label></label>\n                                        </div>\n                                    </td>\n                                    <td><a href=\"#\">Joseph Hurley</a></td>\n                                    <td><a href=\"#\">Nullam tempus leo id urna sagittis blandit.</a></td>\n                                    <td><i class=\"fa fa-paperclip\"></i></td>\n                                    <td class=\"text-right mail-date\">Sun, Aug 10</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"\">\n                                        <div class=\"checkbox\">\n                                            <input type=\"checkbox\">\n                                            <label></label>\n                                        </div>\n                                    </td>\n                                    <td><a href=\"#\">Alan Matthews</a></td>\n                                    <td><a href=\"#\">Quisque quis turpis ac quam sagittis scelerisque vel ut\n                                        urna.</a></td>\n                                    <td></td>\n                                    <td class=\"text-right mail-date\">Sun, Mar 27</td>\n                                </tr>\n                                <tr class=\"active\">\n                                    <td class=\"\">\n                                        <div class=\"checkbox\">\n                                            <input type=\"checkbox\">\n                                            <label></label>\n                                        </div>\n                                    </td>\n                                    <td><a href=\"#\">Colby Lynch</a> <span\n                                            class=\"label label-danger\">Travel</span></td>\n                                    <td><a href=\"#\">Donec non enim pulvinar, ultrices metus eget, condimentum\n                                        mi.</a></td>\n                                    <td></td>\n                                    <td class=\"text-right mail-date\">Thu, Dec 31</td>\n                                </tr>\n                                <tr class=\"unread\">\n                                    <td class=\"\">\n                                        <div class=\"checkbox checkbox-single checkbox-success\">\n                                            <input type=\"checkbox\" checked>\n                                            <label></label>\n                                        </div>\n                                    </td>\n                                    <td><a href=\"#\">Jeremy Massey</a></td>\n                                    <td><a href=\"#\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>\n                                    </td>\n                                    <td><i class=\"fa fa-paperclip\"></i></td>\n                                    <td class=\"text-right mail-date\">Tue, Nov 25</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"\">\n                                        <div class=\"checkbox\">\n                                            <input type=\"checkbox\">\n                                            <label></label>\n                                        </div>\n                                    </td>\n                                    <td><a href=\"#\">Marshall Horne</a></td>\n                                    <td><a href=\"#\">Praesent nec nisl sed neque ornare maximus at ac enim.</a>\n                                    </td>\n                                    <td></td>\n                                    <td class=\"text-right mail-date\">Wed, Jan 13</td>\n                                </tr>\n                                <tr class=\"active\">\n                                    <td class=\"\">\n                                        <div class=\"checkbox\">\n                                            <input type=\"checkbox\">\n                                            <label></label>\n                                        </div>\n                                    </td>\n                                    <td><a href=\"#\">Grant Franco</a> <span\n                                            class=\"label label-warning\">Finance</span></td>\n                                    <td><a href=\"#\">Etiam maximus tellus a turpis tempor mollis.</a></td>\n                                    <td></td>\n                                    <td class=\"text-right mail-date\">Mon, Oct 19</td>\n                                </tr>\n                                <tr class=\"unread active\">\n                                    <td class=\"\">\n                                        <div class=\"checkbox checkbox-single\">\n                                            <input type=\"checkbox\" checked>\n                                            <label></label>\n                                        </div>\n                                    </td>\n                                    <td><a href=\"#\">Ferdinand Meadows</a></td>\n                                    <td><a href=\"#\">Aenean hendrerit ligula eget augue gravida semper.</a></td>\n                                    <td><i class=\"fa fa-paperclip\"></i></td>\n                                    <td class=\"text-right mail-date\">Sat, Aug 29</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"\">\n                                        <div class=\"checkbox checkbox-single\">\n                                            <input type=\"checkbox\">\n                                            <label></label>\n                                        </div>\n                                    </td>\n                                    <td><a href=\"#\">Ivor Rios</a> <span class=\"label label-info\">Social</span>\n                                    </td>\n                                    <td><a href=\"#\">Sed quis augue in nunc venenatis finibus.</a></td>\n                                    <td><i class=\"fa fa-paperclip\"></i></td>\n                                    <td class=\"text-right mail-date\">Sat, Dec 12</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"\">\n                                        <div class=\"checkbox\">\n                                            <input type=\"checkbox\">\n                                            <label></label>\n                                        </div>\n                                    </td>\n                                    <td><a href=\"#\">Maxwell Murphy</a></td>\n                                    <td><a href=\"#\">Quisque eu tortor quis justo viverra cursus.</a></td>\n                                    <td></td>\n                                    <td class=\"text-right mail-date\">Sun, May 17</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"\">\n                                        <div class=\"checkbox\">\n                                            <input type=\"checkbox\">\n                                            <label></label>\n                                        </div>\n                                    </td>\n                                    <td><a href=\"#\">Henry Patterson</a></td>\n                                    <td><a href=\"#\">Aliquam nec justo interdum, ornare mi non, elementum\n                                        lacus.</a></td>\n                                    <td><i class=\"fa fa-paperclip\"></i></td>\n                                    <td class=\"text-right mail-date\">Thu, Aug 06</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"\">\n                                        <div class=\"checkbox\">\n                                            <input type=\"checkbox\">\n                                            <label></label>\n                                        </div>\n                                    </td>\n                                    <td><a href=\"#\">Brent Rasmussen</a></td>\n                                    <td><a href=\"#\">Nam nec turpis sed quam tristique sodales.</a></td>\n                                    <td></td>\n                                    <td class=\"text-right mail-date\">Sun, Nov 15</td>\n                                </tr>\n                                <tr class=\"unread\">\n                                    <td class=\"\">\n                                        <div class=\"checkbox checkbox-single checkbox-success\">\n                                            <input type=\"checkbox\" checked>\n                                            <label></label>\n                                        </div>\n                                    </td>\n                                    <td><a href=\"#\">Joseph Hurley</a></td>\n                                    <td><a href=\"#\">Nullam tempus leo id urna sagittis blandit.</a></td>\n                                    <td><i class=\"fa fa-paperclip\"></i></td>\n                                    <td class=\"text-right mail-date\">Sun, Aug 10</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"\">\n                                        <div class=\"checkbox\">\n                                            <input type=\"checkbox\">\n                                            <label></label>\n                                        </div>\n                                    </td>\n                                    <td><a href=\"#\">Alan Matthews</a></td>\n                                    <td><a href=\"#\">Quisque quis turpis ac quam sagittis scelerisque vel ut\n                                        urna.</a></td>\n                                    <td></td>\n                                    <td class=\"text-right mail-date\">Sun, Mar 27</td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <div class=\"panel-footer\">\n                        <i class=\"fa fa-eye\"> </i> 6 unread\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n    <!-- Right sidebar -->\n    <div id=\"right-sidebar\" class=\"animated fadeInRight\">\n\n        <div class=\"p-m\">\n            <button id=\"sidebar-close\" class=\"right-sidebar-toggle sidebar-button btn btn-default m-b-md\"><i class=\"pe pe-7s-close\"></i>\n            </button>\n            <div>\n                <span class=\"font-bold no-margins\"> Analytics </span>\n                <br>\n                <small> Lorem Ipsum is simply dummy text of the printing simply all dummy text.</small>\n            </div>\n            <div class=\"row m-t-sm m-b-sm\">\n                <div class=\"col-lg-6\">\n                    <h3 class=\"no-margins font-extra-bold text-success\">300,102</h3>\n\n                    <div class=\"font-bold\">98% <i class=\"fa fa-level-up text-success\"></i></div>\n                </div>\n                <div class=\"col-lg-6\">\n                    <h3 class=\"no-margins font-extra-bold text-success\">280,200</h3>\n\n                    <div class=\"font-bold\">98% <i class=\"fa fa-level-up text-success\"></i></div>\n                </div>\n            </div>\n            <div class=\"progress m-t-xs full progress-small\">\n                <div style=\"width: 25%\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"25\" role=\"progressbar\"\n                     class=\" progress-bar progress-bar-success\">\n                    <span class=\"sr-only\">35% Complete (success)</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"p-m bg-light border-bottom border-top\">\n            <span class=\"font-bold no-margins\"> Social talks </span>\n            <br>\n            <small> Lorem Ipsum is simply dummy text of the printing simply all dummy text.</small>\n            <div class=\"m-t-md\">\n                <div class=\"social-talk\">\n                    <div class=\"media social-profile clearfix\">\n                        <a class=\"pull-left\">\n                            <img src=\"assets/a1.jpg\" alt=\"profile-picture\">\n                        </a>\n\n                        <div class=\"media-body\">\n                            <span class=\"font-bold\">John Novak</span>\n                            <small class=\"text-muted\">21.03.2015</small>\n                            <div class=\"social-content small\">\n                                Injected humour, or randomised words which don't look even slightly believable.\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"social-talk\">\n                    <div class=\"media social-profile clearfix\">\n                        <a class=\"pull-left\">\n                            <img src=\"assets/a3.jpg\" alt=\"profile-picture\">\n                        </a>\n\n                        <div class=\"media-body\">\n                            <span class=\"font-bold\">Mark Smith</span>\n                            <small class=\"text-muted\">14.04.2015</small>\n                            <div class=\"social-content\">\n                                Many desktop publishing packages and web page editors.\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"social-talk\">\n                    <div class=\"media social-profile clearfix\">\n                        <a class=\"pull-left\">\n                            <img src=\"assets/a4.jpg\" alt=\"profile-picture\">\n                        </a>\n\n                        <div class=\"media-body\">\n                            <span class=\"font-bold\">Marica Morgan</span>\n                            <small class=\"text-muted\">21.03.2015</small>\n\n                            <div class=\"social-content\">\n                                There are many variations of passages of Lorem Ipsum available, but the majority have\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"p-m\">\n            <span class=\"font-bold no-margins\"> Sales in last week </span>\n            <div class=\"m-t-xs\">\n                <div class=\"row\">\n                    <div class=\"col-xs-6\">\n                        <small>Today</small>\n                        <h4 class=\"m-t-xs\">$170,20 <i class=\"fa fa-level-up text-success\"></i></h4>\n                    </div>\n                    <div class=\"col-xs-6\">\n                        <small>Last week</small>\n                        <h4 class=\"m-t-xs\">$580,90 <i class=\"fa fa-level-up text-success\"></i></h4>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-6\">\n                        <small>Today</small>\n                        <h4 class=\"m-t-xs\">$620,20 <i class=\"fa fa-level-up text-success\"></i></h4>\n                    </div>\n                    <div class=\"col-xs-6\">\n                        <small>Last week</small>\n                        <h4 class=\"m-t-xs\">$140,70 <i class=\"fa fa-level-up text-success\"></i></h4>\n                    </div>\n                </div>\n            </div>\n            <small> Lorem Ipsum is simply dummy text of the printing simply all dummy text.\n                Many desktop publishing packages and web page editors.\n            </small>\n        </div>\n\n    </div>\n\n    <!-- Footer-->\n    <footer class=\"footer\">\n        <span class=\"pull-right\">\n            ECE496\n        </span>\n\n    </footer>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/messages/mail/mailbox/mailbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MailboxComponent = (function () {
    function MailboxComponent() {
    }
    MailboxComponent.prototype.ngOnInit = function () {
    };
    MailboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mailbox',
            template: __webpack_require__("../../../../../src/app/home/messages/mail/mailbox/mailbox.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/messages/mail/mailbox/mailbox.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MailboxComponent);
    return MailboxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/messages/message.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageModule; });
/* unused harmony export MSG_ROUTES */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/home/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat_component__ = __webpack_require__("../../../../../src/app/home/messages/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mail_mailbox_mailbox_component__ = __webpack_require__("../../../../../src/app/home/messages/mail/mailbox/mailbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mail_email_view_email_view_component__ = __webpack_require__("../../../../../src/app/home/messages/mail/email-view/email-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mail_email_compose_email_compose_component__ = __webpack_require__("../../../../../src/app/home/messages/mail/email-compose/email-compose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mail_mail_component__ = __webpack_require__("../../../../../src/app/home/messages/mail/mail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MessageModule = (function () {
    function MessageModule() {
    }
    MessageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat_chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_6__mail_mail_component__["a" /* MailComponent */],
                __WEBPACK_IMPORTED_MODULE_3__mail_mailbox_mailbox_component__["a" /* MailboxComponent */],
                __WEBPACK_IMPORTED_MODULE_4__mail_email_view_email_view_component__["a" /* EmailViewComponent */],
                __WEBPACK_IMPORTED_MODULE_5__mail_email_compose_email_compose_component__["a" /* EmailComposeComponent */],
            ]
        })
    ], MessageModule);
    return MessageModule;
}());

var MSG_ROUTES = [
    { path: 'messages/chat', component: __WEBPACK_IMPORTED_MODULE_2__chat_chat_component__["a" /* ChatComponent */] },
    { path: 'messages/mail/mailbox', component: __WEBPACK_IMPORTED_MODULE_3__mail_mailbox_mailbox_component__["a" /* MailboxComponent */] },
    { path: 'messages/mail/email-view', component: __WEBPACK_IMPORTED_MODULE_4__mail_email_view_email_view_component__["a" /* EmailViewComponent */] },
    { path: 'messages/mail/email-compose', component: __WEBPACK_IMPORTED_MODULE_5__mail_email_compose_email_compose_component__["a" /* EmailComposeComponent */] },
];


/***/ }),

/***/ "../../../../../src/app/home/projects/project-profile/project-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/projects/project-profile/project-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"small-header transition\">\n  <div class=\"hpanel\">\n    <div class=\"panel-body\">\n<!--\n      <ng-container >\n                            <span *ngIf=\"like_or_not == false\">\n                             <span  (click)=\" like_or_not = true\" (click)=\"like(like_or_not)\"> <button class=\"btn btn-xs btn-default\"><i class=\"glyphicon glyphicon-heart-empty\" style=\"color:red\" ></i> Like </button></span>\n                            </span>\n        <span *ngIf=\"like_or_not == true\" ><span (click)=\"like_or_not = false\" (click)=\"like(like_or_not)\"><button class=\"btn btn-xs btn-default\"><i class=\"glyphicon glyphicon-heart\" style=\"color:red\" ></i> DisLike </button></span></span>\n      </ng-container>-->\n\n\n      <div id=\"hbreadcrumb\" class=\"pull-right\">\n        <ol class=\"hbreadcrumb breadcrumb\">\n          <li>\n            <a [routerLink]=\"['/dashboard']\">Dashboard</a>\n          </li>\n          <li>\n            <span>Manage</span>\n          </li>\n          <li class=\"active\">\n            <span>My Projects</span>\n          </li>\n        </ol>\n      </div>\n      <h2 class=\"font-light m-b-xs\">\n        My Projects\n      </h2>\n      <small>This page shows your projects and projects you like.</small>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n<div class=\"content\">\n\n  <ul class=\"nav nav-tabs\">\n    <li *ngIf=\"role=='Supervisor'\" class=\"\">\n    <a data-toggle=\"tab\" href=\"#tab-1\">\n      <strong>Supervised Projects</strong>\n    </a>\n\n  </li>\n\n    <li class=\"active\">\n      <a data-toggle=\"tab\" href=\"#tab-2\">\n        <strong>Your Projects</strong>\n      </a>\n    </li>\n    <li class=\"\">\n      <a data-toggle=\"tab\" href=\"#tab-3\">\n        <strong>Liked Projects</strong>\n      </a>\n\n    </li>\n    <!--<li *ngIf=\"recommandp\" class=\"\">\n      <a data-toggle=\"tab\" href=\"#tab-4\">\n        <strong>Recommend Projects</strong>\n      </a>\n\n    </li>-->\n\n  </ul>\n\n  <div class=\"tab-content\">\n\n    <div  id=\"tab-1\" class=\"tab-pane\">\n      <div  class=\"hpanel\">\n        <div class=\"panel-body\">\n          <!--projects-->\n          <div *ngIf=\"supervisedp\">\n          <div class=\"hpanel hgreen\" *ngFor='let proj of supervisedp'>\n            <div class=\"panel-body\">\n              <div class=\"pull-right\">\n                <!-- button class=\"btn btn-success btn-xs\">{{proj.status}}</button-->\n                <button [routerLink]=\"['/projects', proj.pid]\" class=\"btn btn-xs btn-default\"> View</button>\n\n                <button class=\"btn btn-default btn-xs\" [routerLink]=\"['/projects/projectEdit',proj.pid]\">\n                  <i class=\"fa fa-pencil\"></i> Edit</button>\n                <small *ngIf=\"proj?.status=='Open'\" class=\"label label-success \">Available</small>\n                <small *ngIf=\"proj?.status == 'Closed'\" class=\"label label-warning \">Closed</small>\n              </div>\n              <h3 class=\"m-t-none\">\n                <a [routerLink]=\"['/projects',proj.pid]\">{{proj.name}}</a>\n              </h3>\n              <small>{{proj.abs}}\n              </small>\n              <div class=\"m-t-md\">\n                <canvas id=\"lineOptions\" height=\"10\"></canvas>\n              </div>\n            </div>\n          </div>\n          </div>\n\n          <div *ngIf=\"supervisedp.length==0\">\n            <div class=\"hpanel hgreen\">\n              <div class=\"panel-body\">\n                <small>You are not supervising any projects yet.\n                </small>\n                <span> You can <button [routerLink]=\"['/projects']\" class=\"btn btn-xs btn-default\">browse</button> or <button [routerLink]=\"['/search']\" class=\"btn btn-xs btn-default\">search</button>to find projects you may want to supervise!</span>\n\n                <div class=\"m-t-md\">\n                  <canvas id=\"lineOptions\" height=\"10\"></canvas>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n    </div>\n\n    <div id=\"tab-2\" class=\"tab-pane active\">\n      <div class=\"hpanel\">\n        <div class=\"panel-body\">\n          <!--projects-->\n          <div class=\"row projects\" *ngIf=\"!supervisedp\">\n            <div class=\"hpanel\">\n                <div class=\"panel-body\">\n   \t\t\t\t\t <h3>Please wait while we are loading your projects :)</h3>\n    \t\t\t</div>\n    \t\t</div>\n    \t  </div>\n          <div class=\"hpanel hblue\" *ngFor='let proj of createdp'>\n            <div class=\"panel-body\">\n              <div class=\"pull-right\">\n                <!-- button class=\"btn btn-success btn-xs\">{{proj.status}}</button-->\n                <button [routerLink]=\"['/projects', proj.pid]\" class=\"btn btn-xs btn-default\"> View</button>\n\n                <button class=\"btn btn-default btn-xs\" [routerLink]=\"['/projects/projectEdit',proj.pid]\">\n                  <i class=\"fa fa-pencil\"></i> Edit</button>\n                <small *ngIf=\"proj?.status=='Open'\" class=\"label label-success \">Available</small>\n                <small *ngIf=\"proj?.status == 'Closed'\" class=\"label label-warning \">Closed</small>\n              </div>\n              <!--project1-->\n              <h3 class=\"m-t-none\">\n                <a [routerLink]=\"['/projects',proj.pid]\">{{proj.name}}</a>\n              </h3>\n\n\n              <small>{{proj.abs}}\n              </small>\n              <div class=\"m-t-md\">\n                <canvas id=\"lineOptions\" height=\"10\"></canvas>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"createdp.length==0\">\n            <div class=\"hpanel hgreen\">\n              <div class=\"panel-body\">\n                <small>You haven't created any project one.\n                </small>\n                <span> You can <button [routerLink]=\"['/projects/create']\"  class=\"btn btn-xs btn-default\">CREATE</button> your own projects!</span>\n                <div class=\"m-t-md\">\n                  <canvas id=\"lineOptions\" height=\"10\"></canvas>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n    <div id=\"tab-3\" class=\"tab-pane\">\n      <div class=\"hpanel\">\n        <div class=\"panel-body\">\n          <!--projects-->\n          <div class=\"hpanel hred\" *ngFor='let proj of likedp'>\n            <div class=\"panel-body\">\n              <div class=\"pull-right\">\n                <!-- button class=\"btn btn-success btn-xs\"> {{proj.status}}</button-->\n                <small *ngIf=\"proj?.status=='Open'\" class=\"label label-success \">OPEN</small>\n                <small *ngIf=\"proj?.status == 'Closed'\" class=\"label label-warning \">Closed</small>\n                <!--<a [routerLink]=\"['project-profile', user.uid]\">--><button  class=\"btn btn-xs btn-default\" (click)=\"like(false, proj.pid, user.uid)\"><i class=\"glyphicon glyphicon-heart\" style=\"color:red\" ></i> Dislike </button><!--</a>-->\n              </div>\n              <!--project1-->\n              <h3 class=\"m-t-none\">\n                <a [routerLink]=\"['/projects',proj.pid]\">{{proj.name}}</a>\n              </h3>\n              <small>{{proj.abs}}\n              </small>\n              <div class=\"m-t-md\">\n                <canvas id=\"lineOptions\" height=\"10\"></canvas>\n              </div>\n            </div>\n          </div>\n\n          <div *ngIf=\"likedp.length==0\">\n            <div class=\"hpanel hgreen\">\n              <div class=\"panel-body\">\n                <small>You haven't liked any project.\n                </small>\n                <span> You can <button [routerLink]=\"['/projects']\"  class=\"btn btn-xs btn-default\">browse</button> or <button [routerLink]=\"['/search']\"  class=\"btn btn-xs btn-default\">search</button>to find projects you like!</span>\n                <div class=\"m-t-md\">\n                  <canvas id=\"lineOptions\" height=\"10\"></canvas>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/projects/project-profile/project-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_home_service__ = __webpack_require__("../../../../../src/app/home/shared/service/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_user_service_user_service__ = __webpack_require__("../../../../../src/app/home/users/user-service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__teams_team_service_team_service__ = __webpack_require__("../../../../../src/app/home/teams/team-service/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__project_service_project_service__ = __webpack_require__("../../../../../src/app/home/projects/project-service/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProjectProfileComponent = (function () {
    function ProjectProfileComponent(_userService, _teamService, _projectService, _route, _homeService, _router) {
        this._userService = _userService;
        this._teamService = _teamService;
        this._projectService = _projectService;
        this._route = _route;
        this._homeService = _homeService;
        this._router = _router;
    }
    ProjectProfileComponent.prototype.reload = function () {
        location.reload();
    };
    ProjectProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // setTimeout(() => {
        this._homeService.get4id().subscribe(function (_ids) {
            if (isNaN(_ids.profile) || _ids.profile < 1) {
                swal({
                    title: "Seems like you do not have a profile yet!",
                    text: "Create one now!",
                    type: "info"
                });
                // alert("Invalid User ID");
                _this._router.navigate(['/users/create']);
                return false;
            }
        });
        this._homeService.get4id().subscribe(function (_data) {
            _this.currentuid = _data;
            _this.currentuid = _this.currentuid.user;
            if (_this.currentuid) {
                _this.liked_count = 0;
                //const uid = +this._route.snapshot.paramMap.get('uid');
                //console.log("uid", uid)
                // const uid = 94;
                //const uid = 54;
                _this.createdp = new Array();
                _this.supervisedp = new Array();
                _this.likedp = new Array();
                _this._userService.getRealUser(_this.currentuid)
                    .subscribe(function (_user) {
                    _user.uid = _this.currentuid; ////////////////////////////////remove this line to get real userid
                    _user.first = _user.first;
                    _user.last = _user.last;
                    _user.role = _user.groups;
                    if (_user.role[0] === 1) {
                        _user.role = 'Supervisor';
                    }
                    if (_user.role[0] === 2) {
                        _user.role = 'Student';
                    }
                    //this._teamService.getTeam()
                    //.subscribe(_team => {
                    //_user.team = _team;
                    //_user.team.tags = _user.team.tag.split(" ");
                    //console.log("project-profile", this.likedp, this.createp);
                    _this.user = _user;
                    _this.role = _this.user.role;
                    //this.user.role = _user.role;
                    console.log("supervisor name", _this.user.uid);
                    // });
                });
                _this._projectService.getUserLikedProject(_this.currentuid) //////////////real user
                    .subscribe(function (_liked) {
                    for (var x = 0; x < _liked.length; x++) {
                        _liked[x].created = _liked[x].created_date;
                        _liked[x].pid = _liked[x].project_id;
                        _liked[x].name = _liked[x].project_title;
                        _liked[x].liked_number = _liked[x].liked_by_people_number;
                        _liked[x].abs = _liked[x].project_short_description;
                        _liked[x].status = _liked[x].project_status;
                        _this.likedp.push(_liked[x]);
                    }
                });
                _this._projectService.getUserCreatedProject(_this.currentuid) ///////////////////real user
                    .subscribe(function (_created) {
                    for (var x = 0; x < _created.length; x++) {
                        _created[x].created = _created[x].created_date;
                        _created[x].pid = _created[x].project_id;
                        _created[x].name = _created[x].project_title;
                        _created[x].liked_number = _created[x].liked_by_people_number;
                        _created[x].abs = _created[x].project_short_description;
                        _created[x].status = _created[x].project_status;
                        _this.createdp.push(_created[x]);
                    }
                });
                _this._projectService.getUserSupervisedProject(_this.currentuid) ///////////////////real user
                    .subscribe(function (_supervised) {
                    for (var x = 0; x < _supervised.length; x++) {
                        _supervised[x].created = _supervised[x].created_date;
                        _supervised[x].pid = _supervised[x].project_id;
                        _supervised[x].name = _supervised[x].project_title;
                        _supervised[x].liked_number = _supervised[x].liked_by_people_number;
                        _supervised[x].abs = _supervised[x].project_short_description;
                        _supervised[x].status = _supervised[x].project_status;
                        _this.supervisedp.push(_supervised[x]);
                    }
                });
                //}, 50);
            }
        }, function (err) {
            $({
                title: "Not Logined",
                text: "Please Login",
                type: "error"
            });
            _this._router.navigate(['/login']);
        });
    };
    ProjectProfileComponent.prototype.like = function (like_or_not, pid, uid) {
        //this.like_or_not = $('#like_or_not').val();
        console.log('liked:', like_or_not, 'pid:', pid, 'uid:', uid);
        this._projectService.postRemoveLiked(pid, uid)
            .subscribe(function (result) {
            console.log(result);
        });
        this.ngOnInit();
    };
    ProjectProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-project-profile',
            template: __webpack_require__("../../../../../src/app/home/projects/project-profile/project-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/projects/project-profile/project-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__users_user_service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__teams_team_service_team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_5__project_service_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__shared_service_home_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ProjectProfileComponent);
    return ProjectProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/projects/project-service/project-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectGuardService = (function () {
    function ProjectGuardService(_router) {
        this._router = _router;
    }
    ProjectGuardService.prototype.canActivate = function (route) {
        var pid = +route.url[1].path;
        if (isNaN(pid) || pid < 1) {
            swal({
                title: "Invalid Project ID",
                type: "error"
            });
            // alert("Invalid Project ID");
            // this._router.navigate(['/projects']);
            return false;
        }
        ;
        return true;
    };
    ProjectGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ProjectGuardService);
    return ProjectGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/home/projects/project-service/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProjectService = (function () {
    function ProjectService(_http) {
        this._http = _http;
        this.url = 'http://api.ece496.com/project_finder/project_detail?project_id=';
        this.url2 = 'http://api.ece496.com/project_finder/liked_project?user_id=';
        this.url3 = 'http://api.ece496.com/project_finder/project_recommendation?project_id=';
        this.url4 = 'http://api.ece496.com/project_finder/user_created_project?user_id=';
        this.url5 = 'http://api.ece496.com/project_finder/user_supervised_project?user_id=';
    }
    ProjectService.prototype.handleError = function (err) {
        console.log(err.message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.message);
    };
    ProjectService.prototype.httpOptions = function () {
        return {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
            }),
            // params: _params,
            withCredentials: true
        };
    };
    ProjectService.prototype.getProject = function (pid) {
        //console.log('hahah??', pid, typeof(pid) );
        return this._http.get(this.url + pid, this.httpOptions())
            .do(function (data) { return console.log("project.service.ts - getProject: ", JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ProjectService.prototype.getProfileID = function (uid) {
        //console.log('hahah??', pid, typeof(pid) );
        return this._http.get('http://api.ece496.com/team_finder/getprofileid/' + uid, this.httpOptions())
            .catch(this.handleError);
    };
    ProjectService.prototype.getRecommendedProject = function (pid, uid) {
        //var data = {"user_id": uid};
        var url = this.url3 + pid + '&user_id=' + uid;
        //console.log('url-----------------', url);
        //console.log('url-----------------', this.url3+pid);
        return this._http.get(/*'./assets/testdata/projects/projects.json')*/ url, this.httpOptions())
            .do(function (data) { return console.log("project.service.ts - getRecommendedProject: ", JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ProjectService.prototype.getUserLikedProject = function (uid) {
        //console.log('hahah??', pid, typeof(pid) );
        return this._http.get(this.url2 + uid, this.httpOptions())
            .do(function (data) { return console.log("project.service.ts - getLikedProject: ", JSON.stringify(data)); })
            .catch(this.handleError);
        // for search component
        // project.s_name = project.name;
        // project.s_str = project.pid + " " + project.oid + " " + project.name + " " + project.owner + " " + project.email + " " + project.tag
    };
    ProjectService.prototype.getUserCreatedProject = function (uid) {
        return this._http.get(this.url4 + uid, this.httpOptions())
            .do(function (data) { return console.log("project.service.ts - getCreatedProject: ", JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ProjectService.prototype.getUserSupervisedProject = function (uid) {
        return this._http.get(this.url5 + uid, this.httpOptions())
            .do(function (data) { return console.log("project.service.ts - getSupervisedProject: ", JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ProjectService.prototype.getProjects = function () {
        return this._http.get('http://api.ece496.com/project_finder/projects', this.httpOptions() /*'./assets/testdata/projects/projects.json'*/)
            .do(function (data) { return JSON.stringify(data); })
            .catch(this.handleError);
    };
    ProjectService.prototype.getArea = function () {
        return this._http.get('http://api.ece496.com/project_finder/all_tags', this.httpOptions())
            .do(function (data) { return console.log("project.service.ts - getArea: ", JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ProjectService.prototype.getOpenProject = function () {
        return this._http.get('http://api.ece496.com/project_finder/avaliable_project_number', this.httpOptions())
            .do(function (data) { return console.log("project.service.ts - getArea: ", JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ProjectService.prototype.postComment = function (_pid, _uid, _comment) {
        var data = { "project_id": _pid, "user_id": _uid, "content": _comment, "reply_to_root": true };
        console.log(data);
        return this._http.post('http://api.ece496.com/project_finder/add_comment', data, this.httpOptions())
            .do(function (data) { return console.log("postComment: ", data); })
            .catch(this.handleError);
    };
    ProjectService.prototype.postAddLiked = function (_pid, _uid) {
        var data = { "project_id": _pid, "user_id": _uid };
        return this._http.post('http://api.ece496.com/project_finder/add_like_project', data, this.httpOptions())
            .do(function (data) { return console.log("postAddLiked: ", data); })
            .catch(this.handleError);
    };
    ProjectService.prototype.postRemoveLiked = function (_pid, _uid) {
        var data = { "project_id": _pid, "user_id": _uid };
        return this._http.post('http://api.ece496.com/project_finder/remove_like_project', data, this.httpOptions())
            .do(function (data) { return console.log("postRemoveLiked: ", data); })
            .catch(this.handleError);
    };
    ProjectService.prototype.postCreateProject = function (uid, name, abs, about, checkedarea, checkedsize) {
        var data = { "created_user_id": uid, "project_title": name, "project_short_description": abs, "project_detailed_description": about, "related_areas": checkedarea, "number_of_members_accepted": checkedsize };
        console.log(data);
        return this._http.post('http://api.ece496.com/project_finder/add_project', data, this.httpOptions())
            .do(function (data) { return console.log("postCreateProject: ", data); })
            .catch(this.handleError);
    };
    ProjectService.prototype.postEditProject = function (uid, pid, name, status, abs, about, checkedarea, checkedsize) {
        var data = { "user_id": uid, "project_id": pid, "project_title": name, "project_status": status, "project_short_description": abs, "project_detailed_description": about, "related_areas": checkedarea, "number_of_members_accepted": checkedsize };
        console.log(data);
        return this._http.post('http://api.ece496.com/project_finder/edit_project', data, this.httpOptions())
            .do(function (data) { return console.log("postEditProject: ", data); })
            .catch(this.handleError);
    };
    ProjectService.prototype.postClaimProject = function (uid, pid) {
        var data = { "user_id": uid, "project_id": pid };
        console.log(data);
        return this._http.post('http://api.ece496.com/project_finder/claim_project', data, this.httpOptions())
            .do(function (data) { return console.log("postClaimProject: ", data); })
            .catch(this.handleError);
    };
    ProjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "../../../../../src/app/home/projects/project.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/home/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_profile_project_profile_component__ = __webpack_require__("../../../../../src/app/home/projects/project-profile/project-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projectListing_projectListing_component__ = __webpack_require__("../../../../../src/app/home/projects/projectListing/projectListing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projectCreate_projectCreate_component__ = __webpack_require__("../../../../../src/app/home/projects/projectCreate/projectCreate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__projectDetail_projectDetail_component__ = __webpack_require__("../../../../../src/app/home/projects/projectDetail/projectDetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__projectEdit_projectEdit_component__ = __webpack_require__("../../../../../src/app/home/projects/projectEdit/projectEdit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__project_service_project_service__ = __webpack_require__("../../../../../src/app/home/projects/project-service/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__project_service_project_guard_service__ = __webpack_require__("../../../../../src/app/home/projects/project-service/project-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ProjectModule = (function () {
    function ProjectModule() {
    }
    ProjectModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__project_profile_project_profile_component__["a" /* ProjectProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_3__projectListing_projectListing_component__["a" /* ProjectListingComponent */],
                __WEBPACK_IMPORTED_MODULE_4__projectCreate_projectCreate_component__["a" /* ProjectCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_5__projectDetail_projectDetail_component__["a" /* ProjectDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_6__projectEdit_projectEdit_component__["a" /* ProjectEditComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__project_service_project_service__["a" /* ProjectService */],
                __WEBPACK_IMPORTED_MODULE_8__project_service_project_guard_service__["a" /* ProjectGuardService */],
            ]
        })
    ], ProjectModule);
    return ProjectModule;
}());

// export const PROJECT_ROUTES = [
//   { path: 'projects', component: ProjectListingComponent },
//   //{ path: 'projects/project-list', component: ProjectListComponent },
//   { path: 'projects/create', component: ProjectCreateComponent },
//   //{ path: 'projects/projectDetail', component: ProjectDetailComponent },
//   { path: 'projects/projectEdit/:pid', component: ProjectEditComponent },
//   { path: 'projects/projectSearch', component: ProjectSearchComponent },
//   { path: 'projects/:pid', canActivate: [ProjectGuardService], component: ProjectDetailComponent },
//   { path: 'projects/project-profile/:uid', component: ProjectProfileComponent },
// ]


/***/ }),

/***/ "../../../../../src/app/home/projects/projectCreate/projectCreate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/projects/projectCreate/projectCreate.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"small-header\">\n  <div class=\"hpanel\">\n    <div class=\"panel-body\">\n      <div id=\"hbreadcrumb\" class=\"pull-right\">\n        <ol class=\"hbreadcrumb breadcrumb\">\n          <li>\n            <a [routerLink]=\"['/dashboard']\">Dashboard</a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/create']\">Create</a>\n          </li>\n          <li class=\"active\">\n            <span>Create a Project </span>\n          </li>\n        </ol>\n      </div>\n      <h2 class=\"font-light m-b-xs\">\n        Create a Project\n      </h2>\n    </div>\n  </div>\n</div>\n\n<div class=\"content\">\n\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"hpanel\">\n\n        <div class=\"panel-body\">\n\n          <form (ngSubmit)=\"save()\" #projectForm=\"ngForm\">\n\n            <div class=\"text-center m-b-md\" id=\"wizardControl\">\n\n\n\n\n            </div>\n\n            <div class=\"tab-content\">\n              <div *ngIf=\"steps==1\" [ngClass]=\"{'active':steps==1}\" class=\"p-m tab-pane\">\n                <div class=\"row\">\n                  <div class=\"col-lg-12\">\n                    <div class=\"row\">\n                      <div class=\"form-group col-lg-12\" [ngClass]=\"{'has-error': (v_pname.touched || v_pname.dirty) && !v_pname.valid}\">\n                        <label>Project Title *</label>\n                        <span class=\"text-danger\" *ngIf=\"(v_pname.touched || v_pname.dirty) && v_pname.errors?.required\">\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter a Project Title</span>\n                        <span class=\"text-danger\" *ngIf=\"(v_pname.touched || v_pname.dirty) && v_pname.errors?.minlength\">\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter minimum 10 character</span>\n                        <input #v_pname=\"ngModel\" required minlength=\"10\" [(ngModel)]='new_project.name' id='titlename' type=\"text\" class=\"form-control\" placeholder=\"Please enter a unique project title here...\"\n                          name=\"name\">\n                      </div>\n                      <div class=\"form-group col-lg-6\">\n                        <label>Number of Members *</label>\n                        <span class=\"text-danger\" *ngIf=\"sizeneeded\">\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please select team size </span>\n                        <br>\n                        <div *ngFor=\"let number of new_project.size\" class=\"col-lg-3\">\n                          <div class=\"checkbox checkbox-info checkbox-inline\">\n                            <input (click)=\"selectsize(name)\" type=\"checkbox\" [(ngModel)]='number.value' [name]=\"number.label\">\n                            <label> {{number.label}} </label>\n                          </div>\n                        </div>\n                      </div>\n                      <!--<div class=\"form-group col-lg-6\">\n                          <label>Project Status</label>\n                           <br>\n\t                          <div *ngFor=\"let status of new_project.status\" class=\"col-lg-3\">\n\t                            <div class=\"checkbox checkbox-info checkbox-inline\">\n\t                              <input type=\"checkbox\" [(ngModel)]='status.value' [name]=\"status.label\">\n\t                              <label> {{status.label}} </label>\n\t                            </div>\n                          </div>\n                        </div>-->\n\n                      <div class=\"form-group col-lg-12\" [ngClass]=\"{'has-error': (v_pabs.touched || v_pabs.dirty) && !v_pabs.valid}\">\n                        <label>Project Abstract *</label>\n                        <span class=\"text-danger\" *ngIf=\"(v_pabs.touched || v_pabs.dirty) && v_pabs.errors?.required\">\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter a Short Description</span>\n                        <span class=\"text-danger\" *ngIf=\"(v_pabs.touched || v_pabs.dirty) && v_pabs.errors?.minlength\">\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter minimum 50 character</span>\n                        <textarea style=\"resize:none;\" #v_pabs=\"ngModel\" required minlength=\"50\" id=\"abstract\" maxlength=\"1000\" [(ngModel)]='new_project.abs'\n                          type=\"text\" class=\"form-control\" placeholder=\"Minimin 50, Maximum 1000 characters, please enter full details in Description below\"\n                          name=\"abs\"></textarea>\n\n                      </div>\n\n                      <div class=\"form-group col-lg-12\">\n                        <label class=\"control-label\">Related Areas *</label>\n                        <span class=\"text-danger\" *ngIf=\"areaneeded\">\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please select at least one Related Area </span>\n                        <br>\n                        <div *ngFor=\"let area of new_project.areas\" class=\"col-lg-3\">\n                          <div class=\"checkbox checkbox-info checkbox-inline\">\n                            <input  type=\"checkbox\" [(ngModel)]='area.value' [name]=\"area.tag_name\" >\n                            <label> {{area.tag_name}} </label>\n                          </div>\n                        </div>\n                      </div>\n\n                      <div class=\"form-group col-lg-12\" [ngClass]=\"{'has-error': (v_plongdes.touched || v_plongdes.dirty) && !v_plongdes.valid}\">\n                        <div class=\"hpanel\">\n                          <label>Description *</label>\n                        <span class=\"text-danger\" *ngIf=\"(v_plongdes.touched || v_plongdes.dirty) && v_plongdes.errors?.required\">\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter a Detailed Description</span>\n                        <span class=\"text-danger\" *ngIf=\"(v_plongdes.touched || v_plongdes.dirty) && v_plongdes.errors?.minlength\">\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter minimum 50 character</span>\n                          <textarea style=\"resize:none;\" #v_plongdes=\"ngModel\" required minlength=\"50\" rows=\"10\" maxlength=\"2000\" id=\"longdes\" [(ngModel)]='new_project.about'\n                            type=\"text\" class=\"form-control\" placeholder=\"Longer than short description! Put all the details!\"\n                            name=\"about\"></textarea>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n\n\n              <div class=\"text-right m-t-xs\">\n\n                <a class=\"btn btn-info\" [ngClass]=\"{'disabled':!projectForm.valid}\" *ngIf=\"steps==1\" (click)=\"getData()\">Submit</a>\n\n              </div>\n\n            </div>\n          </form>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/projects/projectCreate/projectCreate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__teams_team_service_team_service__ = __webpack_require__("../../../../../src/app/home/teams/team-service/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_service_project_service__ = __webpack_require__("../../../../../src/app/home/projects/project-service/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_home_service__ = __webpack_require__("../../../../../src/app/home/shared/service/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectCreateComponent = (function () {
    function ProjectCreateComponent(_teamService, _projectService, _homeService, _router) {
        this._teamService = _teamService;
        this._projectService = _projectService;
        this._homeService = _homeService;
        this._router = _router;
    }
    ProjectCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sizeneeded = false;
        this.areaneeded = false;
        this.new_project = {
            magictoken: 110020,
            created: new Date(),
            modified: new Date(),
            views: 0
        };
        this._homeService.get4id().subscribe(function (_ids) {
            if (isNaN(_ids.profile) || _ids.profile < 1) {
                swal({
                    title: "You need to create a profile first!",
                    type: "info"
                });
                // alert("Invalid User ID");
                _this._router.navigate(['/users/create']);
                return false;
            }
        });
        this._projectService.getArea()
            .subscribe(function (_project) {
            _this.new_project.areas = new Array();
            for (var x = 0; x < _project.length; x++) {
                // console.log(_projects[i].related_areas[3]);
                _this.new_project.areas.push({ 'pk': _project[x].pk, 'tag_name': _project[x].tag_name, 'value': false });
                //_projects[i].areas[x].label = _projects[i].related_areas[x];
                //_projects[i].areas[x].value = true;
            }
        });
        /*this.new_project.areas = [
          { label: 'Photonics', value: false },
          { label: 'Semiconductor', value: false },
          { label: 'Electromagnetics', value: false },
          { label: 'Energy', value: false },
          { label: 'Analog', value: false },
          { label: 'Digital', value: false },
          { label: 'Control', value: false },
          { label: 'Communication', value: false },
          { label: 'Signal Processing', value: false },
          { label: 'Computer Hardware', value: false },
          { label: 'Computer Software', value: false },
          { label: 'Computer Network', value: false },
        ];*/
        this.new_project.size = [
            { label: '2', value: false },
            { label: '3', value: false },
            { label: '4', value: false },
        ];
        this.new_project.status = [
            { label: 'Open', value: true },
            { label: 'Closed', value: false },
        ];
        this.email_pattern = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
        this.jq_summernote = true;
        this.jq_datatable = false;
        this.inpup_disable = true;
        this.steps = 1;
        this.steps_prev = 1;
    };
    ProjectCreateComponent.prototype.selectsize = function (size) {
        for (var x = 0; x < this.new_project.size.length; x++) {
            if (size == this.new_project.size[x].label) {
                if (this.new_project.size[x].value) {
                    this.new_project.size[x].value = false;
                }
                else {
                    this.new_project.size[x].value = true;
                }
            }
            else {
                this.new_project.size[x].value = false;
            }
        }
    };
    ProjectCreateComponent.prototype.getData = function () {
        var _this = this;
        this.checkedsize = 0;
        this.new_project.name = $('#titlename').val();
        this.new_project.abs = $('#abstract').val();
        this.new_project.about = $('#longdes').val();
        console.log('title', this.new_project.name, 'abstract', this.new_project.abs, 'longdis', this.new_project.about);
        this.checkedarea = new Array();
        for (var i = 0; i < this.new_project.areas.length; i++) {
            if (this.new_project.areas[i].value)
                this.checkedarea.push({ 'pk': this.new_project.areas[i].pk, 'tag_name': this.new_project.areas[i].tag_name, 'value': true });
        }
        console.log(this.checkedarea);
        for (var i = 0; i < this.new_project.size.length; i++) {
            if (this.new_project.size[i].value)
                this.checkedsize = Number(this.new_project.size[i].label);
        }
        console.log(this.checkedsize);
        if (this.checkedsize != 2 && this.checkedsize != 3 && this.checkedsize != 4 && this.checkedarea.length === 0) {
            this.sizeneeded = true;
            this.areaneeded = true;
            //console.log(this.checkedsize, this.checkedarea);
        }
        else if (this.checkedsize != 2 && this.checkedsize != 3 && this.checkedsize != 4) {
            this.areaneeded = false;
            this.sizeneeded = true;
            //console.log(this.checkedsize);
        }
        else if (this.checkedarea.length === 0) {
            this.sizeneeded = false;
            this.areaneeded = true;
            //console.log(this.checkedarea);
        }
        else {
            this._homeService.get4id().subscribe(function (_data) {
                _this.currentuid = _data;
                _this.currentuid = _this.currentuid.user;
                //console.log('heyuid', this.uid);
                _this._projectService.postCreateProject(_this.currentuid, _this.new_project.name, _this.new_project.abs, _this.new_project.about, _this.checkedarea, _this.checkedsize)
                    .subscribe(function (result) {
                    console.log(result);
                    location.replace('/projects/' + result.project_id);
                });
            }, function (err) {
                $({
                    title: "Not Logined",
                    text: "Please Login",
                    type: "error"
                });
                _this._router.navigate(['/login']);
            });
        }
        //location.reload();
    }; //for else
    ProjectCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projectCreate',
            template: __webpack_require__("../../../../../src/app/home/projects/projectCreate/projectCreate.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/projects/projectCreate/projectCreate.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__teams_team_service_team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_2__project_service_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_service_home_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], ProjectCreateComponent);
    return ProjectCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/projects/projectDetail/projectDetail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nbutton  {\n  position: relative;\n}\n\n.dislike {\n  position: absolute;\n  top: 100%;\n  left: 75%;\n  width: 100%;\n  content: attr(title);\n  color: #000;\n  line-height: 1.4em;\n  border: 1px solid #000;\n}\n\n.glyphicon-refresh-animate {\n  -animation: spin .7s infinite linear;\n  -webkit-animation: spin2 .7s infinite linear;\n}\n\n@-webkit-keyframes spin2 {\n  from { -webkit-transform: rotate(0deg);}\n  to { -webkit-transform: rotate(360deg);}\n}\n\n@-webkit-keyframes spin {\n  from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\n  to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\n}\n\n@keyframes spin {\n  from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\n  to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\n}\n\n.btn-static {\n  background-color: white;\n  border: 1px solid white;\n  cursor: default;\n}\n.btn-static:active {\n  box-shadow:         inset 0 0 0px white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/projects/projectDetail/projectDetail.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"small-header transition\">\n    <div class=\"hpanel\">\n        <div class=\"panel-body\">\n\n\n            <div id=\"hbreadcrumb\" class=\"pull-right\">\n                <ol class=\"hbreadcrumb breadcrumb\">\n                    <li>\n                        <a [routerLink]=\"['/dashboard']\">Dashboard</a>\n                    </li>\n                    <li>\n                      <a [routerLink]=\"['/projects']\">Projects</a>\n                    </li>\n                    <li class=\"active\">\n                        <span>Project details</span>\n                    </li>\n                </ol>\n            </div>\n            <h2 class=\"font-light m-b-xs\">\n                Project details\n            </h2>\n        </div>\n    </div>\n</div>\n\n<div class=\"content\" *ngIf=\"!project\">\n    <div class=\"row\">\n\n        <div class=\"col-md-12\">\n\n            <div class=\"hpanel\">\n                <div class=\"panel-body\">\n                  <button  class=\"btn btn-static\"><span class=\"glyphicon glyphicon-refresh glyphicon-refresh-animate\"></span> Loading...Please wait.</button>\n\n                </div>\n    \t\t</div>\n    \t</div>\n    </div>\n\n</div>\n\n<div class=\"content\" *ngIf=\"project\">\n\n    <div class=\"row\">\n\n        <div class=\"col-md-12\">\n\n            <div class=\"hpanel\">\n                <div class=\"panel-body\">\n\n\n                    <h2 class=\"m-t-none\">{{project.pid}}: {{project.name}}\n                        <span class=\"pull-right text-right text-success\">\n                            {{project.liked_number}} Likes\n                            <br/>\n                          <div  *ngIf=\"user.role=='Supervisor' && !has_sup\" >\n                        <a class=\"btn btn-success\" (click)=\"claimProject(user.uid, project.pid)\">Supervise</a></div>\n                          <div  *ngIf=\"user.role=='Student'&& !user.has_team\" >\n                            <a data-toggle=\"modal\" data-target=\"#myJoin\" class=\"btn btn-warning btn-outline btn-block\" ><!--(click)=\"getData()\"-->Join</a></div>\n                           <div data-toggle=\"modal\" data-target=\"#myJoinsuc\" *ngIf=\"user.role=='Student' && user.has_team\" >\n                            <a class=\"btn btn-warning btn-outline btn-block\" ><!--(click)=\"getData()\"-->Join</a></div>\n                        </span>\n                    </h2>\n\n\n                    <!-- button class=\"btn btn-danger btn-xs\">  Closed</button-->\n\n                    <div class=\"small m-t-xs\">\n                        <h5>\n                          <strong>Create by:</strong><a [routerLink]=\"['/users', project.ownerid]\"> {{project.owner_first_name}} {{project.owner_last_name}} ({{project.owner_role}})</a>\n                            <small>{{project.created | date:'yyyy-MM-dd HH:mm'}}</small>\n                        </h5>\n                        <h5 *ngIf=\"project.supervisor\">\n                          <strong>Supervisor: </strong><a [routerLink]=\"['/users', project.sid]\">{{project.supervisor}}</a></h5>\n                        <h5 *ngIf=\"project.team_member_number!=0\">\n                            <strong>Members: </strong>{{project.team_member_name}}</h5>\n\n                        <br/>\n\n                        <div  class=\"col-md-6\">\n                            <small *ngIf=\"project.status=='Open'\" class=\"label label-success \">OPEN</small>\n                            <small *ngIf=\"project.status == 'Closed'\" class=\"label label-warning \">Closed</small>\n                            <strong>accept {{project.number_of_members}} students per group </strong>\n                        </div>\n\n                        <div class=\"col-md-6\">\n\n                          <ng-container >\n                            <span *ngIf=\"like_or_not == false\">\n                             <span  (click)=\" like_or_not = true\" (click)=\"like(like_or_not,currentuid, project.pid)\"> <button class=\"btn btn-xs btn-default\"><i class=\"glyphicon glyphicon-heart-empty\" style=\"color:red\" ></i> Like </button></span>\n                            </span>\n                            <span *ngIf=\"like_or_not == true\" ><span (click)=\"like_or_not = false\" (click)=\"like(like_or_not,currentuid, project.pid)\">\n                               <button class=\"btn btn-xs btn-default\"><i class=\"glyphicon glyphicon-heart\" style=\"color:red\" ></i> Dislike </button></span></span>\n                           <!--<span *ngIf=\"like_or_not == true\" >\n                               <button class=\"btn btn-xs btn-default\"  disabled title=\"Please go to my profile\"><i class=\"glyphicon glyphicon-heart\" style=\"color:red\" ></i> Like </button></span>-->\n                          </ng-container>\n\n                            <span *ngIf=\"project.liked_number != 0\" >\n                                <span *ngIf=\"project.liked_number <3\" >\n                                  <strong>Liked by: </strong> <span *ngFor='let namestr of project.liked_people_name'> <a [routerLink]=\"['/users', namestr.uid]\">{{namestr.name}}</a>, </span> <a [routerLink]=\"['/users', last_liked.uid]\"><span>{{last_liked.name}}</span></a>\n                                </span>\n\n\n                              <span *ngIf=\"project.liked_number >=3\" >\n                                <ng-container>\n                                  <span *ngIf=\"expanded == false\"> <a [routerLink]=\"['/users', project.liked_people_name[0].uid]\">{{project.liked_people_name[0].name}}</a>,  <a [routerLink]=\"['/users', project.liked_people_name[1].uid]\">{{project.liked_people_name[1].name}}</a> and other {{greater}} people<span (click)=\"expanded = true\"><i class=\"fa fa-chevron-down\"></i></span></span>\n                                  <span *ngIf=\"expanded == true\"><span *ngFor='let namestr of project.liked_people_name' ><a [routerLink]=\"['/users', namestr.uid]\">{{namestr.name}}, </a></span>\n                                    <a [routerLink]=\"['/users', last_liked.uid]\"><span>{{last_liked.name}}. </span></a><span (click)=\"expanded = false\"><i class=\"fa fa-chevron-up\"></i></span></span>\n                                </ng-container>\n                                <br />\n\n                              </span>\n                            </span>\n\n                            <br/>\n                        </div>\n\n\n                    </div>\n                    <br/>\n                    <!-- <div class=\"m-t-md\">\n                            <a class=\"btn btn-xs btn-default\"><i class=\"fa fa-thumbs-up\"></i> Like </a>\n                            <a class=\"btn btn-xs btn-default\"><i class=\"fa fa-heart\"></i> Love</a>\n                            <a class=\"btn btn-xs btn-primary\"><i class=\"fa fa-pencil\"></i> Message</a>\n                        </div> -->\n                    <p>\n                        <br/> {{project.about}}\n                    </p>\n\n                    <br/>\n                    <br/>\n\n                    <div class=\"m-t-xs\" *ngIf=\"project.areas.length!=0\">\n\n                        <strong style=\"margin-right:1%\">Related Areas:</strong>\n                        <span style=\"margin-right:1%\" *ngFor='let area of project.areas'>{{area.tag_name}} </span>\n                    </div>\n\n                </div>\n            </div>\n\n\n\n            <div class=\"hpanel\">\n\n                <div class=\"panel-body\">\n                    <p>\n                        <strong>Discussion</strong>\n                    </p>\n                    <div class=\"hpanel hblue\">\n\n                        <div class=\"panel-body\">\n                            <div *ngFor='let comment of project.comments'>\n                                <div class=\"social-talk\">\n                                    <div class=\"media social-profile clearfix\">\n                                        <div class=\"media-body\">\n                                            <span class=\"font-bold\">{{comment.created_by.first_name}} {{comment.created_by.last_name}}</span>\n                                            <small class=\"text-muted\">{{comment.created_time | date:'yyyy-MM-dd HH:mm'}}</small>\n                                            <div class=\"social-content\">\n                                                {{comment.content}}\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"social-form\">\n                                <form action=\"#\" class=\"mt ng-untouched ng-pristine ng-valid\" novalidate=\"\">\n                                    <div class=\"form-group mb-0\">\n                                        <label class=\"sr-only\" for=\"new_comment\">New comment</label>\n                                        <textarea class=\"form-control\" id=\"new_comment\" style=\"resize:none\" placeholder=\"Your comment...\" rows=\"3\"></textarea>\n                                    </div>\n                                    <div class=\"btn-toolbar\">\n                                        <button class=\"btn btn-success btn-sm ml-auto\" type=\"submit\" (click)=\"newcomment(project.oid, project.pid)\">Post</button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n\n            </div>\n\n            <div class=\"hpanel\">\n\n                <div  class=\"panel-body col-md-12\">\n\n                    <p>\n                      <strong>Recommended Projects <small>(Since you are looking at this project and we know what you like..)</small></strong>\n                    </p>\n                  <div>\n                  <div class=\"hpanel\" *ngIf=\"!hasreco\">\n                    <div class=\"panel-body\">\n                     <span> You need to <button [routerLink]=\"['/users/create']\" (click)=\"reload()\" class=\"btn btn-xs btn-default\"> CREATE</button> a profile first so that we can give you some recommadation based on your interests!</span>\n                    </div>\n                  </div>\n                  <div class=\"hpanel\" *ngIf=\"!likedp && hasreco\">\n                    <div class=\"panel-body\">\n                      <span> You need to <button [routerLink]=\"['/projects']\" (click)=\"reload()\" class=\"btn btn-xs btn-default\"> Like</button> some projects so we can know what you are into!</span>\n                    </div>\n                  </div>\n\n                </div>\n                    <div class=\"hpanel\" *ngIf=\"!project.recommend_roject && hasreco && likedp\">\n\t\t                <div class=\"panel-body\">\n                      <button  class=\"btn btn-static\"><span class=\"glyphicon glyphicon-refresh glyphicon-refresh-animate\"></span> Loading...Please wait.</button>\n\t\t    \t\t\t</div>\n\t\t    \t\t</div>\n\n                    <div class=\"hpanel hblue\" *ngFor='let recproject of project.recommend_roject'>\n\t\t\t            <div class=\"panel-body\">\n\t\t\t              <div class=\"pull-right\">\n                      <button [routerLink]=\"['/projects', recproject.pid]\" (click)=\"reload()\" class=\"btn btn-xs btn-default\"> View</button>\n\n                      <small *ngIf=\"recproject.status=='Open'\" class=\"label label-success \">OPEN</small>\n\t\t\t                <small *ngIf=\"recproject.status == 'Closed'\" class=\"label label-warning \">Closed</small>\n\t\t\t              </div>\n\t\t\t              <h4 class=\"m-t-none\">\n\t\t\t                <a [routerLink]=\"['/projects',recproject.pid]\" (click)=\"reload()\">{{recproject.name}}</a>\n\t\t\t              </h4>\n\t\t\t              <small>{{recproject.abs}}\n\t\t\t              </small>\n\t\t\t              <div class=\"m-t-md\">\n\t\t\t                <canvas id=\"lineOptions\" height=\"10\"></canvas>\n\t\t\t              </div>\n\t\t\t            </div>\n\t\t\t          </div>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n\n</div>\n\n<!--for team-->\n<div class=\"modal fade\" id=\"myJoin\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"color-line\"></div>\n        <div class=\"modal-header text-center\">\n          <h4  class=\"modal-title\">Join</h4>\n          <span class=\"font-bold\">You don't have a team yet, please join or create a team</span>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"row text-center\">\n            <div class=\"col-sm-6\">\n\n              <button [routerLink]=\"['/teams']\" data-dismiss=\"modal\" type=\"button\" class=\"btn btn-info btn-lg\">Join</button>\n\n            </div>\n\n            <div class=\"col-sm-6\">\n              <button [routerLink]=\"['/teams/create']\" data-dismiss=\"modal\" type=\"button\" class=\"btn btn-warning btn-lg\">Create</button>\n            </div>\n          </div>\n        </div>\n        <!-- <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n            </div> -->\n      </div>\n\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"myJoinsuc\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"color-line\"></div>\n      <div class=\"modal-header text-center\">\n        <h3 class=\"font-bold\">Please enter the password to join</h3>\n        <a class=\"btn btn-warning col-lg-pull-2\"> <input  type=\"password\" title=\"Please enter your password\" placeholder=\"*********\" required=\"\" value=\"\" name=\"password\" class=\"form-control\">Join</a>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/home/projects/projectDetail/projectDetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_user_service_user_service__ = __webpack_require__("../../../../../src/app/home/users/user-service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teams_team_service_team_service__ = __webpack_require__("../../../../../src/app/home/teams/team-service/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_service_project_service__ = __webpack_require__("../../../../../src/app/home/projects/project-service/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_home_service__ = __webpack_require__("../../../../../src/app/home/shared/service/home.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProjectDetailComponent = (function () {
    function ProjectDetailComponent(_route, _userService, _teamService, _projectService, _homeService, _router) {
        this._route = _route;
        this._userService = _userService;
        this._teamService = _teamService;
        this._projectService = _projectService;
        this._homeService = _homeService;
        this._router = _router;
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
        this.has_sup = true;
        this.expanded = false;
        this.like_or_not = false;
        this.isSup = false;
        this.first = true;
        this.hasreco = false;
        this.getData();
        console.log('test123: ', this.expanded);
    };
    ProjectDetailComponent.prototype.like = function (like_or_not, uid, pid) {
        var _this = this;
        this._homeService.get4id().subscribe(function (_ids) {
            if (isNaN(_ids.profile) || _ids.profile < 1) {
                swal({
                    title: "You need to create a profile first!",
                    text: "Then you can like projects and save it to your profile!",
                    type: "info"
                });
                // alert("Invalid User ID");
                _this._router.navigate(['/users/create']);
                return false;
            }
        });
        //this.getData();
        console.log('liked:', like_or_not, 'uid:', uid, 'pid:', pid);
        if (like_or_not) {
            this._projectService.postAddLiked(pid, uid)
                .subscribe(function (result) {
                console.log(result);
                console.log('liked:', like_or_not, 'uid:', uid, 'pid:', pid);
            });
        }
        else {
            this._projectService.postRemoveLiked(pid, uid)
                .subscribe(function (result) {
                console.log(result);
                console.log('disliked:', like_or_not, 'uid:', uid, 'pid:', pid);
            });
        }
        this.getData();
        //location.reload();
        //console.log('tags', this.new_project.tags);
    };
    ProjectDetailComponent.prototype.newcomment = function (uid, pid) {
        this.new_com = $('#new_comment').val();
        console.log('new comment:', $('#new_comment').val(), '.', 'uid:', uid, 'pid:', pid);
        this._projectService.postComment(pid, uid, $('#new_comment').val())
            .subscribe(function (result) {
            console.log(result);
        });
        this.getData();
        $('#new_comment').val("");
        //location.reload();
    };
    ProjectDetailComponent.prototype.reload = function () {
        location.reload();
    };
    ProjectDetailComponent.prototype.claimProject = function (uid, pid) {
        var _this = this;
        this._homeService.get4id().subscribe(function (_ids) {
            if (isNaN(_ids.profile) || _ids.profile < 1) {
                swal({
                    title: "You need to create a profile first!",
                    text: "Then you can be the supervisor of the project and save it to your profile!",
                    type: "info"
                });
                // alert("Invalid User ID");
                _this._router.navigate(['/users/create']);
                return false;
            }
        });
        console.log('uid:', uid, 'pid:', pid);
        this._projectService.postClaimProject(uid, pid)
            .subscribe(function (result) {
            console.log(result);
        });
        this.getData();
        //this.reload();
    };
    ProjectDetailComponent.prototype.getData = function () {
        var _this = this;
        this._homeService.get4id().subscribe(function (_data) {
            _this.currentuid = _data;
            _this.currentuid = _this.currentuid.user;
            console.log('uidiod', _data);
            if (_this.currentuid) {
                _this._userService.getRealUser(_this.currentuid) /*RealUser*/
                    .subscribe(function (_users) {
                    _users.first = _users.first;
                    _users.last = _users.last;
                    _users.role = _users.groups;
                    _users.uid = _this.currentuid;
                    if (_data.team !== -1) {
                        _users.has_team = true;
                    }
                    else {
                        _users.has_team = false;
                    }
                    //_users.has_team = _users.has_team;
                    console.log('user has team?', _users.has_team);
                    if (_users.role[0] === 1) {
                        _users.role = 'Supervisor';
                    }
                    if (_users.role[0] === 2) {
                        _users.role = 'Student';
                    }
                    _this.user = _users;
                    //console.log("user role: ", _users.uid);
                    var pid = +_this._route.snapshot.paramMap.get('pid');
                    //const uid = this.user.uid;
                    _this._projectService.getProject(pid)
                        .subscribe(function (_project) {
                        _project.created = _project.created_date;
                        _project.pid = _project.project_id;
                        //_project.owner = _project.project_id;
                        _project.owner_first_name = _project.created_by.first_name;
                        _project.owner_last_name = _project.created_by.last_name;
                        _project.ownerid = _project.created_by.pk;
                        _project.owner_role = _project.created_by.role;
                        _this._projectService.getProfileID(_project.created_by.pk)
                            .subscribe(function (_o) {
                            _project.ownerid = _o.profile_id;
                        });
                        if (_project.owner_role === 'Supervisor' || _project.owner_role === 'supervisor') {
                            _this.isSup = true;
                            // console.log('sid', _project.sid);
                        }
                        if (_this.isSup == true) {
                            _project.owner_role = 'Professor';
                        }
                        console.log('are y0ou kidding', _this.currentuid);
                        _this._userService.getUser(_this.currentuid)
                            .subscribe(function (_user) {
                            _project.oid = _this.currentuid; /////////////// make this equal to _user.uid;
                            if (_this.first) {
                                _this.first = false;
                                _this._projectService.getUserLikedProject(_this.currentuid)
                                    .subscribe(function (_liked) {
                                    var p = new Array();
                                    for (var x = 0; x < _liked.length; x++) {
                                        p.push(_liked[x].project_id);
                                    }
                                    for (var x = 0; x < p.length; x++) {
                                        if (p[x] === _project.pid) {
                                            _this.like_or_not = true;
                                        }
                                    }
                                    //console.log("liked user por:", this.like_or_not);
                                });
                            }
                            //console.log("wtf>>", this.isSup);
                            //console.log(_project.owner_role);
                            _project.name = _project.project_title;
                            _project.liked_number = _project.liked_by_people_number;
                            _project.about = _project.project_detailed_description;
                            _project.tags = _project.related_areas;
                            _project.areas = new Array();
                            for (var x = 0; x < _project.related_areas.length; x++) {
                                // console.log(_projects[i].related_areas[3]);
                                _project.areas.push({ 'tag_name': _project.related_areas[x], 'value': true });
                            }
                            //console.log(_project.tags);
                            _project.status = _project.project_status;
                            _project.number_of_members = _project.number_of_members_accepted;
                            //_project.teams = _project.team;
                            _project.comments = _project.comments;
                            _project.team_member_name = " ";
                            if (_project.members != null) {
                                _project.team_member_number = _project.members.length;
                                for (var x = 0; x < _project.members.length; x++) {
                                    _project.team_member_name += _project.members[x].first_name + " " + _project.members[x].last_name;
                                    if (x !== (_project.members.length - 1)) {
                                        _project.team_member_name += ", ";
                                    }
                                }
                            }
                            else {
                                _project.team_member_number = 0;
                                _project.team_member_name = null;
                            }
                            //console.log(_project.team_member_name);
                            if (_project.liked_by_people_number > 2) {
                                _this.greater = _project.liked_by_people_number - 2;
                            }
                            else {
                                _this.greater = _project.liked_by_people_number;
                            }
                            _project.liked_people_name = new Array();
                            var _loop_1 = function (x) {
                                _this._projectService.getProfileID(_project.liked_by_people[x].pk)
                                    .subscribe(function (_l) {
                                    _project.liked_by_people[x].pk = _l.profile_id;
                                });
                                _project.liked_people_name.push({
                                    'name': _project.liked_by_people[x].first_name + " " + _project.liked_by_people[x].last_name,
                                    'uid': _project.liked_by_people[x].pk
                                });
                            };
                            for (var x = 0; x < _project.liked_by_people_number - 1; x++) {
                                _loop_1(x);
                            }
                            if (_project.liked_by_people_number != 0) {
                                _this.last_liked = {
                                    'name': _project.liked_by_people[_project.liked_by_people_number - 1].first_name + " " + _project.liked_by_people[_project.liked_by_people_number - 1].last_name,
                                    'uid': _project.liked_by_people[_project.liked_by_people_number - 1].pk
                                };
                                _project.liked_people_str = " ";
                            }
                            //console.log('hey', _project.liked_people_name, this.last_liked,_project.liked_by_people_number);
                            if (_project.supervisor) {
                                _this.has_sup = true;
                                _project.sid = _project.supervisor.pk;
                                _this._projectService.getProfileID(_project.sid)
                                    .subscribe(function (_s) {
                                    _project.sid = _s.profile_id;
                                });
                                if (_project.owner_first_name === _project.supervisor.first_name && _project.owner_last_name === _project.supervisor.last_name) {
                                    _project.owner_role = 'Professor';
                                }
                                _project.supervisor = _project.supervisor.first_name + " " + _project.supervisor.last_name;
                            }
                            else {
                                _this.has_sup = false;
                            }
                            _this._projectService.getUserLikedProject(_this.currentuid) //////////////real user
                                .subscribe(function (_liked) {
                                if (_liked.length !== 0) {
                                    _this.likedp = true;
                                }
                                else {
                                    _this.likedp = false;
                                }
                            });
                            _project.comments = _project.comments;
                            _project.s_str = _project.pid + " " + " " + _project.name + " " + _project.owner + " " + _project.status + " " + _project.tag + _project.abs;
                            _this.project = _project;
                            if (_data.profile !== -1) {
                                _this.hasreco = true;
                                _this._projectService.getRecommendedProject(pid, _data.profile) /////////////// make this equal to profileid;
                                    .subscribe(function (_recproject) {
                                    _this.project.recommend_roject = new Array();
                                    for (var x = 0; x < _recproject.length; x++) {
                                        // console.log(_projects[i].related_areas[3]);
                                        _this.project.recommend_roject.push({
                                            'pid': _recproject[x].project_id,
                                            'name': _recproject[x].project_title,
                                            'status': _recproject[x].project_status,
                                            'abs': _recproject[x].project_short_description
                                        });
                                    }
                                });
                            }
                            else {
                                _this.hasreco = null;
                            }
                            //console.log('---------------', this.project);
                        });
                        /////////////////for user service
                    });
                });
            }
        }, function (err) {
            $({
                title: "Not Logined",
                text: "Please Login",
                type: "error"
            });
            _this._router.navigate(['/login']);
        });
        //setTimeout(() => {
        // console.log('heyuid', this.currentuid);
        //  const uid = +this._route.snapshot.paramMap.get('uid');
        // const uid = 54; //for bro phang
        //const uid = 86; //student with a team
        //const uid = 98; //student without a team
    };
    ProjectDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projectDetail',
            template: __webpack_require__("../../../../../src/app/home/projects/projectDetail/projectDetail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/projects/projectDetail/projectDetail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__users_user_service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__teams_team_service_team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_3__project_service_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_service_home_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/projects/projectEdit/projectEdit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/projects/projectEdit/projectEdit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"small-header\">\n  <div class=\"small-header\">\n    <div class=\"hpanel\">\n      <div class=\"panel-body\">\n        <div id=\"hbreadcrumb\" class=\"pull-right\">\n          <ol class=\"hbreadcrumb breadcrumb\">\n            <li>\n              <a [routerLink]=\"['/dashboard']\">Dashboard</a>\n            </li>\n            <li>\n              <a [routerLink]=\"['/projects/project-profile',uid]\">My Project</a>\n            </li>\n            <li class=\"active\">\n              <span>Edit a Project </span>\n            </li>\n          </ol>\n        </div>\n        <h2 class=\"font-light m-b-xs\">\n          Edit Project: {{my_project.pid}}\n        </h2>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"content\" *ngIf=\"my_project?.oid == 0 && user_is_supervisor == false\">\n    <div class=\"row\">\n\n      <div class=\"col-md-12\">\n\n        <div class=\"hpanel\">\n          <div class=\"panel-body\">\n            <h3>It looks like you do not have the permission to edit this project :(</h3>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"content\" *ngIf=\"user_is_owner|| user_is_supervisor==true\">\n\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"hpanel\">\n\n          <div class=\"panel-body\">\n\n            <form (ngSubmit)=\"save()\" #projectForm=\"ngForm\">\n\n\n              <div class=\"text-center m-b-md\" id=\"wizardControl\">\n\n\n              </div>\n\n              <div class=\"tab-content\">\n                <div *ngIf=\"steps==1\" [ngClass]=\"{'active':steps==1}\" class=\"p-m tab-pane\">\n                  <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"row\">\n                        <div class=\"form-group col-lg-12\" [ngClass]=\"{'has-error': (v_pname.touched || v_pname.dirty) && !v_pname.valid}\">\n                          <label>Project Title *</label>\n                          <span class=\"text-danger\" *ngIf=\"(v_pname.touched || v_pname.dirty) && v_pname.errors?.required\">\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter a Project Title</span>\n                          <span class=\"text-danger\" *ngIf=\"(v_pname.touched || v_pname.dirty) && v_pname.errors?.minlength\">\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter minimum 10 character</span>\n                          <input #v_pname=\"ngModel\" required minlength=\"10\" [(ngModel)]='my_project.name' type=\"text\" class=\"form-control\" placeholder='my_project.name'\n                                 name=\"name\" id='titlename'>\n                        </div>\n                        <div class=\"form-group col-lg-6\">\n                          <label>Number of Members *</label>\n                          <span class=\"text-danger\" *ngIf=\"sizeneeded\">\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please select team size </span>\n                          <br>\n                          <div *ngFor=\"let number of my_project.size\" class=\"col-lg-3\">\n                            <div class=\"checkbox checkbox-info checkbox-inline\">\n                              <input (click)=\"selectsize(name)\" type=\"checkbox\" [(ngModel)]='number.value' [name]=\"number.label\">\n                              <label> {{number.label}} </label>\n                            </div>\n                          </div>\n                        </div>\n                        <div  class=\"form-group col-lg-6\">\n                          <label>Status *<small>(only supervisor can change the status)</small></label>\n                          <br>\n                          <span class=\"text-danger\" *ngIf=\"statusneeded\">\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please select project status </span>\n                          <div *ngFor=\"let status of my_project.status\" class=\"col-lg-3\">\n                            <small *ngIf=\"user_is_supervisor\">\n                              <div class=\"checkbox checkbox-info checkbox-inline\">\n                                <input (click)=\"selectstatus(name)\" type=\"checkbox\" [(ngModel)]='status.value' [name]=\"status.label\">\n                                <label> {{status.label}} </label>\n                              </div></small>\n                            <small *ngIf=\"!user_is_supervisor\">\n                              <div class=\"checkbox checkbox-info checkbox-inline\">\n                                <input disabled (click)=\"selectstatus(name)\" type=\"checkbox\" [(ngModel)]='status.value' [name]=\"status.label\">\n                                <label> {{status.label}} </label>\n                              </div></small>\n                          </div>\n                        </div>\n\n\n\n                        <div class=\"form-group col-lg-12\" [ngClass]=\"{'has-error': (v_pabs.touched || v_pabs.dirty) && !v_pabs.valid}\">\n                          <label>Project Abstract *</label>\n                          <span class=\"text-danger\" *ngIf=\"(v_pabs.touched || v_pabs.dirty) && v_pabs.errors?.required\">\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter a Short Description</span>\n                          <span class=\"text-danger\" *ngIf=\"(v_pabs.touched || v_pabs.dirty) && v_pabs.errors?.minlength\">\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter minimum 50 character</span>\n                          <textarea style=\"resize:none;\" #v_pabs=\"ngModel\" required minlength=\"50\" rows=\"6\" required maxlength=\"1000\" [(ngModel)]='my_project.abs'\n                                    type=\"text\" class=\"form-control\" placeholder=\"Minimin 50, Maximum 1000 characters, please enter full details in Description below\"\n                                    name=\"abs\" id=\"abstract\"></textarea>\n\n                        </div>\n\n\n                        <div class=\"form-group col-lg-12\">\n                          <label class=\"control-label\">Related Areas *</label>\n                          <span class=\"text-danger\" *ngIf=\"areaneeded\">\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please select at least one Related Area </span>\n                          <br>\n                          <div *ngFor=\"let area of my_project.areas\" class=\"col-lg-3\">\n                            <div class=\"checkbox checkbox-info checkbox-inline\">\n                              <input type=\"checkbox\" [(ngModel)]='area.value' [name]=\"area.tag_name\">\n                              <label> {{area.tag_name}} </label>\n                            </div>\n                          </div>\n                        </div>\n\n                        <div class=\"col-lg-12\" [ngClass]=\"{'has-error': (v_plongdes.touched || v_plongdes.dirty) && !v_plongdes.valid}\">\n                          <div class=\"hpanel\">\n                            <label>Description *</label>\n                            <span class=\"text-danger\" *ngIf=\"(v_plongdes.touched || v_plongdes.dirty) && v_plongdes.errors?.required\">\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter a Detailed Description</span>\n                            <span class=\"text-danger\" *ngIf=\"(v_plongdes.touched || v_plongdes.dirty) && v_plongdes.errors?.minlength\">\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter minimum 50 character</span>\n                            <textarea style=\"resize:none;\" #v_plongdes=\"ngModel\" required minlength=\"50\" rows=\"10\" required maxlength=\"2000\" id=\"longdes\" [(ngModel)]='my_project.about'\n                                      type=\"text\" class=\"form-control\" placeholder=\"Minimin 50, Maximum 2000 characters, please enter full details in Description below\"\n                                      name=\"about\"></textarea>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n\n\n                <div class=\"text-right m-t-xs\">\n\n                  <a class=\"btn btn-info\" [ngClass]=\"{'disabled':!projectForm.valid}\" *ngIf=\"steps==1\" (click)=\"getData()\">Submit</a>\n\n                </div>\n\n              </div>\n            </form>\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/projects/projectEdit/projectEdit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_user_service_user_service__ = __webpack_require__("../../../../../src/app/home/users/user-service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teams_team_service_team_service__ = __webpack_require__("../../../../../src/app/home/teams/team-service/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_service_project_service__ = __webpack_require__("../../../../../src/app/home/projects/project-service/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_home_service__ = __webpack_require__("../../../../../src/app/home/shared/service/home.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProjectEditComponent = (function () {
    function ProjectEditComponent(_route, _userService, _teamService, _projectService, _homeService, _router) {
        this._route = _route;
        this._userService = _userService;
        this._teamService = _teamService;
        this._projectService = _projectService;
        this._homeService = _homeService;
        this._router = _router;
    }
    ProjectEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sizeneeded = false;
        this.areaneeded = false;
        this.statusneeded = false;
        this.user_is_supervisor = false;
        this.user_is_owner = false;
        this.my_project = {};
        this._homeService.get4id().subscribe(function (_data) {
            _this.currentuid = _data.user;
            //this.currentuid = this.currentuid.uid;
            var pid = +_this._route.snapshot.paramMap.get('pid');
            _this._userService.getRealUser(_this.currentuid)
                .subscribe(function (_users) {
                _users.first = _users.first_name;
                _users.last = _users.last_name;
                _users.uid = _this.currentuid;
                console.log("user name", _users.first);
                _this.user = _users;
            });
            _this._projectService.getProject(pid)
                .subscribe(function (_project) {
                //console.log("user: ", this.user.first);
                _this.my_project.pid = _project.project_id;
                _this.my_project.owner_role = _project.created_by.role;
                _this.my_project.oid = _project.created_by.pk; ////////////////////////// make this one to ;
                if (_project.supervisor) {
                    _this.my_project.sid = _project.supervisor.pk;
                }
                //console.log('oid', this.my_project.oid);
                _this._userService.getRealUser(_this.currentuid)
                    .subscribe(function (_user) {
                    if (_this.my_project.oid !== _this.currentuid /*&& this.my_project.owner_role !== 'Supervisor'*/) {
                        _this.my_project.oid = 0;
                        _this.user_is_owner = false;
                    }
                    else {
                        _this.user_is_owner = true;
                    }
                    if (_this.my_project.sid === _this.currentuid /*&& this.my_project.owner_role !== 'Supervisor'*/) {
                        _this.user_is_supervisor = true;
                    }
                    console.log('user is supervisor?', _this.user_is_supervisor);
                    _this.my_project.status = [
                        { label: 'Open', value: false },
                        { label: 'Closed', value: false },
                    ];
                    for (var x = 0; x < _this.my_project.status.length; x++) {
                        if (_project.project_status === _this.my_project.status[x].label) {
                            _this.my_project.status[x].value = true;
                        }
                    }
                    _this.my_project.name = _project.project_title;
                    _this.my_project.size = new Array();
                    for (var x = 2; x < 5; x++) {
                        var y = x.toString();
                        //console.log(this.temp_size_str);
                        if (y !== _project.number_of_members_accepted.toString()) {
                            _this.my_project.size.push({ label: y, value: false });
                        }
                        else {
                            _this.my_project.size.push({ label: y, value: true });
                        }
                    }
                    _this.my_project.owner_first_name = _project.created_by.first_name;
                    _this.my_project.owner_last_name = _project.created_by.last_name;
                    console.log('gg', _this.my_project.owner_first_name, _this.user.first, _this.my_project.owner_last_name, _this.user.last);
                    _this.my_project.tags = _project.related_areas;
                    _this.my_project.about = _project.project_detailed_description;
                    _this.my_project.abs = _project.project_short_description;
                    _this._projectService.getArea()
                        .subscribe(function (_area) {
                        _this.my_project.areas = new Array();
                        for (var x = 0; x < _area.length; x++) {
                            // console.log(_projects[i].related_areas[3]);
                            _this.my_project.areas.push({ 'pk': _area[x].pk, 'tag_name': _area[x].tag_name, 'value': false });
                            for (var y = 0; y < _this.my_project.tags.length; y++) {
                                if (_this.my_project.areas[x].tag_name === _this.my_project.tags[y]) {
                                    _this.my_project.areas[x].value = true;
                                }
                            }
                        }
                    });
                });
            });
            //console.log('heyuid', this.user.uid);
        }, function (err) {
            $({
                title: "Not Logined",
                text: "Please Login",
                type: "error"
            });
            _this._router.navigate(['/login']);
        });
        //const uid = 54; //for bro phang
        //const uid = 94; //nobody
        this.email_pattern = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
        this.jq_summernote = true;
        this.jq_datatable = false;
        this.inpup_disable = true;
        this.steps = 1;
        this.steps_prev = 1;
    };
    ProjectEditComponent.prototype.selectstatus = function (status) {
        for (var x = 0; x < this.my_project.status.length; x++) {
            if (status === this.my_project.status[x].label) {
                if (this.my_project.status[x].value) {
                    this.my_project.status[x].value = false;
                }
                else {
                    this.my_project.status[x].value = true;
                }
            }
            else {
                this.my_project.status[x].value = false;
            }
        }
    };
    ProjectEditComponent.prototype.selectsize = function (size) {
        for (var x = 0; x < this.my_project.size.length; x++) {
            if (size == this.my_project.size[x].label) {
                if (this.my_project.size[x].value) {
                    this.my_project.size[x].value = false;
                }
                else {
                    this.my_project.size[x].value = true;
                }
            }
            else {
                this.my_project.size[x].value = false;
            }
        }
    };
    ProjectEditComponent.prototype.getData = function () {
        var _this = this;
        this.checkedsize = 0;
        this.checkedstatus = 'N/A';
        this.my_project.name = $('#titlename').val();
        this.my_project.abs = $('#abstract').val();
        this.my_project.about = $('#longdes').val();
        console.log('title', this.my_project.name, 'abstract', this.my_project.abs, 'longdis', this.my_project.about);
        this.checkedarea = new Array();
        for (var i = 0; i < this.my_project.areas.length; i++) {
            if (this.my_project.areas[i].value)
                this.checkedarea.push({ 'pk': this.my_project.areas[i].pk, 'tag_name': this.my_project.areas[i].tag_name, 'value': true });
        }
        console.log(this.checkedarea);
        for (var i = 0; i < this.my_project.size.length; i++) {
            if (this.my_project.size[i].value)
                this.checkedsize = Number(this.my_project.size[i].label);
        }
        console.log(this.checkedsize);
        for (var i = 0; i < 2; i++) {
            if (this.my_project.status[i].value) {
                this.checkedstatus = this.my_project.status[i].label;
            }
        }
        console.log(this.checkedstatus);
        if (this.checkedsize != 2 && this.checkedsize != 3 && this.checkedsize != 4 && this.checkedarea.length === 0 && this.checkedstatus != 'Open' && this.checkedstatus != 'Closed') {
            this.sizeneeded = true;
            this.areaneeded = true;
            this.statusneeded = true;
            //console.log(this.checkedsize, this.checkedarea);
        }
        else if (this.checkedsize != 2 && this.checkedsize != 3 && this.checkedsize != 4 && this.checkedstatus != 'Open' && this.checkedstatus != 'Closed') {
            this.sizeneeded = true;
            this.areaneeded = false;
            this.statusneeded = true;
            //console.log(this.checkedsize);
        }
        else if (this.checkedarea.length === 0 && this.checkedstatus != 'Open' && this.checkedstatus != 'Closed') {
            this.sizeneeded = false;
            this.areaneeded = true;
            this.statusneeded = true;
            //console.log(this.checkedarea);
        }
        else if (this.checkedsize != 2 && this.checkedsize != 3 && this.checkedsize != 4 && this.checkedarea.length === 0) {
            this.sizeneeded = true;
            this.areaneeded = true;
            this.statusneeded = false;
        }
        else if (this.checkedstatus != 'Open' && this.checkedstatus != 'Closed') {
            this.sizeneeded = false;
            this.areaneeded = false;
            this.statusneeded = true;
            //console.log(this.checkedsize);
        }
        else if (this.checkedarea.length === 0) {
            this.sizeneeded = false;
            this.areaneeded = true;
            this.statusneeded = false;
            //console.log(this.checkedarea);
        }
        else if (this.checkedsize != 2 && this.checkedsize != 3 && this.checkedsize != 4) {
            this.sizeneeded = true;
            this.areaneeded = false;
            this.statusneeded = false;
        }
        else {
            this._homeService.get4id().subscribe(function (_data) {
                _this.currentuid = _data.user;
                //this.currentuid = this.currentuid.user;
                //console.log('heyuid', this.uid);
                var pid = +_this._route.snapshot.paramMap.get('pid');
                _this._projectService.postEditProject(_this.currentuid, pid, _this.my_project.name, _this.checkedstatus, _this.my_project.abs, _this.my_project.about, _this.checkedarea, _this.checkedsize)
                    .subscribe(function (result) {
                    console.log(result);
                    location.replace('/projects/' + result.project_id);
                });
            }, function (err) {
                $({
                    title: "Not Logined",
                    text: "Please Login",
                    type: "error"
                });
                _this._router.navigate(['/login']);
            });
        }
    };
    ProjectEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projectEdit',
            template: __webpack_require__("../../../../../src/app/home/projects/projectEdit/projectEdit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/projects/projectEdit/projectEdit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__users_user_service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__teams_team_service_team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_3__project_service_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_service_home_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], ProjectEditComponent);
    return ProjectEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/projects/projectListing/projectListing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".glyphicon-refresh-animate {\n  -animation: spin .7s infinite linear;\n  -webkit-animation: spin2 .7s infinite linear;\n}\n\n@-webkit-keyframes spin2 {\n  from { -webkit-transform: rotate(0deg);}\n  to { -webkit-transform: rotate(360deg);}\n}\n\n@-webkit-keyframes spin {\n  from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\n  to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\n}\n\n@keyframes spin {\n  from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\n  to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\n}\n\n.btn-static {\n  background-color: white;\n  border: 1px solid white;\n  cursor: default;\n}\n.btn-static:active {\n  box-shadow:         inset 0 0 0px white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/projects/projectListing/projectListing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"small-header \">\n    <div class=\"hpanel\">\n        <div class=\"panel-body\">\n\n\n            <div id=\"hbreadcrumb\" class=\"pull-right\">\n                <ol class=\"hbreadcrumb breadcrumb\">\n                    <li>\n                        <a [routerLink]=\"['/dashboard']\">Dashboard</a>\n                    </li>\n                    <li class=\"active\">\n                        <span>Projects</span>\n                    </li>\n                </ol>\n            </div>\n            <h2 class=\"font-light m-b-xs\">\n                Projects\n            </h2>\n            <!-- <button [routerLink]=\"['/projects/projectCreate']\" type=\"button\" class=\"btn btn-default btn-sm\">Create a Project</button> -->\n            <!-- <button [routerLink]=\"['/projects/projectSearch']\" type=\"button\" class=\"btn btn-default btn-sm\">Search Projects</button> -->\n        </div>\n    </div>\n</div>\n\n<div class=\"content\">\n    <div style=\"margin-bottom:2%\">\n        <div class=\"input-group\">\n          <input id=\"search_str\" onkeypress=\"if (event.which==13) document.getElementById('search_button').click()\" [(ngModel)]=\"s_search\"\n                 class=\"form-control\" type=\"text\" placeholder=\"Search projects by project id, supervisor name...\">\n          <div class=\"input-group-btn\">\n            <button id=\"search_button\" (click)=\"str_filter()\" class=\"btn btn-default\">\n              <i class=\"fa fa-search\"></i>\n            </button>\n          </div>\n        </div>\n    </div>\n\n    <div class=\"row projects\" *ngIf=\"!data_to_render\">\n        <div class=\"col-lg-12\">\n\n          <div class=\"hpanel\">\n            <div class=\"panel-body\">\n              <button  class=\"btn btn-static\"><span class=\"glyphicon glyphicon-refresh glyphicon-refresh-animate\"></span> Loading...Please wait.</button>\n              <!-- <h3>Please wait while we are loading projects :)</h3>-->\n            </div>\n          </div>\n        </div>\n\n\t</div>\n\n    <div class=\"row projects\">\n        <div class=\"col-lg-6\" style=\"height:385px\" *ngFor='let project of data_to_render'>\n            <div class=\"hpanel hblue\">\n                <div class=\"panel-body\">\n                    <!--<span class=\"label label-info pull-right\">NEW</span>-->\n                    <div class=\"row\">\n                        <div class=\"col-sm-8\">\n                            <h4>\n                                <a [routerLink]=\"['/projects', project.pid]\">{{project.pid}}:</a>\n                                <br/>\n                                <a [routerLink]=\"['/projects', project.pid]\">{{project.name}}</a>\n                            </h4>\n                        </div>\n                        <div class=\"col-sm-4 project-info\">\n                            <div class=\"project-action m-t-md\">\n                                <div class=\"btn-group\">\n                                    <small  class=\"label label-danger \">\n                                        <i class=\"fa fa-thumbs-up\"></i> {{project.liked_number}} </small>\n                                    <button [routerLink]=\"['/projects', project.pid]\" class=\"btn btn-xs btn-default\"> View</button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <p>\n                                <b>\n                                    <span style=\"margin-right:3%\" *ngFor=\"let area of project.areas\"> {{area.label}} </span>\n                                </b>\n                            </p>\n                            <textarea disabled rows=\"6\" style=\"border: none; resize:none; background-color:#FFFFFF; width: 100%\">{{project.abs}}</textarea>\n                        </div>\n                        <div class=\"col-sm-8\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <div class=\"project-label\">CREATE BY</div>\n                                    <b>\n                                        <small>{{project.owner_role}}</small>\n                                    </b>\n                                    <br/>\n                                    <a [routerLink]=\"['/users', project.uid]\"><small>{{project.owner_first_name}} {{project.owner_last_name}}</small></a>\n                                </div>\n                                <!-- <div class=\"col-sm-3\">\n                                        <div class=\"project-label\">Posting Date</div>\n                                        <small>{{project.created}}</small>\n                                    </div> -->\n                                <div class=\"col-sm-6\">\n                                    <div class=\"project-label\">Status</div>\n                                  <small *ngIf=\"project.status=='Open'\" class=\"label label-success \">Open</small>\n                                  <small *ngIf=\"project.status == 'Closed'\" class=\"label label-warnin\">Closed</small>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel-footer\">\n                    Last modified: {{project.modified | date:'yyyy-MM-dd@ h:m:s'}}\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/projects/projectListing/projectListing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_service_project_service__ = __webpack_require__("../../../../../src/app/home/projects/project-service/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_home_service__ = __webpack_require__("../../../../../src/app/home/shared/service/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectListingComponent = (function () {
    function ProjectListingComponent(_projectService, _home, _router) {
        this._projectService = _projectService;
        this._home = _home;
        this._router = _router;
    }
    ProjectListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.data_to_render) {
            console.log("there's no data yet");
        }
        else {
            console.log("hey!", this.data_to_render.length);
        }
        this._projectService.getProjects()
            .subscribe(function (_projects) {
            var _loop_1 = function (i) {
                _projects[i].created = _projects[i].created_date;
                _projects[i].modified = _projects[i].updated_date;
                //  _projects[i].oid = _projects[i].project_id;
                _projects[i].pid = _projects[i].project_id;
                //_projects[i].owner = _projects[i].project_id;
                _projects[i].owner_first_name = _projects[i].created_by.first_name;
                _projects[i].owner_last_name = _projects[i].created_by.last_name;
                _projects[i].owner_role = _projects[i].created_by.role;
                if (_projects[i].owner_role === 'Supervisor') {
                    _projects[i].owner_role = 'Professor';
                }
                _this._projectService.getProfileID(_projects[i].created_by.pk)
                    .subscribe(function (_o) {
                    _projects[i].uid = _o.profile_id;
                });
                _projects[i].name = _projects[i].project_title;
                _projects[i].liked_number = _projects[i].liked_by_people_number;
                _projects[i].abs = _projects[i].project_short_description;
                //_projects[i].about = _projects[i].project_detailed_description;
                _projects[i].areas = new Array();
                for (var x = 0; x < _projects[i].related_areas.length; x++) {
                    // console.log(_projects[i].related_areas[3]);
                    _projects[i].areas.push({ 'label': _projects[i].related_areas[x], 'value': true });
                }
                _projects[i].tags = _projects[i].related_areas;
                //console.log(_projects[i].tags);
                _projects[i].status = _projects[i].project_status;
                _projects[i].s_str = _projects[i].pid + " " + " " + _projects[i].name + " " + _projects[i].owner_first_name + " " + _projects[i].owner_last_name + " " + _projects[i].status + " " + _projects[i].abs + " " + _projects[i].owner_role;
                _projects[i].s_str = _projects[i].s_str.toUpperCase();
            };
            // console.log(this.projects);
            for (var i = 0; i < _projects.length; i++) {
                _loop_1(i);
            }
            _this.projects = _projects;
            _this.data = _this.projects;
            _this.data_to_render = _this.data;
        });
    };
    ProjectListingComponent.prototype.str_filter = function () {
        var _this = this;
        if (!$('#search_str').val().trim()) {
            //console.log('heyo', typeof $('#search_str').val());
            this.data_to_render = this.data;
            return;
        }
        this.filtered = [];
        this.s_search = this.s_search.trim();
        var keys = this.s_search; //.split(" ");
        console.log("keys:", typeof keys, keys.length, keys);
        this.data.forEach(function (data) {
            //for (let i = 0; i < keys.length; i++) {
            if (data.s_str.indexOf(keys.toUpperCase()) !== -1) {
                console.log("Matched", data.s_str, keys);
                _this.filtered.push(data);
            }
            //}
        });
        this.data_to_render = this.filtered;
    };
    ProjectListingComponent.prototype.getData = function () {
    };
    ProjectListingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projectListing',
            template: __webpack_require__("../../../../../src/app/home/projects/projectListing/projectListing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/projects/projectListing/projectListing.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__project_service_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_service_home_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ProjectListingComponent);
    return ProjectListingComponent;
}());

/* <button (click)="str_filter()" class="btn btn-default">
                        <i class="fa fa-search"></i>
                    </button>*/


/***/ }),

/***/ "../../../../../src/app/home/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".glyphicon-refresh-animate {\n  -animation: spin .7s infinite linear;\n  -webkit-animation: spin2 .7s infinite linear;\n}\n\n@-webkit-keyframes spin2 {\n  from { -webkit-transform: rotate(0deg);}\n  to { -webkit-transform: rotate(360deg);}\n}\n\n@-webkit-keyframes spin {\n  from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\n  to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\n}\n\n@keyframes spin {\n  from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\n  to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\n}\n\n.btn-static {\n  background-color: white;\n  border: 1px solid lightgrey;\n  cursor: default;\n}\n.btn-static:active {\n  box-shadow:         inset 0 0 0px white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"small-header\">\n  <div class=\"hpanel\">\n    <div class=\"panel-body\">\n\n      <div id=\"hbreadcrumb\" class=\"pull-right\">\n        <ol class=\"hbreadcrumb breadcrumb\">\n          <li>\n            <a [routerLink]=\"['/dashboard']\">Dashboard</a>\n          </li>\n          <li class=\"active\">\n            <span>Search</span>\n          </li>\n        </ol>\n      </div>\n      <h2 class=\"font-light m-b-xs\">\n        Search\n      </h2>\n    </div>\n  </div>\n</div>\n\n<div class=\"content\">\n\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <div class=\"hpanel\">\n        <div class=\"panel-body\">\n          <div class=\"m-b-md\">\n            <h4>\n              Advanced Filters\n              <span class=\"pull-right text-right\">\n                <div class=\"btn-group\">\n                  <button class=\"btn btn-xs btn-default\" (click)=\"clear_filter()\"> Clear All</button>\n                  <!--<button class=\"btn btn-xs btn-default\" (click)=\"setall_filter()\"> Select All</button>-->\n                </div>\n              </span>\n            </h4>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Only Show</label>\n            <br>\n            <div class=\"checkbox checkbox-success\">\n              <input id=\"s_user\" type=\"checkbox\" [(ngModel)]=\"s_user\">\n              <label for=\"s_user\">\n                Users\n              </label>\n            </div>\n            <div class=\"checkbox checkbox-warning\">\n              <input id=\"s_team\" type=\"checkbox\" [(ngModel)]=\"s_team\">\n              <label for=\"s_team\">\n                Teams\n              </label>\n            </div>\n            <div class=\"checkbox checkbox-info\">\n              <input id=\"s_project\" type=\"checkbox\" [(ngModel)]=\"s_project\">\n              <label for=\"s_project\">\n                Projects\n              </label>\n            </div>\n          </div>\n          <!--\n          <div class=\"form-group\">\n            <label class=\"control-label\">Last activity</label>\n            <div class=\"input-daterange input-group\" id=\"datepicker\">\n              <input type=\"text\" id=\"date_start\" class=\"input-sm form-control\">\n              <span class=\"input-group-addon \">\n                <i class=\"fa fa-angle-right\"></i>\n              </span>\n              <input type=\"text\" id=\"date_end\" class=\"input-sm form-control\">\n            </div>\n          </div>-->\n\n          <div *ngIf=\"s_team\" class=\"form-group\">\n            <label class=\"control-label\">Team Size</label>\n            <div class=\"input-group\">\n              <input id=\"teamsize\" type=\"text\">\n            </div>\n          </div>\n          <div *ngIf=\"s_project\" class=\"form-group\">\n            <label class=\"control-label\">Group Size</label>\n            <div class=\"input-group\">\n              <input id=\"projectsize\" type=\"text\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Status</label>\n            <div class=\"input-group\">\n              <div class=\"checkbox checkbox-success\">\n                <input id=\"s_available\" type=\"checkbox\" [(ngModel)]=\"s_available\">\n                <label for=\"s_available\">\n                  Open\n                </label>\n              </div>\n              <div class=\"checkbox checkbox-success\">\n                <input id=\"s_complete\" type=\"checkbox\" [(ngModel)]=\"s_complete\">\n                <label for=\"s_complete\">\n                  Closed\n                </label>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"control-label\">Areas</label>\n            <div class=\"input-group\">\n              <div *ngFor=\"let area of s_areas\" class=\"checkbox checkbox-success\">\n                <input type=\"checkbox\" [(ngModel)]='area.value' [name]=\"area.tag_name\">\n                <label> {{area.tag_name}} </label>\n              </div>\n            </div>\n          </div>\n\n          <button (click)=\"str_filter()\" class=\"btn btn-success btn-block\">Apply</button>\n\n        </div>\n\n      </div>\n\n    </div>\n    <div class=\"col-md-9\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"hpanel\">\n            <div class=\"panel-body\">\n              <div class=\"input-group\">\n                <input id=\"search_str\" onkeypress=\"if (event.which==13) document.getElementById('search_button').click()\" [(ngModel)]=\"s_search\"\n                  class=\"form-control\" type=\"text\" placeholder=\"Search users / teams / projects .. \">\n                <div class=\"input-group-btn\">\n                  <button id=\"search_button\" (click)=\"str_filter()\" class=\"btn btn-default\">\n                    <i class=\"fa fa-search\"></i>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n\n        <div class=\"col-lg-12\">\n\n          <div class=\"hpanel\" *ngIf=\"!data_to_render\">\n\n            <div class=\"col-md-12\">\n\n              <div class=\"hpanel\">\n                <div class=\"panel-body\">\n                  <button class=\"btn btn-static\">\n                    <span class=\"glyphicon glyphicon-refresh glyphicon-refresh-animate\"></span> Loading...Please wait.</button>\n                  <!--<h3>Please wait while we are loading :)</h3>-->\n                </div>\n              </div>\n            </div>\n\n          </div>\n          <div *ngFor=\"let item of data_to_render\" class=\"hpanel filter-item\">\n            <a *ngIf=\"item.uid\" [routerLink]=\"['/users', item.uid]\">\n              <div class=\"panel-body\">\n                <div class=\"col-sm-8\">\n                  <h4 *ngIf=\"item.name && item.pid\" class=\"m-b-xs\">\n                    <a [routerLink]=\"['/projects', item.pid]\">{{item.name}}</a>\n                  </h4>\n                  <h4 *ngIf=\"item.name && !item.pid\" class=\"m-b-xs\">{{item.name}}</h4>\n                  <div style=\"word-wrap: break-word;\">\n                    <small style=\"margin-right:1%\" *ngFor='let tag of item.tags'>{{tag}}.</small>\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"text-right\">\n                    <small *ngIf=\"item.pid\" class=\"stat-label\">Last Modified: {{item.modified | date:'yyyy-MM-dd HH:mm'}}</small>\n                    <small *ngIf=\"!item.pid\" class=\"stat-label\">Last activity: {{item.modified_str | date:'yyyy-MM-dd HH:mm'}}</small>\n\n                    <div *ngIf=\"!item.pid\" class=\"progress m-t-xs full progress-striped active\">\n                      <div *ngIf=\"item.uid\" [ngStyle]=\"{'width': item.status + '%'}\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"100\"\n                        role=\"progressbar\" class=\" progress-bar\" [ngClass]=\"{'progress-bar-success':item.uid}\">\n                      </div>\n                      <div *ngIf=\"item.tid\" [ngStyle]=\"{'width':  item.status + '%'}\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"100\"\n                        role=\"progressbar\" class=\" progress-bar\" [ngClass]=\"{'progress-bar-warning': item.tid}\">\n                      </div>\n                    </div>\n\n\n                    <div *ngIf=\"item.pid\">\n                      <small *ngIf=\"item.status=='Open'\" class=\"label label-success \">Open</small>\n                      <small *ngIf=\"item.status == 'Closed'\" class=\"label label-warning\">Closed</small>\n                      <a [routerLink]=\"['/projects', item.pid]\" class=\"btn btn-xs btn-default\"> View</a>\n                    </div>\n\n                  </div>\n                </div>\n              </div>\n            </a>\n            <a *ngIf=\"item.tid\" [routerLink]=\"['/teams', item.tid]\">\n              <div class=\"panel-body\">\n                <div class=\"col-sm-8\">\n                  <h4 *ngIf=\"item.name && item.pid\" class=\"m-b-xs\">\n                    <a [routerLink]=\"['/projects', item.pid]\">{{item.name}}</a>\n                  </h4>\n                  <h4 *ngIf=\"item.name && !item.pid\" class=\"m-b-xs\">{{item.name}}</h4>\n                  <div style=\"word-wrap: break-word;\">\n                    <small style=\"margin-right:1%\" *ngFor='let tag of item.tags'>{{tag}}.</small>\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"text-right\">\n                    <small *ngIf=\"item.pid\" class=\"stat-label\">Last Modified: {{item.modified | date:'yyyy-MM-dd HH:mm'}}</small>\n                    <small *ngIf=\"!item.pid\" class=\"stat-label\">Last activity: {{item.modified_str | date:'yyyy-MM-dd HH:mm'}}</small>\n\n                    <div *ngIf=\"!item.pid\" class=\"progress m-t-xs full progress-striped active\">\n                      <div *ngIf=\"item.uid\" [ngStyle]=\"{'width': item.status + '%'}\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"100\"\n                        role=\"progressbar\" class=\" progress-bar\" [ngClass]=\"{'progress-bar-success':item.uid}\">\n                      </div>\n                      <div *ngIf=\"item.tid\" [ngStyle]=\"{'width':  item.status + '%'}\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"100\"\n                        role=\"progressbar\" class=\" progress-bar\" [ngClass]=\"{'progress-bar-warning': item.tid}\">\n                      </div>\n                    </div>\n\n\n                    <div *ngIf=\"item.pid\">\n                      <small *ngIf=\"item.status=='Open'\" class=\"label label-success \">Open</small>\n                      <small *ngIf=\"item.status == 'Closed'\" class=\"label label-warning\">Closed</small>\n                      <a [routerLink]=\"['/projects', item.pid]\" class=\"btn btn-xs btn-default\"> View</a>\n                    </div>\n\n                  </div>\n                </div>\n              </div>\n            </a>\n            <a *ngIf=\"item.pid\" [routerLink]=\"['/projects', item.pid]\">\n              <div class=\"panel-body\">\n                <div class=\"col-sm-8\">\n                  <h4 *ngIf=\"item.name && item.pid\" class=\"m-b-xs\">\n                    <a [routerLink]=\"['/projects', item.pid]\">{{item.name}}</a>\n                  </h4>\n                  <h4 *ngIf=\"item.name && !item.pid\" class=\"m-b-xs\">{{item.name}}</h4>\n                  <div style=\"word-wrap: break-word;\">\n                    <small style=\"margin-right:1%\" *ngFor='let tag of item.tags'>{{tag}}.</small>\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"text-right\">\n                    <small *ngIf=\"item.pid\" class=\"stat-label\">Last Modified: {{item.modified | date:'yyyy-MM-dd HH:mm'}}</small>\n                    <small *ngIf=\"!item.pid\" class=\"stat-label\">Last activity: {{item.modified_str | date:'yyyy-MM-dd HH:mm'}}</small>\n\n                    <div *ngIf=\"!item.pid\" class=\"progress m-t-xs full progress-striped active\">\n                      <div *ngIf=\"item.uid\" [ngStyle]=\"{'width': item.status + '%'}\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"100\"\n                        role=\"progressbar\" class=\" progress-bar\" [ngClass]=\"{'progress-bar-success':item.uid}\">\n                      </div>\n                      <div *ngIf=\"item.tid\" [ngStyle]=\"{'width':  item.status + '%'}\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"100\"\n                        role=\"progressbar\" class=\" progress-bar\" [ngClass]=\"{'progress-bar-warning': item.tid}\">\n                      </div>\n                    </div>\n\n\n                    <div *ngIf=\"item.pid\">\n                      <small *ngIf=\"item.status=='Open'\" class=\"label label-success \">Open</small>\n                      <small *ngIf=\"item.status == 'Closed'\" class=\"label label-warning\">Closed</small>\n                      <a [routerLink]=\"['/projects', item.pid]\" class=\"btn btn-xs btn-default\"> View</a>\n                    </div>\n\n                  </div>\n                </div>\n              </div>\n            </a>\n          </div>\n\n\n\n\n\n\n        </div>\n\n\n\n      </div>\n\n\n    </div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_service__ = __webpack_require__("../../../../../src/app/home/search/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_user_service_user_service__ = __webpack_require__("../../../../../src/app/home/users/user-service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teams_team_service_team_service__ = __webpack_require__("../../../../../src/app/home/teams/team-service/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projects_project_service_project_service__ = __webpack_require__("../../../../../src/app/home/projects/project-service/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchComponent = (function () {
    function SearchComponent(_searchService, _userService, _teamService, _projectService) {
        this._searchService = _searchService;
        this._userService = _userService;
        this._teamService = _teamService;
        this._projectService = _projectService;
        this.s_datepicker = false;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.data = this._searchService.getData();
        this._userService.getProfiles()
            .subscribe(function (_users) {
            _this.users = [];
            for (var i = 0; i < _users.length; i++) {
                var item = {};
                item.created = new Date();
                item.modified = new Date();
                item.modified_str = item.modified.toISOString().substring(0, 10);
                item.uid = _users[i].pk;
                item.hahaid = _users[i].pk;
                item.first = _users[i].user.first_name;
                item.last = _users[i].user.last_name;
                item.name = item.first + ' ' + item.last;
                item.email = _users[i].email;
                // item.status = 30;
                item.views = 251;
                item.about = _users[i].about;
                item.tags = [];
                item.s_name = item.name;
                item.s_str = item.uid + " " + item.utorid + " " + item.name + " " + item.email;
                for (var k = 0; k < _users[i].related_areas.length; k++) {
                    item.s_str = item.s_str + " " + _users[i].related_areas[k].tag_name;
                    item.tags.push(_users[i].related_areas[k].tag_name);
                }
                item.s_str = item.s_str.toUpperCase();
                _this.users.push(item);
                // _users[i].created = new Date();
                // _users[i].modified = new Date();
                // _users[i].modified_str = _users[i].modified.toISOString().substring(0, 10);
                // _users[i].tag ? _users[i].tags = _users[i].tag.split(" ") : null;
                // //_users[i].team.tag ? _users[i].team.tags = _users[i].team.tag.split(" ") : null;
                // _users[i].s_name = _users[i].name;
                // _users[i].s_str = _users[i].uid + " " + _users[i].utorid + " " + _users[i].name + " " + _users[i].email + " " + _users[i].tag;
                // _users[i].s_str = _users[i].s_str.toUpperCase();
            }
            //this.users = _users;
            _this._teamService.getRealTeams()
                .subscribe(function (_teams) {
                for (var i = 0; i < _teams.length; i++) {
                    _teams[i].tid = _teams[i].pk;
                    _teams[i].hahaid = _teams[i].pk;
                    _teams[i].s_name = _teams[i].name;
                    _teams[i].s_str = _teams[i].tid + " " + _teams[i].oid + " " + _teams[i].name + " " + _teams[i].owner + " " + _teams[i].email + " ";
                    _teams[i].s_str = _teams[i].s_str.toUpperCase();
                }
                _this.teams = _teams;
                _this._projectService.getProjects()
                    .subscribe(function (_projects) {
                    // console.log(this.projects);
                    for (var i = 0; i < _projects.length; i++) {
                        _projects[i].created = _projects[i].created_date;
                        _projects[i].modified = _projects[i].updated_date;
                        _projects[i].pid = _projects[i].project_id;
                        _projects[i].hahaid = _projects[i].project_id;
                        _projects[i].owner_first_name = _projects[i].created_by.first_name;
                        _projects[i].owner_last_name = _projects[i].created_by.last_name;
                        _projects[i].owner_role = _projects[i].created_by.role;
                        //console.log(_projects[i].owner_first_name);
                        _projects[i].name = _projects[i].project_title;
                        _projects[i].liked_number = _projects[i].liked_by_people_number;
                        "";
                        _projects[i].abs = _projects[i].project_short_description;
                        _projects[i].about = _projects[i].project_detailed_description;
                        _projects[i].areas = new Array();
                        for (var x = 0; x < _projects[i].related_areas.length; x++) {
                            // console.log(_projects[i].related_areas[3]);
                            _projects[i].areas.push({ 'tag_name': _projects[i].related_areas[x], 'value': true });
                        }
                        _projects[i].tags = _projects[i].related_areas;
                        _projects[i].size = _projects[i].number_of_members_accepted;
                        //console.log(_projects[i].tags);
                        _projects[i].status = _projects[i].project_status;
                        _projects[i].s_str = _projects[i].pid + " " + " " + _projects[i].name + " " + _projects[i].status;
                        _projects[i].s_str = _projects[i].s_str.toUpperCase();
                    }
                    _this.projects = _projects;
                    _this._projectService.getArea()
                        .subscribe(function (_areas) {
                        _this.areas = new Array();
                        for (var x = 0; x < _areas.length; x++) {
                            // console.log(_projects[i].related_areas[3]);
                            _this.areas.push({
                                'pk': _areas[x].pk,
                                'tag_name': _areas[x].tag_name,
                                'value': false
                            });
                        }
                        console.log(_this.areas);
                        //this.areas = _areas;
                        _this.data = [];
                        _this.data = _this.data.concat(_this.projects, _this.users, _this.teams);
                        _this.data_to_render = _this.data;
                        console.log('what to render', _this.data_to_render);
                    });
                });
            });
        });
        this.clear_filter();
    };
    SearchComponent.prototype.ngAfterViewChecked = function () {
        if (!this.s_datepicker) {
            $('.input-daterange').datepicker({ format: 'yyyy-mm-dd' });
            // $('#date_start').datepicker('setDate', new Date());
            // $('#date_end').datepicker('setDate', new Date());
            this.s_datepicker = true;
        }
        $("#teamsize").TouchSpin({
            min: 2,
            max: 4,
            step: 1,
            verticalbuttons: true
        });
        $('#projectsize').TouchSpin({
            initval: 3,
            min: 2,
            max: 4,
            step: 1,
            verticalbuttons: true
        });
    };
    SearchComponent.prototype.str_filter = function () {
        var _this = this;
        if (!$('#search_str').val().trim()) {
            console.log(typeof $('#search_str').val());
            this.bool_filter();
            return;
        }
        this.data_to_render = this.data;
        console.log("str_filter:", typeof this.s_search, this.s_search.length, this.s_search);
        this.untouched_filter() ? null : this.bool_filter();
        this.filtered = [];
        this.s_search = this.s_search.trim();
        var keys = this.s_search; //.split(" ");
        console.log("keys:", typeof keys, keys.length, keys);
        var str;
        this.data_to_render.forEach(function (data) {
            //for (let i = 0; i < keys.length; i++) {
            if (data.s_str.indexOf(keys.toUpperCase()) !== -1) {
                console.log("Matched", data.s_str, keys);
                _this.filtered.push(data);
            }
            //}
        });
        //this.filtered.sort();
        this.data_to_render = this.filtered;
    };
    SearchComponent.prototype.bool_filter = function () {
        this.data_to_render = this.data;
        console.log(typeof this.users[1].areas, this.users[1].areas);
        // console.log("Team Size:", $('#teamsize').val());
        if (this.untouched_filter()) {
            //this.str_filter();
            // this.data_to_render = this.data;
            return;
        }
        this.filtered = [];
        var check_all = (!this.s_user && !this.s_team && !this.s_project);
        if (this.s_user || check_all) {
            for (var i = 0; i < this.data_to_render.length; i++) {
                if (this.data_to_render[i].uid != undefined && this.date_check(this.data_to_render[i].modified)) {
                    if (this.status_check(this.data_to_render[i].status)) {
                        this.area_check(this.data_to_render[i].areas) ? this.filtered.push(this.data_to_render[i]) : null;
                    }
                }
            }
        }
        if (this.s_team || check_all) {
            for (var i = 0; i < this.data_to_render.length; i++) {
                if (this.data_to_render[i].tid != undefined && this.date_check(this.data_to_render[i].modified)) {
                    if (this.size_check(this.data_to_render[i].size, "team")) {
                        if (this.status_check(this.data_to_render[i].status)) {
                            this.area_check(this.data_to_render[i].areas) ? this.filtered.push(this.data_to_render[i]) : null;
                        }
                    }
                }
            }
        }
        if (this.s_project || check_all) {
            for (var i = 0; i < this.data_to_render.length; i++) {
                if (this.data_to_render[i].pid != undefined) {
                    if (this.size_check(this.data_to_render[i].size, "project")) {
                        if (this.status_check_projects(this.data_to_render[i].status)) {
                            this.area_check(this.data_to_render[i].areas) ? this.filtered.push(this.data_to_render[i]) : null;
                        }
                    }
                }
            }
        }
        //this.filtered.sort();
        this.data_to_render = this.filtered;
        console.log('filtered', this.data_to_render);
    };
    SearchComponent.prototype.date_check = function (date) {
        this.s_date_start = $('#date_start').datepicker("getDate");
        this.s_date_end = $('#date_end').datepicker("getDate");
        if (this.s_date_start == null && this.s_date_end == null)
            return true;
        return (date >= this.s_date_start && date <= this.s_date_end);
    };
    SearchComponent.prototype.size_check = function (size, data_src) {
        var result = false;
        var inpusize;
        if (data_src == "team") {
            $('#teamsize').val() ? inpusize = $('#teamsize').val() : inpusize = null;
        }
        if (data_src == "project") {
            $('#projectsize').val() ? inpusize = $('#projectsize').val() : inpusize = null;
        }
        inpusize == size || inpusize == null ? result = true : result = false;
        return result;
    };
    SearchComponent.prototype.area_check = function (item_areas) {
        var areas_all = true;
        for (var i = 0; i < this.s_areas.length && areas_all; i++) {
            if (this.s_areas[i].value)
                areas_all = false;
        }
        if (areas_all)
            return areas_all;
        if (item_areas == undefined)
            return false;
        var result = false;
        this.s_areas.forEach(function (area) {
            for (var i = 0; i < item_areas.length && !result; i++) {
                if ((item_areas[i].tag_name == area.tag_name) && (item_areas[i].value == area.value)) {
                    result = true;
                }
            }
        });
        return result;
    };
    SearchComponent.prototype.status_check_projects = function (item_status) {
        if (!this.s_available && !this.s_complete)
            return true;
        var resula = false;
        var resulc = false;
        this.s_available ? resula = (item_status == 'Open') : null;
        this.s_complete ? resulc = (item_status == 'Closed') : null;
        return resula || resulc;
    };
    SearchComponent.prototype.status_check = function (item_status) {
        if (!this.s_available && !this.s_complete)
            return true;
        var resula = false;
        var resulc = false;
        this.s_available ? resula = (item_status < 100) : null;
        this.s_complete ? resulc = (item_status == 100) : null;
        return resula || resulc;
    };
    SearchComponent.prototype.untouched_filter = function () {
        var clean = true;
        if (this.s_user || this.s_team || this.s_project) {
            clean = false;
            return clean;
        }
        if (this.s_available || this.s_complete) {
            clean = false;
            return clean;
        }
        for (var i = 0; i < this.s_areas.length && clean; i++) {
            if (this.s_areas[i].value)
                clean = false;
        }
        return clean;
    };
    SearchComponent.prototype.clear_filter = function () {
        var _this = this;
        var arr = [];
        this._projectService.getArea()
            .subscribe(function (_areas) {
            _this.areas = new Array();
            for (var x = 0; x < _areas.length; x++) {
                // console.log(_projects[i].related_areas[3]);
                arr.push({
                    'pk': _areas[x].pk,
                    'tag_name': _areas[x].tag_name,
                    'value': false
                });
            }
            //this.data = [];
            //this.data = this.areas;
            //this.data_to_render = this.data;
        });
        this.s_areas = arr;
        //console.log(this.s_areas);
        //this.s_areas = this.areas;
        //console.log(this.s_areas);
        this.s_user = false;
        this.s_team = false;
        this.s_project = false;
        this.s_available = false;
        this.s_complete = false;
        this.s_search = "";
        this.s_tsize = null;
        this.s_psize = null;
        this.data_to_render = this.data;
    };
    SearchComponent.prototype.setall_filter = function () {
        var _this = this;
        var arr = [];
        this._projectService.getArea()
            .subscribe(function (_areas) {
            _this.areas = new Array();
            for (var x = 0; x < _areas.length; x++) {
                // console.log(_projects[i].related_areas[3]);
                arr.push({
                    'pk': _areas[x].pk,
                    'tag_name': _areas[x].tag_name,
                    'value': false
                });
            }
            //this.data = [];
            //this.data = this.areas;
            //this.data_to_render = this.data;
        });
        this.s_areas = arr;
        console.log(this.s_areas);
        this.s_user = true;
        this.s_team = true;
        this.s_project = true;
        this.s_available = true;
        this.s_complete = true;
        this.data_to_render = this.data;
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/home/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_2__users_user_service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__teams_team_service_team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_4__projects_project_service_project_service__["a" /* ProjectService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/search/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_user_service_user_service__ = __webpack_require__("../../../../../src/app/home/users/user-service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__teams_team_service_team_service__ = __webpack_require__("../../../../../src/app/home/teams/team-service/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__projects_project_service_project_service__ = __webpack_require__("../../../../../src/app/home/projects/project-service/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SearchService = (function () {
    // this is urls
    // private api_users = './testdata/users/users.json';
    // private api_teams = './testdata/teams/teams.json';
    // private api_projects = './testdata/projets/projets.json';
    function SearchService(_http, _userService, _teamService, _projectService) {
        this._http = _http;
        this._userService = _userService;
        this._teamService = _teamService;
        this._projectService = _projectService;
    }
    SearchService.prototype.handleError = function (err) {
        console.log(err.message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.message);
    };
    SearchService.prototype.getData = function () {
        var _this = this;
        this._userService.getUsers()
            .subscribe(function (_users) {
            for (var i = 0; i < _users.length; i++) {
                _users[i].created = new Date();
                _users[i].modified = new Date();
                _users[i].modified_str = _users[i].modified.toISOString().substring(0, 10);
                _users[i].tag ? _users[i].tags = _users[i].tag.split(" ") : null;
                //_users[i].team.tag ? _users[i].team.tags = _users[i].team.tag.split(" ") : null;
                _users[i].s_name = _users[i].name;
                _users[i].s_str = _users[i].uid + " " + _users[i].utorid + " " + _users[i].name + " " + _users[i].email + " " + _users[i].tag;
            }
            _this.users = _users;
            _this._teamService.getTeams()
                .subscribe(function (_teams) {
                for (var i = 0; i < _teams.length; i++) {
                    _teams[i].created = new Date();
                    _teams[i].modified = new Date();
                    _teams[i].modified_str = _teams[i].modified.toISOString().substring(0, 10);
                    _teams[i].tag ? _teams[i].tags = _teams[i].tag.split(" ") : null;
                    _teams[i].s_name = _teams[i].name;
                    _teams[i].s_str = _teams[i].tid + " " + _teams[i].oid + " " + _teams[i].owner + " " + _teams[i].email + " " + _teams[i].tag;
                }
                _this.teams = _teams;
                _this._projectService.getProjects()
                    .subscribe(function (_projects) {
                    for (var i = 0; i < _projects.length; i++) {
                        _projects[i].created = new Date();
                        _projects[i].modified = new Date();
                        _projects[i].modified_str = _projects[i].modified.toISOString().substring(0, 10);
                        _projects[i].tag ? _projects[i].tags = _projects[i].tag.split(" ") : null;
                        //_projects[i].status = _projects[i].status;
                        _projects[i].s_name = _projects[i].name;
                        _projects[i].s_str = _projects[i].pid + " " + _projects[i].oid + " " + _projects[i].owner + " " + _projects[i].email + " " + _projects[i].tag;
                    }
                    _this.projects = _projects;
                    _this.data = [];
                    _this.data = _this.data.concat(_this.users, _this.teams, _this.projects);
                    return _this.data;
                });
            });
        });
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6__users_user_service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_7__teams_team_service_team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_8__projects_project_service_project_service__["a" /* ProjectService */]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "../../../../../src/app/home/shared/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/shared/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\n  <div class=\"color-line\">\n  </div>\n  <div id=\"logo\" class=\"light-version\">\n    <img [routerLink]=\"['/dashboard']\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdsAAABqCAMAAADDRQtiAAAA81BMVEX///8AGUgAAD8AAD0AAEAAADgAADsAADoAF0f6+/wAFUYAADf7/P319vgAAEIAE0UAADKvtMAAADDHzNft7/Lo6u7c3uMAAC7g4+jU2OAAACgADkPx8vUAACcAC0LP09u9w8+Olad7g5aXnay0usYAACKlrLsAAEWFj6Q5Q2NlcIqco7OSnLB3e42wt8UXL1tLW3uGi5xwfJVZZoMxPV9ueJAnOF8AJVU5Sm58iaIuQWdQXXpkdJEAFE1RV3BdaYU5QWAeL1cgPGg1SnBETmxcYnoNHkoGKlsAIVVCV3sYM2A/U3cmP2mfoq1scYYcKFAAABsVWBs+AAAgAElEQVR4nO1di2OayPNHfAQURMIjEKksSAmCVYOKokk9ryRNa6/+/v+/5rcPXpqYNne9u16/mbtGQdjXZ2d2ZnZnl6KOiJ/bgKeokaQNtePfXuk/TnPNDSh3OJm6w3+7KK/0I8kY+r/r1HIa896QssEL3zbdP5On/sJsZNH4M9n8z5PkimHMO0FAaTEXKqcf1C3J1CGp6I9umo5JmV9769MvKO5oNHIRBcOhy+b3NbvivaSEXJCsDsqluZ43BJp0VBFJGgWWbQfqSxJ/jrQA5iMd55OVStNUHbgwQ2vE/6gcfzDpIUW5X/wrNwCe9MXanER3Xnt/9/Xr3b7TQB/vK3XAe9FZ/EzSIOrcewFE2L2O3ud3Vfu+9RJuN/rr+qbUetrUlhQ9SP4vPHxO2ly05rqhe/ROf0HyJ0n7FJqKGczePt0RDXdw0XkfSKrpvrv6ILFPPvQvkyhSfWNNiXGofLId1Rvqc1fiHj+nTDUe3f7jbCXDD155Dz+8zrMjdL8+Tb9Jfum2f+68qIhS7WtRIG57jT+NzXGby9UKZjHQmf0AnVCJ+uRzfaqKUruXdiLVb/k/F+9ypgkoJxx71mrI879v4qWqc1Ovrzkb8/HTairqnGpCBj8R/bt4lgODesZbavk57+JpMXeKTMEuLqzbVLLox9jyi3vS1l7n3ROd84Vkd9Iv6qkBxLxf5OJ/WP0R/enHkRbfTMBUcz7a8dJUxTXvhboz1VyHCp9RXRx6UnTR0aX4XA5uPQOFLXdr7/JlQtNkrouLu2zs5cHRY/z4nrQ1ECL5RRk8RdEi+3ZKyOjbcTG0h53JX87yBxIYstp0AqASYiYbb9Vof0iCG2u4A+EmPi00HXpaxhY8l4Nbv37qtnf5jMr2BJmCVVzc3Z7Slfjxnvyk78d/HdtF/VtSVo22Ba+ywtmLTQblT2h96vc13XA0MuXJVFLXXTqRhEoNyKGoWjtXk6UnMcHkVP0yts9KV/csS+dARsaXLzNpzF4J23lrc+IxiC1pa9D++tdVm0nL/kYiWhSV5LBdv3uhocb6LxuaECmT7xP9QWR6njUfO8tW65pihyOKs293WjjSlOXNSYvSof2izuIbODKrZiZiWQkcdCuxkWKr9rNbKpDU+SVLsbIsazyP/1KKomgc+s0hrxt9lTJE/F2WgOnQ/SJNtVdfOU8WDmKLX+HvhFzmmw4ws+KqYl/UKMMgxTBJdwOQ2wBSL3hTMsvcblbqK5Dno3gcpR21iTYrYyvVGMyGOkgz12HKmpSVRAYi4VJWBBTvwO/auhdAuw0yig6TkdNGzNtWBhLJTtbRr6Rs0iwSoZj9Vs9VfSv0TJ/36sknx4X6wmikKAkdGfPAdCf6qH/iPadWwta9NN27WWUfkMr6m89RWZqPaB+ZwpIzTVNT55Mvwnh/AeuTJEmomJNkEGqUuZt5HN+/+dTCGomTnJkgOYeqNR9Md83FthaUEgVRnU6sJ4QuHG91iuPB3SLjB3XqjcKPd6TV3NDxrmZ3SQJbM9h8WiC7SvPbsezXIEb6JgibB1oTYM7aSR/nw45ml4YTXVgH+Wmzsv5k3jcgYKy12d3P4aVs7++c+a6ymOMU3JtpdYuKZa5pV13XJ7w2oZnd5NNGMe1F37CSyt7iNO/ufVpaaTNdJAjVIJkoXrKvDGBeUkTfTya7+FujhTuCbf9pGrSrlja5QTAH5o3XOXsTUOGQp7xT8uKAb92OP5JhlliJ0SJYlvlFScce1QbXiL62CTiODxmLBdsWavcaRJgyeugvNV9SVPIA06Nhu+jvou6HvgRtEGWCeorq18vYUnw/abWq9iN0IbZfp5P6uZ8NABK2ibSIRh8uanH9XnBdjrqG36XmhoJNSkchmPu8soDNoa8Phg65P6u36qgXAZuuToNRdKiFHGG7aMHqI8PMoT2Kd71uFBiUMr9YQSSurww4skTwnetBb+VJEyTv11skZgxrVl2GjgL29bntjr62BohdwcqgjIFgUGBeHc9FTfY6yIqUo7sTsByQEUIDSGT9+3tADU3KsX639FUoOv40HLJucFLrcxrzErZvsKDpN2CtuTnyUantpBDL4lna0x3Mt/pn0uF2CFtqeoF6KN0C8O9n2Po+7BRy8h7VzK7D9BSK34wIRp0jNUUG0149OdYq+PGWZ9l5PUm7Nb8iI7PUSljKmOHOaqOuZz7A75xNwx5jIulg8JT0BnUf7UjYKWDXayxRcstzHZXogA6xlbptFY708A5314XllmcblBq/acGUPcBR3BQPGW4dtokM0+QJtvBOw0Z9yjtHtZSTe1hCY4BECLgMeYq/X6F0lOg9/NDGd99j3fHx9MrcOWIMrqUbwJraZLlyHQiy4A3nQ/PkkH2AbfAGF8+hYbGU9gYM42u3NBrgeuBmwCDt0tF318CN0YE/urseNJNA5tmQE4yYRWPBBM7IXXCMLXp72Trufghb+HeQGV7SW2KgsesqoMAeyxP9cgiTv3dFL7bQ4K7ViRxWm237Sa3VjFqI4TeXj3+C2JbQFusDhfIj0Y3tPoC8zifEnlD3qT+A87F0c9qp2chPUmylGm4l6RLXst8GMNdLzxnGFh6i73E9jTVKBmL7VCGPSPWGvu9LoehuLE9bc+YwXs5sSfVWPV35IIGTw7V4VsJ2+AZLRtCGxdIvNqZ2KChzbDlUTa6Wjro7Gv1VojuWn6hJIlN+pnEo6Ao2fhvfsGvk7lPYUlq7edT/+HGEOjWotMl4ElykMrTfEqGagC+Uty7F+/uRqpBKaFkJ4UCxfVIxlpgItvDmzRMliAYlbDfQ3jOSyFEVwllsii11NyZP8dN7rExcjdLiJqkVLvVwu6hYdFB/IGyH50NdS8UPwZbfoJb5Lmz59UgBko8mfhTvo7aBCvNuNPFCK6x04X3Ls06N12K9hK13TtS39h/wz8UjB07QKrQPOPagwRTREmNL2be641HXbdMkbKu73qayRp3cu8XYTlskJ1DyfoG8XBsaHNXp4xY/H3QIQwzP09zdukipFcw+zpmMhGHeK7TcacqKs4vCcmfztFmfhhy/OX/cEmpU4lut1dMoZbDMOzf7Pk0tRBCqonVD1HinnfY4iC1haKn3B06uhK13UdTtHvtt+bsBwvbj9/Ct6WtqOPF6iRIr/soCN5ZnTje+7vRqq0+hxI2sEy+K9ZLx6NVTbJG+33k0JxS0CjvZYlmmSd5MsR213E86Bc5dH4vLzdJU9NkdeiTFNuyQLl7GdphLThsL7hKr8Q9b3JqsT7qfdJ5KbUswUWJTjZJ3MCXuXQ1k72gXBFv0vLZuFwqkncP8bgHzmVw8bgl1W4y3rI/mP7iSY4V7f0eS8N9xlLV0FGWCiyc+xraN+da8xNgGCFu34BOOYAtlMsL24evjcjym+GY5hdgsRCmcDL34hotHq6UUfvZEMfA0EJ9yJoqtkp4cNlKZDJ82lgI4erbfyudqJNjO006I5dWqRSpXa6ORsb3A7OwgLUeZ4VkBm8hkUB3gphJLMhnMs2/LAbqcFoXhr/apeby+RD2TTwiGxhjJBa6/pf05Bk+s5+4P9ZI04g2qh1MvKuBm3lL+PdKJdul4G5a6vL7I7VveJ1Nb1kUxOYXfI9aD2UO/TraobmIjl8npeAvodLzF3QzzrVbLk5YZjK2MRytt8V26lDKFSo/ykEzsqQh0MbSG3nSXLEHoQZXAj0+6w/r1Qu5Qmw4untjAEwe1rcnyplW09ruzNc9yHMvyzr6PhFhjDTQnXHR4/Myqhd5eX+C83HMRmrOVRIMj4de6iTxZbNjauqppJWf9nD9NZg1Y+BvnPpjIyqGLCSa1U0n5Tpk0ECuY2OHLhhEupBHvUoHOJh3b4OWhhHKdY5/ZPJE5KhgUI7hZXZto3ovrC+jmw7mCnuvX6aLPS/QCsKh6/ChZkpyNxVmf5xUP1ej9NjB4Xp0Aoi2xYHxvQv3YyiY4Wb/qsoajU/0Olm5kCOHe0Yivr1uJBn8MkMTeoQJqCzS4K4N7iZXdb/kd+SDWoDkvxf5EkoDuThwXeL7j8dLm9GBriPbtQ3vjEuQNb/xwM2KhXdheo/zcVevjNMihVa+vrq4+T25uNrvb1i2Su9q7bXMZ8MsLO0ZPhZgHxR15ut66mQP7YufK9m3vk4cN9H5yO7ZN8yKxCnfEZvGwvranNmpyZU1nLM05H26bE5GUnL/uzJHr5/pL6H26xk3hllBR5u32h9CE7f2x9jmOYdHE5e3kxiu1mbL0mw+bNB8lbN9OvSG0UW+3uaPJ/bAYL77cxPHN9Brkdd6cXe1w0aj3+9XVLsTOD2XVWYdu0PliKe5tbRnH+AHz48XvPuCHDx/HscoOH25XQ9bwbplPgUxx1qL1+w0scfAh+gwLaE7HXxC/ibUOKvg3CapMFiu5UzkGoebB7jbntZ3KUsFppzcPFUxF0VQyULAavIBqoQE/sVYnK0rJLWfgnzPCsoSTkWVnxSpmfRN3ES0tqmYq0JqDSXNa8YKhwCd1HyhZj2ENVoYF0FIYlFGBBipZbqHq4eQapiBr2ZNey3fdkaOSIZmkz5Gi8Tgj5UDH51A+apoPn5dIytsVJSHL+ft5C8Fr8vv7tZI3h2LC9mFhrdMc2azELLmjGbjSGsfiq7QtyQfMxMg+0NPfOQ3iBY6+ligulKaQhUTIG1oYO/YvuSKOnXTevHn79m30QxZlfEd+yfRbrsG/lcBQDFEBnJEOKBmLJFl1tX+1TH8XBRZkd0V17ufffvZHEJ9sfop25G4guw/jX3kxoZgpsO76r6/J+B4yEv+k/+cfJQVaArb31ye0f1pi/UyJGAbPPvjDSB78JEuoeKiFh8FPteLnB9O7CCturPtPtbgW/RwymbJciRr+Uz36XyFz25x63s16+A81OOfUIlP5Z8T/c8Raw0Cn5M1w+LJ1TP8pUvv2u77zj1VQj6/7lvhvcy7rhI7i8a6m27H9K6NL/ZNcxP3rLKv3R+Lmgzte+P5uApwv1zdfHNH514v1Sn+d9FgeNXoVOpCUaVdoL01o/vVo+tQU0Cv9hwgAtMZBoBODMipdAXn8g7pQ/alWUb/SnyPZHsZeEg2izTD2Z7PZwIu9wWz23ctmtSAWTxrFrPPy5bdPE+98h3e8nPPP4TT4t0mXNV6TNVnFLmxZU9Dld74re5Ok+n/ZCuQAxWIi6vf7AOoSwL94ESInjWvWuWu9wAds9m1/Ywcv6w1/iqSsyrDG/W/04xe7Drg/p9RqakFa/q98t6BncNY+mBTHj9JSc6BSXQ1dBwA37EG83Um18xILwKmfmqEIJg36OCX+eEUilZViOR3JvDza7O//eEHuf4rYUYueDEewysH8G1GnbuulvoOw/qd658QRH5MzfOKm6J6OHeHWR79N6tk6EBc1K7dtvwRb0D4ZNcbVq0d3pPdt/6l+zYXVrI2l7eiJB34w1apZJvbzfOucrt0Jsq7+1HyV/dRNafMUJ7CnVWZQO4oH2+R9UwLo7+z2RZb7M2NkUzi8DmLFrUSPU2f9VtGE8T8wl/d7A6TfxG+Ebb1cA/hzOsMhtgoQVYniTU+jNL2vgoMf+dPYWsJR4/n5qiaiywwWP0qlWSwOLuUpNMBH7cd8GdRLMdjmP+ATWp1l7Mr/JD6BA2ydUTwchUHo2p4XeNYwcMszfaexZafbI6k47xzKneX4GWzBd5cW0nh8cCmhtZDyDC2JDkW9KIXx8Ggx3l+h7+gcu/qPMgV+FJWxNcBU1KXNJAm8+XoS6FLoldnxGWyXx0IxPM8WeZEfltFpbJ1ntkB5TOPo4FJGAQnmEvXBoOMXwhB0nsnxxSRvv/1Mji3/bzuOMypja1qBMlrHw5XobsJgZ0nytAznEba8CgBZcKSZ0UxV9TLrxhm2IsAfq7SlFTN/THE9R2UpVqQnuo4iE1kQwH9II+SyVWymZ5n4eUUK0m62OMSW6tNrcUIWWC7L9Tp7wumimSDLXpZYqGCT4GQjlU5oYwVoIZC8ZQd/Gqi7qNsW2pWHJEHWh3GmRXFSeS+QSabMWuRT1UqpUaobu5pBFmaNsMEB8+aK33kzj8xRTRU3Fuu48B/K3xDRDU7nUZFVkienD2NHMZ5bMVXGVh1O+97ccqahv3Y9RH5Zmz/EVpoOneurO5g1N/zSvf/06UNZs49bsQQAGLkDgK9nOEaJMqfzdkS6d//LuH5JB5T70N1uoJSgVL/hKXetsUbpX8n2Esr68+3l+ZinOPdmft4jKd2ujmrgv7lMyHr1sj63OXsUdW3YoehGW1QlLUiueGdNtwYa635Nkj4snWLtI3H+iaY3qJHdJYoSA/b6CrbLqtfbTCdoabC48XFcmTKv2YZ/dluSa9PGEFc5wIuwpOuKZ85vL2pk4tYNnaC3X0dLnjLnC5gAuBaGpn970f5K2MOfjx/IMGbdrBtolYa+aVnq3XkkU2C9hDzgzBuSs766IAFDlO051xeDdfTuEaQ5lbHVwPIm9nR/MQ9mk9gMvclBcOYBts4Ctaca1XAocvTbUbJefeJZnhdnsRzREi/u/wh73hRvVmCjnjBaw68SMZdkL6G3c92eG9L6rInu6DsZrRiFJbQv0YYSODqIai8PMjL8jRbsGxAweVeWhY+xlVcoHy5E2Ul+l9kMZdZuRfMADLd12KxuIDAj2I/sxkyjxHkNBWQoLt1G7zIPJI3+BNV5zfPDNb31zYNNmqbVDaqyvcYb1jjrRuSZsLbY2HXRwmmlcu8GFEjQ/i+cM2ms4Ignr1HWlLKSstiQuYWWMPuUEQ+qkW2G76hgUJ/DNna30ICGHX+GAiO4OUrWoZPRM7v8HOhScfAxHkrBncq565F0E66GZW2+jC3/QJYcgQsk+h5jG5+nmmu6WpdgO0MpOOcJfO9L/ijI4oTMOgmRpNjWZ3S9yottoW9fyUYwh9hyc2SumVuopx+uJpg/ksk2g4WpMWugtp/ReEnzQ4LuuWe4GSKcLRW2bDTCkmCbBe5mPaKcK2eoNt4ligvu3XG4sDmtM5lMgtWkC7zbltRGtSP8jaNXKXWP1zwCEgkCqsj+t1GlFHqsUhLmGR8FxoBz2MYyi2INsPcgjQvqo0KoV0gys3fb58ytQxvI9KdLI/7gmpud7o6n7oEyX8Z29JZwNLsUJBSI8dtRsmG2axQgz213uIx94M1tB/JfVPg6QCuLo7/K/B2dD+h+77Dc7wR8Xf1UvunUMDPrjaWSHOhObn12WCJjmy5HC1CTURPsTOEn+C2tgkOwU2We38OG08Yk2Iao5TRBvV9z3Xjuoa0L1PGxZ2BXTwX0CH+mASgq2gFLvcRjqXSFaqpFeCVPGvGjV+A943YqDee2C5+y98AN50MU26pept45iUzGBWQ/EQfFIwdtUiD6Od38sIQSsCbe0A1id+j5G+kwFq+MrXeZdtJrFNHCfxwcJRtmfEsCQqj9hEOr+a8lojAYpU0rnsC2haILrPERtg/4+nB7n3klrQadHLoplVblsNpmJd1nSrtAevn0CnExvx5giPfISqaS1FDbXLKURgKTqAUe3lNsbSYwUyn8DLakyioOQyLYmm8BLkITx2xHOPgsw/Ye1l65mEo66VeTrZPttKG9SSWRRGOXaUDaHGNrXZDdFWrfj60y9XTHHY3mI2nDguWhLD/A9jzNt191ULDrb0fJ+p3iXRRbvEcyOWhlN/VasTA4x1bP54oxfmmMF6mmGG/2RP5cHsjkJUM+1e3HIws7rJfXHsuUeZ+G0MsdNBKvM2zxB8F2l2JrdSDf3pKWaeIglhTbd4XupD4ce2BX9aK8cs51GFu+scUxoThIWItwJzPfYD0VY6teZGXll7Nc8VXfpJqsRGJhArITF8ZW6uA3rifP2VtHvS9wY9sLRiN3GM7B0WadZWydi9QoDVF5+Y+/HSU77RSeIsiNyj3CVsx3mJKbD/nPo8y1XmB7juSu18kHUO+zoxl3OJqNvzjAdk2nDfq+ijt1UVVtXwrJ1fpwnG2T6phvUKNPytga9wd8i0Y/Le19PYItMbyuW3mSj7EdN3IeQi1lEmz1PXrOPp+oFL/CFdK2JGiURMabDMRWbiXpm+ymmaei59jiMZnqE2xHCFt+jUJPzcWzvtQjbEHouF5sh3Y8dIbeoe+sjC23Ii2n4MhKo/nbUbJJMdfRj9Gogmwg+b5G1o5CfmvlGTutVBTrnfQL10H4SZ1qavHJ/4cqSbDVzw9sILG+wRpS3xfQO2Uvvb7PglspdgeVUeucRPn5C/TGoI1BTTC2CsF2QhA0xiYKSkdbSlBGD3clmuhSUosEbCMLpXYsk6+qIPsaIk3okgTSCrgPBEnjk5/avWTgdwi2eCxl1zU3TddNXaVIPblM2xBUcVIxwdbF0o+3Z7XpczvlUo+wtdwbMpXHa1YQHtrFBzaQ1EVNzfo4WlxuHSku1G/1dE9Ww0IudJHGfGpdLHVkbCDBQs+Rlecg9RgKLAndu0gLI3c+oo/leYS2AfGgcELbw24FVeGhXD/wJ8uD1tpRpfmU984tyilvAkqpyzrZv4b1sXBZYwFBQtXlbRVDt8DjrdTGUmjNoL3e9R1Alb2jPVnzwt4YTZ4uWhK0f2VqcglLzXnwAbNzHNjcaaRspoS0ijZhwD1VIp2Yu1lmQf76/ZrFbYH52sER56C6R4LWYykj6sC/MnIIDi/SNnTIph1rsvOlRXZ30LK+cpqOe58TQJaF5NnW6Chs5HAeyLAHN+EEs/ZoNxscxDRK08V2/PnTdPrpdwZyLO+tktmnIXw0mLXHa4Br+HVLPyxxivOH26VlUODzdnUTAuQYjmaxi7dKvr36jCyKqLWbApeeWUqIUyoVQ96M6asBvMNZi4/20egDvm4/ecMwmZMBwk0+xVO8ZZO0m812AWd+gllKFFhG0Q3MeCK8X6w2aUyqmtSgBUuNt3ewRZ3tVTTX0bL87dWXDTLKf0eFLc1QgE+L7eL3CazyuMJAOX6zTJawSUbLZOcZVFDPnUD6TbQKHf5mkCSejFwkuyFsZ5AIDwlmU8Uft1eoB42i7TJEIZhgGi1jSZkMksmQ4r1lMnFZPqS/PaXrm9IBwUsHrR8YSY8IHPmTFV0njC1riErtqpp6PqGvaxSraoqm6hx+R01NFU5LtzejWF1HAYdoUQBORUGfWBzLeha5qcP7UEVNUyqXgoOZkXTUJ2w9TTfNYk0Br6aOPZSFqnKariK3I75SkC5llKqhYPckKQBMR6PKX1QdFbLU+U1U5XRJA3oRh1eyJNiSp/otP3DdkZRmrSnc4e+QVXAjkArhjIv2wJ8yCdiEVSDhm5uKHQTu6NnxttnK6KyBqEpX6Xat1q7R1WoVXaN/hDqndof7VWg3/rsm57h1r92gG5ftHzZVpDwIdIM+e/PcRqSLCiRG6NHtXvcWQtptMhVMDCPQ7atat9du0wKDbtK/OrbL6O/CNrBU3dR1UHnRlNczxIcjFYoKPTh7Zn0OwlYQojUKE3FZyl1tCbqMcB9BTURbmRRrr+6FZqVS+9WxXa3+JmxHmVbjHE90/FkKs+lx+5nTHiC295OdooyAPFT0kaSMdhFi28XERpd8rEkjXRsut/8D2EZ/F7abjLncF5278Qx9zDSpr89I+XtGWA7nnKmoxhBpFLp04/YgK0+CvqxrKh8rSN0QY6vH/PLY7j//TQmHZF5TFn/Yzgj7OzKtff1cZ1lUILY+BySNH2qKCkzpJsDYDi0ZMizEVlMdTQy9Xx9btUfrf8+SCZVmfM+bJye3/HkxuZ1o7nlfd8+Ga+0xtmhFgjZUJaDLBbasCoAc49UV/wvYqva15X1re/M/SXJg29YPDZvT0VlE3zBxxwzBVjOVoWZCO6qErabg8Vb538D216NVE2OL9p8fKpTuaAW2PAAsFRusBGSEbaX9K4fS/4o07WJsjZFtoaWrOl9gy2mBPQyH9lBj3RjybfcfWJz/Sj+Q+jVhGW92K08Hdt8Emw8fboYY2/jLlw9DfWS7uvvhy4cbr9cc/wMhU6/0A0mihQ8gQEFoXhwOcSia1K5UerbjorPzYjvEZySOXFqIfuUtp35FMmtM5bbZFITbZWA/3ArNZvMW+S6EHqL22t3U8LdepfujfCqv9A+RMhCI/xihmbqSsTs5u5n9XGmG307tlX4qekdXHhPk4+YBxmiq4GcLd3mlb1HQOMKVEWrVfbTaMmU2hnCPS+HeHM+zhqyk06y8wULi0WyTqhi8nNvoqgN0Ms3JaQqPHpJRjINCvrNsGv0g40seTQTLMvmFZ2WNTMvy6GFDNQEwjaM1PuZoZMIH8XcNJ8LLeC9aaajIaRb4Hjr+iOLJHRwgIuswVV454SbiZCcInKIaFKtoeXry43O2ZU+XDbbIz7TzV1nJDVy1cIjIKB1FlwBQj70knDoKXKkokqIZfLHfmEKaEp9I65kH2enF+gqcnZ6nzNYPge22o76ocZQxtNrd0i89u9Sy5sezi06nc3mGV4qB24tO4/wcrSzyLy47nVx4B+vFRevyKuQo5ffG206jfn55u1SoP9qXrUbj7DzdJ0FdXHYadKtDUeItSvXizfnZxdu35+nCz4fLVr1zTrc7l61JKThQDzu3q4e3jTGNqgLanTetRueidWuh2dLO5du3b9+cw7Tg59vLToKK3Go1zjodGpXOeWiddy4+PzmzzTrLN3T74qK1ynf7sh5gUueXb+B/l+etzvEboHGBNuyFZT9/g/NtpSJOnzfOrzoX5w9Wtmwgblw2Wp2Ldvvy4jYsryWQg8Vlu3F5Xt1k4tFtvelcrLMigPUWlriBHNJm6yi77BxEdV6F2V12br0s5WW3hOx2tXRJUBM19MykVxp/y0GXsCMnQoXuk0gjdEUnuE8Zml9l6MyBzfHapDFH7MHJigPTqEkyWtGqSHuBabjprtCcLEVdBi28Zg2/V2kEqINqQdTA0LOyc8907zRF8+6r9HXWJ6X79kiBiQ4aEVdEr+sAAA7kSURBVCmCYtOMsMR7SCv1KISav7dnhMQVxSDcz3iYjp7UKjVPNnCiZntmyk85AeVpdSopihlW6Gp2ohQv2z3m3tU0FYRR7+H4lQ09taCFMelWGEsU3WGS7r/ev9+6iqK5W5rOTgEzlDldgTVXzDVN70GehDmjbVXRpHWPFlK/J695XaaX79/KG9Nqgld6zOk1ym4NNSEPZTc5I4uMgvttkGa3T10RIBtwmd7DBh0zFZJySA6lL3NNSjgOefR7wqoQIEEnO4/caDJMrZid6NfzhcpJV8hVbVBjSgsF5SQLlhUbleyAFilbn8yvuyRoQqoy2YFtyqxO+ho/yOL6+FYlXQRrk97OD4QaWWiq78k8TNITohQu8cSBruqMTpdjmYMeHWUM4NSaY1IcPvp49IqRVnFYZRZk3PJRABZrX6ZcZ9h1oZo59cxW5QyXYd7r7rM1ZoC+T3lPrAiN/EiNmcDU53kji2R1ncykq7/azT0pUojCWzjvIj1XiofZpS2hJN1Uf5qrMqrwiGQDXMNz9tkqjMrxZFJM90q7mBbnARnLbpNp50ur/iiOaNn0uvl2xezXnlAcuiLl68RBvUKnX7X896+9VBLA/pROw4mNtBkpJ9sjga0x6UpDN41nSdI+AYUqeViNuikjyNv1k7MCfFKchqLdC71sMbRUE9KGpMQPR+8oadWDRjM9u9pEQPar+fEgrF9tCil4RqfSxve1SGhnK7Mr+UkL1IhmGllbTqHK0wtzUUXWtGbZubSQnpeAswvoYhN3H6aRHnlVxegtXJf0WBWgvf1ZlYdaw7yaYvv5eOOcYZUujcDaZVYefl3ZCky+/gafgkIohL0hf8HsMUV9Jp0sdbPO3OZtliX/rpp2Q3DGNMgtu5od765Y6WPsonl2GAjxvnu8q53UFAjn28zTQVJWtVqs1xzVKvUs5iHn29ObT7gNoXS+sdoqrUFSZkIvDQHgM2xh8ci6Y9gJG0mRjE03s3CXeXfcrbSyZjbflCNmqVGvuS1FXlQbRV3lpNslTMxdIeZsrrQ0as8E8E8AlVKgqV4qsLuP5oAhtqWV9fKbbGEpP02ke6GZyaA/ernp5JWxpaZVIZOmen4SPWU2sogDrhAK77KdB538V6vay9SMrAdwn5ulI30QQWyPp65caK8DtGr46XkPZVzdFVf8Xa+bnsSm1zImOb0XmXPWLGE7p7slVS1oMOlWJ3ydqSlZ8cjWSE63Wmpedd+skaOTqPAWaiKV3jW5Mt8cOPRHcIApcrDp8r5bbqOSRlW4NYzfslRfHH6nUjqop6Pto+V0J7GdJFBOCs0e6WSBUMK2WgrRMWmmQ7Kn3t3nTGQ2Mr41C5Ulx3bSzc7ilGoMvTo8GodbCUc7TuSMUaLrs+5WM7Yn1qS59XKl4JDGpMFUBbbWydkwpy4U5xtD8c+UfuPbTI8EBPOwhrjc5r5L6s3N6YNOuek1m+kpYFesuugyaRDrEbYAYpu3mzYTWuUfs+zUcIwdFfTa8/FadVNTMu4fnRF5vQyOwbUOsX2bVRlhS42YptDFys4fBbYWTZdcW+y82iPnUuntQqsya0wbmqCGIa9z2UywZXnNbjT81KfNhg1GaM9CrRgWnsT20Z5h/KZXXdv3J9b1+r0DTte6TIOkAGXyVuIhmduTq1ggtqtCheg178s/TnupmELYahzLSzM67f78SmiVp2Fgm7cIaP4VD203gSHHsD/GdpZjq7eZdvnHdY9BW3Q4E1lqYZWpW+2tUESNpEnZSzaWyd2J4eyOYk88uowtOpKSEMaWEttNoYlGP7eSFxtyetltadJNEte0aRX9Rm9Xmu32Vfv8ki4WL72jm9F6vWw3IiuHkvO6tCDQtXnemtzyGNt1JvTKpERC9+TGbLvuAd9Se4Em/U6rMULt43j80Dp7DtviLE3QYMp8S/3RaO5x4flGpZlM158bvXWmXd0yBwVXGkzKxz7alctkIOeiAqeRnnkOZW3UbDH18o9QKMPsWXTIlk+G1V4MVFh0EOhZ9Owa6dDMGCbqHUWX2AfYanm+fEJC0btNARk2+DQ1QkfYwq6M5YZ6VkoHAv7RAabkeN3f85vvaGESrqHdfACdFkbtLkNvs4y5ZfcR3z6BLVTKK+1TC7Yn3d7BVgrLbqqhq7Xm3hJdz59VTx6YBLFdFthWGaGsfjq0sMdfIN9W5uEW2gxZIYwHplHubPKCSZ0fUwZ72RZwhIMPqI+wLY6VM+uVTpn5pDOmAlt8o1GqPMB2UPPTx6sPlBktbtJFVg7yOzJdm9Io8PuhZhkeYGu+zSBMsYU6OSNAo829P4ktVJXR+B+WFBCkS6X7R1lFTBeUyQGUB71U9ysawZ3Um93bbBPJ78RWhsrMqdlKaKsceCYm3QYxo+F4S5jESJ7DtuBbqctUyyIUtNN5NB5aSjIlQd0qk/5QJh/0KHncbJF0pmTclboCc+aW+IdkV8YWyruzcnZmtRlRSuyqYGeKNJbKzcjVxMXyBmgghj3FiLDvYqcHE9YNDoWRfzDeOm+yWvGrVJ9H4FbMZ/gWjrhVn1LbZTvFrDdT14BexMdjbOGDzVJEdpqZu29mxXgsk5/GVmk3b09hK55VDtJYdtOuaWbYZsbzEzQ6K2GrzoSDKE6HrhLvDsT2QcE7VWeWDjeHiZckicx00+261h/Jp8M0m4KovT3IelSWydpKKCuq0FqEg4koSUHIi/EDmRlYLBbQSliutuOPgJKnPaJIDU019CnvwMT1e9Xyuca5mDOiTAftN2Ah/X2OrXWgJ1OowZoVc36wr6pUbx7u6YeIYEsFtWbu5Mo3rBudddfpMd/fpUvBprs9ja22aFZLdhpXqaYuDqnWHRxb+McEsS2dOe9XhfLsik2nbrYUW35C9wZpmzlVplcyXc16ZpZPUmyRW6zZti4eYVuIUhsqeyXBatM9k4p5FurGXKjYxEuBI3+gkjLRkTKOWHnhACiXPCgTDhwBMS0siyZKcqe2Mc7ti36NaXYLbA/tW0TrXnfZPjBTnLPCd0H1UyRTbCm7IWQOhC/5iZl0L8M2OsY2eWzfUhjb9skVJNdQfoH8SqydpReg1h0oT71QIrdRtm/NM4YuujL/UE1dEHwdY0tp4y6dSmI+6ea+UEjzRtZFluOsVUWhyQiH5vuILtu3Os2UToilbhtzjrIpE9zwgUPxy2oxn9f2TFcBSE43GdissWbGLMUeCGXQqVTzppSK9a3ybeFj8epMs8AWGj1H2ErQDIsO2AHa+FfZd7WZ1uVrlfh4uXW1NyOw9PO9P2upJktxD8yhX4pPhEfB7dQ3sJXHvW7ezEaSR/e7NeGbfAvLviizToOhi12UOtuUSY0OI+AMpPtu5rqWqlBcZCaAWcml0+xjLhlduskcYgvv7Eumkw0tp3w6p99CNrRNBSPpBlVBzWd9mhVRcjQVTRAxCzRK8Cv89wBbNul1s/6lRkW3k+ni4HX2ulbKf9ftHrkMeGhPHrZ+TFdSG5xVtxfpPNFdLx1TZb9Bb8jh2GdT0oxuK3N8GGeZPzkryUDoTR97keQ20zi9vt/c9qpkmzkUaJ8vRYfjQfS0l7Igi66Utl+h+K8NoUkOAObc9ip7W2tVaNJsoNLL3K5uV+ilm0Dr20I+R9Uiz6B7hG1QY3olOcW/azSFPimv245QFWJq6AV6iB7SmmTSgKFdaQjwYNtksKfatdA+pIcyGR08TW8tIEnO9W3uNOZ0q15bu1LWJnYrneAwzKDZ7Y51/qCxnVrngBuUVU9o2K7jiH9s6EbqlBe33d6A6O28f1ZfozaQhPrttSOB655A1ENFmlcFCHy+v61iWvfd7n1gHts7bl2oO6fBVZctun3tmFIwK7zR+poWenNwYoN1XDLVSapC9Sso0GXtKl2/cyXTmV9Os/4u2/Cpd+QhaduopcaPWGmcRX1gAqsGFZ20JH2GngVSJmOCaqvQhGF272mB9kvZcdAqba1Rdu8uJ7hVRWnimr7ZH6Jjg1eYc+lrA5jGHEpk5gEJUS10Ru6cP9KlUDEHlQbdrt1ui/1P3SgaJIPZNreI7AXGVosG0WAwmM1mh9tEVA53FNpuo9ksQv/gty2upL7cb+H1OF1B685q96FKmeO7Qa99W4l8UqgAHZ4xmEWDWTa1sp2hDOGtwx4ZrnBys6PRoUS8m+xpWljM5rn8CcbwHViu7enV9xNYalLB8hKG6azWoCvbNchuWts9rN12TIwAeb6vDwLczxQPNmab2Q/6GZZgRpqykOt0ge10lmZX3iBW35DsEkD6oOHr1CZwJAfN2mqfaci2NUnT1U0Ncu0tHGUNzwIO5G7NfLzFriw5ouiAEuayqsmGoag5X/Ck37G6hg5b1lT9ULKJB9qPJOmqgs691tCWBYRLDAlvP6CDbANV0J+LFG+izB0pZwc1Sz+9w5r4Drx1yLeShH5Q9ec2E2BNAJMuvaehd2Di5ml1StU1DWYna4f102BKoHRLldDCAxVPxyDSxWs/G4hhfRyzkAwGbkq5KD8nFdlr35Wd7gEfKDeG4oaAV6ZVpiJMvekWmkTNhUUpw1CyJNdzXDN8XZ78nyNgj8xAoqY6ZE9R8RtMpUt3m9AQoh3N85zRKPBcHjjhMxsrvNLPSupcCkdgqCLhC7k0XZHcXQI3VqjYcvggphzvlWv/k6RAVAGwNGc+5DzHGUMtqkmvVbRFFhV+cEeUGT5/4s0r/cQkhY6rUh5a2RoaxrpLjwNKRAoaNxx5UhC/yuP/MLFu6MgYQsmlWHEK1ddYwfdVK36N3/uv02ju4nMPMu9TDO0YXo/tb7ljXum/QFI8NwvPYshTo3Xw4nMBX+mnJGmuDD0lc1HE5o0jhT/LWTev9JcIeyecMFtXMJ0iN+TNq+3zCxD7Hru07jIvIAkd6b9uYPILkBLeuApVnD+hzHlKt25ez5v/BUjxILC2baN/GQ017eTSr1f67xCOIQIcHzisO+I01zQCB53j9m+X65X+OiFs5dCl5qHh9/UbPlTnIfuK7S9BSox8j3NqsqF8F/hUqK43jxZbvNJ/kzyJDwxLdx0ncHlzKMnuSJKt1x1MfgXi3fj62vIs/D86EtK69uJXaP+z9P86qpwpd3gROQAAAABJRU5ErkJggg==\" width=\"150\" height=\"35\">\n\n  </div>\n  <nav role=\"navigation\">\n    <div class=\"header-link hide-menu\">\n      <i class=\"fa fa-bars\"></i>\n    </div>\n    <div class=\"small-logo\">\n      <span class=\"text-primary\">ECE496</span>\n    </div>\n    <!-- <form role=\"search\" class=\"navbar-form-custom\" method=\"post\" action=\"#\">\n      <div class=\"form-group\">\n        <input type=\"text\" placeholder=\"Search something special\" class=\"form-control\" name=\"search\">\n      </div>\n    </form> -->\n    <div class=\"mobile-menu\">\n      <button type=\"button\" class=\"navbar-toggle mobile-menu-toggle\" data-toggle=\"collapse\" data-target=\"#mobile-collapse\">\n        <i class=\"fa fa-chevron-down\"></i>\n      </button>\n      <div class=\"collapse mobile-navbar\" id=\"mobile-collapse\">\n        <ul class=\"nav navbar-nav\">\n          <!-- <li>\n            <a class=\"\" [routerLink]=\"['/user']\">Profile</a>\n          </li> -->\n          <li>\n            <a class=\"\" (click)=\"logout()\">Logout</a>\n          </li>\n\n        </ul>\n      </div>\n    </div>\n    <div class=\"navbar-right\">\n      <ul class=\"nav navbar-nav no-borders\">\n        <li class=\"dropdown\">\n          <a (click)=\"logout()\">\n            <i class=\"pe-7s-upload pe-rotate-90\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/shared/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service_auth_service__ = __webpack_require__("../../../../../src/app/auth/service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavBarComponent = (function () {
    function NavBarComponent(_router, _auth) {
        this._router = _router;
        this._auth = _auth;
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.logout = function () {
        var _this = this;
        // this._auth.logout();
        // this._router.navigate(['/login']);
        this._auth.logout().subscribe(function (_data) {
            console.log("LOGOUT", _data);
            _this._router.navigate(['/login']);
        });
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav-bar',
            template: __webpack_require__("../../../../../src/app/home/shared/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/shared/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service_auth_service__["a" /* AuthService */]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/shared/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/shared/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"error-container\">\n  <i class=\"pe-7s-way text-success big-icon\"></i>\n  <h1>404</h1>\n  <strong>Page Not Found</strong>\n  <p>\n    Sorry, but the page you are looking for has note been found. Try checking the URL for error, then hit the refresh button\n    on your browser or try found something else in our app.\n  </p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/shared/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("../../../../../src/app/home/shared/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/shared/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/shared/service/home.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__endpoint__ = __webpack_require__("../../../../../src/app/endpoint.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeService = (function () {
    function HomeService(_http) {
        this._http = _http;
        //private url = './assets/testdata/users/';
        // private url = 'http://192.168.0.14:8000';
        this.url = __WEBPACK_IMPORTED_MODULE_6__endpoint__["a" /* endpoint */];
    }
    HomeService.prototype.handleError = function (err) {
        console.log(err.message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.message);
    };
    HomeService.prototype.httpOptions = function () {
        return {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
            }),
            // params: _params,
            withCredentials: true
        };
    };
    HomeService.prototype.get4id = function () {
        // return {
        //   "first": "Owen",
        //   "last": "Chan",
        //   "uid": 123456,
        //   "tid": 734,
        //   "pid": 2017505,
        // }
        return this._http.get(this.url + '/team_finder/getlogin', this.httpOptions());
    };
    HomeService.prototype.getTimeline = function () {
        return this._http.get(this.url + '/team_finder/timeline/?&sort={created}', this.httpOptions());
    };
    HomeService.prototype.postTimeline = function (__data) {
        return this._http.post(this.url + '/team_finder/addtimeline', __data, this.httpOptions());
    };
    HomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "../../../../../src/app/home/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/home/shared/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/home/shared/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__side_bar_side_bar_component__ = __webpack_require__("../../../../../src/app/home/shared/side-bar/side-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_home_service__ = __webpack_require__("../../../../../src/app/home/shared/service/home.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_6__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__side_bar_side_bar_component__["a" /* SideBarComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_6__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__side_bar_side_bar_component__["a" /* SideBarComponent */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__service_home_service__["a" /* HomeService */]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/shared/side-bar/side-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/shared/side-bar/side-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<aside id=\"menu\">\n  <div id=\"navigation\">\n    <div class=\"profile-picture\" *ngIf=\"ready\">\n      <a [routerLink]=\"['/users', user.uid]\">\n        <img src=\"assets/pdefault.jpg\" class=\"img-circle m-b\" alt=\"logo\">\n      </a>\n\n      <div class=\"stats-label text-color\">\n        <!--span class=\"font-extra-bold font-uppercase\">Robert Razer</span-->\n        <div class=\"dropdown\">\n          <a class=\"dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\">\n            <span class=\"font-extra-bold font-uppercase\">{{user.first}} {{user.last}}\n              <b class=\"caret\"></b>\n            </span>\n          </a>\n          <ul class=\"dropdown-menu animated flipInX m-t-xs\">\n\n            <li>\n              <a [routerLink]=\"['/users', user.uid]\">My Profile</a>\n            </li>\n            <li>\n              <a [routerLink]=\"['/teams', user.tid]\">My Team</a>\n            </li>\n            <li>\n              <a [routerLink]=\"['/projects/project-profile', user.uid]\">My Project</a>\n            </li>\n\n            <li class=\"divider\"></li>\n            <li>\n              <a href=\"login.html\">Logout</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n\n    <ul class=\"nav\" id=\"side-menu\">\n      <li>\n        <a [routerLink]=\"['/dashboard']\">\n          <span class=\"nav-label\">Dashboard</span>\n\n        </a>\n      </li>\n      <li>\n        <a data-toggle=\"modal\" data-target=\"#myModal\">Create</a>\n        <!-- <a [routerLink]=\"['/create']\">Create</a> -->\n      </li>\n      <li>\n        <a [routerLink]=\"['/search']\">\n          <span class=\"nav-label\">Search</span>\n        </a>\n      </li>\n      <li>\n        <a [routerLink]=\"['/users']\">\n          <span class=\"nav-label\">Users</span>\n        </a>\n      </li>\n      <li>\n        <a [routerLink]=\"['/projects']\">\n          <span class=\"nav-label\">Projects</span>\n        </a>\n      </li>\n      <li>\n        <a [routerLink]=\"['/teams']\">\n          <span class=\"nav-label\">Teams</span>\n        </a>\n      </li>\n\n      <!--<li>\n        <a [routerLink]=\"['/faq']\">\n          <span class=\"nav-label\">FAQ</span>\n        </a>\n      </li>-->\n    </ul>\n  </div>\n</aside>\n\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" *ngIf=\"ready\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"color-line\"></div>\n      <div class=\"modal-header text-center\">\n        <h4 class=\"modal-title\">CREATE</h4>\n        <small *ngIf=\"user.uid > 0\" class=\"font-bold\">Please select the type you would like to create</small>\n        <small *ngIf=\"user.uid < 0\" class=\"font-bold\">Please comple your profile first!</small>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row text-center\">\n          <div class=\"col-sm-6\">\n\n            <button [disabled]=\"user.uid < 0\"  [routerLink]=\"['/projects/create']\" data-dismiss=\"modal\" type=\"button\" class=\"btn btn-info btn-lg\">PROJECT</button>\n\n          </div>\n\n          <div class=\"col-sm-6\">\n            <button [disabled]=\"user.tid > 0 || user.uid < 0\" [routerLink]=\"['/teams/create']\" data-dismiss=\"modal\" type=\"button\" class=\"btn btn-warning btn-lg\">TEAM</button>\n          </div>\n        </div>\n      </div>\n      <!-- <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n              <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n          </div> -->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/shared/side-bar/side-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_home_service__ = __webpack_require__("../../../../../src/app/home/shared/service/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_user_service_user_service__ = __webpack_require__("../../../../../src/app/home/users/user-service/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SideBarComponent = (function () {
    function SideBarComponent(_home, _user, _router) {
        this._home = _home;
        this._user = _user;
        this._router = _router;
    }
    SideBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ready = false;
        this._home.get4id().subscribe(function (_ids) {
            _this.user = {};
            _this.user.id = _ids.user;
            _this.user.uid = _ids.profile;
            _this.user.tid = _ids.team;
            _this.user.pid = _ids.project;
            _this._user.getRealUser(_ids.user).subscribe(function (_data) {
                _this.user.last = _data.last_name;
                _this.user.first = _data.first_name;
                _this.ready = true;
            });
        }, function (err) {
            swal({
                title: "Not Logined",
                text: "Please Login",
                type: "error"
            });
            _this._router.navigate(['/login']);
        });
    };
    SideBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-side-bar',
            template: __webpack_require__("../../../../../src/app/home/shared/side-bar/side-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/shared/side-bar/side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_home_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_3__users_user_service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/teams/team-create/team-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/teams/team-create/team-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"small-header\">\n  <div class=\"hpanel\">\n    <div class=\"panel-body\">\n      <div id=\"hbreadcrumb\" class=\"pull-right\">\n        <ol class=\"hbreadcrumb breadcrumb\">\n          <li>\n            <a [routerLink]=\"['/dashboard']\">Dashboard</a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/create']\">Create</a>\n          </li>\n          <li class=\"active\">\n            <span>Create a team </span>\n          </li>\n        </ol>\n      </div>\n      <h2 class=\"font-light m-b-xs\">\n        Create a team\n      </h2>\n      <small>Good luck!</small>\n    </div>\n  </div>\n</div>\n\n<div class=\"content\">\n\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"hpanel\">\n\n        <div class=\"panel-body\">\n\n          <form #teamForm=\"ngForm\">\n\n            <div class=\"p-m tab-pane\">\n              <div class=\"row\">\n                <div class=\"col-lg-12\">\n                  <div class=\"row\">\n                    <div class=\"form-group col-lg-12\" [ngClass]=\"{'has-error': (v_tname.touched || v_tname.dirty) && !v_tname.valid}\">\n                      <label>Team Name *</label>\n                      <span class=\"text-danger\" *ngIf=\"(v_tname.touched || v_tname.dirty) && v_tname.errors?.required\">\n                        <i class=\"fa fa-exclamation-triangle\"></i> Please enter a team name</span>\n                      <span class=\"text-danger\" *ngIf=\"(v_tname.touched || v_tname.dirty) && v_tname.errors?.minlength\">\n                        <i class=\"fa fa-exclamation-triangle\"></i> Please enter minimum 2 character</span>\n                      <input #v_tname=\"ngModel\" required minlength=\"2\" [(ngModel)]='new_team.name' type=\"text\" class=\"form-control\" placeholder=\"Be something cool\"\n                        name=\"name\">\n                    </div>\n                    <div class=\"form-group col-lg-6\">\n                      <label>Magic Token</label>\n                      <input type=\"text\" [(ngModel)]='new_team.magictoken' class=\"form-control\" placeholder=\"Magic token\"\n                        name=\"magictoken\">\n                    </div>\n                    <div class=\"form-group col-lg-6\" [ngClass]=\"{'has-error': (v_temail.touched || v_temail.dirty) && !v_temail.valid}\">\n                      <label>Contact Email *</label>\n                      <span class=\"text-danger\" *ngIf=\"(v_temail.touched || v_temail.dirty) && v_temail.errors?.required\">\n                        <i class=\"fa fa-exclamation-triangle\"></i> Please enter a contact email</span>\n                      <span class=\"text-danger\" *ngIf=\"(v_temail.touched || v_temail.dirty) && v_temail.errors?.pattern\">\n                        <i class=\"fa fa-exclamation-triangle\"></i> Please input a valid email address</span>\n                      <input #v_temail=\"ngModel\" required [pattern]=\"email_pattern\" type=\"email\" [(ngModel)]='new_team.email' class=\"form-control\"\n                        placeholder=\"user@email.com\" name=\"email\">\n                    </div>\n                    <div class=\"form-group col-lg-6\">\n                      <label>Cloud</label>\n                      <input type=\"text\" id=\"\" [(ngModel)]='new_team.cloud' class=\"form-control\" placeholder=\"Github / Dropbox / Google Doc\" name=\"cloud\">\n                    </div>\n                    <div class=\"form-group col-lg-12\">\n                      <label class=\"control-label\">Interested Areas</label>\n                      <br>\n                      <div *ngFor=\"let area of areas\" class=\"col-lg-3\">\n                        <div class=\"checkbox checkbox-success checkbox-inline\">\n                          <input type=\"checkbox\" [(ngModel)]='area.value' [name]=\"area.tag_name\">\n                          <label> {{area.tag_name}} </label>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-12\">\n                      <div class=\"hpanel\">\n                        <label>Description</label>\n                        <textarea style=\"resize:none;\" #v_pabs=\"ngModel\" required minlength=\"20\" rows=\"10\" required maxlength=\"2000\" id=\"longdes\" [(ngModel)]='new_team.about'\n                                        type=\"text\" class=\"form-control\" placeholder=\" Introduce your team\"\n                                        name=\"about\"></textarea>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"text-right m-t-xs\">\n              <a class=\"btn btn-info\" (click)=\"save()\">Submit</a>\n            </div>\n          </form>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/teams/team-create/team-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__team_service_team_service__ = __webpack_require__("../../../../../src/app/home/teams/team-service/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_project_service_project_service__ = __webpack_require__("../../../../../src/app/home/projects/project-service/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_home_service__ = __webpack_require__("../../../../../src/app/home/shared/service/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_user_service_user_service__ = __webpack_require__("../../../../../src/app/home/users/user-service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TeamCreateComponent = (function () {
    function TeamCreateComponent(_teamService, _projectService, _homeService, _userService, _router) {
        this._teamService = _teamService;
        this._projectService = _projectService;
        this._homeService = _homeService;
        this._userService = _userService;
        this._router = _router;
        this.new_team = {};
        this.areas = [];
    }
    TeamCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ready = false;
        this._homeService.get4id().subscribe(function (_data) {
            _this.currentpid = _data;
            _this.currentpid = _this.currentpid.profile;
            _this._userService.getProfile(_this.currentpid)
                .subscribe(function (_user) {
                _this.new_team.name = "";
                _this.new_team.email = _user.user.email;
                _this.new_team.cloud = "";
                _this.new_team.created = new Date();
                _this.new_team.modified = new Date();
                _this.new_team.about = "";
                _this._projectService.getArea()
                    .subscribe(function (_areas) {
                    var arr = [];
                    for (var x = 0; x < _areas.length; x++) {
                        arr.push({
                            'pk': _areas[x].pk,
                            'tag_name': _areas[x].tag_name,
                            'value': false
                        });
                    }
                    _this.areas = arr;
                    _this.new_team.areas = [];
                });
                _this.ready = true;
            });
        }, function (err) {
            $({
                title: "Not Logined",
                text: "Please Login",
                type: "error"
            });
            _this._router.navigate(['/login']);
        });
        this.email_pattern = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
        this.jq_summernote = true;
        this.jq_datatable = false;
        this.inpudisable = true;
        this.steps = 1;
        this.steps_prev = 1;
    };
    TeamCreateComponent.prototype.ngAfterViewChecked = function () {
        if (this.jq_summernote) {
            $('.summernote').summernote({
                height: 200,
                minHeight: null,
                maxHeight: null,
                toolbar: [
                    // [groupName, [list of button]]
                    ['style', ['style']],
                    ['style', ['bold', 'italic', 'underline', 'clear']],
                    ['font', ['strikethrough', 'superscript', 'subscript']],
                    ['color', ['color']],
                    ['para', ['ul', 'ol', 'paragraph']],
                    ['table', ['table']],
                    ['height', ['height']],
                    ['fullscreen', ['fullscreen']]
                ]
            });
            $('.summernote').summernote('code', this.new_team.about);
            this.jq_summernote = false;
        }
        if (this.jq_datatable) {
            $('#new_teammates').dataTable();
            this.jq_datatable = false;
        }
    };
    TeamCreateComponent.prototype.steshow = function (step) {
        this.steps_prev = this.steps;
        this.steps = step;
        this.steps == 1 ? this.jq_summernote = true : this.save_summernote();
        this.steps == 2 ? this.jq_datatable = true : this.jq_datatable = false;
    };
    TeamCreateComponent.prototype.steprev = function () {
        this.steps_prev = this.steps;
        this.steps--;
        this.steshow(this.steps);
    };
    TeamCreateComponent.prototype.stenext = function () {
        this.steps_prev = this.steps;
        this.steps++;
        this.steshow(this.steps);
    };
    TeamCreateComponent.prototype.save_summernote = function () {
        this.steps != 1 && this.steps_prev == 1 ? this.new_team.about = $('.summernote').summernote('code') : null;
        this.jq_summernote = false;
    };
    TeamCreateComponent.prototype.save = function () {
        var _this = this;
        for (var _i = 0, _a = this.areas; _i < _a.length; _i++) {
            var area = _a[_i];
            if (area.value) {
                var item = {
                    pk: area.pk,
                    tag_name: area.tag_name
                };
                this.new_team.areas.push(item);
            }
        }
        console.log("New Team", this.new_team);
        this._teamService.postRealTeam(this.currentpid, this.new_team.name, this.new_team.magictoken, this.new_team.email, this.new_team.cloud, this.new_team.areas, this.new_team.about).subscribe(function (_data) {
            console.log("shuo de dui", _data);
            swal({
                title: "New team created!",
                type: "success"
            });
            _this._router.navigate(['/teams/' + _data.team_id]);
        }, function (_err) {
            swal({
                title: "Error",
                text: _err,
                type: "error"
            });
        });
    };
    TeamCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-team-create',
            template: __webpack_require__("../../../../../src/app/home/teams/team-create/team-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/teams/team-create/team-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__team_service_team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_2__projects_project_service_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_service_home_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_4__users_user_service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], TeamCreateComponent);
    return TeamCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/teams/team-edit/team-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/teams/team-edit/team-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"small-header\">\n  <div class=\"hpanel\">\n    <div class=\"panel-body\">\n      <div id=\"hbreadcrumb\" class=\"pull-right\">\n        <ol class=\"hbreadcrumb breadcrumb\">\n          <li>\n            <a [routerLink]=\"['/dashboard']\">Dashboard</a>\n          </li>\n          <li>\n            <span>Teams</span>\n          </li>\n          <li class=\"active\">\n            <span>Edit</span>\n          </li>\n        </ol>\n      </div>\n      <h2 class=\"font-light m-b-xs\">\n        Edit my team\n      </h2>\n    </div>\n  </div>\n</div>\n\n<div class=\"content\">\n\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"hpanel\">\n\n        <div *ngIf=\"ready\" class=\"panel-body\">\n\n          <form #teamForm=\"ngForm\">\n\n            <div class=\"p-m tab-pane\">\n              <div class=\"row\">\n                <div class=\"col-lg-12\">\n                  <div class=\"row\">\n                    <div class=\"form-group col-lg-12\" [ngClass]=\"{'has-error': (v_tname.touched || v_tname.dirty) && !v_tname.valid}\">\n                      <label>Team Name *</label>\n                      <span class=\"text-danger\" *ngIf=\"(v_tname.touched || v_tname.dirty) && v_tname.errors?.required\">\n                        <i class=\"fa fa-exclamation-triangle\"></i> Please enter a team name</span>\n                      <span class=\"text-danger\" *ngIf=\"(v_tname.touched || v_tname.dirty) && v_tname.errors?.minlength\">\n                        <i class=\"fa fa-exclamation-triangle\"></i> Please enter minimum 2 character</span>\n                      <input #v_tname=\"ngModel\" required minlength=\"2\" [(ngModel)]='team.name' type=\"text\" class=\"form-control\" placeholder=\"Be something cool\"\n                        name=\"name\">\n                    </div>\n                    <div class=\"form-group col-lg-6\">\n                      <label>Team ID</label>\n                      <input type=\"text\" [(ngModel)]='team.pk' [readonly]=\"inpudisable\" class=\"form-control\" placeholder=\"Team ID\" name=\"tid\">\n                    </div>\n                    <div class=\"form-group col-lg-6\">\n                      <label>Magic Token</label>\n                      <input type=\"text\" [(ngModel)]='team.magictoken'  class=\"form-control\" placeholder=\"Magic token\"\n                        name=\"magictoken\">\n                    </div>\n                    <div class=\"form-group col-lg-6\" [ngClass]=\"{'has-error': (v_temail.touched || v_temail.dirty) && !v_temail.valid}\">\n                      <label>Contact Email *</label>\n                      <span class=\"text-danger\" *ngIf=\"(v_temail.touched || v_temail.dirty) && v_temail.errors?.required\">\n                        <i class=\"fa fa-exclamation-triangle\"></i> Please enter a contact email</span>\n                      <span class=\"text-danger\" *ngIf=\"(v_temail.touched || v_temail.dirty) && v_temail.errors?.pattern\">\n                        <i class=\"fa fa-exclamation-triangle\"></i> Please input a valid email address</span>\n                      <input #v_temail=\"ngModel\" required [pattern]=\"email_pattern\" type=\"email\" [(ngModel)]='team.email' class=\"form-control\"\n                        placeholder=\"user@email.com\" name=\"email\">\n                    </div>\n                    <div class=\"form-group col-lg-6\">\n                      <label>Cloud {{team.cloud}}</label>\n                      <input type=\"text\" id=\"\" [(ngModel)]='team.cloud' class=\"form-control\" placeholder=\"Github / Dropbox / Google Doc\" name=\"cloud\">\n                    </div>\n                    <div class=\"form-group col-lg-12\" *ngIf=\"ready\">\n                      <label class=\"control-label\">Interested Areas</label>\n                      <br>\n                      <div *ngFor=\"let area of team.areas\" class=\"col-lg-3\">\n                        <div class=\"checkbox checkbox-warning checkbox-inline\">\n                          <input type=\"checkbox\" [(ngModel)]='area.value' [name]=\"area.tag_name\">\n                          <label> {{area.tag_name}} </label>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group col-lg-12\">\n                      <label>Tags</label>\n                      <input [(ngModel)]='team.tag' type=\"text\" class=\"form-control\" placeholder=\"Separated by space (e.g. C C++ Python Java DE2)\"\n                        name=\"tag\">\n                    </div>\n                    <div class=\"col-lg-12\">\n                      <div class=\"hpanel\">\n                        <label>Description</label>\n                        <div class=\"summernote\"></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"text-right m-t-xs\">\n              <a class=\"btn btn-warning\" [ngClass]=\"{'disabled':!teamForm.valid}\" (click)=\"save()\">Submit</a>\n            </div>\n\n          </form>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/teams/team-edit/team-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__team_service_team_service__ = __webpack_require__("../../../../../src/app/home/teams/team-service/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_project_service_project_service__ = __webpack_require__("../../../../../src/app/home/projects/project-service/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_home_service__ = __webpack_require__("../../../../../src/app/home/shared/service/home.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TeamEditComponent = (function () {
    function TeamEditComponent(_route, _home, _teamService, _projectService) {
        this._route = _route;
        this._home = _home;
        this._teamService = _teamService;
        this._projectService = _projectService;
        this.interested_areas = [];
    }
    TeamEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ready = false;
        var tid = +this._route.snapshot.paramMap.get('tid');
        this._teamService.getTeamforUser(tid)
            .subscribe(function (_team) {
            if (_team.related_areas != undefined) {
                _this.interested_areas = _team.related_areas;
            }
            _this.team = _team;
            _this.team.areas = [];
            _this._projectService.getArea()
                .subscribe(function (_area) {
                for (var x = 0; x < _area.length; x++) {
                    _this.team.areas.push({ 'pk': _area[x].pk, 'tag_name': _area[x].tag_name, 'value': false });
                    for (var y = 0; y < _this.interested_areas.length; y++) {
                        if (_this.team.areas[x].tag_name === _this.interested_areas[y]) {
                            _this.team.areas[x].value = true;
                        }
                    }
                }
            });
            _this.ready = true;
        });
        this.email_pattern = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
        this.jq_summernote = true;
        this.jq_datatable = false;
        this.inpudisable = true;
        this.steps = 1;
        this.steps_prev = 1;
    };
    TeamEditComponent.prototype.ngAfterViewChecked = function () {
        if (this.jq_summernote && this.ready) {
            $('.summernote').summernote({
                height: 200,
                minHeight: null,
                maxHeight: null,
                toolbar: [
                    // [groupName, [list of button]]
                    ['style', ['style']],
                    ['style', ['bold', 'italic', 'underline', 'clear']],
                    ['font', ['strikethrough', 'superscript', 'subscript']],
                    ['color', ['color']],
                    ['para', ['ul', 'ol', 'paragraph']],
                    ['table', ['table']],
                    ['height', ['height']],
                    ['fullscreen', ['fullscreen']]
                ]
            });
            $('.summernote').summernote('code', this.team.about);
            this.jq_summernote = false;
        }
        if (this.jq_datatable) {
            $('#teammates').dataTable();
            this.jq_datatable = false;
        }
    };
    TeamEditComponent.prototype.steshow = function (step) {
        this.steps_prev = this.steps;
        this.steps = step;
        this.steps == 1 ? this.jq_summernote = true : this.save_summernote();
        this.steps == 2 ? this.jq_datatable = true : this.jq_datatable = false;
    };
    TeamEditComponent.prototype.steprev = function () {
        this.steps_prev = this.steps;
        this.steps--;
        this.steshow(this.steps);
    };
    TeamEditComponent.prototype.stenext = function () {
        this.steps_prev = this.steps;
        this.steps++;
        this.steshow(this.steps);
    };
    TeamEditComponent.prototype.save_summernote = function () {
        this.steps != 1 && this.steps_prev == 1 ? this.team.about = $('.summernote').summernote('code') : null;
        this.jq_summernote = false;
    };
    TeamEditComponent.prototype.save = function () {
        this.interested_areas = [];
        this.interested_areas = this.team.areas;
        this.team.areas = [];
        for (var _i = 0, _a = this.interested_areas; _i < _a.length; _i++) {
            var area = _a[_i];
            if (area.value) {
                var item = {
                    tag_name: area.tag_name
                };
                this.team.areas.push(item);
            }
        }
        //this._teamService.postRealTeams(this.new_team).subscribe(_data => {console.log("success",_data)}, _err => {console.log("no", _err)})
        this._teamService.editRealTeam(this.team).subscribe(function (__data) {
            console.log("Edit OK");
        });
    };
    TeamEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-team-edit',
            template: __webpack_require__("../../../../../src/app/home/teams/team-edit/team-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/teams/team-edit/team-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__shared_service_home_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_1__team_service_team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_2__projects_project_service_project_service__["a" /* ProjectService */]])
    ], TeamEditComponent);
    return TeamEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/teams/team-list/team-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/teams/team-list/team-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"small-header\">\n  <div class=\"hpanel\">\n    <div class=\"panel-body\">\n\n      <div id=\"hbreadcrumb\" class=\"pull-right\">\n        <ol class=\"hbreadcrumb breadcrumb\">\n          <li>\n            <a [routerLink]=\"['/dashboard']\">Dashboard</a>\n          </li>\n          <li class=\"active\">\n            <span>Teams</span>\n          </li>\n        </ol>\n      </div>\n      <h2 class=\"font-light m-b-xs\">\n        Teams\n      </h2>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"content\">\n  <div style=\"margin-bottom:2%\">\n    <div class=\"input-group\">\n      <input id=\"search_str\" onkeypress=\"if (event.which==13) document.getElementById('search_button').click()\" [(ngModel)]=\"s_search\"\n             class=\"form-control\" type=\"text\" placeholder=\"Search teams (seperated by space)\">\n      <div class=\"input-group-btn\">\n        <button id=\"search_button\" (click)=\"str_filter()\" class=\"btn btn-default\">\n          <i class=\"fa fa-search\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"row projects\">\n    <div class=\"col-lg-6\" *ngFor='let team of data_to_render'>\n      <div class=\"hpanel hyellow\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-sm-8\">\n              <h4>\n                <a [routerLink]=\"['/teams', team.tid]\">{{team.name}}</a>\n              </h4>\n\n              <!-- <p>\n                <span style=\"margin-right:3%\" *ngFor=\"let tag of team.tags\"> #{{tag}} </span>\n              </p> -->\n              <div class=\"row\">\n                <div class=\"col-sm-6\">\n                  <div class=\"project-label\">Initiator</div>\n                  <small>{{team.owner.user.first_name}} {{team.owner.user.last_name}}</small>\n                </div>\n                <!-- <div class=\"col-sm-3\">\n                    <div class=\"project-label\">Modified</div>\n                    <small>{{team.modified}}</small>\n                  </div> -->\n                <!-- <div class=\"col-sm-3\">\n                    <div class=\"project-label\">Created</div>\n                    <small>{{team.created}}</small>\n                  </div> -->\n                <div class=\"col-sm-6\">\n                  <div class=\"project-label\">Progress</div>\n                  <div class=\"progress m-t-xs full progress-small\">\n                    <div style=\"width: 50%\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"12\" role=\"progressbar\" class=\" progress-bar progress-bar-warning\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-4 project-info\">\n              <!-- <div class=\"project-action m-t-md\">\n                  <div class=\"btn-group\">\n                    <button class=\"btn btn-xs btn-default\"> View</button>\n                    <button class=\"btn btn-xs btn-default\"> Edit</button>\n                    <button class=\"btn btn-xs btn-default\"> Delete</button>\n                  </div>\n                </div> -->\n              <!-- <div class=\"project-value\">\n                <h2 class=\"text-warning\">\n                  {{team.views}} Views\n                </h2>\n              </div> -->\n              <!-- <div class=\"project-people\">\n                <img alt=\"logo\" class=\"img-circle\" src=\"assets/a1.jpg\">\n                <img alt=\"logo\" class=\"img-circle\" src=\"assets/a2.jpg\">\n                <img alt=\"logo\" class=\"img-circle\" src=\"assets/a3.jpg\">\n                <img alt=\"logo\" class=\"img-circle\" src=\"assets/a4.jpg\">\n              </div> -->\n            </div>\n          </div>\n        </div>\n        <div class=\"panel-footer\">\n          Created Date: {{team.created}}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/teams/team-list/team-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__team_service_team_service__ = __webpack_require__("../../../../../src/app/home/teams/team-service/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_user_service_user_service__ = __webpack_require__("../../../../../src/app/home/users/user-service/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamListComponent = (function () {
    function TeamListComponent(_userService, _teamService) {
        this._userService = _userService;
        this._teamService = _teamService;
    }
    TeamListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._teamService.getRealTeams()
            .subscribe(function (_teams) {
            for (var i = 0; i < _teams.length; i++) {
                _teams[i].tid = _teams[i].pk;
                _teams[i].oid = _teams[i].owenr_id;
                _teams[i].s_str = _teams[i].tid + " " + _teams[i].oid + " " + _teams[i].name + " " + _teams[i].owner + " " + _teams[i].email + " ";
                _teams[i].s_str = _teams[i].s_str.toUpperCase();
            }
            _this.teams = _teams;
            _this.data = _this.teams;
            _this.data_to_render = _this.data;
        });
    };
    TeamListComponent.prototype.str_filter = function () {
        var _this = this;
        if (!$('#search_str').val().trim()) {
            console.log(typeof $('#search_str').val());
            this.data_to_render = this.data;
            return;
        }
        this.filtered = [];
        this.s_search = this.s_search.trim();
        var keys = this.s_search.split(" ");
        console.log("keys:", typeof keys, keys.length, keys);
        this.data.forEach(function (data) {
            for (var i = 0; i < keys.length; i++) {
                if (data.s_str.indexOf(keys[i].toUpperCase()) !== -1) {
                    console.log("Matched", data.s_str, keys[i]);
                    _this.filtered.push(data);
                }
            }
        });
        this.data_to_render = this.filtered;
    };
    TeamListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-team-list',
            template: __webpack_require__("../../../../../src/app/home/teams/team-list/team-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/teams/team-list/team-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__users_user_service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__team_service_team_service__["a" /* TeamService */]])
    ], TeamListComponent);
    return TeamListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/teams/team-profile/team-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/teams/team-profile/team-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"small-header transition\">\n    <div class=\"hpanel\">\n        <div class=\"panel-body\">\n\n\n            <div id=\"hbreadcrumb\" class=\"pull-right\">\n                <ol class=\"hbreadcrumb breadcrumb\">\n                    <li>\n                        <a [routerLink]=\"['/dashboard']\">Dashboard</a>\n                    </li>\n                    <li>\n                        <span>Tables</span>\n                    </li>\n                    <li class=\"active\">\n                        <span>Team detail</span>\n                    </li>\n                </ol>\n            </div>\n            <h2 class=\"font-light m-b-xs\">\n                Team detail\n            </h2>\n            <!-- <button type=\"button\" class=\"btn btn-default btn-sm\">Request to join</button> -->\n        </div>\n    </div>\n</div>\n\n<div class=\"content\" *ngIf=\"ready\">\n    <div class=\"row\">\n        <div class=\"col-md-12\" >\n            <div class=\"row\" *ngIf=\"team.members.length != 0\">\n                <div *ngFor='let mem of team.members' class=\"col-md-3\">\n                    <div class=\"hpanel\">\n                        <div class=\"panel-body text-center\">\n                            <!-- <img alt=\"logo\" class=\"img-circle img-small\" src=\"assets/a1.jpg\"> -->\n                            <div class=\"m-t-sm\">\n                                <strong>{{mem.user.first_name}} {{mem.user.last_name}}</strong>\n                                <p class=\"small\">{{mem.user.email}}</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n\n            <div class=\"hpanel\">\n                <div class=\"panel-body\">\n\n                    <div class=\"pull-right\" *ngIf=\"team\">\n                        <button *ngIf=\"team.pk == user.team\" class=\"btn  btn-default\" data-toggle=\"modal\" data-target=\"#joinTeam\">\n                            <i class=\"fa fa-plus-square\"></i> Leave</button>\n                        <button *ngIf=\"team.pk != user.team\" class=\"btn  btn-default\" data-toggle=\"modal\" data-target=\"#leaveTeam\">\n                            <i class=\"fa fa-plus-square\"></i> Join</button>\n                        <!-- <button class=\"btn  btn-default\">\n                            <i class=\"fa fa-thumbs-up\"></i> Like</button> -->\n                        <!-- <button class=\"btn btn-success btn-xs\"> Active</button> -->\n                        <button *ngIf=\"team.owner.pk == user.profile\" class=\"btn btn-default \" [routerLink]=\"['/teams', team.pk, 'edit']\">\n                            <i class=\"fa fa-pencil\"></i> Edit</button>\n                    </div>\n                    <h2 class=\"m-t-none\">{{team.name}}</h2>\n                    <div class=\"m-t-xs\">\n                        <p>{{team.owner.user.first_name}} {{team.owner.user.last_name}}</p>\n                        <!-- <div style=\"word-wrap: break-word;\">\n                            <small style=\"margin-right:2%\" *ngFor='let tag of team.tags'>{{tag}}</small>\n                        </div> -->\n                    </div>\n                    <div class=\"progress m-t-xs full progress-striped active\" style=\"margin-top:2%\">\n                        <div [ngStyle]=\"{'width': team.status + '%'}\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"25\" role=\"progressbar\"\n                            class=\" progress-bar progress-bar-warning\">\n                        </div>\n                    </div>\n                    <p style=\"margin-top:2%\">\n                        {{team.about}}\n                    </p>\n\n\n\n\n                    <div class=\"m-t-md\">\n                        <canvas id=\"lineOptions\" height=\"60\"></canvas>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"hpanel\">\n\n                <div class=\"panel-body\">\n\n                    <p>\n                        <strong>Involved Project</strong>\n                    </p>\n\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <div class=\"project-label\">{{team.project.project_name}}</div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n        </div>\n\n\n\n    </div>\n\n</div>\n\n\n\n<div class=\"modal fade\" id=\"leaveTeam\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"color-line\"></div>\n            <div class=\"modal-header text-center\">\n                <h4 class=\"modal-title\">JOIN THIS TEAM</h4>\n                <small class=\"font-bold\">Please enter the team's magic token</small>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row text-center\">\n                    <div class=\"col-sm-10\">\n\n                        <input class=\"form-control\" id=\"mtoken\" type=\"text\" [(ngModel)]=\"mtoken\">\n\n                    </div>\n\n                    <div class=\"col-sm-2\">\n                        <button (click)=\"joinTeam()\" data-dismiss=\"modal\" type=\"button\" class=\"btn btn-warning \">Submit</button>\n                    </div>\n\n                </div>\n            </div>\n            <!-- <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n            </div> -->\n        </div>\n    </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"joinTeam\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"color-line\"></div>\n            <div class=\"modal-header text-center\">\n                <h4 class=\"modal-title\">Leave THIS TEAM</h4>\n                <small class=\"font-bold\">Are you sure?</small>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row text-center\">\n                    <div class=\"col-sm-12\">\n                        <button (click)=\"leaveTeam()\" data-dismiss=\"modal\" type=\"button\" class=\"btn btn-warning \">Submit</button>\n                    </div>\n\n                </div>\n            </div>\n            <!-- <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n                </div> -->\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/teams/team-profile/team-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_user_service_user_service__ = __webpack_require__("../../../../../src/app/home/users/user-service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_service_team_service__ = __webpack_require__("../../../../../src/app/home/teams/team-service/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projects_project_service_project_service__ = __webpack_require__("../../../../../src/app/home/projects/project-service/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_home_service__ = __webpack_require__("../../../../../src/app/home/shared/service/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TeamProfileComponent = (function () {
    function TeamProfileComponent(_route, _home, _userService, _teamService, _projectService) {
        this._route = _route;
        this._home = _home;
        this._userService = _userService;
        this._teamService = _teamService;
        this._projectService = _projectService;
        this.mtoken = "";
        this.ready = false;
    }
    TeamProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var tid = +this._route.snapshot.paramMap.get('tid');
        console.log('gaga', tid);
        this._home.get4id().subscribe(function (__ids) {
            _this.user = __ids;
            _this._teamService.getTeamforUser(tid).subscribe(function (__team) {
                _this.team = __team;
                _this.ready = true;
            });
        });
    };
    TeamProfileComponent.prototype.joinTeam = function () {
        if (this.user.profile == undefined || this.user.profile < 0) {
            swal({
                title: "Empty User Profile!",
                text: "Please create your profile first!",
                type: "error"
            });
            return;
        }
        var __data = {
            team_id: this.team.pk,
            user_profile_id: this.user.profile,
            magictoken: this.mtoken
        };
        this._teamService.joinTeam(__data).subscribe(function (__res) {
            // swal({
            //   title: "Good Job!",
            //   text: "You typed the correct token value",
            //   type: "success"
            // });
            location.reload();
        }, function (__err) {
            swal({
                title: "Not good!",
                text: "Incorrect token value!",
                type: "error"
            });
        });
    };
    TeamProfileComponent.prototype.leaveTeam = function () {
        var __data = {
            team_id: this.team.pk,
            user_profile_id: this.user.profile,
        };
        this._teamService.leaveTeam(__data).subscribe(function (__res) {
            // swal({
            //   title: "Good Job!",
            //   text: "You leaved the team",
            //   type: "success"
            // });
            location.reload();
        }, function (__err) {
            swal({
                title: "Not good!",
                text: "Calm down!",
                type: "error"
            });
        });
    };
    TeamProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-team-profile',
            template: __webpack_require__("../../../../../src/app/home/teams/team-profile/team-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/teams/team-profile/team-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__shared_service_home_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_1__users_user_service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__team_service_team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_3__projects_project_service_project_service__["a" /* ProjectService */]])
    ], TeamProfileComponent);
    return TeamProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/teams/team-service/team-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamGuardService = (function () {
    function TeamGuardService(_router) {
        this._router = _router;
    }
    TeamGuardService.prototype.canActivate = function (route) {
        var tid = +route.url[1].path;
        if (isNaN(tid) || tid < 1) {
            swal({
                title: "Invalid Team ID",
                type: "error"
            });
            // alert("Invalid Team ID");
            // this._router.navigate(['/404']);
            return false;
        }
        ;
        return true;
    };
    TeamGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], TeamGuardService);
    return TeamGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/home/teams/team-service/team.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__endpoint__ = __webpack_require__("../../../../../src/app/endpoint.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TeamService = (function () {
    function TeamService(_http) {
        this._http = _http;
        // private url = './assets/testdata/teams/';
        this.url = __WEBPACK_IMPORTED_MODULE_6__endpoint__["a" /* endpoint */];
        this.rest = '/team_finder/teams/';
    }
    TeamService.prototype.handleError = function (err) {
        console.log(err.message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.message);
    };
    TeamService.prototype.httpOptions = function () {
        return {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
            }),
            // params: _params,
            withCredentials: true
        };
    };
    TeamService.prototype.getTeamforUser = function (tid) {
        return this._http.get(this.url + this.rest + tid)
            .do(function (data) { return console.log("team.service.ts - getTeam: ", JSON.stringify(data)); })
            .catch(this.handleError);
    };
    TeamService.prototype.getTeam = function () {
        return this._http.get('./assets/testdata/teams/team.json')
            .do(function (data) { return console.log("team.service.ts - getTeam: ", JSON.stringify(data)); })
            .catch(this.handleError);
    };
    TeamService.prototype.getTeams = function () {
        return this._http.get('./assets/testdata/teams/teams.json')
            .do(function (data) { return console.log("team.service.ts - getTeams: ", JSON.stringify(data)); })
            .catch(this.handleError);
    };
    TeamService.prototype.getRealTeams = function () {
        return this._http.get(this.url + this.rest, this.httpOptions());
    };
    TeamService.prototype.postRealTeams = function (tid, team_form) {
        return this._http.post(this.url + this.rest + tid, team_form, this.httpOptions());
    };
    TeamService.prototype.postRealTeam = function (owner_pid, name, magictoken, email, cloud, areas, about) {
        var data = { "owner_pid": owner_pid, "name": name, "magictoken": magictoken, "email": email, "cloud": cloud, "related_areas": areas, "about": about };
        return this._http.post(this.url + '/team_finder/createteam/', data, this.httpOptions())
            .do(function (data) { return console.log("Post Profile", data + ""); })
            .catch(this.handleError);
    };
    TeamService.prototype.joinTeam = function (__data) {
        return this._http.post(this.url + '/team_finder/jointeam/', __data, this.httpOptions());
    };
    TeamService.prototype.leaveTeam = function (__data) {
        return this._http.post(this.url + '/team_finder/leaveteam/', __data, this.httpOptions());
    };
    TeamService.prototype.editRealTeam = function (__data) {
        return this._http.post(this.url + '/team_finder/editteam/', __data, this.httpOptions())
            .do(function (data) { return console.log("Edit Team Profile", data + ""); })
            .catch(this.handleError);
    };
    TeamService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TeamService);
    return TeamService;
}());



/***/ }),

/***/ "../../../../../src/app/home/teams/team.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/home/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_profile_team_profile_component__ = __webpack_require__("../../../../../src/app/home/teams/team-profile/team-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__team_list_team_list_component__ = __webpack_require__("../../../../../src/app/home/teams/team-list/team-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__team_create_team_create_component__ = __webpack_require__("../../../../../src/app/home/teams/team-create/team-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__team_service_team_service__ = __webpack_require__("../../../../../src/app/home/teams/team-service/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__team_service_team_guard_service__ = __webpack_require__("../../../../../src/app/home/teams/team-service/team-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__team_edit_team_edit_component__ = __webpack_require__("../../../../../src/app/home/teams/team-edit/team-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TeamModule = (function () {
    function TeamModule() {
    }
    TeamModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__team_profile_team_profile_component__["a" /* TeamProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_3__team_list_team_list_component__["a" /* TeamListComponent */],
                __WEBPACK_IMPORTED_MODULE_4__team_create_team_create_component__["a" /* TeamCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_7__team_edit_team_edit_component__["a" /* TeamEditComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__team_service_team_service__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_6__team_service_team_guard_service__["a" /* TeamGuardService */]]
        })
    ], TeamModule);
    return TeamModule;
}());

// export const TEAM_ROUTES = [
//   { path: 'teams', component: TeamListComponent },
//   { path: 'teams/create', component: TeamCreateComponent },
//   { path: 'teams/:tid', canActivate: [TeamGuardService], component: TeamProfileComponent },
//   { path: 'teams/:tid/edit', canActivate: [TeamGuardService], component: TeamEditComponent },
// ];


/***/ }),

/***/ "../../../../../src/app/home/users/user-edit/user-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/users/user-edit/user-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"small-header\">\n  <div class=\"small-header\">\n    <div class=\"hpanel\">\n      <div class=\"panel-body\">\n        <div id=\"hbreadcrumb\" class=\"pull-right\">\n          <ol class=\"hbreadcrumb breadcrumb\">\n            <li>\n              <a [routerLink]=\"['/dashboard']\">Dashboard</a>\n            </li>\n            <li>\n              <a [routerLink]=\"['/users/user-profile',uid]\">My Profile</a>\n            </li>\n            <li class=\"active\">\n              <span>Edit my profile </span>\n            </li>\n          </ol>\n        </div>\n        <h2 class=\"font-light m-b-xs\">\n          Edit User Profile : {{user.uid}}\n        </h2>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"content\" >\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"hpanel\">\n\n          <div class=\"panel-body\">\n\n            <form (ngSubmit)=\"save()\" #userForm=\"ngForm\">\n\n              <div class=\"text-center m-b-md\" id=\"wizardControl\">\n\n\n              </div>\n\n              <div  class=\"tab-content\">\n                <div >\n                  <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"row\">\n                        <div class=\"form-group col-lg-6\" [ngClass]=\"{'has-error': (v_ufirst.touched || v_ufirst.dirty) && !v_ufirst.valid}\">\n                          <label>First Name *</label>\n                          <span class=\"text-danger\" *ngIf=\"(v_ufirst.touched || v_ufirst.dirty) && v_ufirst.errors?.required\">\n                        <i class=\"fa fa-exclamation-triangle\"></i> Please enter a your first name</span>\n                          <span class=\"text-danger\" *ngIf=\"(v_ufirst.touched || v_ufirst.dirty) && v_ufirst.errors?.minlength\">\n                        <i class=\"fa fa-exclamation-triangle\"></i> Please enter minimum 2 character</span>\n                          <input #v_ufirst=\"ngModel\" required minlength=\"2\" [(ngModel)]='user.first' type=\"text\" class=\"form-control\" placeholder=\"Please enter a your first name\"\n                                 disabled   name=\"first\">\n                        </div>\n                        <div class=\"form-group col-lg-6\" [ngClass]=\"{'has-error': (v_ulast.touched || v_ulast.dirty) && !v_ulast.valid}\">\n                          <label>Last Name *</label>\n                          <span class=\"text-danger\" *ngIf=\"(v_ulast.touched || v_ulast.dirty) && v_ulast.errors?.required\">\n                        <i class=\"fa fa-exclamation-triangle\"></i> Please enter a your last name</span>\n                          <span class=\"text-danger\" *ngIf=\"(v_ulast.touched || v_ulast.dirty) && v_ulast.errors?.minlength\">\n                        <i class=\"fa fa-exclamation-triangle\"></i> Please enter minimum 2 character</span>\n                          <input #v_ulast=\"ngModel\" required minlength=\"2\" [(ngModel)]='user.last' type=\"text\" class=\"form-control\" placeholder=\"Please enter a your last name\"\n                                 disabled  name=\"last\">\n                        </div>\n                        <div class=\"form-group col-lg-6\">\n                          <label>User ID</label>\n                          <input type=\"text\" [(ngModel)]='user.uid' [readonly]=\"inpudisable\" class=\"form-control\" placeholder=\"UtorID\" disabled name=\"uid\">\n                        </div>\n\n                        <div class=\"form-group col-lg-6\" [ngClass]=\"{'has-error': (v_uemail.touched || v_uemail.dirty) && !v_uemail.valid}\">\n                          <label>Contact Email *</label>\n                          <span class=\"text-danger\" *ngIf=\"(v_uemail.touched || v_uemail.dirty) && v_uemail.errors?.required\">\n                        <i class=\"fa fa-exclamation-triangle\"></i> Please enter a contact email</span>\n                          <span class=\"text-danger\" *ngIf=\"(v_uemail.touched || v_uemail.dirty) && v_uemail.errors?.pattern\">\n                        <i class=\"fa fa-exclamation-triangle\"></i> Please input a valid email address</span>\n                          <input #v_uemail=\"ngModel\" required [pattern]=\"email_pattern\" type=\"email\" [(ngModel)]='user.email' class=\"form-control\"\n                                 placeholder=\"user@email.com\" disabled name=\"email\">\n                        </div>\n                        <div class=\"form-group col-lg-12\">\n                          <label class=\"control-label\">Interested Areas</label>\n                          <br>\n                          <div *ngFor=\"let area of user.areas\" class=\"col-lg-3\">\n                            <div class=\"checkbox checkbox-success checkbox-inline\">\n                              <input type=\"checkbox\" [(ngModel)]='area.value' [name]=\"area.tag_name\">\n                              <label> {{area.tag_name}} </label>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"form-group col-lg-12\">\n                            <label class=\"control-label\">Work Experience(optional)</label>\n                            <br>\n                            <div class=\"form-group col-lg-5\">\n                              <label for=\"company\">Company</label>\n                              <input #v_ufirst=\"ngModel\" name=\"company\" [(ngModel)]='work_experience.company' type=\"text\" class=\"form-control\" placeholder=\"Please enter a company name\">\n                            </div>\n                            <div class=\"form-group col-lg-5\">\n                              <label for=\"title\">Title</label>\n                              <input #v_ufirst=\"ngModel\" name=\"title\" [(ngModel)]='work_experience.title' type=\"text\" class=\"form-control\" placeholder=\"Please enter your title\">\n                            </div>\n                            <div class=\"form-group col-lg-5\">\n                                <label for=\"company1\">Company</label>\n                                <input #v_ufirst=\"ngModel\" name=\"company1\" [(ngModel)]='work_experience2.company' type=\"text\" class=\"form-control\" placeholder=\"Please enter a company name\">\n                              </div>\n                              <div class=\"form-group col-lg-5\">\n                                <label for=\"title1\">Title</label>\n                                <input #v_ufirst=\"ngModel\" name=\"title1\" [(ngModel)]='work_experience2.title' type=\"text\" class=\"form-control\" placeholder=\"Please enter your title\">\n                              </div>\n                              <div class=\"form-group col-lg-5\">\n                                  <label for=\"company2\">Company</label>\n                                  <input #v_ufirst=\"ngModel\" name=\"company2\" [(ngModel)]='work_experience3.company' type=\"text\" class=\"form-control\" placeholder=\"Please enter a company name\">\n                                </div>\n                                <div class=\"form-group col-lg-5\">\n                                  <label for=\"title2\">Title</label>\n                                  <input #v_ufirst=\"ngModel\" name=\"title2\" [(ngModel)]='work_experience3.title' type=\"text\" class=\"form-control\" placeholder=\"Please enter your title\">\n                                </div>\n                          </div>\n                        <div class=\"col-lg-12\">\n                          <div class=\"hpanel\">\n                            <label>Description</label>\n                            <textarea style=\"resize:none;\" #v_pabs=\"ngModel\" required minlength=\"20\" rows=\"10\" required maxlength=\"2000\" id=\"longdes\" [(ngModel)]='user.about'\n                                      type=\"text\" class=\"form-control\" placeholder=\" Introduce yourself\"\n                                      name=\"about\"></textarea>\n                          </div>\n                        </div>\n\n\n\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n\n                <div class=\"text-right m-t-xs\">\n\n                  <a class=\"btn btn-info\" (click)=\"save_edit()\" >Submit</a>\n\n                </div>\n\n              </div>\n            </form>\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/home/users/user-edit/user-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_user_service__ = __webpack_require__("../../../../../src/app/home/users/user-service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_project_service_project_service__ = __webpack_require__("../../../../../src/app/home/projects/project-service/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_home_service__ = __webpack_require__("../../../../../src/app/home/shared/service/home.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserEditComponent = (function () {
    function UserEditComponent(_userService, _projectService, _homeService, _router) {
        this._userService = _userService;
        this._projectService = _projectService;
        this._homeService = _homeService;
        this._router = _router;
        this.user = {};
        this.work_experience = { company: "", title: "" };
        this.work_experience2 = { company: "", title: "" };
        this.work_experience3 = { company: "", title: "" };
    }
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ready = false;
        this.experience = [];
        this._homeService.get4id().subscribe(function (_data) {
            _this.currentuid = _data.user;
            _this.currentpid = _data.profile;
            _this._userService.getProfile(_this.currentpid)
                .subscribe(function (_user) {
                console.log('user check:', _user);
                _user.profile_id = _this.currentpid;
                _user.uid = _this.currentuid;
                _user.modified = new Date();
                _user.modified_str = _user.modified.toISOString().substring(0, 10);
                _user.first = _user.user.first_name;
                _user.last = _user.user.last_name;
                _user.email = _user.user.email;
                //_user.tag ? _user.tags = _user.tag.split(" ") : null;
                _user.about = _user.about;
                // _user.team.tags = _user.team.tag.split(" ");
                _this.user = _user;
                _this.interested_areas = _user.related_areas;
                if (_user.experiences.length != 0) {
                    if (_user.experiences.length == 1) {
                        _this.work_experience = _user.experiences[0];
                    }
                    else if (_user.experiences.length == 2) {
                        _this.work_experience = _user.experiences[0];
                        _this.work_experience2 = _user.experiences[1];
                    }
                    else if (_user.experiences.length == 3) {
                        _this.work_experience = _user.experiences[0];
                        _this.work_experience2 = _user.experiences[1];
                        _this.work_experience3 = _user.experiences[2];
                    }
                }
                _this.user.areas = [];
                //console.log("hey2:", this.interested_areas);
                _this._projectService.getArea()
                    .subscribe(function (_area) {
                    for (var x = 0; x < _area.length; x++) {
                        _this.user.areas.push({ 'tag_name': _area[x].tag_name, 'value': false });
                        for (var y = 0; y < _this.interested_areas.length; y++) {
                            //console.log("hey3:", this.user.areas[x]," ",this.interested_areas[y]);
                            if (_this.user.areas[x].tag_name === _this.interested_areas[y].tag_name) {
                                _this.user.areas[x].value = true;
                            }
                        }
                    }
                });
                //console.log("hey:", this.user.areas);
                console.log("user id ", _this.user);
                _this.ready = true;
            });
        }, function (err) {
            $({
                title: "Not Logined",
                text: "Please Login",
                type: "error"
            });
            _this._router.navigate(['/login']);
        });
        this.email_pattern = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
    };
    UserEditComponent.prototype.save_edit = function () {
        var _this = this;
        this.interested_areas = [];
        for (var _i = 0, _a = this.user.areas; _i < _a.length; _i++) {
            var area = _a[_i];
            if (area.value) {
                var item = {
                    tag_name: area.tag_name
                };
                this.interested_areas.push(item);
            }
        }
        if (this.work_experience.company != "")
            this.experience.push(this.work_experience);
        if (this.work_experience2.company != "")
            this.experience.push(this.work_experience2);
        if (this.work_experience3.company != "")
            this.experience.push(this.work_experience3);
        console.log("New Profile", this.user);
        this._userService.editRealProfile(this.currentpid, this.user.about, this.interested_areas, this.experience).subscribe(function (_data) {
            console.log("ok", _data);
            swal({
                title: "Your profile has been edited successfully!",
                type: "success"
            });
            _this._router.navigate(['/users/' + _data.user_profile_id]);
        }, function (_err) {
            swal({
                title: "Error!",
                text: _err,
                type: "error"
            });
        });
    };
    UserEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-edit',
            template: __webpack_require__("../../../../../src/app/home/users/user-edit/user-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/users/user-edit/user-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__projects_project_service_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_service_home_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/users/user-list/user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".glyphicon-refresh-animate {\n  -animation: spin .7s infinite linear;\n  -webkit-animation: spin2 .7s infinite linear;\n}\n\n@-webkit-keyframes spin2 {\n  from { -webkit-transform: rotate(0deg);}\n  to { -webkit-transform: rotate(360deg);}\n}\n\n@-webkit-keyframes spin {\n  from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\n  to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\n}\n\n@keyframes spin {\n  from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\n  to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\n}\n\n.btn-static {\n  background-color: white;\n  border: 1px solid white;\n  cursor: default;\n}\n.btn-static:active {\n  box-shadow:         inset 0 0 0px white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/users/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"small-header \">\n  <div class=\"hpanel\">\n    <div class=\"panel-body\">\n      <div id=\"hbreadcrumb\" class=\"pull-right\">\n        <ol class=\"hbreadcrumb breadcrumb\">\n          <li>\n            <a [routerLink]=\"['/dashboard']\">Dashboard</a>\n          </li>\n          <li class=\"active\">\n            <span>Users</span>\n          </li>\n        </ol>\n      </div>\n      <h2 class=\"font-light m-b-xs\">\n        Users\n      </h2>\n      <!-- <button class=\"btn btn-default btn-sm\">Show Available Only</button> -->\n    </div>\n  </div>\n</div>\n\n\n\n\n<div class=\"content\">\n  <div style=\"margin-bottom:2%\">\n    <div class=\"input-group\">\n      <input id=\"search_str\" [(ngModel)]=\"s_search\" class=\"form-control\" type=\"text\" placeholder=\"\">\n      <div class=\"input-group-btn\">\n        <button (click)=\"str_filter()\" class=\"btn btn-default\">\n          <i class=\"fa fa-search\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"content\" *ngIf=\"!data_to_render\">\n    <div class=\"row\">\n\n      <div class=\"col-md-12\">\n\n        <div class=\"hpanel\">\n          <div class=\"panel-body\">\n            <button  class=\"btn btn-static\"><span class=\"glyphicon glyphicon-refresh glyphicon-refresh-animate\"></span> Loading...Please wait.</button>\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-3\" *ngFor=\"let user of data_to_render\">\n      <div class=\"hpanel  contact-panel\">\n        <div class=\"panel-body\">\n          <small *ngIf=\"user.status < 100\" class=\"label label-success pull-right\">AVAILABLE</small>\n          <!-- <img alt=\"logo\" class=\"img-circle m-b\" src=\"assets/profile.jpg\"> -->\n          <h3 style=\"margin-top:2%\">\n            <a [routerLink]=\"['/users', user.uid]\"> {{user.first}} {{user.last}}</a>\n          </h3>\n          <div class=\"text-muted font-bold m-b-xs\">{{user.email}}</div>\n          <!-- <p>\n            <span style=\"margin-right:3%\" *ngFor=\"let tag of user.tags\"> #{{tag}} </span>\n          </p> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/users/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_user_service__ = __webpack_require__("../../../../../src/app/home/users/user-service/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserListComponent = (function () {
    function UserListComponent(_userService) {
        this._userService = _userService;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getProfiles()
            .subscribe(function (_users) {
            _this.users = [];
            for (var i = 0; i < _users.length; i++) {
                var item = {};
                item.first = _users[i].user.first_name;
                item.last = _users[i].user.last_name;
                item.email = _users[i].user.email;
                item.uid = _users[i].pk;
                // item.status = 25;
                item.s_str = item.first + " " + item.last + " " + item.email;
                item.s_str = item.s_str.toUpperCase();
                _this.users.push(item);
                // _users[i].created = new Date();
                // _users[i].modified = new Date();
                // _users[i].modified_str = _users[i].modified.toISOString().substring(0, 10);
                // _users[i].tag ? _users[i].tags = _users[i].tag.split(" ") : null;
                // //_users[i].team.tag ? _users[i].team.tags = _users[i].team.tag.split(" ") : null;
                // _users[i].s_str = _users[i].uid + " " + _users[i].utorid + " " + _users[i].name + " " + _users[i].email + " " + _users[i].tag;
                // _users[i].s_str = _users[i].s_str.toUpperCase();
            }
            // this.users = _users;
            _this.data = _this.users;
            _this.data_to_render = _this.data;
        });
    };
    UserListComponent.prototype.str_filter = function () {
        var _this = this;
        if (!$('#search_str').val().trim()) {
            console.log(typeof $('#search_str').val());
            this.data_to_render = this.data;
            return;
        }
        this.filtered = [];
        this.s_search = this.s_search.trim();
        var keys = this.s_search.split(" ");
        console.log("keys:", typeof keys, keys.length, keys);
        this.data.forEach(function (data) {
            for (var i = 0; i < keys.length; i++) {
                if (data.s_str.indexOf(keys[i].toUpperCase()) !== -1) {
                    console.log("Matched", data.s_str, keys[i]);
                    _this.filtered.push(data);
                }
            }
        });
        this.data_to_render = this.filtered;
    };
    UserListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-list',
            template: __webpack_require__("../../../../../src/app/home/users/user-list/user-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/users/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service_user_service__["a" /* UserService */]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/users/user-new/user-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/users/user-new/user-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"small-header\">\n    <div class=\"small-header\">\n      <div class=\"hpanel\">\n        <div class=\"panel-body\">\n          <div id=\"hbreadcrumb\" class=\"pull-right\">\n            <ol class=\"hbreadcrumb breadcrumb\">\n              <li>\n                <a [routerLink]=\"['/dashboard']\">Dashboard</a>\n              </li>\n              <li>\n                <a [routerLink]=\"['/users/user-profile',uid]\">My Profile</a>\n              </li>\n              <li class=\"active\">\n                <span>New Profile </span>\n              </li>\n            </ol>\n          </div>\n          <h2 class=\"font-light m-b-xs\">\n            New Profile\n          </h2>\n        </div>\n      </div>\n    </div>\n  \n  \n    <div class=\"content\" >\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"hpanel\">\n  \n            <div class=\"panel-body\">\n  \n              <form (ngSubmit)=\"save()\" #userForm=\"ngForm\">\n  \n                <div class=\"text-center m-b-md\" id=\"wizardControl\">\n  \n  \n                </div>\n  \n                <div  class=\"tab-content\">\n                  <div >\n                    <div class=\"row\">\n                      <div class=\"col-lg-12\">\n                        <div class=\"row\">\n                          <div class=\"form-group col-lg-6\" [ngClass]=\"{'has-error': (v_ufirst.touched || v_ufirst.dirty) && !v_ufirst.valid}\">\n                            <label>First Name *</label>\n                            <span class=\"text-danger\" *ngIf=\"(v_ufirst.touched || v_ufirst.dirty) && v_ufirst.errors?.required\">\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter a your first name</span>\n                            <span class=\"text-danger\" *ngIf=\"(v_ufirst.touched || v_ufirst.dirty) && v_ufirst.errors?.minlength\">\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter minimum 2 character</span>\n                            <input #v_ufirst=\"ngModel\" required minlength=\"2\" [(ngModel)]='user_form.first_name' type=\"text\" class=\"form-control\" placeholder=\"Please enter a your first name\"\n                                   disabled   name=\"first\">\n                          </div>\n                          <div class=\"form-group col-lg-6\" [ngClass]=\"{'has-error': (v_ulast.touched || v_ulast.dirty) && !v_ulast.valid}\">\n                            <label>Last Name *</label>\n                            <span class=\"text-danger\" *ngIf=\"(v_ulast.touched || v_ulast.dirty) && v_ulast.errors?.required\">\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter a your last name</span>\n                            <span class=\"text-danger\" *ngIf=\"(v_ulast.touched || v_ulast.dirty) && v_ulast.errors?.minlength\">\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter minimum 2 character</span>\n                            <input #v_ulast=\"ngModel\" required minlength=\"2\" [(ngModel)]='user_form.last_name' type=\"text\" class=\"form-control\" placeholder=\"Please enter a your last name\"\n                                   disabled  name=\"last\">\n                          </div>\n                          <div class=\"form-group col-lg-12\">\n                            <label class=\"control-label\">Interested Areas</label>\n                            <br>\n                            <div *ngFor=\"let area of areas\" class=\"col-lg-3\">\n                              <div class=\"checkbox checkbox-success checkbox-inline\">\n                                <input type=\"checkbox\" [(ngModel)]='area.value' [name]=\"area.tag_name\">\n                                <label> {{area.tag_name}} </label>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"form-group col-lg-12\">\n                            <label class=\"control-label\">Work Experience(optional)</label>\n                            <br>\n                            <div class=\"form-group col-lg-5\">\n                              <label for=\"company\">Company</label>\n                              <input #v_ufirst=\"ngModel\" name=\"company\" [(ngModel)]='work_experience.company' type=\"text\" class=\"form-control\" placeholder=\"Please enter a company name\">\n                            </div>\n                            <div class=\"form-group col-lg-5\">\n                              <label for=\"title\">Title</label>\n                              <input #v_ufirst=\"ngModel\" name=\"title\" [(ngModel)]='work_experience.title' type=\"text\" class=\"form-control\" placeholder=\"Please enter your title\">\n                            </div>\n                            <div class=\"form-group col-lg-5\">\n                                <label for=\"company1\">Company</label>\n                                <input #v_ufirst=\"ngModel\" name=\"company1\" [(ngModel)]='work_experience2.company' type=\"text\" class=\"form-control\" placeholder=\"Please enter a company name\">\n                              </div>\n                              <div class=\"form-group col-lg-5\">\n                                <label for=\"title1\">Title</label>\n                                <input #v_ufirst=\"ngModel\" name=\"title1\" [(ngModel)]='work_experience2.title' type=\"text\" class=\"form-control\" placeholder=\"Please enter your title\">\n                              </div>\n                              <div class=\"form-group col-lg-5\">\n                                  <label for=\"company2\">Company</label>\n                                  <input #v_ufirst=\"ngModel\" name=\"company2\" [(ngModel)]='work_experience3.company' type=\"text\" class=\"form-control\" placeholder=\"Please enter a company name\">\n                                </div>\n                                <div class=\"form-group col-lg-5\">\n                                  <label for=\"title2\">Title</label>\n                                  <input #v_ufirst=\"ngModel\" name=\"title2\" [(ngModel)]='work_experience3.title' type=\"text\" class=\"form-control\" placeholder=\"Please enter your title\">\n                                </div>\n                          </div>\n  \n                          <div class=\"col-lg-12\">\n                            <div class=\"hpanel\">\n                              <label>Description</label>\n                              <textarea style=\"resize:none;\" #v_pabs=\"ngModel\" required minlength=\"20\" rows=\"10\" required maxlength=\"2000\" id=\"longdes\" [(ngModel)]='profile_form.about'\n                                        type=\"text\" class=\"form-control\" placeholder=\" Introduce yourself\"\n                                        name=\"about\"></textarea>\n                            </div>\n                          </div>\n  \n  \n  \n                        </div>\n                      </div>\n                    </div>\n                  </div>\n  \n  \n                  <div class=\"text-right m-t-xs\">\n  \n                    <!-- <a class=\"btn btn-info\" [ngClass]=\"{'disabled':!userForm.valid}\" >Submit</a> -->\n                    <a class=\"btn btn-info\" (click)=\"save()\" >Submit</a>\n  \n                  </div>\n  \n                </div>\n              </form>\n  \n            </div>\n          </div>\n        </div>\n  \n      </div>\n    </div>\n  "

/***/ }),

/***/ "../../../../../src/app/home/users/user-new/user-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_user_service__ = __webpack_require__("../../../../../src/app/home/users/user-service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_project_service_project_service__ = __webpack_require__("../../../../../src/app/home/projects/project-service/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_home_service__ = __webpack_require__("../../../../../src/app/home/shared/service/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserNewComponent = (function () {
    function UserNewComponent(_userService, _projectService, _homeService, _router) {
        this._userService = _userService;
        this._projectService = _projectService;
        this._homeService = _homeService;
        this._router = _router;
        this.profile_form = {};
        this.user_form = {};
        this.areas = [];
        this.work_experience = { company: "", title: "" };
        this.work_experience2 = { company: "", title: "" };
        this.work_experience3 = { company: "", title: "" };
    }
    UserNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ready = false;
        this._homeService.get4id().subscribe(function (_ids) {
            _this._userService.getRealUser(_ids.user).subscribe(function (_user_data) {
                _this.user_form.pk = _user_data.id;
                _this.user_form.first_name = _user_data.first_name;
                _this.user_form.last_name = _user_data.last_name;
                _this._projectService.getArea()
                    .subscribe(function (_areas) {
                    var arr = [];
                    for (var x = 0; x < _areas.length; x++) {
                        // console.log(_projects[i].related_areas[3]);
                        arr.push({
                            'pk': _areas[x].pk,
                            'tag_name': _areas[x].tag_name,
                            'value': false
                        });
                    }
                    //this.data = [];
                    //this.data = this.areas;
                    //this.data_to_render = this.data;
                    // used data
                    _this.profile_form.user_id = _user_data.id;
                    _this.profile_form.about = "";
                    _this.profile_form.related_areas = [];
                    _this.profile_form.experience = [];
                    _this.areas = arr;
                    // unused data
                    _this.profile_form.utorid = "";
                    _this.profile_form.gender = "";
                    _this.profile_form.branch = "",
                        _this.profile_form.views = 0,
                        _this.profile_form.linkedin = "",
                        _this.profile_form.status = 0,
                        _this.ready = true;
                });
            });
        }, function (err) {
            $({
                title: "Not Logined",
                text: "Please Login",
                type: "error"
            });
            _this._router.navigate(['/login']);
        });
        this.email_pattern = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
    };
    UserNewComponent.prototype.save = function () {
        var _this = this;
        for (var _i = 0, _a = this.areas; _i < _a.length; _i++) {
            var area = _a[_i];
            if (area.value) {
                var item = {
                    tag_name: area.tag_name
                };
                this.profile_form.related_areas.push(item);
            }
        }
        if (this.work_experience.company != "") {
            this.profile_form.experience.push(this.work_experience);
        }
        if (this.work_experience2.company != "") {
            this.profile_form.experience.push(this.work_experience2);
        }
        if (this.work_experience3.company != "") {
            this.profile_form.experience.push(this.work_experience3);
        }
        console.log("New Profile", this.profile_form);
        this._userService.postRealProfile(this.profile_form.user_id, this.profile_form.about, this.profile_form.related_areas, this.profile_form.experience).subscribe(function (_data) {
            console.log("shuo de dui", _data);
            swal({
                title: "New profile created!",
                type: "success"
            });
            // location.reload();
            _this._router.navigate(['/users/' + _data.user_profile_id]);
        }, function (_err) {
            swal({
                title: "Not good.",
                text: _err,
                type: "error"
            });
        });
    };
    UserNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-new',
            template: __webpack_require__("../../../../../src/app/home/users/user-new/user-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/users/user-new/user-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__projects_project_service_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_service_home_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], UserNewComponent);
    return UserNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/users/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".glyphicon-refresh-animate {\n  -animation: spin .7s infinite linear;\n  -webkit-animation: spin2 .7s infinite linear;\n}\n\n@-webkit-keyframes spin2 {\n  from { -webkit-transform: rotate(0deg);}\n  to { -webkit-transform: rotate(360deg);}\n}\n\n@-webkit-keyframes spin {\n  from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\n  to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\n}\n\n@keyframes spin {\n  from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\n  to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\n}\n\n.btn-static {\n  background-color: white;\n  border: 1px solid white;\n  cursor: default;\n}\n.btn-static:active {\n  box-shadow:         inset 0 0 0px white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/users/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"small-header \">\n  <div class=\"hpanel\">\n    <div class=\"panel-body\">\n      <div id=\"hbreadcrumb\" class=\"pull-right\">\n        <ol class=\"hbreadcrumb breadcrumb\">\n          <li>\n            <a [routerLink]=\"['/dashboard']\">Dashboard</a>\n          </li>\n          <li class=\"active\">\n            <span>\n              Profile\n            </span>\n          </li>\n        </ol>\n      </div>\n      <h2 class=\"font-light m-b-xs\">\n        Profile\n      </h2>\n    </div>\n  </div>\n</div>\n\n<div class=\"content\" *ngIf=\"!user\">\n  <div class=\"row\">\n\n    <div class=\"col-md-12\">\n\n      <div class=\"hpanel\">\n        <div class=\"panel-body\">\n          <button class=\"btn btn-static\">\n            <span class=\"glyphicon glyphicon-refresh glyphicon-refresh-animate\"></span> Loading...Please wait.</button>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"content\">\n\n  <div class=\"row\" *ngIf=\"user\">\n    <div class=\"col-lg-12\">\n      <div class=\"hpanel hgreen\">\n        <div class=\"panel-body\">\n          <div class=\"pull-right text-right\">\n\n            <!-- <div class=\"project-info\">\n              <div class=\"project-value\">\n                <h2 class=\"text-success\">\n                  {{user.views}} Views\n                </h2>\n              </div>\n            </div> -->\n\n            <div class=\"btn-group\">\n              <button class=\"btn btn-xs btn-default\" [routerLink]=\"['/users', user.uid, 'edit']\"> Edit</button>\n              <i class=\"fa fa-linkedin btn btn-default btn-xs\"></i>\n            </div>\n\n          </div>\n          <!-- <img alt=\"logo\" class=\"img-circle m-b m-t-md\" src=\"assets/profile.jpg\"> -->\n\n          <h3>\n            <a href=\"\">{{user.first}} {{user.last}}</a>\n          </h3>\n          <div class=\"text-muted font-bold m-b-xs\">{{user.branch}}</div>\n          <div style=\"word-wrap: break-word;margin-bottom:1%\">\n            <small style=\"margin-right:3%\" *ngFor='let tag of user.tags'>{{tag}}</small>\n\n          </div>\n          <p>\n            <span class=\"text-muted font-bold m-b-xs\"> Areas</span>\n            <br>\n            <span style=\"margin-right:2%\" *ngFor='let area of user.areas'>{{area.tag_name}}</span>\n          </p>\n          <!-- <div class=\"progress m-t-xs full progress-small\"> -->\n          <div class=\"progress m-t-xs full progress-striped active\">\n            <div [ngStyle]=\"{'width': user_status + '%'}\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"user_status\" role=\"progressbar\"\n              class=\" progress-bar progress-bar-success\">\n            </div>\n          </div>\n        </div>\n\n        <!-- <div class=\"panel-footer contact-footer\">\n            <div class=\"row\">\n              <div class=\"col-md-6 border-right\">\n                <div class=\"contact-stat\">\n                  <span>{{user.status}}</span>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"contact-stat\">\n                  <span>\n                    <strong>{{user.views}}</strong> views\n                  </span>\n\n                </div>\n              </div>\n            </div>\n          </div> -->\n        <!-- <div class=\"panel-body\">\n            <p>\n              {{user.about}}\n            </p>\n          </div> -->\n\n\n      </div>\n    </div>\n\n    <div class=\"col-lg-12\">\n      <div class=\"hpanel\">\n        <div class=\"hpanel\">\n\n          <ul class=\"nav nav-tabs\">\n            <li class=\"active\">\n              <a data-toggle=\"tab\" href=\"#tab-1\">About Me</a>\n            </li>\n            <li class=\"\">\n              <a data-toggle=\"tab\" href=\"#tab-2\">Interested Teams</a>\n            </li>\n            <li class=\"\">\n              <a data-toggle=\"tab\" href=\"#tab-3\">Interested Projects</a>\n            </li>\n            <li *ngIf=\"recommandu && is_user\" class=\"\">\n              <a data-toggle=\"tab\" href=\"#tab-4\">Similar Users</a>\n            </li>\n          </ul>\n          <div class=\"tab-content\">\n            <div id=\"tab-1\" class=\"tab-pane active\">\n              <div class=\"panel-body\">\n\n                <div class=\"col-lg-12\">\n                  <div class=\"row projects\">\n                    <div class=\"hpanel hgreen\">\n                      <div class=\"panel-body\">\n                        <div class=\"row\">\n                          <div *ngIf=\"user.about\" class=\"col-sm-12\">\n                            <p>\n                              {{user.about}}\n                            </p>\n                          </div>\n                          <div *ngIf=\"!user.about\" class=\"col-sm-12\">\n\n\n\n                            <button class=\"btn btn-xs btn-default\" [routerLink]=\"['/users', user.uid, 'edit']\"> Edit</button>\n\n\n                          </div>\n\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-lg-12\">\n                  <div class=\"row projects\">\n                    <div *ngIf=\"user.team != null\" class=\"hpanel hyellow\">\n                      <div class=\"panel-body\">\n                        <div class=\"row\">\n                          <div class=\"col-sm-8\">\n                            <span>Your Team:</span>\n                            <h4>\n                              <a [routerLink]=\"['/teams', user.team]\"> {{user.team.name}}</a>\n                            </h4>\n                            <!--<div style=\"word-wrap: break-word;margin-bottom:5%\">\n                              <small style=\"margin-right:3%\" *ngFor=\"let tag of user.team.tags\"> {{tag}} </small>\n                            </div>-->\n                            <div class=\"row\">\n                              <div class=\"col-sm-3\">\n                                <div class=\"project-label\">Initiator</div>\n                                <small>{{user.team.owner.user.first_name}} {{user.team.owner.user.last_name}}</small>\n                              </div>\n                              <!-- <div class=\"col-sm-3\">\n                                <div class=\"project-label\">Modifed</div>\n                                <small>{{user.team.modifed}}</small>\n                              </div>\n                              <div class=\"col-sm-3\">\n                                <div class=\"project-label\">Created</div>\n                                <small>{{user.team.created}}</small>\n                              </div> -->\n                              <div class=\"col-sm-3\">\n                                <div class=\"project-label\">Progress</div>\n                                <div class=\"progress m-t-xs full progress-small\">\n                                  <div style=\"width: 100%\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"100\" role=\"progressbar\" class=\" progress-bar progress-bar-warning\">\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"col-sm-4 project-info\">\n                            <!-- <div class=\"project-value\">\n                              <h2 class=\"text-warning\">\n                                {{user.team.views}} Views\n                              </h2>\n                            </div> -->\n                            <!-- <div class=\"project-people\">\n                                <img alt=\"logo\" class=\"img-circle\" src=\"assets/a7.jpg\">\n                                <img alt=\"logo\" class=\"img-circle\" src=\"assets/a8.jpg\">\n                                <img alt=\"logo\" class=\"img-circle\" src=\"assets/a3.jpg\">\n                                <img alt=\"logo\" class=\"img-circle\" src=\"assets/a2.jpg\">\n                              </div> -->\n                          </div>\n                        </div>\n                      </div>\n\n                    </div>\n\n\n                  </div>\n                </div>\n\n\n                <div *ngIf=\"user.project\" class=\"col-lg-12\">\n                  <div class=\"row projects\">\n                    <div class=\"hpanel hblue\">\n                      <div class=\"panel-body\">\n                        <div class=\"row\">\n                          <div class=\"col-sm-8\">\n                            <span>Your Project:</span>\n                            <h4>\n                              <a [routerLink]=\"['/projects', user.project.project_id]\"> {{user.project.project_title}}</a>\n                            </h4>\n\n                            <p>\n                              {{user.project.abs}}\n                            </p>\n\n                            <div class=\"row\">\n                              <div class=\"col-sm-3\">\n                                <div class=\"project-label\">Initiator</div>\n                                <small>{{user.project.created_by.first_name}} {{user.project.created_by.first_name}}</small>\n                              </div>\n                              <!-- <div class=\"col-sm-3\">\n                                <div class=\"project-label\">Modified</div>\n                                <small>{{user.project.modified}}</small>\n                              </div>\n                              <div class=\"col-sm-3\">\n                                <div class=\"project-label\">Created</div>\n                                <small>{{user.project.created}}</small>\n                              </div> -->\n                              <div class=\"col-sm-3\">\n                                <div class=\"project-label\">Status</div>\n                                <small *ngIf=\"user.project.project_status=='Open'\" class=\"label label-success \">OPEN</small>\n                                <small *ngIf=\"user.project.project_status == 'Closed'\" class=\"label label-warning \">Closed</small>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"col-sm-4 project-info\">\n                            <!-- <div class=\"project-value\">\n                              <h2 class=\"text-info\">\n                                {{user.project.views}} Views\n                              </h2>\n                            </div> -->\n                            <!-- <div class=\"project-people\">\n                                          <img alt=\"logo\" class=\"img-circle\" src=\"assets/a1.jpg\">\n                                          <img alt=\"logo\" class=\"img-circle\" src=\"assets/a2.jpg\">\n                                          <img alt=\"logo\" class=\"img-circle\" src=\"assets/a3.jpg\">\n                                          <img alt=\"logo\" class=\"img-circle\" src=\"assets/a4.jpg\">\n                                        </div> -->\n                          </div>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n\n\n\n                <!-- <div *ngIf=\"!user.project\" class=\"col-lg-12\">\n                  <div class=\"row projects\">\n                    <div class=\"hpanel hblue\">\n                      <div class=\"panel-body\">\n                        <div class=\"row\">\n                          <span>Your Project:</span>\n                          <button [routerLink]=\"['/projects']\" class=\"btn btn-xs btn-default\">View </button>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n                </div> -->\n\n\n\n\n                <div class=\"col-lg-12\">\n                  <div class=\"row projects\">\n                    <div class=\"hpanel hviolet\">\n                      <div class=\"panel-body \">\n                        <div class=\"row\">\n                          <div class=\"col-sm-12\">\n                            <h4>\n                              <a href=\"#\"> Experiences</a>\n                            </h4>\n\n                            <div class=\"table-responsive\">\n                              <table class=\"table table-bordered table-hover\">\n                                <thead>\n                                  <tr>\n                                    <th>Company</th>\n                                    <th>Title</th>\n                                  </tr>\n                                </thead>\n                                <tbody>\n                                  <tr *ngFor=\"let exp of user.experiences\">\n                                    <td>{{exp.company}}</td>\n                                    <td>{{exp.title}}</td>\n                                  </tr>\n                                </tbody>\n                              </table>\n                            </div>\n                          </div>\n\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n            <div id=\"tab-2\" class=\"tab-pane\">\n              <div class=\"panel-body\">\n                <div class=\"col-lg-12\" *ngIf=\"user.team\">\n                  <div class=\"row projects\">\n                    <div class=\"hpanel hyellow\">\n                      <div class=\"panel-body\">\n                        <div class=\"row\">\n                          <div class=\"col-sm-8\">\n                            <h4>\n                              <a href=\"#\"> {{user.team.name}}</a>\n                            </h4>\n                            <!--<div style=\"word-wrap: break-word;margin-bottom:5%\">\n                              <small style=\"margin-right:1%\" *ngFor=\"let tag of user.team.tags\"> {{tag}} </small>\n                            </div>-->\n                            <div class=\"row\">\n                              <div class=\"col-sm-3\">\n                                <div class=\"project-label\">Initiator</div>\n                                <small>{{user.team.owner}}</small>\n                              </div>\n                              <!-- <div class=\"col-sm-3\">\n                                <div class=\"project-label\">Modifed</div>\n                                <small>{{user.team.modifed}}</small>\n                              </div>\n                              <div class=\"col-sm-3\">\n                                <div class=\"project-label\">Created</div>\n                                <small>{{user.team.created}}</small>\n                              </div> -->\n                              <div class=\"col-sm-3\">\n                                <div class=\"project-label\">Progress</div>\n                                <div class=\"progress m-t-xs full progress-small\">\n                                  <div style=\"width: 100%\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"100\" role=\"progressbar\" class=\" progress-bar progress-bar-warning\">\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"col-sm-4 project-info\">\n                            <!-- <div class=\"project-value\">\n                              <h2 class=\"text-warning\">\n                                {{user.team.views}} Views\n                              </h2>\n                            </div> -->\n                            <!-- <div class=\"project-people\">\n                                <img alt=\"logo\" class=\"img-circle\" src=\"assets/a7.jpg\">\n                                <img alt=\"logo\" class=\"img-circle\" src=\"assets/a8.jpg\">\n                                <img alt=\"logo\" class=\"img-circle\" src=\"assets/a3.jpg\">\n                                <img alt=\"logo\" class=\"img-circle\" src=\"assets/a2.jpg\">\n                              </div> -->\n                          </div>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div id=\"tab-3\" class=\"tab-pane\">\n              <div class=\"panel-body\">\n                <div class=\"col-lg-12\">\n                  <div class=\"row projects\">\n                    <div class=\"hpanel hblue\" *ngFor='let proj of likedp'>\n                      <div class=\"panel-body\">\n                        <div class=\"row\">\n                          <div class=\"col-sm-8\">\n                            <h4>\n                              <a [routerLink]=\"['/projects', proj.pid]\"> {{proj.name}}</a>\n                            </h4>\n\n                            <p>\n                              {{proj.abs}}\n                            </p>\n\n                            <div class=\"row\">\n                              <div class=\"col-sm-3\">\n                                <div class=\"project-label\">Initiator</div>\n                                <small>{{proj.owner_first_name}} {{proj.owner_last_name}}</small>\n                              </div>\n\n                              <!-- <div class=\"col-sm-3\">\n                                <div class=\"project-label\">Modified</div>\n                                <small>{{user.project.modified}}</small>\n                              </div>\n                              <div class=\"col-sm-3\">\n                                <div class=\"project-label\">Created</div>\n                                <small>{{user.project.created}}</small>\n                              </div> -->\n\n                              <div class=\"col-sm-3\">\n                                <div class=\"project-label\">Status</div>\n                                <small *ngIf=\"proj.status=='Open'\" class=\"label label-success \">OPEN</small>\n                                <small *ngIf=\"proj.status == 'Closed'\" class=\"label label-warning \">Closed</small>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"col-sm-4 project-info\">\n                            <!-- <div class=\"project-value\">\n                              <h2 class=\"text-info\">\n                                {{user.project.views}} Views\n                              </h2>\n                            </div> -->\n                            <!-- <div class=\"project-people\">\n                                            <img alt=\"logo\" class=\"img-circle\" src=\"assets/a1.jpg\">\n                                            <img alt=\"logo\" class=\"img-circle\" src=\"assets/a2.jpg\">\n                                            <img alt=\"logo\" class=\"img-circle\" src=\"assets/a3.jpg\">\n                                            <img alt=\"logo\" class=\"img-circle\" src=\"assets/a4.jpg\">\n                                          </div> -->\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n\n\n            <div id=\"tab-4\" class=\"tab-pane\">\n              <div class=\"hpanel\">\n                <div class=\"panel-body\">\n                  <!--projects-->\n                  <div class=\"hpanel hgreen\" *ngFor='let u of recommandu'>\n                    <div class=\"panel-body\">\n                      <div class=\"pull-right\">\n                        <!-- button class=\"btn btn-success btn-xs\">{{proj.status}}</button-->\n                        <button (click)=\"reload()\" [routerLink]=\"['/users', u.uid]\" class=\"btn btn-xs btn-default\"> View</button>\n\n                      </div>\n                      <h3 class=\"m-t-none\">\n                        <a (click)=\"reload()\" [routerLink]=\"['/users', u.uid]\">{{u.name}}</a>\n                      </h3>\n                      <div>\n                        <span>contact: {{u.email}}</span>\n                      </div>\n                      <div class=\"m-t-md\">\n                        <canvas id=\"lineOptions\" height=\"10\"></canvas>\n                      </div>\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n\n          </div>\n\n\n        </div>\n      </div>\n\n\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/users/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service_auth_service__ = __webpack_require__("../../../../../src/app/auth/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_home_service__ = __webpack_require__("../../../../../src/app/home/shared/service/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_user_service_user_service__ = __webpack_require__("../../../../../src/app/home/users/user-service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__teams_team_service_team_service__ = __webpack_require__("../../../../../src/app/home/teams/team-service/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__projects_project_service_project_service__ = __webpack_require__("../../../../../src/app/home/projects/project-service/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UserProfileComponent = (function () {
    function UserProfileComponent(_userService, _teamService, _projectService, _authService, _homeService, _route) {
        this._userService = _userService;
        this._teamService = _teamService;
        this._projectService = _projectService;
        this._authService = _authService;
        this._homeService = _homeService;
        this._route = _route;
    }
    UserProfileComponent.prototype.reload = function () {
        this.ngOnInit();
        location.reload();
    };
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var uid = +this._route.snapshot.paramMap.get('uid');
        console.log('yy', uid);
        /*for recommend user*/
        this._homeService.get4id().subscribe(function (_data) {
            _this.recommandu = new Array();
            if (_data.profile !== -1) {
                _this.hasreco = true;
                _this._userService.getRecommendeUser(_data.user) //////
                    .subscribe(function (_recuser) {
                    if (_data.profile === uid) {
                        _this.is_user = true;
                    }
                    else {
                        _this.is_user = false;
                    }
                    // this.project.recommend_roject = new Array();
                    for (var x = 0; x < _recuser.length; x++) {
                        // console.log(_projects[i].related_areas[3]);
                        _this.recommandu.push({
                            'uid': _recuser[x].user.pk,
                            'name': _recuser[x].user.first_name + " " + _recuser[x].user.last_name,
                            'email': _recuser[x].user.email
                            //'status': _recuser[x].project_status,
                            //'abs': _recuser[x].project_short_description
                        });
                    }
                });
            }
            else {
                _this.hasreco = false;
            }
        });
        // console.log('use', this.recommandu);
        this.user_status = 0;
        this.likedp = new Array();
        this._projectService.getUserLikedProject(uid) //////////////real user
            .subscribe(function (_liked) {
            for (var x = 0; x < _liked.length; x++) {
                _liked[x].created = _liked[x].created_date;
                _liked[x].pid = _liked[x].project_id;
                _liked[x].name = _liked[x].project_title;
                _liked[x].liked_number = _liked[x].liked_by_people_number;
                _liked[x].abs = _liked[x].project_short_description;
                _liked[x].status = _liked[x].project_status;
                _liked[x].owner_first_name = _liked[x].created_by.first_name;
                _liked[x].owner_last_name = _liked[x].created_by.last_name;
                //_liked[x].whatever = _liked[x].created_by.pk;
                _liked[x].owner_role = _liked[x].created_by.role;
                _this.likedp.push(_liked[x]);
            }
        });
        this._userService.getProfile(uid)
            .subscribe(function (_data) {
            var _user = {};
            _user.first = _data.user.first_name;
            _user.last = _data.user.last_name;
            _user.email = _data.user.email;
            _user.about = _data.about;
            _user.areas = _data.related_areas;
            _user.experiences = _data.experiences;
            //_user.status = 55;
            _user.views = 321;
            if (_user.about) {
                console.log('add 1');
                _this.user_status += 25;
            }
            _user.created = new Date();
            _user.modified = new Date();
            _user.modified_str = _user.modified.toISOString().substring(0, 10);
            _user.tag ? _user.tags = _user.tag.split(" ") : null;
            if (_data.team !== null) {
                // _user.team ? null : _user.team = {};
                // _user.team.tag ? null : _user.team.tag = "WOCAO";
                // _user.team.tags ? _user.team.tags = _user.team.tag.split(" ") : _user.team.tags = [];
                _user.tid = _data.team.pk;
                _this.user_status += 25;
                console.log('add 2');
                _this._teamService.getTeamforUser(_user.tid)
                    .subscribe(function (_team) {
                    _user.team = _team;
                    //_user.team.tags = _user.team.tag.split(" ");
                    _this._teamService.getTeamforUser(_user.tid)
                        .subscribe(function (_team) {
                        //for testing  project
                        //get actual pid later
                        _this._homeService.get4id() //test with team,combine to one later
                            .subscribe(function (_info) {
                            if (_info.project) {
                                _this._projectService.getProject(_info.project)
                                    .subscribe(function (_project) {
                                    _user.project = _project;
                                    _this.user_status += 25;
                                    console.log('add 3');
                                    console.log('proj staus', _project.project_status);
                                    if (_project.project_status === 'Closed') {
                                        console.log('add 4');
                                        _this.user_status += 25;
                                    }
                                    _this.user = _user;
                                    // })
                                });
                            }
                            else {
                                _user.project = null;
                            }
                        });
                        _this.user = _user;
                    });
                });
            }
            else {
                _user.team = null;
                _this.user = _user;
            }
            _this.user.uid = uid;
            console.log('user staus', _this.user_status);
        });
    };
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-profile',
            template: __webpack_require__("../../../../../src/app/home/users/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/users/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__users_user_service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__teams_team_service_team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_6__projects_project_service_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_service_home_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/users/user-service/user-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserGuardService = (function () {
    function UserGuardService(_router) {
        this._router = _router;
    }
    UserGuardService.prototype.canActivate = function (route) {
        var uid = +route.url[1].path;
        if (isNaN(uid) || uid < 1) {
            swal({
                title: "Please complete your profile",
                type: "info"
            });
            // alert("Invalid User ID");
            this._router.navigate(['/users/create']);
            return false;
        }
        ;
        return true;
    };
    UserGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], UserGuardService);
    return UserGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/home/users/user-service/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__endpoint__ = __webpack_require__("../../../../../src/app/endpoint.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        //private url = './assets/testdata/users/';
        // private url = 'http://192.168.0.14:8000';
        this.url = __WEBPACK_IMPORTED_MODULE_6__endpoint__["a" /* endpoint */];
        this.rest = '/team_finder/';
    }
    UserService.prototype.handleError = function (err) {
        console.log(err.message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.message);
    };
    UserService.prototype.httpOptions = function () {
        return {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
            }),
            // params: _params,
            withCredentials: true
        };
    };
    UserService.prototype.getRealUser = function (uid) {
        //return this._http.get('./assets/testdata/users/user.json')
        return this._http.get(this.url + this.rest + 'users/' + uid + '/', this.httpOptions())
            .do(function (data) { return console.log("GETUSER", data); })
            .catch(this.handleError);
    };
    UserService.prototype.getUser = function (uid) {
        return this._http.get('./assets/testdata/users/user.json')
            .do(function (data) { return console.log("GETUSER", data); })
            .catch(this.handleError);
    };
    UserService.prototype.getUsers = function () {
        return this._http.get('./assets/testdata/users/users.json')
            .do(function (data) { return console.log("ALL USER", data); })
            .catch(this.handleError);
    };
    UserService.prototype.getRealUsers = function () {
        //return this._http.get('./assets/testdata/users/users.json')
        return this._http.get(this.url + this.rest + 'users/', this.httpOptions())
            .do(function (data) { return console.log("ALL USER", data); })
            .catch(this.handleError);
    };
    UserService.prototype.postUser = function (_user) {
        return this._http.post(this.url, _user, this.httpOptions())
            .do(function (data) { return console.log("PostUser: ", data); })
            .catch(this.handleError);
    };
    UserService.prototype.getRecommendeUser = function (uid) {
        //var data = {"user_id": uid};
        var url = 'http://api.ece496.com/team_finder/team_algo?user_id=' + uid;
        //console.log('url-----------------', url);
        //console.log('url-----------------', this.url3+pid);
        return this._http.get(url, this.httpOptions())
            .do(function (data) { return console.log("reco user ", JSON.stringify(data)); })
            .catch(this.handleError);
    };
    UserService.prototype.getProfile = function (uid) {
        return this._http.get(this.url + this.rest + 'profiles/' + uid + '/', this.httpOptions())
            .do(function (data) { return console.log("GETPROFILE", data); })
            .catch(this.handleError);
    };
    UserService.prototype.getProfiles = function () {
        // return this._http.get('./assets/testdata/users/users.json')
        return this._http.get(this.url + this.rest + 'profiles/', this.httpOptions())
            .do(function (data) { return console.log("ALL USER", data); })
            .catch(this.handleError);
    };
    UserService.prototype.postRealProfile = function (user_id, about, related_areas, experience) {
        var data = { "user_id": user_id, "about": about, "related_areas": related_areas, "experience": experience };
        return this._http.post(this.url + this.rest + 'createprofile/', data, this.httpOptions())
            .do(function (data) { return console.log("Post Profile", data + ""); })
            .catch(this.handleError);
    };
    UserService.prototype.editRealProfile = function (user_profile_id, about, related_areas, experience) {
        var data = { "user_profile_id": user_profile_id, "about": about, "related_areas": related_areas, "experience": experience };
        //console.log("check edit",JSON.stringify(data));
        return this._http.post(this.url + this.rest + 'editprofile/', data, this.httpOptions())
            .do(function (data) { return console.log("Edit Profile", data + ""); })
            .catch(this.handleError);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/home/users/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/home/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service_user_service__ = __webpack_require__("../../../../../src/app/home/users/user-service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service_user_guard_service__ = __webpack_require__("../../../../../src/app/home/users/user-service/user-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_list_user_list_component__ = __webpack_require__("../../../../../src/app/home/users/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/home/users/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_edit_user_edit_component__ = __webpack_require__("../../../../../src/app/home/users/user-edit/user-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_new_user_new_component__ = __webpack_require__("../../../../../src/app/home/users/user-new/user-new.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UserModule = (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__user_list_user_list_component__["a" /* UserListComponent */],
                __WEBPACK_IMPORTED_MODULE_5__user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_6__user_edit_user_edit_component__["a" /* UserEditComponent */],
                __WEBPACK_IMPORTED_MODULE_7__user_new_user_new_component__["a" /* UserNewComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__user_service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__user_service_user_guard_service__["a" /* UserGuardService */]]
        })
    ], UserModule);
    return UserModule;
}());

// export const USER_ROUTES = [
//   { path: 'users', component: UserListComponent },
//   { path: 'users/:uid', canActivate: [UserGuardService], component: UserProfileComponent },
//   { path: 'users/:uid/edit', component: UserEditComponent },
// ];


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map