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

module.exports = "<!-- <div class=\"color-line\"></div> -->\r\n<router-outlet></router-outlet>"

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

module.exports = "<div class=\"color-line\"></div>\r\n\r\n<div class=\"login-container\" *ngIf=\"cred\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"text-center m-b-md\">\r\n                <h3>PLEASE LOGIN TO ECE496</h3>\r\n            </div>\r\n            <div class=\"hpanel\">\r\n                <div class=\"panel-body\">\r\n                    <form (ngSubmit)=\"submit()\" #loginForm=\"ngForm\">\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label\" for=\"username\">Username</label>\r\n                            <input [(ngModel)]='cred.username' type=\"text\" placeholder=\"example@gmail.com\" title=\"Please enter you username\" required=\"\"\r\n                                value=\"\" name=\"username\" class=\"form-control\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label\" for=\"password\">Password</label>\r\n                            <input [(ngModel)]='cred.password' type=\"password\" title=\"Please enter your password\" placeholder=\"******\" required=\"\" value=\"\"\r\n                                name=\"password\" class=\"form-control\">\r\n                        </div>\r\n                        <!-- <div class=\"form-group\">\r\n                            <input type=\"checkbox\" class=\"i-checks\" checked> Remember login\r\n                            <p class=\"help-block small\">(if this is a private computer)</p>\r\n                        </div> -->\r\n                        <button class=\"btn btn-success btn-block\">Login</button>\r\n                        <a class=\"btn btn-default btn-block\" [routerLink]=\"['/register']\">Register</a>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("../../../../../src/app/auth/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    function LoginComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.cred = {
            username: "",
            password: ""
        };
        this.error = false;
        // if (this._auth.authed()) {
        //   this._router.navigate(['/dashboard'])
        // }
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

module.exports = "<div class=\"color-line\"></div>\r\n<!-- <div class=\"back-link\">\r\n    <a routerLink=\"['/dashboard']\" class=\"btn btn-primary\">Back to Dashboard</a>\r\n</div> -->\r\n\r\n<div class=\"error-container\">\r\n  <i class=\"pe-7s-way text-success big-icon\"></i>\r\n  <h1>404</h1>\r\n  <strong>Page Not Found</strong>\r\n  <p>\r\n    Sorry, but the page you are looking for has note been found. Try checking the URL for error, then hit the refresh button\r\n    on your browser or try found something else in our app.\r\n  </p>\r\n</div>"

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

module.exports = "<div class=\"color-line\"></div>\r\n\r\n<div class=\"register-container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"text-center m-b-md\">\r\n                <h3>Registration</h3>\r\n            </div>\r\n            <div class=\"hpanel\">\r\n                <div class=\"panel-body\">\r\n                    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n                        <div class=\"row\">\r\n                            <div class=\"form-group col-lg-12\">\r\n                                <label>First name</label>\r\n                                <div class=\"alert alert-danger\" *ngIf=\"(form.get('first').touched || form.get('first').dirty) && form.get('first').errors\">\r\n                                    <div *ngIf=\"form.get('first').errors.required\">Please enter your first name</div>\r\n                                </div>\r\n                                <input type=\"text\" class=\"form-control\" id=\"first\" formControlName=\"first\" [formGroup]=\"form\" />\r\n                            </div>\r\n                            <div class=\"form-group col-lg-12\">\r\n                                <label>Last name</label>\r\n                                <div class=\"alert alert-danger\" *ngIf=\"(form.get('last').touched || form.get('last').dirty) && form.get('last').errors\">\r\n                                    <div *ngIf=\"form.get('last').errors.required\">Please enter your last name</div>\r\n                                </div>\r\n                                <input type=\"text\" class=\"form-control\" id=\"last\" formControlName=\"last\" [formGroup]=\"form\" />\r\n                            </div>\r\n                            <div class=\"form-group col-lg-12\">\r\n                                <label>Email Address</label>\r\n                                <div class=\"alert alert-danger\" *ngIf=\"(form.get('email').touched || form.get('email').dirty) && form.get('email').errors\">\r\n                                    <div *ngIf=\"form.get('email').errors.required\">Please enter your email address</div>\r\n                                    <div *ngIf=\"form.get('email').errors.pattern\">Please enter a valid email address</div>\r\n                                </div>\r\n                                <input type=\"email\" class=\"form-control\" id=\"email\" formControlName=\"email\" [formGroup]=\"form\" />\r\n                            </div>\r\n                            <div class=\"form-group col-lg-12\">\r\n                                <label>Password</label>\r\n                                <div class=\"alert alert-danger\" *ngIf=\"(form.get('password').touched || form.get('password').dirty) && form.get('password').errors\">\r\n                                    <div *ngIf=\"form.get('password').errors.required\">Please enter your password</div>\r\n                                    <div *ngIf=\"form.get('password').errors.minlength\">Please enter a password with at least 8 characters</div>\r\n                                </div>\r\n                                <input type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"password\" [formGroup]=\"form\" />\r\n                            </div>\r\n                            <div class=\"form-group col-lg-12\">\r\n                                <label>Confirm Password</label>\r\n                                <div class=\"alert alert-danger\" *ngIf=\"(form.controls.confirmPassword.touched || form.controls.confirmPassword.dirty) && form.get('confirmPassword').errors \">\r\n                                    <div *ngIf=\"form.controls.confirmPassword.errors?.required\">Please re-enter your password</div>\r\n                                    <div *ngIf=\"form.controls.confirmPassword.errors?.checkPwd\">Password not match</div>\r\n                                </div>\r\n                                <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" formControlName=\"confirmPassword\" [formGroup]=\"form\" />\r\n                            </div>\r\n                            <div class=\"form-group col-lg-12\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"form.controls.role.touched && form.get('role').errors\">Please select your role</div>\r\n                                <label>I am a </label>\r\n                                <br>\r\n                                <label class=\"radio-inline\">\r\n                                    <input type=\"radio\" id=\"roleid2\" value=\"2\" formControlName=\"role\"> Student </label>\r\n                                <label class=\"radio-inline\">\r\n                                    <input type=\"radio\" id=\"roleid1\" value=\"1\" formControlName=\"role\"> Supervisor </label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"text-center\">\r\n                            <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!form.valid\">Register</button>\r\n                            <button class=\"btn btn-default\" [routerLink]=\"['/login']\">Cancel</button>\r\n                        </div>\r\n\r\n\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

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
        this.url = "http://api.ece496.com/auth/";
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
        return this._http.get("http://api.ece496.com/team_finder/getlogin", this.httpOptions());
    };
    AuthService.prototype.login = function (credentials) {
        return this._http.post(this.url + "login/", credentials, this.httpOptions());
    };
    AuthService.prototype.logout = function () {
        return this._http.get(this.url + "logout/", this.httpOptions());
    };
    AuthService.prototype.register = function (regform) {
        return this._http.post(this.url + "register/", regform, this.httpOptions());
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



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

module.exports = "<!-- <li>\r\n  <a [routerLink]=\"['/teams/create']\">New Team</a>\r\n</li>\r\n<li>\r\n  <a [routerLink]=\"['/projects/create']\">New Project</a>\r\n</li> -->\r\n<div class=\"small-header\">\r\n  <div class=\"hpanel\">\r\n    <div class=\"panel-body\">\r\n      <div id=\"hbreadcrumb\" class=\"pull-right\">\r\n        <ol class=\"hbreadcrumb breadcrumb\">\r\n          <li>\r\n            <a [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n          </li>\r\n          <li>\r\n            <a [routerLink]=\"['/create']\">Create</a>\r\n          </li>\r\n\r\n        </ol>\r\n      </div>\r\n      <h2 class=\"font-light m-b-xs\">\r\n        Create\r\n      </h2>\r\n      <small>Create your own project and team!</small>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"content\">\r\n  <div style=\"margin-bottom:2%\">\r\n\r\n  </div>\r\n  <div class=\"row text-center\">\r\n    <div class=\"col-lg-6\" style=\"height:385px\">\r\n      <div class=\"hpanel hblue\">\r\n        <div class=\"panel-body\">\r\n          <h4>\r\n            <strong>Create</strong>\r\n          </h4>\r\n          <h4>\r\n            <strong>Your</strong>\r\n          </h4>\r\n          <br/>\r\n\r\n          <!--<span class=\"label label-info pull-right\">NEW</span>-->\r\n          <button [routerLink]=\"['/projects/create']\" type=\"button\" class=\"btn btn-info btn-sm\">PROJECT</button>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-6\" style=\"height:385px\">\r\n      <div class=\"hpanel hyellow\">\r\n        <div class=\"panel-body\">\r\n          <h4>\r\n            <strong>Create</strong>\r\n          </h4>\r\n          <h4>\r\n            <strong>Your</strong>\r\n          </h4>\r\n          <br/>\r\n          <!--<span class=\"label label-info pull-right\">NEW</span>-->\r\n          <button [routerLink]=\"['/teams/create']\" type=\"button\" class=\"btn btn-warning btn-sm\">TEAM</button>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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

module.exports = "<div class=\"content\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12 text-center welcome-message\">\r\n            <h2>\r\n                Welcome to ECE496\r\n            </h2>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"hpanel\">\r\n                <div class=\"panel-heading\">\r\n                    <div class=\"panel-tools\">\r\n                        <a class=\"showhide\">\r\n                            <i class=\"fa fa-chevron-up\"></i>\r\n                        </a>\r\n                        <a class=\"closebox\">\r\n                            <i class=\"fa fa-times\"></i>\r\n                        </a>\r\n                    </div>\r\n                    Discover Projects, Users and Teams\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4 text-center\">\r\n                            <div class=\"hpanel hbgblue\">\r\n                                <div class=\"panel-body\">\r\n                                    <div class=\"text-center\">\r\n                                        <h3 [routerLink]=\"['../projects']\">Available Projects</h3>\r\n                                        <p class=\"text-big font-light\">\r\n                                            {{project_total}}\r\n                                        </p>\r\n\r\n                                        <p class=\"btn-group\">\r\n                                            <button [routerLink]=\"['../projects']\" class=\"btn btn-xs btn-default\">View </button>\r\n                                        </p>\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"hpanel hbggreen\">\r\n                                <div class=\"panel-body\">\r\n                                    <div class=\"text-center\">\r\n                                        <h3>Available Users</h3>\r\n                                        <p class=\"text-big font-light\">\r\n                                            {{user_total}}\r\n                                        </p>\r\n                                        <p class=\"btn-group\">\r\n                                            <button [routerLink]=\"['../users']\" class=\"btn btn-xs btn-default\">View </button>\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"hpanel hbgyellow\">\r\n                                <div class=\"panel-body\">\r\n                                    <div class=\"text-center\">\r\n                                        <h3>Available Teams</h3>\r\n                                        <p class=\"text-big font-light\">\r\n                                            {{team_total}}\r\n                                        </p>\r\n                                        <p class=\"btn-group\">\r\n                                            <button [routerLink]=\"['../teams']\" class=\"btn btn-xs btn-default\">View </button>\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel-footer\">\r\n                    <!-- <span class=\"pull-right\">\r\n                          You have two new messages from <a href=\"\">Monica Bolt</a>\r\n                    </span> -->\r\n                    Last update: {{date | date:'yyyy-MM-dd HH:mm'}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"hpanel\">\r\n                <div class=\"v-timeline vertical-container animate-panel\" data-child=\"vertical-timeline-block\" data-delay=\"1\">\r\n                    <div class=\"vertical-timeline-block\">\r\n                        <div class=\"vertical-timeline-icon navy-bg\">\r\n                            <i class=\"fa fa-calendar\"></i>\r\n                        </div>\r\n                        <div class=\"vertical-timeline-content\">\r\n                            <div class=\"p-sm\">\r\n                                <form action=\"#\" id=\"dashboardForm\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"form-group col-lg-11\">\r\n                                            <input id=\"tlcontent\" type=\"text\" class=\"form-control\">\r\n                                        </div>\r\n                                        <div class=\"col-lg-1 text-center\">\r\n                                            <button (click)=\"post_timeline()\" class=\"btn btn-info btn-outline\">Post</button>\r\n                                        </div>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"vertical-timeline-block\" *ngFor=\"let item of timeline\">\r\n                        <div class=\"vertical-timeline-icon navy-bg\">\r\n                            <i class=\"fa fa-calendar\"></i>\r\n                        </div>\r\n                        <div class=\"vertical-timeline-content\">\r\n                            <div class=\"p-sm\">\r\n                                <span class=\"vertical-date pull-right\">\r\n                                    <small>{{item.date | date:'yyyy-MM-dd HH:mm'}}</small>\r\n                                </span>\r\n\r\n                                <h2>{{item.first}} {{item.last}}</h2>\r\n                                <p>\r\n                                    {{item.content}}\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

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
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timeline = [];
        // this._home.getTimeline().subscribe(_data => {
        //   this.timeline = _data;
        // })
        this._projectService.getOpenProject()
            .subscribe(function (_projects) {
            _this.project_total = _projects.count;
            //_projects = __projects['projects'];
            //this._projects = __projects['projects'];
            //console.log(typeof this.project_total);
            _this.data = _this.project_total;
            _this.data_to_render = _this.data;
        });
        this._UserService.getUsers()
            .subscribe(function (_users) {
            _this.user_total = _users.length;
            //_projects = __projects['projects'];
            //this._projects = __projects['projects'];
            // console.log(this.projects);
            _this.data = _this.user_total;
            _this.data_to_render = _this.data;
        });
        this._TeamService.getTeams()
            .subscribe(function (_teams) {
            _this.team_total = _teams.length;
            //_projects = __projects['projects'];
            //this._projects = __projects['projects'];
            // console.log(this.projects);
            _this.data = _this.team_total;
            _this.data_to_render = _this.data;
        });
        this.date = new Date;
        this.data = this.date;
        this.data_to_render = this.data;
    };
    DashboardComponent.prototype.post_timeline = function () {
        if (!$('#tlcontent').val().trim())
            return;
        var item = {
            "first": "Ariane",
            "last": "Alfred",
            "uid": 83,
            "content": $('#tlcontent').val(),
            "date": new Date()
        };
        this.timeline.unshift(item);
        // update local & server together
        // save a http call
        // this._home.postTimeline(item);
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

module.exports = "<div class=\"small-header \">\r\n  <div class=\"hpanel\">\r\n    <div class=\"panel-body\">\r\n\r\n\r\n      <div id=\"hbreadcrumb\" class=\"pull-right\">\r\n        <ol class=\"hbreadcrumb breadcrumb\">\r\n          <li>\r\n            <a [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n          </li>\r\n          <li class=\"active\">\r\n            <span>FAQ</span>\r\n          </li>\r\n        </ol>\r\n      </div>\r\n      <h2 class=\"font-light m-b-xs\">\r\n        FAQ\r\n      </h2>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"content\">\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"hpanel\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"\">Frequently asked questions. Find the answer or contact with us on support email.</div>\r\n          <div class=\"m-t-sm\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" type=\"text\" placeholder=\"Search question..\">\r\n              <div class=\"input-group-btn\">\r\n                <button class=\"btn btn-default\">\r\n                  <i class=\"fa fa-search\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <div class=\"hpanel panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\r\n        <div class=\"panel-body\">\r\n          <h4 class=\"m-t-none m-b-none\">General questions</h4>\r\n          <small class=\"text-muted\">All general questions about our app.</small>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#q1\" aria-expanded=\"true\">\r\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\r\n            Where can I purchase Homer theme ?\r\n          </a>\r\n          <div id=\"q1\" class=\"panel-collapse collapse\">\r\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\r\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.\r\n          </div>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#q2\" aria-expanded=\"true\">\r\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\r\n            Many desktop publishing packages ?\r\n          </a>\r\n          <div id=\"q2\" class=\"panel-collapse collapse\">\r\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\r\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. </div>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#q3\" aria-expanded=\"true\">\r\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\r\n            Lorem Ipsum available, but the majority have ?\r\n          </a>\r\n          <div id=\"q3\" class=\"panel-collapse collapse\">\r\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\r\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. </div>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#q4\" aria-expanded=\"true\">\r\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\r\n            The generated Lorem Ipsum is therefore always ?\r\n          </a>\r\n          <div id=\"q4\" class=\"panel-collapse collapse\">\r\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\r\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. </div>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#q5\" aria-expanded=\"true\">\r\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\r\n            College in Virginia, looked up one of ?\r\n          </a>\r\n          <div id=\"q5\" class=\"panel-collapse collapse\">\r\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\r\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. </div>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#q6\" aria-expanded=\"true\">\r\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\r\n            Lorem Ipsum is simply dummy ?\r\n          </a>\r\n          <div id=\"q6\" class=\"panel-collapse collapse\">\r\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\r\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. </div>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#q7\" aria-expanded=\"true\">\r\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\r\n            The standard chunk of Lorem Ipsum used since ?\r\n          </a>\r\n          <div id=\"q7\" class=\"panel-collapse collapse\">\r\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\r\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. </div>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#q8\" aria-expanded=\"true\">\r\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\r\n            Many desktop publishing ?\r\n          </a>\r\n          <div id=\"q8\" class=\"panel-collapse collapse\">\r\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\r\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. </div>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#q9\" aria-expanded=\"true\">\r\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\r\n            Cicero are also reproduced in their exact original form, accompanied ?\r\n          </a>\r\n          <div id=\"q9\" class=\"panel-collapse collapse\">\r\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\r\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n      <div class=\"hpanel panel-group\" id=\"accordion2\" role=\"tablist\" aria-multiselectable=\"true\">\r\n        <div class=\"panel-body\">\r\n          <h4 class=\"m-t-none m-b-none\">Technical questions</h4>\r\n          <small class=\"text-muted\">All technical questions about our app.</small>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <a data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#q10\" aria-expanded=\"true\">\r\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\r\n            The point of using Lorem Ipsum ?\r\n          </a>\r\n          <div id=\"q10\" class=\"panel-collapse collapse\">\r\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\r\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.\r\n          </div>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <a data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#q11\" aria-expanded=\"true\">\r\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\r\n            Lorem Ipsum passage, and going through the cites ?\r\n          </a>\r\n          <div id=\"q11\" class=\"panel-collapse collapse\">\r\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\r\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. </div>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <a data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#q12\" aria-expanded=\"true\">\r\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\r\n            Many desktop publishing packages and ?\r\n          </a>\r\n          <div id=\"q12\" class=\"panel-collapse collapse\">\r\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\r\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. </div>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <a data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#q13\" aria-expanded=\"true\">\r\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\r\n            Aldus PageMaker including versions of Lorem Ipsum ?\r\n          </a>\r\n          <div id=\"q13\" class=\"panel-collapse collapse\">\r\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\r\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. </div>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <a data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#q14\" aria-expanded=\"true\">\r\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\r\n            Nor again is there anyone who ?\r\n          </a>\r\n          <div id=\"q14\" class=\"panel-collapse collapse\">\r\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\r\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. </div>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <a data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#q15\" aria-expanded=\"true\">\r\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\r\n            Neque porro quisquam est, qui dolorem ipsum ?\r\n          </a>\r\n          <div id=\"q15\" class=\"panel-collapse collapse\">\r\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\r\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. </div>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <a data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#q16\" aria-expanded=\"true\">\r\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\r\n            Temporibus autem quibusdam ?\r\n          </a>\r\n          <div id=\"q16\" class=\"panel-collapse collapse\">\r\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\r\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. </div>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <a data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#q17\" aria-expanded=\"true\">\r\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\r\n            Et harum quidem rerum facilis ?\r\n          </a>\r\n          <div id=\"q17\" class=\"panel-collapse collapse\">\r\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\r\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. </div>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <a data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#q18\" aria-expanded=\"true\">\r\n            <i class=\"fa fa-chevron-down pull-right text-muted\"></i>\r\n            The wise man therefore always ?\r\n          </a>\r\n          <div id=\"q18\" class=\"panel-collapse collapse\">\r\n            <hr>It is a long established fact that a reader will be distracted by the readable content of a page when looking\r\n            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>"

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

module.exports = "<app-nav-bar *ngIf='app_ready'></app-nav-bar>\r\n\r\n<!-- Wrapper-->\r\n<div id=\"wrapper\" *ngIf='app_ready'>\r\n    <app-side-bar></app-side-bar>\r\n    <router-outlet></router-outlet>\r\n    <!-- Footer-->\r\n    <footer class=\"footer\">\r\n        <span class=\"pull-right\">\r\n            ECE496\r\n        </span>\r\n        Company 2015-2020\r\n    </footer>\r\n\r\n</div>\r\n"

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

module.exports = "<!-- Main Wrapper -->\r\n<div id=\"wrapper\">\r\n\r\n    <div class=\"small-header \">\r\n        <div class=\"hpanel\">\r\n            <div class=\"panel-body\">\r\n\r\n\r\n                <div id=\"hbreadcrumb\" class=\"pull-right\">\r\n                    <ol class=\"hbreadcrumb breadcrumb\">\r\n                        <li><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\r\n                        <li class=\"active\">\r\n                            <span>Chat</span>\r\n                        </li>\r\n                    </ol>\r\n                </div>\r\n                <h2 class=\"font-light m-b-xs\">\r\n                    Chat\r\n                </h2>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"hpanel \">\r\n                    <div class=\"panel-heading hbuilt\">\r\n                        <div class=\"panel-tools\">\r\n                            <a class=\"closebox\"><i class=\"fa fa-times\"></i></a>\r\n                        </div>\r\n                        Chat room\r\n                    </div>\r\n                    <div class=\"panel-body no-padding\">\r\n\r\n\r\n                        <div class=\"row\">\r\n\r\n                            <div class=\"col-md-9 \">\r\n                                <div class=\"chat-discussion\">\r\n\r\n                                    <div class=\"chat-message left\">\r\n                                        <img class=\"message-avatar\" src=\"assets/a2.jpg\" alt=\"\" >\r\n                                        <div class=\"message\">\r\n                                            <a class=\"message-author\" href=\"#\"> Michael Smith </a>\r\n                                            <span class=\"message-date\">  Fri Jan 25 2015 - 11:12:36 </span>\r\n                                                <span class=\"message-content\">\r\n                          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.\r\n                                                </span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"chat-message right\">\r\n                                        <img class=\"message-avatar\" src=\"assets/a2.jpg\" alt=\"\" >\r\n                                        <div class=\"message\">\r\n                                            <a class=\"message-author\" href=\"#\"> Michael Smith </a>\r\n                                            <span class=\"message-date\">  Fri Jan 25 2015 - 11:12:36 </span>\r\n                                                <span class=\"message-content\">\r\n                          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.\r\n                                                </span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"chat-message left\">\r\n                                        <img class=\"message-avatar\" src=\"assets/a1.jpg\" alt=\"\" >\r\n                                        <div class=\"message\">\r\n                                            <a class=\"message-author\" href=\"#\"> Michael Smith </a>\r\n                                            <span class=\"message-date\"> Mon Jan 26 2015 - 18:39:23 </span>\r\n                                                <span class=\"message-content\">\r\n                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.\r\n                                                </span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"chat-message right\">\r\n                                        <img class=\"message-avatar\" src=\"assets/a4.jpg\" alt=\"\" >\r\n                                        <div class=\"message\">\r\n                                            <a class=\"message-author\" href=\"#\"> Karl Jordan </a>\r\n                                            <span class=\"message-date\">  Fri Jan 25 2015 - 11:12:36 </span>\r\n                                                <span class=\"message-content\">\r\n                          Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover.\r\n                                                </span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"chat-message left\">\r\n                                        <img class=\"message-avatar\" src=\"assets/a2.jpg\" alt=\"\" >\r\n                                        <div class=\"message\">\r\n                                            <a class=\"message-author\" href=\"#\"> Michael Smith </a>\r\n                                            <span class=\"message-date\">  Fri Jan 25 2015 - 11:12:36 </span>\r\n                                                <span class=\"message-content\">\r\n                          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.\r\n                                                </span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"chat-message right\">\r\n                                        <img class=\"message-avatar\" src=\"assets/a5.jpg\" alt=\"\" >\r\n                                        <div class=\"message\">\r\n                                            <a class=\"message-author\" href=\"#\"> Alice Jordan </a>\r\n                                            <span class=\"message-date\">  Fri Jan 25 2015 - 11:12:36 </span>\r\n                                                <span class=\"message-content\">\r\n                          All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.\r\n                                                    It uses a dictionary of over 200 Latin words.\r\n                                                </span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"chat-message left\">\r\n                                        <img class=\"message-avatar\" src=\"assets/a6.jpg\" alt=\"\" >\r\n                                        <div class=\"message\">\r\n                                            <a class=\"message-author\" href=\"#\"> Mark Smith </a>\r\n                                            <span class=\"message-date\">  Fri Jan 25 2015 - 11:12:36 </span>\r\n                                                <span class=\"message-content\">\r\n                          All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.\r\n                                                    It uses a dictionary of over 200 Latin words.\r\n                                                </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"chat-users\">\r\n\r\n                                    <div class=\"users-list\">\r\n\r\n                                        <div class=\"chat-user\">\r\n                                            <span class=\"pull-right label label-success\">Online</span>\r\n                                            <img class=\"chat-avatar\" src=\"assets/a3.jpg\" alt=\"\" >\r\n                                            <div class=\"chat-user-name\">\r\n                                                <a href=\"#\">Janet Smith</a>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"chat-user\">\r\n                                            <img class=\"chat-avatar\" src=\"assets/a1.jpg\" alt=\"\" >\r\n                                            <div class=\"chat-user-name\">\r\n                                                <a href=\"#\">Monica Smith</a>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"chat-user\">\r\n                                            <span class=\"pull-right label label-success\">Online</span>\r\n                                            <img class=\"chat-avatar\" src=\"assets/a2.jpg\" alt=\"\" >\r\n                                            <div class=\"chat-user-name\">\r\n                                                <a href=\"#\">Michael Smith</a>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"chat-user\">\r\n                                            <img class=\"chat-avatar\" src=\"assets/a4.jpg\" alt=\"\" >\r\n                                            <div class=\"chat-user-name\">\r\n                                                <a href=\"#\">Karl Jordan</a>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"chat-user\">\r\n                                            <img class=\"chat-avatar\" src=\"assets/a5.jpg\" alt=\"\" >\r\n                                            <div class=\"chat-user-name\">\r\n                                                <a href=\"#\">Alice Smith</a>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"chat-user\">\r\n                                            <img class=\"chat-avatar\" src=\"assets/a6.jpg\" alt=\"\" >\r\n                                            <div class=\"chat-user-name\">\r\n                                                <a href=\"#\">Monica Cale</a>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"chat-user\">\r\n                                            <img class=\"chat-avatar\" src=\"assets/a2.jpg\" alt=\"\" >\r\n                                            <div class=\"chat-user-name\">\r\n                                                <a href=\"#\">Mark Jordan</a>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"chat-user\">\r\n                                            <span class=\"pull-right label \">Online</span>\r\n                                            <img class=\"chat-avatar\" src=\"assets/a3.jpg\" alt=\"\" >\r\n                                            <div class=\"chat-user-name\">\r\n                                                <a href=\"#\">Janet Smith</a>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"chat-user\">\r\n                                            <img class=\"chat-avatar\" src=\"assets/a4.jpg\" alt=\"\" >\r\n                                            <div class=\"chat-user-name\">\r\n                                                <a href=\"#\">Karl Jordan</a>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"chat-user\">\r\n                                            <img class=\"chat-avatar\" src=\"assets/a5.jpg\" alt=\"\" >\r\n                                            <div class=\"chat-user-name\">\r\n                                                <a href=\"#\">Alice Smith</a>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"chat-user\">\r\n                                            <img class=\"chat-avatar\" src=\"assets/a6.jpg\" alt=\"\" >\r\n                                            <div class=\"chat-user-name\">\r\n                                                <a href=\"#\">Monica Cale</a>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"chat-user\">\r\n                                            <img class=\"chat-avatar\" src=\"assets/a2.jpg\" alt=\"\" >\r\n                                            <div class=\"chat-user-name\">\r\n                                                <a href=\"#\">Mark Jordan</a>\r\n                                            </div>\r\n                                        </div>\r\n\r\n\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"panel-footer borders\">\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Type your message here...\">\r\n                            <span class=\"input-group-btn\">\r\n                                <button class=\"btn btn-success\">\r\n                                    Send</button>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n        <!-- Right sidebar -->\r\n        <div id=\"right-sidebar\" class=\"animated fadeInRight\">\r\n\r\n            <div class=\"p-m\">\r\n                <button id=\"sidebar-close\" class=\"right-sidebar-toggle sidebar-button btn btn-default m-b-md\"><i class=\"pe pe-7s-close\"></i>\r\n                </button>\r\n                <div>\r\n                    <span class=\"font-bold no-margins\"> Analytics </span>\r\n                    <br>\r\n                    <small> Lorem Ipsum is simply dummy text of the printing simply all dummy text.</small>\r\n                </div>\r\n                <div class=\"row m-t-sm m-b-sm\">\r\n                    <div class=\"col-lg-6\">\r\n                        <h3 class=\"no-margins font-extra-bold text-success\">300,102</h3>\r\n\r\n                        <div class=\"font-bold\">98% <i class=\"fa fa-level-up text-success\"></i></div>\r\n                    </div>\r\n                    <div class=\"col-lg-6\">\r\n                        <h3 class=\"no-margins font-extra-bold text-success\">280,200</h3>\r\n\r\n                        <div class=\"font-bold\">98% <i class=\"fa fa-level-up text-success\"></i></div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"progress m-t-xs full progress-small\">\r\n                    <div style=\"width: 25%\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"25\" role=\"progressbar\"\r\n                         class=\" progress-bar progress-bar-success\">\r\n                        <span class=\"sr-only\">35% Complete (success)</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"p-m bg-light border-bottom border-top\">\r\n                <span class=\"font-bold no-margins\"> Social talks </span>\r\n                <br>\r\n                <small> Lorem Ipsum is simply dummy text of the printing simply all dummy text.</small>\r\n                <div class=\"m-t-md\">\r\n                    <div class=\"social-talk\">\r\n                        <div class=\"media social-profile clearfix\">\r\n                            <a class=\"pull-left\">\r\n                                <img src=\"assets/a1.jpg\" alt=\"profile-picture\">\r\n                            </a>\r\n\r\n                            <div class=\"media-body\">\r\n                                <span class=\"font-bold\">John Novak</span>\r\n                                <small class=\"text-muted\">21.03.2015</small>\r\n                                <div class=\"social-content small\">\r\n                                    Injected humour, or randomised words which don't look even slightly believable.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"social-talk\">\r\n                        <div class=\"media social-profile clearfix\">\r\n                            <a class=\"pull-left\">\r\n                                <img src=\"assets/a3.jpg\" alt=\"profile-picture\">\r\n                            </a>\r\n\r\n                            <div class=\"media-body\">\r\n                                <span class=\"font-bold\">Mark Smith</span>\r\n                                <small class=\"text-muted\">14.04.2015</small>\r\n                                <div class=\"social-content\">\r\n                                    Many desktop publishing packages and web page editors.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"social-talk\">\r\n                        <div class=\"media social-profile clearfix\">\r\n                            <a class=\"pull-left\">\r\n                                <img src=\"assets/a4.jpg\" alt=\"profile-picture\">\r\n                            </a>\r\n\r\n                            <div class=\"media-body\">\r\n                                <span class=\"font-bold\">Marica Morgan</span>\r\n                                <small class=\"text-muted\">21.03.2015</small>\r\n\r\n                                <div class=\"social-content\">\r\n                                    There are many variations of passages of Lorem Ipsum available, but the majority have\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"p-m\">\r\n                <span class=\"font-bold no-margins\"> Sales in last week </span>\r\n                <div class=\"m-t-xs\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-6\">\r\n                            <small>Today</small>\r\n                            <h4 class=\"m-t-xs\">$170,20 <i class=\"fa fa-level-up text-success\"></i></h4>\r\n                        </div>\r\n                        <div class=\"col-xs-6\">\r\n                            <small>Last week</small>\r\n                            <h4 class=\"m-t-xs\">$580,90 <i class=\"fa fa-level-up text-success\"></i></h4>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-6\">\r\n                            <small>Today</small>\r\n                            <h4 class=\"m-t-xs\">$620,20 <i class=\"fa fa-level-up text-success\"></i></h4>\r\n                        </div>\r\n                        <div class=\"col-xs-6\">\r\n                            <small>Last week</small>\r\n                            <h4 class=\"m-t-xs\">$140,70 <i class=\"fa fa-level-up text-success\"></i></h4>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <small> Lorem Ipsum is simply dummy text of the printing simply all dummy text.\r\n                    Many desktop publishing packages and web page editors.\r\n                </small>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <!-- Footer-->\r\n        <footer class=\"footer\">\r\n            <span class=\"pull-right\">\r\n                ECE496\r\n            </span>\r\n\r\n        </footer>\r\n\r\n    </div>\r\n"

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

module.exports = "<!-- Main Wrapper -->\r\n<div id=\"wrapper\">\r\n\r\n\r\n    <div class=\"small-header \">\r\n        <div class=\"hpanel\">\r\n            <div class=\"panel-body\">\r\n\r\n\r\n                <div id=\"hbreadcrumb\" class=\"pull-right\">\r\n                    <ol class=\"hbreadcrumb breadcrumb\">\r\n                        <li><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\r\n                        <li class=\"active\">\r\n                            <span>Mailbox</span>\r\n                        </li>\r\n                    </ol>\r\n                </div>\r\n                <h2 class=\"font-light m-b-xs\">\r\n                    Mailbox\r\n                </h2>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"content\">\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n                <div class=\"hpanel\">\r\n                    <div class=\"panel-body\">\r\n\r\n                        <a [routerLink]=\"['/messages/mail/email-compose']\" class=\"btn btn-success btn-block m-b-md\">Compose</a>\r\n\r\n                        <ul class=\"mailbox-list\">\r\n                            <li>\r\n                                <a [routerLink]=\"['/messages/mail/mailbox']\">\r\n                                    <span class=\"pull-right\">12</span>\r\n                                    <i class=\"fa fa-envelope\"></i> Inbox\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\"><i class=\"fa fa-paper-plane\"></i> Sent</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\"><i class=\"fa fa-pencil\"></i> Draft</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\"><i class=\"fa fa-trash\"></i> Trash</a>\r\n                            </li>\r\n                        </ul>\r\n                        <hr>\r\n                        <ul class=\"mailbox-list\">\r\n                            <li>\r\n                                <a href=\"#\"><i class=\"fa fa-plane text-danger\"></i> Travel</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\"><i class=\"fa fa-bar-chart text-warning\"></i> Finance</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\"><i class=\"fa fa-users text-info\"></i> Social</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\"><i class=\"fa fa-tag text-success\"></i> Promos</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\"><i class=\"fa fa-flag text-primary\"></i> Updates</a>\r\n                            </li>\r\n                        </ul>\r\n                        <hr>\r\n                        <ul class=\"mailbox-list\">\r\n                            <li>\r\n                                <a href=\"#\"><i class=\"fa fa-gears\"></i> Settings</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\"><i class=\"fa fa-info-circle\"></i> Support</a>\r\n                            </li>\r\n                        </ul>\r\n\r\n\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-9\">\r\n                <div class=\"hpanel email-compose\">\r\n                    <div class=\"panel-heading hbuilt\">\r\n                        <div class=\"p-xs h4\">\r\n\r\n                            New message\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"panel-heading hbuilt\">\r\n                        <div class=\"p-xs\">\r\n\r\n                            <form method=\"get\" class=\"form-horizontal\">\r\n                                <div class=\"form-group\"><label class=\"col-sm-1 control-label text-left\">To:</label>\r\n\r\n                                    <div class=\"col-sm-11\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"example@email.com\"></div>\r\n                                </div>\r\n                                <div class=\"form-group\"><label class=\"col-sm-1 control-label text-left\">Cc:</label>\r\n\r\n                                    <div class=\"col-sm-11\"><input type=\"text\" class=\"form-control input-sm\"></div>\r\n                                </div>\r\n                                <div class=\"form-group\"><label class=\"col-sm-1 control-label text-left\">Subject:</label>\r\n\r\n                                    <div class=\"col-sm-11\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"Enter Email subject\"></div>\r\n                                </div>\r\n                            </form>\r\n\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"panel-body no-padding\">\r\n                        <div class=\"summernote\">\r\n                            <h5>Hello Jonathan! </h5>\r\n\r\n                            <p>dummy text of the printing and typesetting industry. <strong>Lorem Ipsum has been the dustrys</strong> standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more\r\n                                <br/><br/>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.\r\n                                recently with.</p>\r\n\r\n                            <p>Mark Smith\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"panel-footer\">\r\n                        <div class=\"pull-right\">\r\n                            <div class=\"btn-group\">\r\n                                <button class=\"btn btn-default\"><i class=\"fa fa-edit\"></i> Save</button>\r\n                                <button class=\"btn btn-default\"><i class=\"fa fa-trash\"></i> Discard</button>\r\n                            </div>\r\n                        </div>\r\n                        <button class=\"btn btn-primary\">Send email</button>\r\n                        <div class=\"btn-group\">\r\n                            <button class=\"btn btn-default\"><i class=\"fa fa-paperclip\"></i> </button>\r\n                            <button class=\"btn btn-default\"><i class=\"fa fa-image\"></i> </button>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <!-- Right sidebar -->\r\n    <div id=\"right-sidebar\" class=\"animated fadeInRight\">\r\n\r\n        <div class=\"p-m\">\r\n            <button id=\"sidebar-close\" class=\"right-sidebar-toggle sidebar-button btn btn-default m-b-md\"><i class=\"pe pe-7s-close\"></i>\r\n            </button>\r\n            <div>\r\n                <span class=\"font-bold no-margins\"> Analytics </span>\r\n                <br>\r\n                <small> Lorem Ipsum is simply dummy text of the printing simply all dummy text.</small>\r\n            </div>\r\n            <div class=\"row m-t-sm m-b-sm\">\r\n                <div class=\"col-lg-6\">\r\n                    <h3 class=\"no-margins font-extra-bold text-success\">300,102</h3>\r\n\r\n                    <div class=\"font-bold\">98% <i class=\"fa fa-level-up text-success\"></i></div>\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                    <h3 class=\"no-margins font-extra-bold text-success\">280,200</h3>\r\n\r\n                    <div class=\"font-bold\">98% <i class=\"fa fa-level-up text-success\"></i></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"progress m-t-xs full progress-small\">\r\n                <div style=\"width: 25%\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"25\" role=\"progressbar\"\r\n                     class=\" progress-bar progress-bar-success\">\r\n                    <span class=\"sr-only\">35% Complete (success)</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"p-m bg-light border-bottom border-top\">\r\n            <span class=\"font-bold no-margins\"> Social talks </span>\r\n            <br>\r\n            <small> Lorem Ipsum is simply dummy text of the printing simply all dummy text.</small>\r\n            <div class=\"m-t-md\">\r\n                <div class=\"social-talk\">\r\n                    <div class=\"media social-profile clearfix\">\r\n                        <a class=\"pull-left\">\r\n                            <img src=\"images/a1.jpg\" alt=\"profile-picture\">\r\n                        </a>\r\n\r\n                        <div class=\"media-body\">\r\n                            <span class=\"font-bold\">John Novak</span>\r\n                            <small class=\"text-muted\">21.03.2015</small>\r\n                            <div class=\"social-content small\">\r\n                                Injected humour, or randomised words which don't look even slightly believable.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"social-talk\">\r\n                    <div class=\"media social-profile clearfix\">\r\n                        <a class=\"pull-left\">\r\n                            <img src=\"images/a3.jpg\" alt=\"profile-picture\">\r\n                        </a>\r\n\r\n                        <div class=\"media-body\">\r\n                            <span class=\"font-bold\">Mark Smith</span>\r\n                            <small class=\"text-muted\">14.04.2015</small>\r\n                            <div class=\"social-content\">\r\n                                Many desktop publishing packages and web page editors.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"social-talk\">\r\n                    <div class=\"media social-profile clearfix\">\r\n                        <a class=\"pull-left\">\r\n                            <img src=\"images/a4.jpg\" alt=\"profile-picture\">\r\n                        </a>\r\n\r\n                        <div class=\"media-body\">\r\n                            <span class=\"font-bold\">Marica Morgan</span>\r\n                            <small class=\"text-muted\">21.03.2015</small>\r\n\r\n                            <div class=\"social-content\">\r\n                                There are many variations of passages of Lorem Ipsum available, but the majority have\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"p-m\">\r\n            <span class=\"font-bold no-margins\"> Sales in last week </span>\r\n\r\n            <div class=\"m-t-xs\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-6\">\r\n                        <small>Today</small>\r\n                        <h4 class=\"m-t-xs\">$170,20 <i class=\"fa fa-level-up text-success\"></i></h4>\r\n                    </div>\r\n                    <div class=\"col-xs-6\">\r\n                        <small>Last week</small>\r\n                        <h4 class=\"m-t-xs\">$580,90 <i class=\"fa fa-level-up text-success\"></i></h4>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-6\">\r\n                        <small>Today</small>\r\n                        <h4 class=\"m-t-xs\">$620,20 <i class=\"fa fa-level-up text-success\"></i></h4>\r\n                    </div>\r\n                    <div class=\"col-xs-6\">\r\n                        <small>Last week</small>\r\n                        <h4 class=\"m-t-xs\">$140,70 <i class=\"fa fa-level-up text-success\"></i></h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <small> Lorem Ipsum is simply dummy text of the printing simply all dummy text.\r\n                Many desktop publishing packages and web page editors.\r\n            </small>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <!-- Footer-->\r\n    <footer class=\"footer\">\r\n        <span class=\"pull-right\">\r\n            ECE496\r\n        </span>\r\n    </footer>\r\n\r\n</div>\r\n\r\n\r\n<script>\r\n\r\n    $(function () {\r\n\r\n        // Initialize summernote plugin\r\n        $('.summernote').summernote({\r\n            toolbar: [\r\n                ['headline', ['style']],\r\n                ['style', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear']],\r\n                ['textsize', ['fontsize']],\r\n                ['alignment', ['ul', 'ol', 'paragraph', 'lineheight']],\r\n            ]\r\n        });\r\n\r\n    });\r\n\r\n</script>\r\n"

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

module.exports = "<!-- Main Wrapper -->\r\n<div id=\"wrapper\">\r\n\r\n\r\n    <div class=\"small-header \">\r\n        <div class=\"hpanel\">\r\n            <div class=\"panel-body\">\r\n\r\n\r\n                <div id=\"hbreadcrumb\" class=\"pull-right\">\r\n                    <ol class=\"hbreadcrumb breadcrumb\">\r\n                        <li><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\r\n\r\n                        <li class=\"active\">\r\n                            <span>Mailbox</span>\r\n                        </li>\r\n                    </ol>\r\n                </div>\r\n                <h2 class=\"font-light m-b-xs\">\r\n                    Mailbox\r\n                </h2>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"content\">\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n                <div class=\"hpanel\">\r\n                    <div class=\"panel-body\">\r\n\r\n                        <a [routerLink]=\"['/messages/mail/email-compose']\" class=\"btn btn-success btn-block m-b-md\">Compose</a>\r\n\r\n                        <ul class=\"mailbox-list\">\r\n                            <li>\r\n                                <a [routerLink]=\"['/messages/mail/mailbox']\">\r\n                                    <span class=\"pull-right\">12</span>\r\n                                    <i class=\"fa fa-envelope\"></i> Inbox\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\"><i class=\"fa fa-paper-plane\"></i> Sent</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\"><i class=\"fa fa-pencil\"></i> Draft</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\"><i class=\"fa fa-trash\"></i> Trash</a>\r\n                            </li>\r\n                        </ul>\r\n                        <hr>\r\n                        <ul class=\"mailbox-list\">\r\n                            <li>\r\n                                <a href=\"#\"><i class=\"fa fa-plane text-danger\"></i> Travel</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\"><i class=\"fa fa-bar-chart text-warning\"></i> Finance</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\"><i class=\"fa fa-users text-info\"></i> Social</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\"><i class=\"fa fa-tag text-success\"></i> Promos</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\"><i class=\"fa fa-flag text-primary\"></i> Updates</a>\r\n                            </li>\r\n                        </ul>\r\n                        <hr>\r\n                        <ul class=\"mailbox-list\">\r\n                            <li>\r\n                                <a href=\"#\"><i class=\"fa fa-gears\"></i> Settings</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\"><i class=\"fa fa-info-circle\"></i> Support</a>\r\n                            </li>\r\n                        </ul>\r\n\r\n\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-9\">\r\n                <div class=\"hpanel email-compose\">\r\n                    <div class=\"panel-heading hbuilt\">\r\n\r\n                        <div class=\"p-xs h4\">\r\n                        <small class=\"pull-right\">\r\n                            08:26 PM (16 hours ago)\r\n                        </small>\r\n                            Email view\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"border-top border-left border-right bg-light\">\r\n                        <div class=\"p-m\">\r\n\r\n                            <div>\r\n                                <span class=\"font-extra-bold\">Subject: </span>\r\n                                Lorem Ipsum has been the industry's standard dummy text ever\r\n                            </div>\r\n                            <div>\r\n                                <span class=\"font-extra-bold\">From: </span>\r\n                                <a href=\"#\">example.@email.com</a>\r\n                            </div>\r\n                            <div>\r\n                                <span class=\"font-extra-bold\">Date: </span>\r\n                                14.10.2016\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <div>\r\n                            <h4>Hello Jonathan! </h4>\r\n\r\n                            <p>dummy text of the printing and typesetting industry. <strong>Lorem Ipsum has been the dustrys</strong> standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more\r\n                                <br/><br/>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.\r\n                                recently with.</p>\r\n\r\n                            <p>Mark Smith\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"border-bottom border-left border-right bg-white p-m\">\r\n                        <p class=\"m-b-md\">\r\n                            <span><i class=\"fa fa-paperclip\"></i> 3 attachments - </span>\r\n                            <a href=\"#\" class=\"btn btn-default btn-xs\">Download all in zip format <i class=\"fa fa-file-zip-o\"></i> </a>\r\n                        </p>\r\n\r\n                        <div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"hpanel\">\r\n                                        <div class=\"panel-body file-body\">\r\n                                            <i class=\"fa fa-file-pdf-o text-info\"></i>\r\n                                        </div>\r\n                                        <div class=\"panel-footer\">\r\n                                            <a href=\"#\">Documen2016.doc</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"hpanel\">\r\n                                        <div class=\"panel-body file-body\">\r\n                                            <i class=\"fa fa-file-audio-o text-warning\"></i>\r\n                                        </div>\r\n                                        <div class=\"panel-footer\">\r\n                                            <a href=\"#\">Audio_2016.doc</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"hpanel\">\r\n                                        <div class=\"panel-body file-body\">\r\n                                            <i class=\"fa fa-file-excel-o text-success\"></i>\r\n                                        </div>\r\n                                        <div class=\"panel-footer\">\r\n                                            <a href=\"#\">Sheets_2016.doc</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"panel-footer text-right\">\r\n                        <div class=\"btn-group\">\r\n                            <button class=\"btn btn-default\"><i class=\"fa fa-reply\"></i> Reply</button>\r\n                            <button class=\"btn btn-default\"><i class=\"fa fa-arrow-right\"></i> Forward</button>\r\n                            <button class=\"btn btn-default\"><i class=\"fa fa-print\"></i> Print</button>\r\n                            <button class=\"btn btn-default\"><i class=\"fa fa-trash-o\"></i> Remove</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <!-- Right sidebar -->\r\n    <div id=\"right-sidebar\" class=\"animated fadeInRight\">\r\n\r\n        <div class=\"p-m\">\r\n            <button id=\"sidebar-close\" class=\"right-sidebar-toggle sidebar-button btn btn-default m-b-md\"><i class=\"pe pe-7s-close\"></i>\r\n            </button>\r\n            <div>\r\n                <span class=\"font-bold no-margins\"> Analytics </span>\r\n                <br>\r\n                <small> Lorem Ipsum is simply dummy text of the printing simply all dummy text.</small>\r\n            </div>\r\n            <div class=\"row m-t-sm m-b-sm\">\r\n                <div class=\"col-lg-6\">\r\n                    <h3 class=\"no-margins font-extra-bold text-success\">300,102</h3>\r\n\r\n                    <div class=\"font-bold\">98% <i class=\"fa fa-level-up text-success\"></i></div>\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                    <h3 class=\"no-margins font-extra-bold text-success\">280,200</h3>\r\n\r\n                    <div class=\"font-bold\">98% <i class=\"fa fa-level-up text-success\"></i></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"progress m-t-xs full progress-small\">\r\n                <div style=\"width: 25%\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"25\" role=\"progressbar\"\r\n                     class=\" progress-bar progress-bar-success\">\r\n                    <span class=\"sr-only\">35% Complete (success)</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"p-m bg-light border-bottom border-top\">\r\n            <span class=\"font-bold no-margins\"> Social talks </span>\r\n            <br>\r\n            <small> Lorem Ipsum is simply dummy text of the printing simply all dummy text.</small>\r\n            <div class=\"m-t-md\">\r\n                <div class=\"social-talk\">\r\n                    <div class=\"media social-profile clearfix\">\r\n                        <a class=\"pull-left\">\r\n                            <img src=\"images/a1.jpg\" alt=\"profile-picture\">\r\n                        </a>\r\n\r\n                        <div class=\"media-body\">\r\n                            <span class=\"font-bold\">John Novak</span>\r\n                            <small class=\"text-muted\">21.03.2015</small>\r\n                            <div class=\"social-content small\">\r\n                                Injected humour, or randomised words which don't look even slightly believable.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"social-talk\">\r\n                    <div class=\"media social-profile clearfix\">\r\n                        <a class=\"pull-left\">\r\n                            <img src=\"images/a3.jpg\" alt=\"profile-picture\">\r\n                        </a>\r\n\r\n                        <div class=\"media-body\">\r\n                            <span class=\"font-bold\">Mark Smith</span>\r\n                            <small class=\"text-muted\">14.04.2015</small>\r\n                            <div class=\"social-content\">\r\n                                Many desktop publishing packages and web page editors.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"social-talk\">\r\n                    <div class=\"media social-profile clearfix\">\r\n                        <a class=\"pull-left\">\r\n                            <img src=\"images/a4.jpg\" alt=\"profile-picture\">\r\n                        </a>\r\n\r\n                        <div class=\"media-body\">\r\n                            <span class=\"font-bold\">Marica Morgan</span>\r\n                            <small class=\"text-muted\">21.03.2015</small>\r\n\r\n                            <div class=\"social-content\">\r\n                                There are many variations of passages of Lorem Ipsum available, but the majority have\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"p-m\">\r\n            <span class=\"font-bold no-margins\"> Sales in last week </span>\r\n\r\n            <div class=\"m-t-xs\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-6\">\r\n                        <small>Today</small>\r\n                        <h4 class=\"m-t-xs\">$170,20 <i class=\"fa fa-level-up text-success\"></i></h4>\r\n                    </div>\r\n                    <div class=\"col-xs-6\">\r\n                        <small>Last week</small>\r\n                        <h4 class=\"m-t-xs\">$580,90 <i class=\"fa fa-level-up text-success\"></i></h4>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-6\">\r\n                        <small>Today</small>\r\n                        <h4 class=\"m-t-xs\">$620,20 <i class=\"fa fa-level-up text-success\"></i></h4>\r\n                    </div>\r\n                    <div class=\"col-xs-6\">\r\n                        <small>Last week</small>\r\n                        <h4 class=\"m-t-xs\">$140,70 <i class=\"fa fa-level-up text-success\"></i></h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <small> Lorem Ipsum is simply dummy text of the printing simply all dummy text.\r\n                Many desktop publishing packages and web page editors.\r\n            </small>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <!-- Footer-->\r\n    <footer class=\"footer\">\r\n        <span class=\"pull-right\">\r\n            ECE496\r\n        </span>\r\n    </footer>\r\n\r\n</div>\r\n"

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

module.exports = "<!-- Main Wrapper -->\r\n<div id=\"wrapper\">\r\n\r\n\r\n    <div class=\"small-header \">\r\n        <div class=\"hpanel\">\r\n            <div class=\"panel-body\">\r\n\r\n\r\n                <div id=\"hbreadcrumb\" class=\"pull-right\">\r\n                    <ol class=\"hbreadcrumb breadcrumb\">\r\n                        <li><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\r\n                        <li class=\"active\">\r\n                            <span>Mailbox</span>\r\n                        </li>\r\n                    </ol>\r\n                </div>\r\n                <h2 class=\"font-light m-b-xs\">\r\n                    Mailbox\r\n                </h2>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"content\">\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n                <div class=\"hpanel\">\r\n                    <div class=\"panel-body\">\r\n\r\n                        <a [routerLink]=\"['/messages/mail/email-compose']\" class=\"btn btn-success btn-block m-b-md\">Compose</a>\r\n\r\n                        <ul class=\"mailbox-list\">\r\n                            <li class=\"active\">\r\n                                <a [routerLink]=\"['/messages/mail/mailbox']\">\r\n                                    <span class=\"pull-right\">12</span>\r\n                                    <i class=\"fa fa-envelope\"></i> Inbox\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\"><i class=\"fa fa-paper-plane\"></i> Sent</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\"><i class=\"fa fa-pencil\"></i> Draft</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\"><i class=\"fa fa-trash\"></i> Trash</a>\r\n                            </li>\r\n                        </ul>\r\n                        <hr>\r\n                        <ul class=\"mailbox-list\">\r\n                            <li>\r\n                                <a href=\"#\"><i class=\"fa fa-plane text-danger\"></i> Travel</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\"><i class=\"fa fa-bar-chart text-warning\"></i> Finance</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\"><i class=\"fa fa-users text-info\"></i> Social</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\"><i class=\"fa fa-tag text-success\"></i> Promos</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\"><i class=\"fa fa-flag text-primary\"></i> Updates</a>\r\n                            </li>\r\n                        </ul>\r\n                        <hr>\r\n                        <ul class=\"mailbox-list\">\r\n                            <li>\r\n                                <a href=\"#\"><i class=\"fa fa-gears\"></i> Settings</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\"><i class=\"fa fa-info-circle\"></i> Support</a>\r\n                            </li>\r\n                        </ul>\r\n\r\n\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-9\">\r\n                <div class=\"hpanel\">\r\n                    <div class=\"panel-heading hbuilt\">\r\n                        <div class=\"text-center p-xs font-normal\">\r\n                            <div class=\"input-group\"><input type=\"text\" class=\"form-control input-sm\" placeholder=\"Search email in your inbox...\"> <span class=\"input-group-btn\"> <button type=\"button\" class=\"btn btn-sm btn-default\">Search\r\n                            </button> </span></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6 m-b-md\">\r\n                                <div class=\"btn-group\">\r\n                                    <button class=\"btn btn-default btn-sm\"><i class=\"fa fa-refresh\"></i> Refresh</button>\r\n                                    <button class=\"btn btn-default btn-sm\"><i class=\"fa fa-eye\"></i></button>\r\n                                    <button class=\"btn btn-default btn-sm\"><i class=\"fa fa-exclamation\"></i></button>\r\n                                    <button class=\"btn btn-default btn-sm\"><i class=\"fa fa-trash-o\"></i></button>\r\n                                    <button class=\"btn btn-default btn-sm\"><i class=\"fa fa-check\"></i></button>\r\n                                    <button class=\"btn btn-default btn-sm\"><i class=\"fa fa-tag\"></i></button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6 mailbox-pagination m-b-md\">\r\n                                <div class=\"btn-group\">\r\n                                    <button class=\"btn btn-default btn-sm\"><i class=\"fa fa-arrow-left\"></i></button>\r\n                                    <button class=\"btn btn-default btn-sm\"><i class=\"fa fa-arrow-right\"></i></button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table table-hover table-mailbox\">\r\n                                <tbody>\r\n                                <tr class=\"unread\">\r\n                                    <td class=\"\">\r\n                                        <div class=\"checkbox checkbox-single checkbox-success\">\r\n                                            <input type=\"checkbox\" checked>\r\n                                            <label></label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td><a [routerLink]=\"['/users/user-profile']\">Jeremy Massey</a></td>\r\n                                    <td><a [routerLink]=\"['/messages/mail/email-view']\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>\r\n                                    </td>\r\n                                    <td><i class=\"fa fa-paperclip\"></i></td>\r\n                                    <td class=\"text-right mail-date\">Tue, Nov 25</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"\">\r\n                                        <div class=\"checkbox\">\r\n                                            <input type=\"checkbox\">\r\n                                            <label></label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td><a href=\"#\">Marshall Horne</a></td>\r\n                                    <td><a href=\"#\">Praesent nec nisl sed neque ornare maximus at ac enim.</a>\r\n                                    </td>\r\n                                    <td></td>\r\n                                    <td class=\"text-right mail-date\">Wed, Jan 13</td>\r\n                                </tr>\r\n                                <tr class=\"active\">\r\n                                    <td class=\"\">\r\n                                        <div class=\"checkbox\">\r\n                                            <input type=\"checkbox\">\r\n                                            <label></label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td><a href=\"#\">Grant Franco</a> <span\r\n                                            class=\"label label-warning\">Finance</span></td>\r\n                                    <td><a href=\"#\">Etiam maximus tellus a turpis tempor mollis.</a></td>\r\n                                    <td></td>\r\n                                    <td class=\"text-right mail-date\">Mon, Oct 19</td>\r\n                                </tr>\r\n                                <tr class=\"unread active\">\r\n                                    <td class=\"\">\r\n                                        <div class=\"checkbox checkbox-single\">\r\n                                            <input type=\"checkbox\" checked>\r\n                                            <label></label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td><a href=\"#\">Ferdinand Meadows</a></td>\r\n                                    <td><a href=\"#\">Aenean hendrerit ligula eget augue gravida semper.</a></td>\r\n                                    <td><i class=\"fa fa-paperclip\"></i></td>\r\n                                    <td class=\"text-right mail-date\">Sat, Aug 29</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"\">\r\n                                        <div class=\"checkbox checkbox-single\">\r\n                                            <input type=\"checkbox\">\r\n                                            <label></label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td><a href=\"#\">Ivor Rios</a> <span class=\"label label-info\">Social</span>\r\n                                    </td>\r\n                                    <td><a href=\"#\">Sed quis augue in nunc venenatis finibus.</a></td>\r\n                                    <td><i class=\"fa fa-paperclip\"></i></td>\r\n                                    <td class=\"text-right mail-date\">Sat, Dec 12</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"\">\r\n                                        <div class=\"checkbox\">\r\n                                            <input type=\"checkbox\">\r\n                                            <label></label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td><a href=\"#\">Maxwell Murphy</a></td>\r\n                                    <td><a href=\"#\">Quisque eu tortor quis justo viverra cursus.</a></td>\r\n                                    <td></td>\r\n                                    <td class=\"text-right mail-date\">Sun, May 17</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"\">\r\n                                        <div class=\"checkbox\">\r\n                                            <input type=\"checkbox\">\r\n                                            <label></label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td><a href=\"#\">Henry Patterson</a></td>\r\n                                    <td><a href=\"#\">Aliquam nec justo interdum, ornare mi non, elementum\r\n                                        lacus.</a></td>\r\n                                    <td><i class=\"fa fa-paperclip\"></i></td>\r\n                                    <td class=\"text-right mail-date\">Thu, Aug 06</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"\">\r\n                                        <div class=\"checkbox\">\r\n                                            <input type=\"checkbox\">\r\n                                            <label></label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td><a href=\"#\">Brent Rasmussen</a></td>\r\n                                    <td><a href=\"#\">Nam nec turpis sed quam tristique sodales.</a></td>\r\n                                    <td></td>\r\n                                    <td class=\"text-right mail-date\">Sun, Nov 15</td>\r\n                                </tr>\r\n                                <tr class=\"unread\">\r\n                                    <td class=\"\">\r\n                                        <div class=\"checkbox checkbox-single checkbox-success\">\r\n                                            <input type=\"checkbox\" checked>\r\n                                            <label></label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td><a href=\"#\">Joseph Hurley</a></td>\r\n                                    <td><a href=\"#\">Nullam tempus leo id urna sagittis blandit.</a></td>\r\n                                    <td><i class=\"fa fa-paperclip\"></i></td>\r\n                                    <td class=\"text-right mail-date\">Sun, Aug 10</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"\">\r\n                                        <div class=\"checkbox\">\r\n                                            <input type=\"checkbox\">\r\n                                            <label></label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td><a href=\"#\">Alan Matthews</a></td>\r\n                                    <td><a href=\"#\">Quisque quis turpis ac quam sagittis scelerisque vel ut\r\n                                        urna.</a></td>\r\n                                    <td></td>\r\n                                    <td class=\"text-right mail-date\">Sun, Mar 27</td>\r\n                                </tr>\r\n                                <tr class=\"active\">\r\n                                    <td class=\"\">\r\n                                        <div class=\"checkbox\">\r\n                                            <input type=\"checkbox\">\r\n                                            <label></label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td><a href=\"#\">Colby Lynch</a> <span\r\n                                            class=\"label label-danger\">Travel</span></td>\r\n                                    <td><a href=\"#\">Donec non enim pulvinar, ultrices metus eget, condimentum\r\n                                        mi.</a></td>\r\n                                    <td></td>\r\n                                    <td class=\"text-right mail-date\">Thu, Dec 31</td>\r\n                                </tr>\r\n                                <tr class=\"unread\">\r\n                                    <td class=\"\">\r\n                                        <div class=\"checkbox checkbox-single checkbox-success\">\r\n                                            <input type=\"checkbox\" checked>\r\n                                            <label></label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td><a href=\"#\">Jeremy Massey</a></td>\r\n                                    <td><a href=\"#\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>\r\n                                    </td>\r\n                                    <td><i class=\"fa fa-paperclip\"></i></td>\r\n                                    <td class=\"text-right mail-date\">Tue, Nov 25</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"\">\r\n                                        <div class=\"checkbox\">\r\n                                            <input type=\"checkbox\">\r\n                                            <label></label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td><a href=\"#\">Marshall Horne</a></td>\r\n                                    <td><a href=\"#\">Praesent nec nisl sed neque ornare maximus at ac enim.</a>\r\n                                    </td>\r\n                                    <td></td>\r\n                                    <td class=\"text-right mail-date\">Wed, Jan 13</td>\r\n                                </tr>\r\n                                <tr class=\"active\">\r\n                                    <td class=\"\">\r\n                                        <div class=\"checkbox\">\r\n                                            <input type=\"checkbox\">\r\n                                            <label></label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td><a href=\"#\">Grant Franco</a> <span\r\n                                            class=\"label label-warning\">Finance</span></td>\r\n                                    <td><a href=\"#\">Etiam maximus tellus a turpis tempor mollis.</a></td>\r\n                                    <td></td>\r\n                                    <td class=\"text-right mail-date\">Mon, Oct 19</td>\r\n                                </tr>\r\n                                <tr class=\"unread active\">\r\n                                    <td class=\"\">\r\n                                        <div class=\"checkbox checkbox-single\">\r\n                                            <input type=\"checkbox\" checked>\r\n                                            <label></label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td><a href=\"#\">Ferdinand Meadows</a></td>\r\n                                    <td><a href=\"#\">Aenean hendrerit ligula eget augue gravida semper.</a></td>\r\n                                    <td><i class=\"fa fa-paperclip\"></i></td>\r\n                                    <td class=\"text-right mail-date\">Sat, Aug 29</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"\">\r\n                                        <div class=\"checkbox checkbox-single\">\r\n                                            <input type=\"checkbox\">\r\n                                            <label></label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td><a href=\"#\">Ivor Rios</a> <span class=\"label label-info\">Social</span>\r\n                                    </td>\r\n                                    <td><a href=\"#\">Sed quis augue in nunc venenatis finibus.</a></td>\r\n                                    <td><i class=\"fa fa-paperclip\"></i></td>\r\n                                    <td class=\"text-right mail-date\">Sat, Dec 12</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"\">\r\n                                        <div class=\"checkbox\">\r\n                                            <input type=\"checkbox\">\r\n                                            <label></label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td><a href=\"#\">Maxwell Murphy</a></td>\r\n                                    <td><a href=\"#\">Quisque eu tortor quis justo viverra cursus.</a></td>\r\n                                    <td></td>\r\n                                    <td class=\"text-right mail-date\">Sun, May 17</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"\">\r\n                                        <div class=\"checkbox\">\r\n                                            <input type=\"checkbox\">\r\n                                            <label></label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td><a href=\"#\">Henry Patterson</a></td>\r\n                                    <td><a href=\"#\">Aliquam nec justo interdum, ornare mi non, elementum\r\n                                        lacus.</a></td>\r\n                                    <td><i class=\"fa fa-paperclip\"></i></td>\r\n                                    <td class=\"text-right mail-date\">Thu, Aug 06</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"\">\r\n                                        <div class=\"checkbox\">\r\n                                            <input type=\"checkbox\">\r\n                                            <label></label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td><a href=\"#\">Brent Rasmussen</a></td>\r\n                                    <td><a href=\"#\">Nam nec turpis sed quam tristique sodales.</a></td>\r\n                                    <td></td>\r\n                                    <td class=\"text-right mail-date\">Sun, Nov 15</td>\r\n                                </tr>\r\n                                <tr class=\"unread\">\r\n                                    <td class=\"\">\r\n                                        <div class=\"checkbox checkbox-single checkbox-success\">\r\n                                            <input type=\"checkbox\" checked>\r\n                                            <label></label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td><a href=\"#\">Joseph Hurley</a></td>\r\n                                    <td><a href=\"#\">Nullam tempus leo id urna sagittis blandit.</a></td>\r\n                                    <td><i class=\"fa fa-paperclip\"></i></td>\r\n                                    <td class=\"text-right mail-date\">Sun, Aug 10</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"\">\r\n                                        <div class=\"checkbox\">\r\n                                            <input type=\"checkbox\">\r\n                                            <label></label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td><a href=\"#\">Alan Matthews</a></td>\r\n                                    <td><a href=\"#\">Quisque quis turpis ac quam sagittis scelerisque vel ut\r\n                                        urna.</a></td>\r\n                                    <td></td>\r\n                                    <td class=\"text-right mail-date\">Sun, Mar 27</td>\r\n                                </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"panel-footer\">\r\n                        <i class=\"fa fa-eye\"> </i> 6 unread\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <!-- Right sidebar -->\r\n    <div id=\"right-sidebar\" class=\"animated fadeInRight\">\r\n\r\n        <div class=\"p-m\">\r\n            <button id=\"sidebar-close\" class=\"right-sidebar-toggle sidebar-button btn btn-default m-b-md\"><i class=\"pe pe-7s-close\"></i>\r\n            </button>\r\n            <div>\r\n                <span class=\"font-bold no-margins\"> Analytics </span>\r\n                <br>\r\n                <small> Lorem Ipsum is simply dummy text of the printing simply all dummy text.</small>\r\n            </div>\r\n            <div class=\"row m-t-sm m-b-sm\">\r\n                <div class=\"col-lg-6\">\r\n                    <h3 class=\"no-margins font-extra-bold text-success\">300,102</h3>\r\n\r\n                    <div class=\"font-bold\">98% <i class=\"fa fa-level-up text-success\"></i></div>\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                    <h3 class=\"no-margins font-extra-bold text-success\">280,200</h3>\r\n\r\n                    <div class=\"font-bold\">98% <i class=\"fa fa-level-up text-success\"></i></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"progress m-t-xs full progress-small\">\r\n                <div style=\"width: 25%\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"25\" role=\"progressbar\"\r\n                     class=\" progress-bar progress-bar-success\">\r\n                    <span class=\"sr-only\">35% Complete (success)</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"p-m bg-light border-bottom border-top\">\r\n            <span class=\"font-bold no-margins\"> Social talks </span>\r\n            <br>\r\n            <small> Lorem Ipsum is simply dummy text of the printing simply all dummy text.</small>\r\n            <div class=\"m-t-md\">\r\n                <div class=\"social-talk\">\r\n                    <div class=\"media social-profile clearfix\">\r\n                        <a class=\"pull-left\">\r\n                            <img src=\"assets/a1.jpg\" alt=\"profile-picture\">\r\n                        </a>\r\n\r\n                        <div class=\"media-body\">\r\n                            <span class=\"font-bold\">John Novak</span>\r\n                            <small class=\"text-muted\">21.03.2015</small>\r\n                            <div class=\"social-content small\">\r\n                                Injected humour, or randomised words which don't look even slightly believable.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"social-talk\">\r\n                    <div class=\"media social-profile clearfix\">\r\n                        <a class=\"pull-left\">\r\n                            <img src=\"assets/a3.jpg\" alt=\"profile-picture\">\r\n                        </a>\r\n\r\n                        <div class=\"media-body\">\r\n                            <span class=\"font-bold\">Mark Smith</span>\r\n                            <small class=\"text-muted\">14.04.2015</small>\r\n                            <div class=\"social-content\">\r\n                                Many desktop publishing packages and web page editors.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"social-talk\">\r\n                    <div class=\"media social-profile clearfix\">\r\n                        <a class=\"pull-left\">\r\n                            <img src=\"assets/a4.jpg\" alt=\"profile-picture\">\r\n                        </a>\r\n\r\n                        <div class=\"media-body\">\r\n                            <span class=\"font-bold\">Marica Morgan</span>\r\n                            <small class=\"text-muted\">21.03.2015</small>\r\n\r\n                            <div class=\"social-content\">\r\n                                There are many variations of passages of Lorem Ipsum available, but the majority have\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"p-m\">\r\n            <span class=\"font-bold no-margins\"> Sales in last week </span>\r\n            <div class=\"m-t-xs\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-6\">\r\n                        <small>Today</small>\r\n                        <h4 class=\"m-t-xs\">$170,20 <i class=\"fa fa-level-up text-success\"></i></h4>\r\n                    </div>\r\n                    <div class=\"col-xs-6\">\r\n                        <small>Last week</small>\r\n                        <h4 class=\"m-t-xs\">$580,90 <i class=\"fa fa-level-up text-success\"></i></h4>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-6\">\r\n                        <small>Today</small>\r\n                        <h4 class=\"m-t-xs\">$620,20 <i class=\"fa fa-level-up text-success\"></i></h4>\r\n                    </div>\r\n                    <div class=\"col-xs-6\">\r\n                        <small>Last week</small>\r\n                        <h4 class=\"m-t-xs\">$140,70 <i class=\"fa fa-level-up text-success\"></i></h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <small> Lorem Ipsum is simply dummy text of the printing simply all dummy text.\r\n                Many desktop publishing packages and web page editors.\r\n            </small>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <!-- Footer-->\r\n    <footer class=\"footer\">\r\n        <span class=\"pull-right\">\r\n            ECE496\r\n        </span>\r\n\r\n    </footer>\r\n\r\n</div>\r\n"

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

module.exports = "<div class=\"small-header transition\">\r\n  <div class=\"hpanel\">\r\n    <div class=\"panel-body\">\r\n<!--\r\n      <ng-container >\r\n                            <span *ngIf=\"like_or_not == false\">\r\n                             <span  (click)=\" like_or_not = true\" (click)=\"like(like_or_not)\"> <button class=\"btn btn-xs btn-default\"><i class=\"glyphicon glyphicon-heart-empty\" style=\"color:red\" ></i> Like </button></span>\r\n                            </span>\r\n        <span *ngIf=\"like_or_not == true\" ><span (click)=\"like_or_not = false\" (click)=\"like(like_or_not)\"><button class=\"btn btn-xs btn-default\"><i class=\"glyphicon glyphicon-heart\" style=\"color:red\" ></i> DisLike </button></span></span>\r\n      </ng-container>-->\r\n\r\n\r\n      <div id=\"hbreadcrumb\" class=\"pull-right\">\r\n        <ol class=\"hbreadcrumb breadcrumb\">\r\n          <li>\r\n            <a [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n          </li>\r\n          <li>\r\n            <span>Manage</span>\r\n          </li>\r\n          <li class=\"active\">\r\n            <span>My Projects</span>\r\n          </li>\r\n        </ol>\r\n      </div>\r\n      <h2 class=\"font-light m-b-xs\">\r\n        My Projects\r\n      </h2>\r\n      <small>This page shows your projects and projects you like.</small>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"content\">\r\n\r\n  <ul class=\"nav nav-tabs\">\r\n    <li *ngIf=\"role=='Supervisor'\" class=\"\">\r\n    <a data-toggle=\"tab\" href=\"#tab-1\">\r\n      <strong>Supervised Projects</strong>\r\n    </a>\r\n\r\n  </li>\r\n    <li class=\"active\">\r\n      <a data-toggle=\"tab\" href=\"#tab-2\">\r\n        <strong>Your Projects</strong>\r\n      </a>\r\n    </li>\r\n    <li class=\"\">\r\n      <a data-toggle=\"tab\" href=\"#tab-3\">\r\n        <strong>Liked Projects</strong>\r\n      </a>\r\n\r\n    </li>\r\n\r\n  </ul>\r\n\r\n  <div class=\"tab-content\">\r\n\r\n    <div  id=\"tab-1\" class=\"tab-pane\">\r\n      <div  class=\"hpanel\">\r\n        <div class=\"panel-body\">\r\n          <!--projects-->\r\n          <div class=\"hpanel hgreen\" *ngFor='let proj of supervisedp'>\r\n            <div class=\"panel-body\">\r\n              <div class=\"pull-right\">\r\n                <!-- button class=\"btn btn-success btn-xs\">{{proj.status}}</button-->\r\n                <button [routerLink]=\"['/projects', proj.pid]\" class=\"btn btn-xs btn-default\"> View</button>\r\n\r\n                <button class=\"btn btn-default btn-xs\" [routerLink]=\"['/projects/projectEdit',proj.pid]\">\r\n                  <i class=\"fa fa-pencil\"></i> Edit</button>\r\n                <small *ngIf=\"proj?.status=='Open'\" class=\"label label-success \">Available</small>\r\n                <small *ngIf=\"proj?.status == 'Closed'\" class=\"label label-warning \">Closed</small>\r\n              </div>\r\n              <h3 class=\"m-t-none\">\r\n                <a [routerLink]=\"['/projects',proj.pid]\">{{proj.name}}</a>\r\n              </h3>\r\n              <small>{{proj.abs}}\r\n              </small>\r\n              <div class=\"m-t-md\">\r\n                <canvas id=\"lineOptions\" height=\"10\"></canvas>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div id=\"tab-2\" class=\"tab-pane active\">\r\n      <div class=\"hpanel\">\r\n        <div class=\"panel-body\">\r\n          <!--projects-->\r\n          <div class=\"row projects\" *ngIf=\"!supervisedp\">\r\n            <div class=\"hpanel\">\r\n                <div class=\"panel-body\">\r\n   \t\t\t\t\t <h3>Please wait while we are loading your projects :)</h3>\r\n    \t\t\t</div>\r\n    \t\t</div>\r\n    \t  </div>\r\n          <div class=\"hpanel hblue\" *ngFor='let proj of createdp'>\r\n            <div class=\"panel-body\">\r\n              <div class=\"pull-right\">\r\n                <!-- button class=\"btn btn-success btn-xs\">{{proj.status}}</button-->\r\n                <button [routerLink]=\"['/projects', proj.pid]\" class=\"btn btn-xs btn-default\"> View</button>\r\n\r\n                <button class=\"btn btn-default btn-xs\" [routerLink]=\"['/projects/projectEdit',proj.pid]\">\r\n                  <i class=\"fa fa-pencil\"></i> Edit</button>\r\n                <small *ngIf=\"proj?.status=='Open'\" class=\"label label-success \">Available</small>\r\n                <small *ngIf=\"proj?.status == 'Closed'\" class=\"label label-warning \">Closed</small>\r\n              </div>\r\n              <!--project1-->\r\n              <h3 class=\"m-t-none\">\r\n                <a [routerLink]=\"['/projects',proj.pid]\">{{proj.name}}</a>\r\n              </h3>\r\n\r\n\r\n              <small>{{proj.abs}}\r\n              </small>\r\n              <div class=\"m-t-md\">\r\n                <canvas id=\"lineOptions\" height=\"10\"></canvas>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div id=\"tab-3\" class=\"tab-pane\">\r\n      <div class=\"hpanel\">\r\n        <div class=\"panel-body\">\r\n          <!--projects-->\r\n          <div class=\"hpanel hred\" *ngFor='let proj of likedp'>\r\n            <div class=\"panel-body\">\r\n              <div class=\"pull-right\">\r\n                <!-- button class=\"btn btn-success btn-xs\"> {{proj.status}}</button-->\r\n                <small *ngIf=\"proj?.status=='Open'\" class=\"label label-success \">OPEN</small>\r\n                <small *ngIf=\"proj?.status == 'Closed'\" class=\"label label-warning \">Closed</small>\r\n                <!--<a [routerLink]=\"['project-profile', user.uid]\">--><button  class=\"btn btn-xs btn-default\" (click)=\"like(false, proj.pid, user.uid)\"><i class=\"glyphicon glyphicon-heart\" style=\"color:red\" ></i> Dislike </button><!--</a>-->\r\n              </div>\r\n              <!--project1-->\r\n              <h3 class=\"m-t-none\">\r\n                <a [routerLink]=\"['/projects',proj.pid]\">{{proj.name}}</a>\r\n              </h3>\r\n              <small>{{proj.abs}}\r\n              </small>\r\n              <div class=\"m-t-md\">\r\n                <canvas id=\"lineOptions\" height=\"10\"></canvas>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n"

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
    ProjectProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // setTimeout(() => {
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
        var data = { "created_user_id": uid, "project_id": pid, "project_title": name, "project_status": status, "project_short_description": abs, "project_detailed_description": about, "related_areas": checkedarea, "number_of_members_accepted": checkedsize };
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

module.exports = "<div class=\"small-header\">\r\n  <div class=\"hpanel\">\r\n    <div class=\"panel-body\">\r\n      <div id=\"hbreadcrumb\" class=\"pull-right\">\r\n        <ol class=\"hbreadcrumb breadcrumb\">\r\n          <li>\r\n            <a [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n          </li>\r\n          <li>\r\n            <a [routerLink]=\"['/create']\">Create</a>\r\n          </li>\r\n          <li class=\"active\">\r\n            <span>Create a Project </span>\r\n          </li>\r\n        </ol>\r\n      </div>\r\n      <h2 class=\"font-light m-b-xs\">\r\n        Create a Project\r\n      </h2>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"content\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"hpanel\">\r\n\r\n        <div class=\"panel-body\">\r\n\r\n          <form (ngSubmit)=\"save()\" #projectForm=\"ngForm\">\r\n\r\n            <div class=\"text-center m-b-md\" id=\"wizardControl\">\r\n\r\n\r\n\r\n\r\n            </div>\r\n\r\n            <div class=\"tab-content\">\r\n              <div *ngIf=\"steps==1\" [ngClass]=\"{'active':steps==1}\" class=\"p-m tab-pane\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12\">\r\n                    <div class=\"row\">\r\n                      <div class=\"form-group col-lg-12\" [ngClass]=\"{'has-error': (v_pname.touched || v_pname.dirty) && !v_pname.valid}\">\r\n                        <label>Project Title *</label>\r\n                        <span class=\"text-danger\" *ngIf=\"(v_pname.touched || v_pname.dirty) && v_pname.errors?.required\">\r\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter a Project Title</span>\r\n                        <span class=\"text-danger\" *ngIf=\"(v_pname.touched || v_pname.dirty) && v_pname.errors?.minlength\">\r\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter minimum 10 character</span>\r\n                        <input #v_pname=\"ngModel\" required minlength=\"10\" [(ngModel)]='new_project.name' id='titlename' type=\"text\" class=\"form-control\" placeholder=\"Please enter a unique project title here...\"\r\n                          name=\"name\">\r\n                      </div>\r\n                      <div class=\"form-group col-lg-6\">\r\n                        <label>Number of Members *</label>\r\n                        <span class=\"text-danger\" *ngIf=\"sizeneeded\">\r\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please select team size </span>\r\n                        <br>\r\n                        <div *ngFor=\"let number of new_project.size\" class=\"col-lg-3\">\r\n                          <div class=\"checkbox checkbox-info checkbox-inline\">\r\n                            <input (click)=\"selectsize(name)\" type=\"checkbox\" [(ngModel)]='number.value' [name]=\"number.label\">\r\n                            <label> {{number.label}} </label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <!--<div class=\"form-group col-lg-6\">\r\n                          <label>Project Status</label>\r\n                           <br>\r\n\t                          <div *ngFor=\"let status of new_project.status\" class=\"col-lg-3\">\r\n\t                            <div class=\"checkbox checkbox-info checkbox-inline\">\r\n\t                              <input type=\"checkbox\" [(ngModel)]='status.value' [name]=\"status.label\">\r\n\t                              <label> {{status.label}} </label>\r\n\t                            </div>\r\n                          </div>\r\n                        </div>-->\r\n\r\n                      <div class=\"form-group col-lg-12\" [ngClass]=\"{'has-error': (v_pabs.touched || v_pabs.dirty) && !v_pabs.valid}\">\r\n                        <label>Project Abstract *</label>\r\n                        <span class=\"text-danger\" *ngIf=\"(v_pabs.touched || v_pabs.dirty) && v_pabs.errors?.required\">\r\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter a Short Description</span>\r\n                        <span class=\"text-danger\" *ngIf=\"(v_pabs.touched || v_pabs.dirty) && v_pabs.errors?.minlength\">\r\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter minimum 50 character</span>\r\n                        <textarea style=\"resize:none;\" #v_pabs=\"ngModel\" required minlength=\"50\" id=\"abstract\" maxlength=\"1000\" [(ngModel)]='new_project.abs'\r\n                          type=\"text\" class=\"form-control\" placeholder=\"Minimin 50, Maximum 1000 characters, please enter full details in Description below\"\r\n                          name=\"abs\"></textarea>\r\n\r\n                      </div>\r\n\r\n                      <div class=\"form-group col-lg-12\">\r\n                        <label class=\"control-label\">Related Areas *</label>\r\n                        <span class=\"text-danger\" *ngIf=\"areaneeded\">\r\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please select at least one Related Area </span>\r\n                        <br>\r\n                        <div *ngFor=\"let area of new_project.areas\" class=\"col-lg-3\">\r\n                          <div class=\"checkbox checkbox-info checkbox-inline\">\r\n                            <input  type=\"checkbox\" [(ngModel)]='area.value' [name]=\"area.tag_name\" >\r\n                            <label> {{area.tag_name}} </label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group col-lg-12\" [ngClass]=\"{'has-error': (v_plongdes.touched || v_plongdes.dirty) && !v_plongdes.valid}\">\r\n                        <div class=\"hpanel\">\r\n                          <label>Description *</label>\r\n                        <span class=\"text-danger\" *ngIf=\"(v_plongdes.touched || v_plongdes.dirty) && v_plongdes.errors?.required\">\r\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter a Detailed Description</span>\r\n                        <span class=\"text-danger\" *ngIf=\"(v_plongdes.touched || v_plongdes.dirty) && v_plongdes.errors?.minlength\">\r\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter minimum 50 character</span>\r\n                          <textarea style=\"resize:none;\" #v_plongdes=\"ngModel\" required minlength=\"50\" rows=\"10\" maxlength=\"2000\" id=\"longdes\" [(ngModel)]='new_project.about'\r\n                            type=\"text\" class=\"form-control\" placeholder=\"Longer than short description! Put all the details!\"\r\n                            name=\"about\"></textarea>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n\r\n              <div class=\"text-right m-t-xs\">\r\n\r\n                <a class=\"btn btn-info\" [ngClass]=\"{'disabled':!projectForm.valid}\" *ngIf=\"steps==1\" (click)=\"getData()\">Submit</a>\r\n\r\n              </div>\r\n\r\n            </div>\r\n          </form>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

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
exports.push([module.i, "\r\nbutton  {\r\n  position: relative;\r\n}\r\n\r\n.dislike {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 75%;\r\n  width: 100%;\r\n  content: attr(title);\r\n  color: #000;\r\n  line-height: 1.4em;\r\n  border: 1px solid #000;\r\n}\r\n\r\n.glyphicon-refresh-animate {\r\n  -animation: spin .7s infinite linear;\r\n  -webkit-animation: spin2 .7s infinite linear;\r\n}\r\n\r\n@-webkit-keyframes spin2 {\r\n  from { -webkit-transform: rotate(0deg);}\r\n  to { -webkit-transform: rotate(360deg);}\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\r\n  to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\r\n}\r\n\r\n@keyframes spin {\r\n  from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\r\n  to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\r\n}\r\n\r\n.btn-static {\r\n  background-color: white;\r\n  border: 1px solid white;\r\n  cursor: default;\r\n}\r\n.btn-static:active {\r\n  box-shadow:         inset 0 0 0px white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/projects/projectDetail/projectDetail.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"small-header transition\">\r\n    <div class=\"hpanel\">\r\n        <div class=\"panel-body\">\r\n\r\n\r\n            <div id=\"hbreadcrumb\" class=\"pull-right\">\r\n                <ol class=\"hbreadcrumb breadcrumb\">\r\n                    <li>\r\n                        <a [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n                    </li>\r\n                    <li>\r\n                      <a [routerLink]=\"['/projects']\">Projects</a>\r\n                    </li>\r\n                    <li class=\"active\">\r\n                        <span>Project details</span>\r\n                    </li>\r\n                </ol>\r\n            </div>\r\n            <h2 class=\"font-light m-b-xs\">\r\n                Project details\r\n            </h2>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content\" *ngIf=\"!project\">\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md-12\">\r\n\r\n            <div class=\"hpanel\">\r\n                <div class=\"panel-body\">\r\n                  <button  class=\"btn btn-static\"><span class=\"glyphicon glyphicon-refresh glyphicon-refresh-animate\"></span> Loading...Please wait.</button>\r\n\r\n                </div>\r\n    \t\t</div>\r\n    \t</div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class=\"content\" *ngIf=\"project\">\r\n\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md-12\">\r\n\r\n            <div class=\"hpanel\">\r\n                <div class=\"panel-body\">\r\n\r\n\r\n                    <h2 class=\"m-t-none\">{{project.pid}}: {{project.name}}\r\n                        <span class=\"pull-right text-right text-success\">\r\n                            {{project.liked_number}} Likes\r\n                            <br/>\r\n                          <div  *ngIf=\"user.role=='Supervisor' && !has_sup\" >\r\n                        <a class=\"btn btn-success\" (click)=\"claimProject(user.uid, project.pid)\">Supervise</a></div>\r\n                          <div  *ngIf=\"user.role=='Student'&& !user.has_team\" >\r\n                            <a data-toggle=\"modal\" data-target=\"#myJoin\" class=\"btn btn-warning btn-outline btn-block\" ><!--(click)=\"getData()\"-->Join</a></div>\r\n                           <div data-toggle=\"modal\" data-target=\"#myJoinsuc\" *ngIf=\"user.role=='Student' && user.has_team\" >\r\n                            <a class=\"btn btn-warning btn-outline btn-block\" ><!--(click)=\"getData()\"-->Join</a></div>\r\n                        </span>\r\n                    </h2>\r\n\r\n\r\n                    <!-- button class=\"btn btn-danger btn-xs\">  Closed</button-->\r\n\r\n                    <div class=\"small m-t-xs\">\r\n                        <h5>\r\n                          <strong>Create by:</strong><a [routerLink]=\"['/users', project.ownerid]\"> {{project.owner_first_name}} {{project.owner_last_name}} ({{project.owner_role}})</a>\r\n                            <small>{{project.created | date:'yyyy-MM-dd HH:mm'}}</small>\r\n                        </h5>\r\n                        <h5 *ngIf=\"project.supervisor\">\r\n                          <strong>Supervisor: </strong><a [routerLink]=\"['/users', project.sid]\">{{project.supervisor}}</a></h5>\r\n                        <h5 *ngIf=\"project.team_member_number!=0\">\r\n                            <strong>Members: </strong>{{project.team_member_name}}</h5>\r\n\r\n                        <br/>\r\n\r\n                        <div  class=\"col-md-6\">\r\n                            <small *ngIf=\"project.status=='Open'\" class=\"label label-success \">OPEN</small>\r\n                            <small *ngIf=\"project.status == 'Closed'\" class=\"label label-warning \">Closed</small>\r\n                            <strong>accept {{project.number_of_members}} students per group </strong>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-6\">\r\n\r\n                          <ng-container >\r\n                            <span *ngIf=\"like_or_not == false\">\r\n                             <span  (click)=\" like_or_not = true\" (click)=\"like(like_or_not,project.oid, project.pid)\"> <button class=\"btn btn-xs btn-default\"><i class=\"glyphicon glyphicon-heart-empty\" style=\"color:red\" ></i> Like </button></span>\r\n                            </span>\r\n                            <span *ngIf=\"like_or_not == true\" ><span (click)=\"like_or_not = false\" (click)=\"like(like_or_not,project.oid, project.pid)\">\r\n                               <button class=\"btn btn-xs btn-default\"><i class=\"glyphicon glyphicon-heart\" style=\"color:red\" ></i> Dislike </button></span></span>\r\n                           <!--<span *ngIf=\"like_or_not == true\" >\r\n                               <button class=\"btn btn-xs btn-default\"  disabled title=\"Please go to my profile\"><i class=\"glyphicon glyphicon-heart\" style=\"color:red\" ></i> Like </button></span>-->\r\n                          </ng-container>\r\n\r\n                            <span *ngIf=\"project.liked_number != 0\" >\r\n                                <span *ngIf=\"project.liked_number <3\" >\r\n                                  <strong>Liked by: </strong> <span *ngFor='let namestr of project.liked_people_name'> <a [routerLink]=\"['/users', namestr.uid]\">{{namestr.name}}</a>, </span> <a [routerLink]=\"['/users', last_liked.uid]\"><span>{{last_liked.name}}</span></a>\r\n                                </span>\r\n\r\n\r\n                              <span *ngIf=\"project.liked_number >=3\" >\r\n                                <ng-container>\r\n                                  <span *ngIf=\"expanded == false\"> <a [routerLink]=\"['/users', project.liked_people_name[0].uid]\">{{project.liked_people_name[0].name}}</a>,  <a [routerLink]=\"['/users', project.liked_people_name[1].uid]\">{{project.liked_people_name[1].name}}</a> and other {{greater}} people<span (click)=\"expanded = true\"><i class=\"fa fa-chevron-down\"></i></span></span>\r\n                                  <span *ngIf=\"expanded == true\"><span *ngFor='let namestr of project.liked_people_name' ><a [routerLink]=\"['/users', namestr.uid]\">{{namestr.name}}, </a></span>\r\n                                    <a [routerLink]=\"['/users', last_liked.uid]\"><span>{{last_liked.name}}. </span></a><span (click)=\"expanded = false\"><i class=\"fa fa-chevron-up\"></i></span></span>\r\n                                </ng-container>\r\n\r\n                              </span>\r\n                            </span>\r\n\r\n                            <br/>\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n                    <br/>\r\n                    <!-- <div class=\"m-t-md\">\r\n                            <a class=\"btn btn-xs btn-default\"><i class=\"fa fa-thumbs-up\"></i> Like </a>\r\n                            <a class=\"btn btn-xs btn-default\"><i class=\"fa fa-heart\"></i> Love</a>\r\n                            <a class=\"btn btn-xs btn-primary\"><i class=\"fa fa-pencil\"></i> Message</a>\r\n                        </div> -->\r\n                    <p>\r\n                        <br/> {{project.about}}\r\n                    </p>\r\n\r\n                    <br/>\r\n                    <br/>\r\n\r\n                    <div class=\"m-t-xs\" *ngIf=\"project.areas.length!=0\">\r\n\r\n                        <strong style=\"margin-right:1%\">Related Areas:</strong>\r\n                        <span style=\"margin-right:1%\" *ngFor='let area of project.areas'>{{area.tag_name}} </span>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"hpanel\">\r\n\r\n                <div class=\"panel-body\">\r\n                    <p>\r\n                        <strong>Discussion</strong>\r\n                    </p>\r\n                    <div class=\"hpanel hblue\">\r\n\r\n                        <div class=\"panel-body\">\r\n                            <div *ngFor='let comment of project.comments'>\r\n                                <div class=\"social-talk\">\r\n                                    <div class=\"media social-profile clearfix\">\r\n                                        <div class=\"media-body\">\r\n                                            <span class=\"font-bold\">{{comment.created_by.first_name}} {{comment.created_by.last_name}}</span>\r\n                                            <small class=\"text-muted\">{{comment.created_time | date:'yyyy-MM-dd HH:mm'}}</small>\r\n                                            <div class=\"social-content\">\r\n                                                {{comment.content}}\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"social-form\">\r\n                                <form action=\"#\" class=\"mt ng-untouched ng-pristine ng-valid\" novalidate=\"\">\r\n                                    <div class=\"form-group mb-0\">\r\n                                        <label class=\"sr-only\" for=\"new_comment\">New comment</label>\r\n                                        <textarea class=\"form-control\" id=\"new_comment\" style=\"resize:none\" placeholder=\"Your comment...\" rows=\"3\"></textarea>\r\n                                    </div>\r\n                                    <div class=\"btn-toolbar\">\r\n                                        <button class=\"btn btn-success btn-sm ml-auto\" type=\"submit\" (click)=\"newcomment(project.oid, project.pid)\">Post</button>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"hpanel\">\r\n\r\n                <div class=\"panel-body col-md-12\">\r\n\r\n                    <p>\r\n                        <strong>Recommended Projects</strong>\r\n                    </p>\r\n                    <div class=\"hpanel\" *ngIf=\"!project.recommend_roject\">\r\n\t\t                <div class=\"panel-body\">\r\n                      <button  class=\"btn btn-static\"><span class=\"glyphicon glyphicon-refresh glyphicon-refresh-animate\"></span> Loading...Please wait.</button>\r\n\t\t    \t\t\t</div>\r\n\t\t    \t\t</div>\r\n                    <div class=\"hpanel hblue\" *ngFor='let recproject of project.recommend_roject'>\r\n\t\t\t            <div class=\"panel-body\">\r\n\t\t\t              <div class=\"pull-right\">\r\n\t\t\t                <small *ngIf=\"recproject.status=='Open'\" class=\"label label-success \">OPEN</small>\r\n\t\t\t                <small *ngIf=\"recproject.status == 'Closed'\" class=\"label label-warning \">Closed</small>\r\n\t\t\t              </div>\r\n\t\t\t              <h4 class=\"m-t-none\">\r\n\t\t\t                <a [routerLink]=\"['/projects',recproject.pid]\" (click)=\"reload()\">{{recproject.name}}</a>\r\n\t\t\t              </h4>\r\n\t\t\t              <small>{{recproject.abs}}\r\n\t\t\t              </small>\r\n\t\t\t              <div class=\"m-t-md\">\r\n\t\t\t                <canvas id=\"lineOptions\" height=\"10\"></canvas>\r\n\t\t\t              </div>\r\n\t\t\t            </div>\r\n\t\t\t          </div>\r\n                    <!-- div class=\"table-responsive\">\r\n                        <table class=\"table table-hover table-bordered table-striped\">\r\n                            <tbody>\r\n                                <tr>\r\n                                    <th>\r\n                                        Status\r\n                                    </th>\r\n                                    <th>\r\n                                        Project ID\r\n                                    </th>\r\n                                    <th>\r\n                                        Project Title\r\n                                    </th>\r\n                                    <th>\r\n                                        Project Abstract\r\n                                    </th>\r\n                                </tr>\r\n                                <tr *ngFor='let recproject of project.recommend_roject'>\r\n                                    <td>\r\n                                    \t<small *ngIf=\"recproject.status=='Open'\" class=\"label label-success \">OPEN</small>\r\n                           \t\t\t\t<small *ngIf=\"recproject.status == 'Closed'\" class=\"label label-warning \">Closed</small>\r\n                                    </td>\r\n                                    <td class=\"issue-info\">\r\n                                        <a [routerLink]=\"['/projects', recproject.pid]\">\r\n                                            {{recproject.pid}}\r\n                                        </a>\r\n                                    </td>\r\n                                    <td>\r\n                                        <a [routerLink]=\"['/projects', recproject.pid]\">\r\n                                        \t{{recproject.name}}\r\n                                        </a>\r\n                                    </td>\r\n                                    <td>\r\n                                        <a [routerLink]=\"['/projects', recproject.pid]\">\r\n                                        \t{{recproject.abs}}\r\n                                        </a>\r\n                                    </td>\r\n                                </tr>\r\n\r\n                            </tbody>\r\n                        </table>\r\n                    </div-->\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<!--for team-->\r\n<div class=\"modal fade\" id=\"myJoin\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"color-line\"></div>\r\n        <div class=\"modal-header text-center\">\r\n          <h4  class=\"modal-title\">Join</h4>\r\n          <span class=\"font-bold\">You don't have a team yet, please join or create a team</span>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row text-center\">\r\n            <div class=\"col-sm-6\">\r\n\r\n              <button [routerLink]=\"['/teams']\" data-dismiss=\"modal\" type=\"button\" class=\"btn btn-info btn-lg\">Join</button>\r\n\r\n            </div>\r\n\r\n            <div class=\"col-sm-6\">\r\n              <button [routerLink]=\"['/teams/create']\" data-dismiss=\"modal\" type=\"button\" class=\"btn btn-warning btn-lg\">Create</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n                <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n            </div> -->\r\n      </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"myJoinsuc\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"color-line\"></div>\r\n      <div class=\"modal-header text-center\">\r\n        <h3 class=\"font-bold\">Please enter the password to join</h3>\r\n        <a class=\"btn btn-warning col-lg-pull-2\"> <input  type=\"password\" title=\"Please enter your password\" placeholder=\"*********\" required=\"\" value=\"\" name=\"password\" class=\"form-control\">Join</a>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

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
        this.getData();
        console.log('test123: ', this.expanded);
    };
    ProjectDetailComponent.prototype.like = function (like_or_not, uid, pid) {
        //this.getData();
        //console.log('liked:', like_or_not, 'uid:', uid, 'pid:', pid);
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
            console.log('uidiod', _this.currentuid);
            if (_this.currentuid) {
                _this._userService.getRealUser(_this.currentuid) /*RealUser*/
                    .subscribe(function (_users) {
                    _users.first = _users.first;
                    _users.last = _users.last;
                    _users.role = _users.groups;
                    _users.uid = _this.currentuid;
                    //console.log('test', _users.role);
                    _this._userService.getProfile(_this.currentuid)
                        .subscribe(function (_data) {
                        var _user = {};
                        if (_data.team) {
                            _user.has_team = true;
                            //  _user.team.tid = _data.team.pk;
                            //this.user = _users;
                            /*   this._teamService.getTeam()
                                 .subscribe(_team => {
                                   _users.team = _team;
                                   _users.team.tid = _team.tid;
                                   //add tid
          
                                   //console.log('user team', _user.team);
                                 });*/ // not necessary
                        }
                        else {
                            _users.has_team = false;
                        }
                        _users.has_team = _user.has_team;
                    });
                    if (_users.role[0] === 1) {
                        _users.role = 'Supervisor';
                    }
                    if (_users.role[0] === 2) {
                        _users.role = 'Student';
                    }
                    _this.user = _users;
                    console.log("user role: ", _users.uid);
                    var pid = +_this._route.snapshot.paramMap.get('pid');
                    var uid = _this.user.uid;
                    _this._projectService.getProject(pid)
                        .subscribe(function (_project) {
                        _project.created = _project.created_date;
                        _project.pid = _project.project_id;
                        //_project.owner = _project.project_id;
                        _project.owner_first_name = _project.created_by.first_name;
                        _project.owner_last_name = _project.created_by.last_name;
                        _project.ownerid = _project.created_by.pk;
                        _project.sid = _project.created_by.pk;
                        _project.owner_role = _project.created_by.role;
                        if (_project.owner_role === 'Supervisor' || _project.owner_role === 'supervisor') {
                            _this.isSup = true;
                            // console.log('sid', _project.sid);
                        }
                        console.log('are y0ou kidding', _this.user.uid);
                        _this._userService.getUser(uid)
                            .subscribe(function (_user) {
                            _project.oid = uid; /////////////// make this equal to _user.uid;
                            if (_this.first) {
                                _this.first = false;
                                _this._projectService.getUserLikedProject(uid)
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
                                    console.log("liked user por:", _this.like_or_not);
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
                            for (var x = 0; x < _project.liked_by_people_number - 1; x++) {
                                _project.liked_people_name.push({ 'name': _project.liked_by_people[x].first_name + " " + _project.liked_by_people[x].last_name, 'uid': _project.liked_by_people[x].pk });
                            }
                            if (_project.liked_by_people_number != 0) {
                                _this.last_liked = { 'name': _project.liked_by_people[_project.liked_by_people_number - 1].first_name + " " + _project.liked_by_people[_project.liked_by_people_number - 1].last_name, 'uid': _project.liked_by_people[_project.liked_by_people_number - 1].pk };
                                _project.liked_people_str = " ";
                            }
                            console.log('hey', _project.liked_people_name, _this.last_liked, _project.liked_by_people_number);
                            if (_project.supervisor) {
                                _this.has_sup = true;
                                if (_project.owner_first_name === _project.supervisor.first_name && _project.owner_last_name === _project.supervisor.last_name) {
                                    _project.owner_role = 'Professor';
                                }
                                _project.supervisor = _project.supervisor.first_name + " " + _project.supervisor.last_name;
                            }
                            else {
                                _this.has_sup = false;
                            }
                            _project.comments = _project.comments;
                            _project.s_str = _project.pid + " " + " " + _project.name + " " + _project.owner + " " + _project.status + " " + _project.tag + _project.abs;
                            _this.project = _project;
                            _this._projectService.getRecommendedProject(pid, uid) /////////////// make this equal to _user.uid;
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

module.exports = "<div class=\"small-header\">\r\n<div class=\"small-header\">\r\n  <div class=\"hpanel\">\r\n    <div class=\"panel-body\">\r\n      <div id=\"hbreadcrumb\" class=\"pull-right\">\r\n        <ol class=\"hbreadcrumb breadcrumb\">\r\n          <li>\r\n            <a [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n          </li>\r\n          <li>\r\n            <a [routerLink]=\"['/projects/project-profile',uid]\">My Project</a>\r\n          </li>\r\n          <li class=\"active\">\r\n            <span>Edit a Project </span>\r\n          </li>\r\n        </ol>\r\n      </div>\r\n      <h2 class=\"font-light m-b-xs\">\r\n        Edit Project: {{my_project.pid}}\r\n      </h2>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"content\" *ngIf=\"my_project?.oid == 0\">\r\n\t<div class=\"row\">\r\n\r\n        <div class=\"col-md-12\">\r\n\r\n            <div class=\"hpanel\">\r\n                <div class=\"panel-body\">\r\n   \t\t\t\t\t <h3>It looks like you do not have the permission to edit this project :(</h3>\r\n    \t\t\t</div>\r\n    \t\t</div>\r\n    \t</div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content\" *ngIf=\"my_project?.oid != 0\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"hpanel\">\r\n\r\n        <div class=\"panel-body\">\r\n\r\n          <form (ngSubmit)=\"save()\" #projectForm=\"ngForm\">\r\n\r\n            <div class=\"text-center m-b-md\" id=\"wizardControl\">\r\n\r\n\r\n            </div>\r\n\r\n            <div class=\"tab-content\">\r\n              <div *ngIf=\"steps==1\" [ngClass]=\"{'active':steps==1}\" class=\"p-m tab-pane\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12\">\r\n                    <div class=\"row\">\r\n                      <div class=\"form-group col-lg-12\" [ngClass]=\"{'has-error': (v_pname.touched || v_pname.dirty) && !v_pname.valid}\">\r\n                        <label>Project Title *</label>\r\n                        <span class=\"text-danger\" *ngIf=\"(v_pname.touched || v_pname.dirty) && v_pname.errors?.required\">\r\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter a Project Title</span>\r\n                        <span class=\"text-danger\" *ngIf=\"(v_pname.touched || v_pname.dirty) && v_pname.errors?.minlength\">\r\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter minimum 10 character</span>\r\n                        <input #v_pname=\"ngModel\" required minlength=\"10\" [(ngModel)]='my_project.name' type=\"text\" class=\"form-control\" placeholder='my_project.name'\r\n                          name=\"name\" id='titlename'>\r\n                      </div>\r\n                      <div class=\"form-group col-lg-6\">\r\n                        <label>Number of Members *</label>\r\n                        <span class=\"text-danger\" *ngIf=\"sizeneeded\">\r\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please select team size </span>\r\n                        <br>\r\n                        <div *ngFor=\"let number of my_project.size\" class=\"col-lg-3\">\r\n                          <div class=\"checkbox checkbox-info checkbox-inline\">\r\n                            <input (click)=\"selectsize(name)\" type=\"checkbox\" [(ngModel)]='number.value' [name]=\"number.label\">\r\n                            <label> {{number.label}} </label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div  *ngIf=\"my_project?.owner_role=='Supervisor'\" class=\"form-group col-lg-6\">\r\n                        <label>Status *<small>(only supervisor can change the status)</small></label>\r\n                        <br>\r\n                        <span class=\"text-danger\" *ngIf=\"statusneeded\">\r\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please select project status </span>\r\n                        <div *ngFor=\"let status of my_project.status\" class=\"col-lg-3\">\r\n                          <small *ngIf=\"my_project.owner_first_name==user.first && my_project.owner_last_name==user.last\">\r\n                          <div class=\"checkbox checkbox-info checkbox-inline\">\r\n                            <input (click)=\"selectstatus(name)\" type=\"checkbox\" [(ngModel)]='status.value' [name]=\"status.label\">\r\n                            <label> {{status.label}} </label>\r\n                          </div></small>\r\n                          <small *ngIf=\"my_project.owner_first_name!=user.first || my_project.owner_last_name!=user.last\">\r\n                            <div class=\"checkbox checkbox-info checkbox-inline\">\r\n                              <input (click)=\"selectstatus(name)\" disabled=\"disabled\" type=\"checkbox\"  [(ngModel)]='status.value' [name]=\"status.label\">\r\n                              <label> {{status.label}} </label>\r\n                            </div></small>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group col-lg-12\" [ngClass]=\"{'has-error': (v_pabs.touched || v_pabs.dirty) && !v_pabs.valid}\">\r\n                        <label>Project Abstract *</label>\r\n                        <span class=\"text-danger\" *ngIf=\"(v_pabs.touched || v_pabs.dirty) && v_pabs.errors?.required\">\r\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter a Short Description</span>\r\n                        <span class=\"text-danger\" *ngIf=\"(v_pabs.touched || v_pabs.dirty) && v_pabs.errors?.minlength\">\r\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter minimum 50 character</span>\r\n                        <textarea style=\"resize:none;\" #v_pabs=\"ngModel\" required minlength=\"50\" rows=\"6\" required maxlength=\"1000\" [(ngModel)]='my_project.abs'\r\n                          type=\"text\" class=\"form-control\" placeholder=\"Minimin 50, Maximum 1000 characters, please enter full details in Description below\"\r\n                          name=\"abs\" id=\"abstract\"></textarea>\r\n\r\n                      </div>\r\n\r\n\r\n                        <div class=\"form-group col-lg-12\">\r\n                        <label class=\"control-label\">Related Areas *</label>\r\n                        <span class=\"text-danger\" *ngIf=\"areaneeded\">\r\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please select at least one Related Area </span>\r\n                        <br>\r\n                        <div *ngFor=\"let area of my_project.areas\" class=\"col-lg-3\">\r\n                          <div class=\"checkbox checkbox-info checkbox-inline\">\r\n                            <input type=\"checkbox\" [(ngModel)]='area.value' [name]=\"area.tag_name\">\r\n                            <label> {{area.tag_name}} </label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"col-lg-12\" [ngClass]=\"{'has-error': (v_plongdes.touched || v_plongdes.dirty) && !v_plongdes.valid}\">\r\n                        <div class=\"hpanel\">\r\n                          <label>Description *</label>\r\n                        <span class=\"text-danger\" *ngIf=\"(v_plongdes.touched || v_plongdes.dirty) && v_plongdes.errors?.required\">\r\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter a Detailed Description</span>\r\n                        <span class=\"text-danger\" *ngIf=\"(v_plongdes.touched || v_plongdes.dirty) && v_plongdes.errors?.minlength\">\r\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter minimum 50 character</span>\r\n                          <textarea style=\"resize:none;\" #v_plongdes=\"ngModel\" required minlength=\"50\" rows=\"10\" required maxlength=\"2000\" id=\"longdes\" [(ngModel)]='my_project.about'\r\n                            type=\"text\" class=\"form-control\" placeholder=\"Minimin 50, Maximum 2000 characters, please enter full details in Description below\"\r\n                            name=\"about\"></textarea>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n\r\n              <div class=\"text-right m-t-xs\">\r\n\r\n                <a class=\"btn btn-info\" [ngClass]=\"{'disabled':!projectForm.valid}\" *ngIf=\"steps==1\" (click)=\"getData()\">Submit</a>\r\n\r\n              </div>\r\n\r\n            </div>\r\n          </form>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

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
        this.my_project = {};
        this._homeService.get4id().subscribe(function (_data) {
            _this.currentuid = _data;
            _this.currentuid = _this.currentuid.user;
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
                _this.my_project.oid = _this.currentuid; ////////////////////////// make this one to _project.created_by.pk;
                //console.log('oid', this.my_project.oid);
                _this._userService.getRealUser(_this.currentuid)
                    .subscribe(function (_user) {
                    // if (this.my_project.oid !== _user.uid && this.my_project.owner_role !== 'Supervisor') {
                    // this.my_project.oid = 0;
                    //   }
                    //console.log(this.my_project.owner_role);
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
                _this.currentuid = _data;
                _this.currentuid = _this.currentuid.user;
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
exports.push([module.i, ".glyphicon-refresh-animate {\r\n  -animation: spin .7s infinite linear;\r\n  -webkit-animation: spin2 .7s infinite linear;\r\n}\r\n\r\n@-webkit-keyframes spin2 {\r\n  from { -webkit-transform: rotate(0deg);}\r\n  to { -webkit-transform: rotate(360deg);}\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\r\n  to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\r\n}\r\n\r\n@keyframes spin {\r\n  from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\r\n  to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\r\n}\r\n\r\n.btn-static {\r\n  background-color: white;\r\n  border: 1px solid white;\r\n  cursor: default;\r\n}\r\n.btn-static:active {\r\n  box-shadow:         inset 0 0 0px white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/projects/projectListing/projectListing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"small-header \">\r\n    <div class=\"hpanel\">\r\n        <div class=\"panel-body\">\r\n\r\n\r\n            <div id=\"hbreadcrumb\" class=\"pull-right\">\r\n                <ol class=\"hbreadcrumb breadcrumb\">\r\n                    <li>\r\n                        <a [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n                    </li>\r\n                    <li class=\"active\">\r\n                        <span>Projects</span>\r\n                    </li>\r\n                </ol>\r\n            </div>\r\n            <h2 class=\"font-light m-b-xs\">\r\n                Projects\r\n            </h2>\r\n            <!-- <button [routerLink]=\"['/projects/projectCreate']\" type=\"button\" class=\"btn btn-default btn-sm\">Create a Project</button> -->\r\n            <!-- <button [routerLink]=\"['/projects/projectSearch']\" type=\"button\" class=\"btn btn-default btn-sm\">Search Projects</button> -->\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content\">\r\n    <div style=\"margin-bottom:2%\">\r\n        <div class=\"input-group\">\r\n          <input id=\"search_str\" onkeypress=\"if (event.which==13) document.getElementById('search_button').click()\" [(ngModel)]=\"s_search\"\r\n                 class=\"form-control\" type=\"text\" placeholder=\"Search projects by project id, supervisor name...(seperated by space)\">\r\n          <div class=\"input-group-btn\">\r\n            <button id=\"search_button\" (click)=\"str_filter()\" class=\"btn btn-default\">\r\n              <i class=\"fa fa-search\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row projects\" *ngIf=\"!data_to_render\">\r\n        <div class=\"col-lg-12\">\r\n\r\n          <div class=\"hpanel\">\r\n            <div class=\"panel-body\">\r\n              <button  class=\"btn btn-static\"><span class=\"glyphicon glyphicon-refresh glyphicon-refresh-animate\"></span> Loading...Please wait.</button>\r\n              <!-- <h3>Please wait while we are loading projects :)</h3>-->\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\t</div>\r\n\r\n    <div class=\"row projects\">\r\n        <div class=\"col-lg-6\" style=\"height:385px\" *ngFor='let project of data_to_render'>\r\n            <div class=\"hpanel hblue\">\r\n                <div class=\"panel-body\">\r\n                    <!--<span class=\"label label-info pull-right\">NEW</span>-->\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-8\">\r\n                            <h4>\r\n                                <a [routerLink]=\"['/projects', project.pid]\">{{project.pid}}:</a>\r\n                                <br/>\r\n                                <a [routerLink]=\"['/projects', project.pid]\">{{project.name}}</a>\r\n                            </h4>\r\n                        </div>\r\n                        <div class=\"col-sm-4 project-info\">\r\n                            <div class=\"project-action m-t-md\">\r\n                                <div class=\"btn-group\">\r\n                                    <small  class=\"label label-danger \">\r\n                                        <i class=\"fa fa-thumbs-up\"></i> {{project.liked_number}} </small>\r\n                                    <button [routerLink]=\"['/projects', project.pid]\" class=\"btn btn-xs btn-default\"> View</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                            <p>\r\n                                <b>\r\n                                    <span style=\"margin-right:3%\" *ngFor=\"let area of project.areas\"> {{area.label}} </span>\r\n                                </b>\r\n                            </p>\r\n                            <textarea disabled rows=\"6\" style=\"border: none; resize:none; background-color:#FFFFFF; width: 100%\">{{project.abs}}</textarea>\r\n                        </div>\r\n                        <div class=\"col-sm-8\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-6\">\r\n                                    <div class=\"project-label\">CREATE BY</div>\r\n                                    <b>\r\n                                        <small>{{project.owner_role}}</small>\r\n                                    </b>\r\n                                    <br/>\r\n                                    <a [routerLink]=\"['/users', project.uid]\"><small>{{project.owner_first_name}} {{project.owner_last_name}}</small></a>\r\n                                </div>\r\n                                <!-- <div class=\"col-sm-3\">\r\n                                        <div class=\"project-label\">Posting Date</div>\r\n                                        <small>{{project.created}}</small>\r\n                                    </div> -->\r\n                                <div class=\"col-sm-6\">\r\n                                    <div class=\"project-label\">Status</div>\r\n                                    <small>{{project.status}}</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel-footer\">\r\n                    Posting Date: {{project.created | date:'yyyy-MM-dd'}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/projects/projectListing/projectListing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_service_project_service__ = __webpack_require__("../../../../../src/app/home/projects/project-service/project.service.ts");
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
    function ProjectListingComponent(_projectService) {
        this._projectService = _projectService;
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
            // console.log(this.projects);
            for (var i = 0; i < _projects.length; i++) {
                _projects[i].created = _projects[i].created_date;
                //  _projects[i].oid = _projects[i].project_id;
                _projects[i].pid = _projects[i].project_id;
                //_projects[i].owner = _projects[i].project_id;
                _projects[i].owner_first_name = _projects[i].created_by.first_name;
                _projects[i].owner_last_name = _projects[i].created_by.last_name;
                _projects[i].owner_role = _projects[i].created_by.role;
                if (_projects[i].owner_role === 'Supervisor') {
                    _projects[i].owner_role = 'Professor';
                }
                _projects[i].uid = _projects[i].created_by.pk;
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
    ProjectListingComponent.prototype.getData = function () {
    };
    ProjectListingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projectListing',
            template: __webpack_require__("../../../../../src/app/home/projects/projectListing/projectListing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/projects/projectListing/projectListing.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__project_service_project_service__["a" /* ProjectService */]])
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
exports.push([module.i, ".glyphicon-refresh-animate {\r\n  -animation: spin .7s infinite linear;\r\n  -webkit-animation: spin2 .7s infinite linear;\r\n}\r\n\r\n@-webkit-keyframes spin2 {\r\n  from { -webkit-transform: rotate(0deg);}\r\n  to { -webkit-transform: rotate(360deg);}\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\r\n  to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\r\n}\r\n\r\n@keyframes spin {\r\n  from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\r\n  to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\r\n}\r\n\r\n.btn-static {\r\n  background-color: white;\r\n  border: 1px solid lightgrey;\r\n  cursor: default;\r\n}\r\n.btn-static:active {\r\n  box-shadow:         inset 0 0 0px white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"small-header\">\r\n  <div class=\"hpanel\">\r\n    <div class=\"panel-body\">\r\n\r\n      <div id=\"hbreadcrumb\" class=\"pull-right\">\r\n        <ol class=\"hbreadcrumb breadcrumb\">\r\n          <li>\r\n            <a [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n          </li>\r\n          <li class=\"active\">\r\n            <span>Search</span>\r\n          </li>\r\n        </ol>\r\n      </div>\r\n      <h2 class=\"font-light m-b-xs\">\r\n        Search\r\n      </h2>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"content\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n      <div class=\"hpanel\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"m-b-md\">\r\n            <h4>\r\n              Advanced Filters\r\n              <span class=\"pull-right text-right\">\r\n                <div class=\"btn-group\">\r\n                  <button class=\"btn btn-xs btn-default\" (click)=\"clear_filter()\"> Clear All</button>\r\n                  <button class=\"btn btn-xs btn-default\" (click)=\"setall_filter()\"> Select All</button>\r\n                </div>\r\n              </span>\r\n            </h4>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\">Only Show</label>\r\n            <br>\r\n            <div class=\"checkbox checkbox-success\">\r\n              <input id=\"s_user\" type=\"checkbox\" [(ngModel)]=\"s_user\">\r\n              <label for=\"s_user\">\r\n                Users\r\n              </label>\r\n            </div>\r\n            <div class=\"checkbox checkbox-warning\">\r\n              <input id=\"s_team\" type=\"checkbox\" [(ngModel)]=\"s_team\">\r\n              <label for=\"s_team\">\r\n                Teams\r\n              </label>\r\n            </div>\r\n            <div class=\"checkbox checkbox-info\">\r\n              <input id=\"s_project\" type=\"checkbox\" [(ngModel)]=\"s_project\">\r\n              <label for=\"s_project\">\r\n                Projects\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\">Last activity</label>\r\n            <div class=\"input-daterange input-group\" id=\"datepicker\">\r\n              <input type=\"text\" id=\"date_start\" class=\"input-sm form-control\">\r\n              <span class=\"input-group-addon \">\r\n                <i class=\"fa fa-angle-right\"></i>\r\n              </span>\r\n              <input type=\"text\" id=\"date_end\" class=\"input-sm form-control\">\r\n            </div>\r\n          </div>\r\n\r\n          <div *ngIf=\"s_team\" class=\"form-group\">\r\n            <label class=\"control-label\">Team Size</label>\r\n            <div class=\"input-group\">\r\n              <input id=\"teamsize\" type=\"text\">\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"s_project\" class=\"form-group\">\r\n            <label class=\"control-label\">Project Size</label>\r\n            <div class=\"input-group\">\r\n              <input id=\"projectsize\" type=\"text\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\">Status</label>\r\n            <div class=\"input-group\">\r\n              <div class=\"checkbox checkbox-success\">\r\n                <input id=\"s_available\" type=\"checkbox\" [(ngModel)]=\"s_available\">\r\n                <label for=\"s_available\">\r\n                  Open\r\n                </label>\r\n              </div>\r\n              <div class=\"checkbox checkbox-success\">\r\n                <input id=\"s_complete\" type=\"checkbox\" [(ngModel)]=\"s_complete\">\r\n                <label for=\"s_complete\">\r\n                  Closed\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\">Areas</label>\r\n            <div class=\"input-group\">\r\n              <div *ngFor=\"let area of s_areas\" class=\"checkbox checkbox-success\">\r\n                <input type=\"checkbox\" [(ngModel)]='area.value' [name]=\"area.tag_name\">\r\n                <label> {{area.tag_name}} </label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <button (click)=\"bool_filter()\" class=\"btn btn-success btn-block\">Apply</button>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col-md-9\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n          <div class=\"hpanel\">\r\n            <div class=\"panel-body\">\r\n              <div class=\"input-group\">\r\n                <input id=\"search_str\" onkeypress=\"if (event.which==13) document.getElementById('search_button').click()\" [(ngModel)]=\"s_search\"\r\n                  class=\"form-control\" type=\"text\" placeholder=\"Search users / teams / projects .. (seperated by space)\">\r\n                <div class=\"input-group-btn\">\r\n                  <button id=\"search_button\" (click)=\"str_filter()\" class=\"btn btn-default\">\r\n                    <i class=\"fa fa-search\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-lg-12\">\r\n\r\n\t\t  <div class=\"hpanel\" *ngIf=\"!data_to_render\">\r\n\r\n\t\t\t        <div class=\"col-md-12\">\r\n\r\n\t\t\t            <div class=\"hpanel\">\r\n\t\t\t                <div class=\"panel-body\">\r\n                        <button  class=\"btn btn-static\"><span class=\"glyphicon glyphicon-refresh glyphicon-refresh-animate\"></span> Loading...Please wait.</button>\r\n\t\t\t   \t\t\t\t\t <!--<h3>Please wait while we are loading :)</h3>-->\r\n\t\t\t    \t\t\t</div>\r\n\t\t\t    \t\t</div>\r\n\t\t\t    </div>\r\n\r\n\t\t\t</div>\r\n          <div *ngFor=\"let item of data_to_render\" class=\"hpanel filter-item\">\r\n            <a href=\"#\">\r\n              <div class=\"panel-body\">\r\n                <div class=\"col-sm-8\">\r\n                  <h4 *ngIf=\"item.name\" class=\"m-b-xs\">{{item.name}}</h4>\r\n                  <div style=\"word-wrap: break-word;\">\r\n                    <small style=\"margin-right:1%\" *ngFor='let tag of item.tags'>{{tag}}</small>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                  <div class=\"text-right\">\r\n                    <small class=\"stat-label\">Last activity: {{item.modified_str | date:'yyyy-MM-dd HH:mm'}}</small>\r\n                    <div class=\"progress m-t-xs full progress-striped active\">\r\n                      <div *ngIf=\"item.uid\" [ngStyle]=\"{'width': item.status + '%'}\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"100\"\r\n                        role=\"progressbar\" class=\" progress-bar\" [ngClass]=\"{'progress-bar-success':item.uid}\">\r\n                      </div>\r\n                      <div *ngIf=\"item.tid\" [ngStyle]=\"{'width':  item.status + '%'}\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"100\"\r\n                        role=\"progressbar\" class=\" progress-bar\" [ngClass]=\"{'progress-bar-warning': item.tid}\">\r\n                      </div>\r\n                      <div *ngIf=\"item.pid && item.status=='Open'\" [ngStyle]=\"{'width': '1%'}\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"100\"\r\n                        role=\"progressbar\" class=\" progress-bar\" [ngClass]=\"{'progress-bar-info': item.pid}\">\r\n                      </div>\r\n                      <div *ngIf=\"item.pid && item.status=='Closed'\" [ngStyle]=\"{'width': '100%'}\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"100\"\r\n                        role=\"progressbar\" class=\" progress-bar\" [ngClass]=\"{'progress-bar-info': item.pid}\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </a>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n"

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
        // this.data = this._searchService.getData();
        var _this = this;
        this._userService.getProfiles()
            .subscribe(function (_users) {
            _this.users = [];
            for (var i = 0; i < _users.length; i++) {
                var item = {};
                item.created = new Date();
                item.modified = new Date();
                item.modified_str = item.modified.toISOString().substring(0, 10);
                item.uid = _users[i].user.pk;
                item.first = _users[i].user.first_name;
                item.last = _users[i].user.last_name;
                item.name = item.first + ' ' + item.last;
                item.email = _users[i].email;
                item.status = 30;
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
            _this._teamService.getTeams()
                .subscribe(function (_teams) {
                for (var i = 0; i < _teams.length; i++) {
                    _teams[i].created = new Date();
                    _teams[i].modified = new Date();
                    _teams[i].modified_str = _teams[i].modified.toISOString().substring(0, 10);
                    _teams[i].tag ? _teams[i].tags = _teams[i].tag.split(" ") : null;
                    _teams[i].s_name = _teams[i].name;
                    _teams[i].s_str = _teams[i].tid + " " + _teams[i].oid + " " + _teams[i].name + " " + _teams[i].owner + " " + _teams[i].email + " " + _teams[i].tag;
                    _teams[i].s_str = _teams[i].s_str.toUpperCase();
                }
                _this.teams = _teams;
                _this._projectService.getProjects()
                    .subscribe(function (_projects) {
                    // console.log(this.projects);
                    for (var i = 0; i < _projects.length; i++) {
                        _projects[i].created = _projects[i].created_date;
                        _projects[i].modified_str = _projects[i].created_date;
                        _projects[i].pid = _projects[i].project_id;
                        _projects[i].owner_first_name = _projects[i].created_by.first_name;
                        _projects[i].owner_last_name = _projects[i].created_by.last_name;
                        _projects[i].owner_role = _projects[i].created_by.role;
                        //console.log(_projects[i].owner_first_name);
                        _projects[i].name = _projects[i].project_title;
                        _projects[i].liked_number = _projects[i].liked_by_people_number;
                        _projects[i].abs = _projects[i].project_short_description;
                        _projects[i].about = _projects[i].project_detailed_description;
                        _projects[i].areas = new Array();
                        for (var x = 0; x < _projects[i].related_areas.length; x++) {
                            // console.log(_projects[i].related_areas[3]);
                            _projects[i].areas.push({ 'tag_name': _projects[i].related_areas[x], 'value': true });
                        }
                        _projects[i].tags = _projects[i].related_areas;
                        //console.log(_projects[i].tags);
                        _projects[i].status = _projects[i].project_status;
                        _projects[i].s_str = _projects[i].pid + " " + " " + _projects[i].name + " " + _projects[i].owner_first_name + " " + _projects[i].owner_last_name + " " + _projects[i].status + " " + _projects[i].abs;
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
                        _this.data = _this.data.concat(_this.users, _this.teams, _this.projects);
                        _this.data_to_render = _this.data;
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
        $("#projectsize").TouchSpin({
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
            this.data_to_render = this.data;
            return;
        }
        console.log("str_filter:", typeof this.s_search, this.s_search.length, this.s_search);
        this.filtered = [];
        this.s_search = this.s_search.trim();
        var keys = this.s_search.split(" ");
        console.log("keys:", typeof keys, keys.length, keys);
        var str;
        this.data.forEach(function (data) {
            for (var i = 0; i < keys.length; i++) {
                if (data.s_str.indexOf(keys[i].toUpperCase()) !== -1) {
                    console.log("Matched", data.s_str, keys[i]);
                    _this.filtered.push(data);
                }
            }
        });
        //this.filtered.sort();
        this.data_to_render = this.filtered;
        this.untouched_filter() ? null : this.bool_filter();
    };
    SearchComponent.prototype.bool_filter = function () {
        console.log(typeof this.users[1].areas, this.users[1].areas);
        // console.log("Team Size:", $('#teamsize').val());
        if (this.untouched_filter()) {
            this.str_filter();
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
                if (this.data_to_render[i].pid != undefined && this.date_check(this.data_to_render[i].modified)) {
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

module.exports = "<div id=\"header\">\r\n  <div class=\"color-line\">\r\n  </div>\r\n  <div id=\"logo\" class=\"light-version\">\r\n    <strong><h4>\r\n      ECE496</h4>\r\n    </strong>\r\n  </div>\r\n  <nav role=\"navigation\">\r\n    <div class=\"header-link hide-menu\">\r\n      <i class=\"fa fa-bars\"></i>\r\n    </div>\r\n    <div class=\"small-logo\">\r\n      <span class=\"text-primary\">ECE496</span>\r\n    </div>\r\n    <!-- <form role=\"search\" class=\"navbar-form-custom\" method=\"post\" action=\"#\">\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" placeholder=\"Search something special\" class=\"form-control\" name=\"search\">\r\n      </div>\r\n    </form> -->\r\n    <div class=\"mobile-menu\">\r\n      <button type=\"button\" class=\"navbar-toggle mobile-menu-toggle\" data-toggle=\"collapse\" data-target=\"#mobile-collapse\">\r\n        <i class=\"fa fa-chevron-down\"></i>\r\n      </button>\r\n      <div class=\"collapse mobile-navbar\" id=\"mobile-collapse\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <!-- <li>\r\n            <a class=\"\" [routerLink]=\"['/user']\">Profile</a>\r\n          </li> -->\r\n          <li>\r\n            <a class=\"\" (click)=\"logout()\">Logout</a>\r\n          </li>\r\n\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"navbar-right\">\r\n      <ul class=\"nav navbar-nav no-borders\">\r\n        <li class=\"dropdown\">\r\n          <a (click)=\"logout()\">\r\n            <i class=\"pe-7s-upload pe-rotate-90\"></i>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</div>\r\n"

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

module.exports = "<div class=\"error-container\">\r\n  <i class=\"pe-7s-way text-success big-icon\"></i>\r\n  <h1>404</h1>\r\n  <strong>Page Not Found</strong>\r\n  <p>\r\n    Sorry, but the page you are looking for has note been found. Try checking the URL for error, then hit the refresh button\r\n    on your browser or try found something else in our app.\r\n  </p>\r\n</div>"

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
        this.url = 'http://api.ece496.com/team_finder';
        this.rest = '/common/';
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
        return this._http.get('http://api.ece496.com/team_finder/getlogin', this.httpOptions());
    };
    HomeService.prototype.likeHelper = function (type, source_id, target_id) {
        var _payload = {
            'type': type,
            'source_id': source_id,
            'target_id': target_id
        };
        return this._http.post(this.url, _payload, this.httpOptions());
    };
    HomeService.prototype.viewHelper = function (source_id, target_id) {
        var _payload = {
            'source_id': source_id,
            'target_id': target_id
        };
        return this._http.post(this.url, _payload, this.httpOptions());
    };
    HomeService.prototype.getTimeline = function () {
        return this._http.get(this.url, this.httpOptions());
    };
    HomeService.prototype.postTimeline = function (_payload) {
        return this._http.post(this.url, _payload, this.httpOptions());
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

module.exports = "<aside id=\"menu\">\r\n  <div id=\"navigation\">\r\n    <div class=\"profile-picture\" *ngIf=\"ready\">\r\n      <a [routerLink]=\"['/users', user.uid]\">\r\n        <img src=\"assets/pdefault.jpg\" class=\"img-circle m-b\" alt=\"logo\">\r\n      </a>\r\n\r\n      <div class=\"stats-label text-color\">\r\n        <!--span class=\"font-extra-bold font-uppercase\">Robert Razer</span-->\r\n        <div class=\"dropdown\">\r\n          <a class=\"dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\">\r\n            <span class=\"font-extra-bold font-uppercase\">{{user.first}} {{user.last}}\r\n              <b class=\"caret\"></b>\r\n            </span>\r\n          </a>\r\n          <ul class=\"dropdown-menu animated flipInX m-t-xs\">\r\n\r\n            <li>\r\n              <a [routerLink]=\"['/users', user.uid]\">My Profile</a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['/teams', user.tid]\">My Team</a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['/projects/project-profile', user.uid]\">My Project</a>\r\n            </li>\r\n\r\n            <li class=\"divider\"></li>\r\n            <li>\r\n              <a href=\"login.html\">Logout</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <ul class=\"nav\" id=\"side-menu\">\r\n      <li>\r\n        <a [routerLink]=\"['/dashboard']\">\r\n          <span class=\"nav-label\">Dashboard</span>\r\n          <span class=\"label label-success pull-right\">Beta</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a data-toggle=\"modal\" data-target=\"#myModal\">Create</a>\r\n        <!-- <a [routerLink]=\"['/create']\">Create</a> -->\r\n      </li>\r\n      <li>\r\n        <a [routerLink]=\"['/search']\">\r\n          <span class=\"nav-label\">Search</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a [routerLink]=\"['/users']\">\r\n          <span class=\"nav-label\">Users</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a [routerLink]=\"['/projects']\">\r\n          <span class=\"nav-label\">Projects</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a [routerLink]=\"['/teams']\">\r\n          <span class=\"nav-label\">Teams</span>\r\n        </a>\r\n      </li>\r\n\r\n      <li>\r\n        <a [routerLink]=\"['/faq']\">\r\n          <span class=\"nav-label\">FAQ</span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</aside>\r\n\r\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"color-line\"></div>\r\n      <div class=\"modal-header text-center\">\r\n        <h4 class=\"modal-title\">CREATE</h4>\r\n        <small class=\"font-bold\">Please select the type you would like to create</small>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"row text-center\">\r\n          <div class=\"col-sm-6\">\r\n\r\n            <button [routerLink]=\"['/projects/create']\" data-dismiss=\"modal\" type=\"button\" class=\"btn btn-info btn-lg\">PROJECT</button>\r\n\r\n          </div>\r\n\r\n          <div class=\"col-sm-6\">\r\n            <button [routerLink]=\"['/teams/create']\" data-dismiss=\"modal\" type=\"button\" class=\"btn btn-warning btn-lg\">TEAM</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n              <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n          </div> -->\r\n    </div>\r\n  </div>\r\n</div>"

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

module.exports = "<div class=\"small-header\">\r\n  <div class=\"hpanel\">\r\n    <div class=\"panel-body\">\r\n      <div id=\"hbreadcrumb\" class=\"pull-right\">\r\n        <ol class=\"hbreadcrumb breadcrumb\">\r\n          <li>\r\n            <a [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n          </li>\r\n          <li>\r\n            <a [routerLink]=\"['/create']\">Create</a>\r\n          </li>\r\n          <li class=\"active\">\r\n            <span>Create a team </span>\r\n          </li>\r\n        </ol>\r\n      </div>\r\n      <h2 class=\"font-light m-b-xs\">\r\n        Create a team\r\n      </h2>\r\n      <small>Good luck!</small>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"content\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"hpanel\">\r\n\r\n        <div class=\"panel-body\">\r\n\r\n          <form (ngSubmit)=\"save()\" #teamForm=\"ngForm\">\r\n\r\n            <div class=\"text-center m-b-md\" id=\"wizardControl\">\r\n\r\n              <a (click)=\"steshow(1)\" class=\"btn\" [ngClass]=\"{' btn-warning': steps==1,' btn-default': steps!=1,'disabled':!teamForm.valid}\">Step 1 - Basic information</a>\r\n              <a (click)=\"steshow(2)\" class=\"btn btn-default\" [ngClass]=\"{' btn-warning': steps==2,' btn-default': steps!=2,'disabled':!teamForm.valid}\">Step 2 - Invite teammates</a>\r\n              <a (click)=\"steshow(3)\" class=\"btn btn-default\" [ngClass]=\"{' btn-warning': steps==3,' btn-default': steps!=3,'disabled':!teamForm.valid}\">Step 3 - Engage projects</a>\r\n\r\n            </div>\r\n\r\n            <div class=\"tab-content\">\r\n              <div *ngIf=\"steps==1\" [ngClass]=\"{'active':steps==1}\" class=\"p-m tab-pane\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12\">\r\n                    <div class=\"row\">\r\n                      <div class=\"form-group col-lg-12\" [ngClass]=\"{'has-error': (v_tname.touched || v_tname.dirty) && !v_tname.valid}\">\r\n                        <label>Team Name *</label>\r\n                        <span class=\"text-danger\" *ngIf=\"(v_tname.touched || v_tname.dirty) && v_tname.errors?.required\">\r\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter a team name</span>\r\n                        <span class=\"text-danger\" *ngIf=\"(v_tname.touched || v_tname.dirty) && v_tname.errors?.minlength\">\r\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter minimum 2 character</span>\r\n                        <input #v_tname=\"ngModel\" required minlength=\"2\" [(ngModel)]='new_team.name' type=\"text\" class=\"form-control\" placeholder=\"Be something cool\"\r\n                          name=\"name\">\r\n                      </div>\r\n                      <div class=\"form-group col-lg-6\">\r\n                        <label>Team ID</label>\r\n                        <input type=\"text\" [(ngModel)]='new_team.tid' [readonly]=\"inpudisable\" class=\"form-control\" placeholder=\"Team ID\" name=\"tid\">\r\n                      </div>\r\n                      <div class=\"form-group col-lg-6\">\r\n                        <label>Magic Token</label>\r\n                        <input type=\"text\" [(ngModel)]='new_team.magictoken' [readonly]=\"inpudisable\" class=\"form-control\" placeholder=\"Magic token\"\r\n                          name=\"magictoken\">\r\n                      </div>\r\n                      <div class=\"form-group col-lg-6\" [ngClass]=\"{'has-error': (v_temail.touched || v_temail.dirty) && !v_temail.valid}\">\r\n                        <label>Contact Email *</label>\r\n                        <span class=\"text-danger\" *ngIf=\"(v_temail.touched || v_temail.dirty) && v_temail.errors?.required\">\r\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter a contact email</span>\r\n                        <span class=\"text-danger\" *ngIf=\"(v_temail.touched || v_temail.dirty) && v_temail.errors?.pattern\">\r\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please input a valid email address</span>\r\n                        <input #v_temail=\"ngModel\" required [pattern]=\"email_pattern\" type=\"email\" [(ngModel)]='new_team.email' class=\"form-control\"\r\n                          placeholder=\"user@email.com\" name=\"email\">\r\n                      </div>\r\n                      <div class=\"form-group col-lg-6\">\r\n                        <label>Cloud {{new_team.cloud}}</label>\r\n                        <input type=\"text\" id=\"\" [(ngModel)]='new_team.cloud' class=\"form-control\" placeholder=\"Github / Dropbox / Google Doc\" name=\"cloud\">\r\n                      </div>\r\n                      <div class=\"form-group col-lg-12\">\r\n                        <label class=\"control-label\">Interested Areas</label>\r\n                        <br>\r\n                        <div *ngFor=\"let area of new_team.areas\" class=\"col-lg-3\">\r\n                          <div class=\"checkbox checkbox-warning checkbox-inline\">\r\n                            <input type=\"checkbox\" [(ngModel)]='area.value' [name]=\"area.tag_name\">\r\n                            <label> {{area.tag_name}} </label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group col-lg-12\">\r\n                        <label>Tags</label>\r\n                        <input [(ngModel)]='new_team.tag' type=\"text\" class=\"form-control\" placeholder=\"Separated by space (e.g. C C++ Python Java DE2)\"\r\n                          name=\"tag\">\r\n                      </div>\r\n                      <div class=\"col-lg-12\">\r\n                        <div class=\"hpanel\">\r\n                          <label>Description</label>\r\n                          <div class=\"summernote\"></div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngIf=\"steps==2\" [ngClass]=\"{'active':steps==2}\" class=\"p-m tab-pane\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12\">\r\n                    <div class=\"row\">\r\n\r\n                      <div class=\"form-group col-lg-12\">\r\n\r\n                        <table id=\"new_teammates\" class=\"table table-bordered table-hover\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th>Name</th>\r\n                              <th>Branch</th>\r\n                              <th>Tags</th>\r\n                              <th>Action</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr>\r\n                              <td>Tiger Nixon</td>\r\n                              <td>System Architect</td>\r\n                              <td>angular note cli halo</td>\r\n                              <td>\r\n                                <button class=\"btn w-xs btn-default\">Invite</button>\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n\r\n                      </div>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngIf=\"steps==3\" [ngClass]=\"{'active':steps==3}\" class=\"p-m tab-pane\">\r\n                <div class=\"row m-t-lg m-b-lg\">\r\n\r\n                  <div class=\"col-lg-12\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-lg-12\">\r\n                        <div class=\"table-responsive\">\r\n                          <table cellpadding=\"1\" cellspacing=\"1\" class=\"table\">\r\n                            <thead>\r\n                              <tr>\r\n                                <th>Name</th>\r\n                                <th>Owner</th>\r\n                                <th>Tags</th>\r\n                                <th>Action</th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                              <tr>\r\n                                <td>Website</td>\r\n                                <td>Koman Phang</td>\r\n                                <td>HALO MOTO ROLA</td>\r\n                                <td>\r\n                                  <button class=\"btn w-xs btn-default\">Engage</button>\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td>Algo</td>\r\n                                <td>Baochun Li</td>\r\n                                <td>HALO MOTO ROLA</td>\r\n                                <td>\r\n                                  <button class=\"btn w-xs btn-default\">Engage</button>\r\n                                </td>\r\n\r\n                              </tr>\r\n                              <tr>\r\n                                <td>Sensor</td>\r\n                                <td>Joker</td>\r\n                                <td>HALO MOTO ROLA</td>\r\n                                <td>\r\n                                  <button class=\"btn w-xs btn-default\">Engage</button>\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td>ZHI SHENG JI</td>\r\n                                <td>AirCanada</td>\r\n                                <td>HALO MOTO ROLA</td>\r\n                                <td>\r\n                                  <button class=\"btn w-xs btn-default\">Engage</button>\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td>HUO JIAN</td>\r\n                                <td>NASA</td>\r\n                                <td>HALO MOTO ROLA</td>\r\n                                <td>\r\n                                  <button class=\"btn w-xs btn-default\">Engage</button>\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td>SSSDDD</td>\r\n                                <td>Haha</td>\r\n                                <td>HALO MOTO ROLA</td>\r\n                                <td>\r\n                                  <button class=\"btn w-xs btn-default\">Engage</button>\r\n                                </td>\r\n                              </tr>\r\n                            </tbody>\r\n                          </table>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"text-right m-t-xs\">\r\n                <a (click)=\"steprev()\" class=\"btn btn-default prev\" [ngClass]=\"{'disabled':steps==1}\" *ngIf=\"steps!=1\">Previous</a>\r\n                <a (click)=\"stenext()\" class=\"btn btn-default next\" [ngClass]=\"{'disabled':steps==3 || !teamForm.valid}\" *ngIf=\"steps!=3\">Next</a>\r\n                <a class=\"btn btn-warning\" [ngClass]=\"{'disabled':!teamForm.valid}\" *ngIf=\"steps==3\">Submit</a>\r\n              </div>\r\n\r\n            </div>\r\n          </form>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/teams/team-create/team-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__team_service_team_service__ = __webpack_require__("../../../../../src/app/home/teams/team-service/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_project_service_project_service__ = __webpack_require__("../../../../../src/app/home/projects/project-service/project.service.ts");
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
    function TeamCreateComponent(_teamService, _projectService) {
        this._teamService = _teamService;
        this._projectService = _projectService;
    }
    TeamCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.new_team = {
            tid: 112233,
            name: "Website Team",
            email: "nihao@gg.com",
            magictoken: 110020,
            status: 35,
            created: new Date(),
            modified: new Date(),
            views: 3000,
            about: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.."
        };
        this._projectService.getArea()
            .subscribe(function (_area) {
            _this.new_team.areas = new Array();
            for (var x = 0; x < _area.length; x++) {
                _this.new_team.areas.push({ 'pk': _area[x].pk, 'tag_name': _area[x].tag_name, 'value': false });
            }
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
    TeamCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-team-create',
            template: __webpack_require__("../../../../../src/app/home/teams/team-create/team-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/teams/team-create/team-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__team_service_team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_2__projects_project_service_project_service__["a" /* ProjectService */]])
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

module.exports = "<div class=\"small-header\">\r\n  <div class=\"hpanel\">\r\n    <div class=\"panel-body\">\r\n      <div id=\"hbreadcrumb\" class=\"pull-right\">\r\n        <ol class=\"hbreadcrumb breadcrumb\">\r\n          <li>\r\n            <a [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n          </li>\r\n          <li>\r\n            <span>Teams</span>\r\n          </li>\r\n          <li class=\"active\">\r\n            <span>Edit</span>\r\n          </li>\r\n        </ol>\r\n      </div>\r\n      <h2 class=\"font-light m-b-xs\">\r\n        Edit my team\r\n      </h2>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"content\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"hpanel\">\r\n\r\n        <div class=\"panel-body\">\r\n\r\n          <form (ngSubmit)=\"save()\" #teamForm=\"ngForm\">\r\n\r\n            <div class=\"text-center m-b-md\" id=\"wizardControl\">\r\n\r\n              <a (click)=\"steshow(1)\" class=\"btn\" [ngClass]=\"{' btn-warning': steps==1,' btn-default': steps!=1,'disabled':!teamForm.valid}\">Step 1 - Basic information</a>\r\n              <a (click)=\"steshow(2)\" class=\"btn btn-default\" [ngClass]=\"{' btn-warning': steps==2,' btn-default': steps!=2,'disabled':!teamForm.valid}\">Step 2 - Invite teammates</a>\r\n              <a (click)=\"steshow(3)\" class=\"btn btn-default\" [ngClass]=\"{' btn-warning': steps==3,' btn-default': steps!=3,'disabled':!teamForm.valid}\">Step 3 - Engage projects</a>\r\n\r\n            </div>\r\n\r\n            <div class=\"tab-content\" *ngIf=\"ready\">\r\n              <div *ngIf=\"steps==1\" [ngClass]=\"{'active':steps==1}\" class=\"p-m tab-pane\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12\">\r\n                    <div class=\"row\">\r\n                      <div class=\"form-group col-lg-12\" [ngClass]=\"{'has-error': (v_tname.touched || v_tname.dirty) && !v_tname.valid}\">\r\n                        <label>Team Name *</label>\r\n                        <span class=\"text-danger\" *ngIf=\"(v_tname.touched || v_tname.dirty) && v_tname.errors?.required\">\r\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter a team name</span>\r\n                        <span class=\"text-danger\" *ngIf=\"(v_tname.touched || v_tname.dirty) && v_tname.errors?.minlength\">\r\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter minimum 2 character</span>\r\n                        <input #v_tname=\"ngModel\" required minlength=\"2\" [(ngModel)]='team.name' type=\"text\" class=\"form-control\" placeholder=\"Be something cool\"\r\n                          name=\"name\">\r\n                      </div>\r\n                      <div class=\"form-group col-lg-6\">\r\n                        <label>Team ID</label>\r\n                        <input type=\"text\" [(ngModel)]='team.tid' [readonly]=\"inpudisable\" class=\"form-control\" placeholder=\"Team ID\" name=\"tid\">\r\n                      </div>\r\n                      <div class=\"form-group col-lg-6\">\r\n                        <label>Magic Token</label>\r\n                        <input type=\"text\" [(ngModel)]='team.magictoken' [readonly]=\"inpudisable\" class=\"form-control\" placeholder=\"Magic token\"\r\n                          name=\"magictoken\">\r\n                      </div>\r\n                      <div class=\"form-group col-lg-6\" [ngClass]=\"{'has-error': (v_temail.touched || v_temail.dirty) && !v_temail.valid}\">\r\n                        <label>Contact Email *</label>\r\n                        <span class=\"text-danger\" *ngIf=\"(v_temail.touched || v_temail.dirty) && v_temail.errors?.required\">\r\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter a contact email</span>\r\n                        <span class=\"text-danger\" *ngIf=\"(v_temail.touched || v_temail.dirty) && v_temail.errors?.pattern\">\r\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please input a valid email address</span>\r\n                        <input #v_temail=\"ngModel\" required [pattern]=\"email_pattern\" type=\"email\" [(ngModel)]='team.email' class=\"form-control\"\r\n                          placeholder=\"user@email.com\" name=\"email\">\r\n                      </div>\r\n                      <div class=\"form-group col-lg-6\">\r\n                        <label>Cloud {{team.cloud}}</label>\r\n                        <input type=\"text\" id=\"\" [(ngModel)]='team.cloud' class=\"form-control\" placeholder=\"Github / Dropbox / Google Doc\" name=\"cloud\">\r\n                      </div>\r\n                      <div class=\"form-group col-lg-12\">\r\n                        <label class=\"control-label\">Interested Areas</label>\r\n                        <br>\r\n                        <div *ngFor=\"let area of team.areas\" class=\"col-lg-3\">\r\n                          <div class=\"checkbox checkbox-warning checkbox-inline\">\r\n                            <input type=\"checkbox\" [(ngModel)]='area.value' [name]=\"area.tag_name\">\r\n                            <label> {{area.tag_name}} </label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group col-lg-12\">\r\n                        <label>Tags</label>\r\n                        <input [(ngModel)]='team.tag' type=\"text\" class=\"form-control\" placeholder=\"Separated by space (e.g. C C++ Python Java DE2)\"\r\n                          name=\"tag\">\r\n                      </div>\r\n                      <div class=\"col-lg-12\">\r\n                        <div class=\"hpanel\">\r\n                          <label>Description</label>\r\n                          <div class=\"summernote\"></div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngIf=\"steps==2\" [ngClass]=\"{'active':steps==2}\" class=\"p-m tab-pane\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12\">\r\n                    <div class=\"row\">\r\n\r\n                      <div class=\"form-group col-lg-12\">\r\n\r\n                        <table id=\"teammates\" class=\"table table-bordered table-hover\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th>Name</th>\r\n                              <th>Branch</th>\r\n                              <th>Tags</th>\r\n                              <th>Action</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr>\r\n                              <td>Tiger Nixon</td>\r\n                              <td>System Architect</td>\r\n                              <td>angular note cli halo</td>\r\n                              <td>\r\n                                <button class=\"btn w-xs btn-default\">Invite</button>\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n\r\n                      </div>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngIf=\"steps==3\" [ngClass]=\"{'active':steps==3}\" class=\"p-m tab-pane\">\r\n                <div class=\"row m-t-lg m-b-lg\">\r\n\r\n                  <div class=\"col-lg-12\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-lg-12\">\r\n                        <div class=\"table-responsive\">\r\n                          <table cellpadding=\"1\" cellspacing=\"1\" class=\"table\">\r\n                            <thead>\r\n                              <tr>\r\n                                <th>Name</th>\r\n                                <th>Owner</th>\r\n                                <th>Tags</th>\r\n                                <th>Action</th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                              <tr>\r\n                                <td>Website</td>\r\n                                <td>Koman Phang</td>\r\n                                <td>HALO MOTO ROLA</td>\r\n                                <td>\r\n                                  <button class=\"btn w-xs btn-default\">Engage</button>\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td>Algo</td>\r\n                                <td>Baochun Li</td>\r\n                                <td>HALO MOTO ROLA</td>\r\n                                <td>\r\n                                  <button class=\"btn w-xs btn-default\">Engage</button>\r\n                                </td>\r\n\r\n                              </tr>\r\n                              <tr>\r\n                                <td>Sensor</td>\r\n                                <td>Joker</td>\r\n                                <td>HALO MOTO ROLA</td>\r\n                                <td>\r\n                                  <button class=\"btn w-xs btn-default\">Engage</button>\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td>ZHI SHENG JI</td>\r\n                                <td>AirCanada</td>\r\n                                <td>HALO MOTO ROLA</td>\r\n                                <td>\r\n                                  <button class=\"btn w-xs btn-default\">Engage</button>\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td>HUO JIAN</td>\r\n                                <td>NASA</td>\r\n                                <td>HALO MOTO ROLA</td>\r\n                                <td>\r\n                                  <button class=\"btn w-xs btn-default\">Engage</button>\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td>SSSDDD</td>\r\n                                <td>Haha</td>\r\n                                <td>HALO MOTO ROLA</td>\r\n                                <td>\r\n                                  <button class=\"btn w-xs btn-default\">Engage</button>\r\n                                </td>\r\n                              </tr>\r\n                            </tbody>\r\n                          </table>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"text-right m-t-xs\">\r\n                <a (click)=\"steprev()\" class=\"btn btn-default prev\" [ngClass]=\"{'disabled':steps==1}\" *ngIf=\"steps!=1\">Previous</a>\r\n                <a (click)=\"stenext()\" class=\"btn btn-default next\" [ngClass]=\"{'disabled':steps==3 || !teamForm.valid}\" *ngIf=\"steps!=3\">Next</a>\r\n                <a class=\"btn btn-warning\" [ngClass]=\"{'disabled':!teamForm.valid}\" *ngIf=\"steps==3\">Submit</a>\r\n              </div>\r\n\r\n            </div>\r\n          </form>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/teams/team-edit/team-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__team_service_team_service__ = __webpack_require__("../../../../../src/app/home/teams/team-service/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_project_service_project_service__ = __webpack_require__("../../../../../src/app/home/projects/project-service/project.service.ts");
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
    function TeamEditComponent(_teamService, _projectService) {
        this._teamService = _teamService;
        this._projectService = _projectService;
    }
    TeamEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ready = false;
        this._teamService.getTeam()
            .subscribe(function (_team) {
            _team.created = new Date();
            _team.modified = new Date();
            _team.modified_str = _team.modified.toISOString().substring(0, 10);
            _team.tag ? _team.tags = _team.tag.split(" ") : null;
            _this.interested_areas = _team.areas;
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
    TeamEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-team-edit',
            template: __webpack_require__("../../../../../src/app/home/teams/team-edit/team-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/teams/team-edit/team-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__team_service_team_service__["a" /* TeamService */],
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

module.exports = "<div class=\"small-header\">\r\n  <div class=\"hpanel\">\r\n    <div class=\"panel-body\">\r\n\r\n      <div id=\"hbreadcrumb\" class=\"pull-right\">\r\n        <ol class=\"hbreadcrumb breadcrumb\">\r\n          <li>\r\n            <a [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n          </li>\r\n          <li class=\"active\">\r\n            <span>Teams</span>\r\n          </li>\r\n        </ol>\r\n      </div>\r\n      <h2 class=\"font-light m-b-xs\">\r\n        Teams\r\n      </h2>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"content\">\r\n  <div style=\"margin-bottom:2%\">\r\n    <div class=\"input-group\">\r\n      <input id=\"search_str\" onkeypress=\"if (event.which==13) document.getElementById('search_button').click()\" [(ngModel)]=\"s_search\"\r\n             class=\"form-control\" type=\"text\" placeholder=\"Search teams (seperated by space)\">\r\n      <div class=\"input-group-btn\">\r\n        <button id=\"search_button\" (click)=\"str_filter()\" class=\"btn btn-default\">\r\n          <i class=\"fa fa-search\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"row projects\">\r\n    <div class=\"col-lg-6\" *ngFor='let team of data_to_render'>\r\n      <div class=\"hpanel hyellow\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-8\">\r\n              <h4>\r\n                <a [routerLink]=\"['/teams', team.tid]\">{{team.tid}} : {{team.name}}</a>\r\n              </h4>\r\n\r\n              <p>\r\n                <span style=\"margin-right:3%\" *ngFor=\"let tag of team.tags\"> #{{tag}} </span>\r\n              </p>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"project-label\">Initiator</div>\r\n                  <small>{{team.owner}}</small>\r\n                </div>\r\n                <!-- <div class=\"col-sm-3\">\r\n                    <div class=\"project-label\">Modified</div>\r\n                    <small>{{team.modified}}</small>\r\n                  </div> -->\r\n                <!-- <div class=\"col-sm-3\">\r\n                    <div class=\"project-label\">Created</div>\r\n                    <small>{{team.created}}</small>\r\n                  </div> -->\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"project-label\">Progress</div>\r\n                  <div class=\"progress m-t-xs full progress-small\">\r\n                    <div style=\"width: 50%\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"12\" role=\"progressbar\" class=\" progress-bar progress-bar-warning\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4 project-info\">\r\n              <!-- <div class=\"project-action m-t-md\">\r\n                  <div class=\"btn-group\">\r\n                    <button class=\"btn btn-xs btn-default\"> View</button>\r\n                    <button class=\"btn btn-xs btn-default\"> Edit</button>\r\n                    <button class=\"btn btn-xs btn-default\"> Delete</button>\r\n                  </div>\r\n                </div> -->\r\n              <div class=\"project-value\">\r\n                <h2 class=\"text-warning\">\r\n                  {{team.views}} Views\r\n                </h2>\r\n              </div>\r\n              <div class=\"project-people\">\r\n                <img alt=\"logo\" class=\"img-circle\" src=\"assets/a1.jpg\">\r\n                <img alt=\"logo\" class=\"img-circle\" src=\"assets/a2.jpg\">\r\n                <img alt=\"logo\" class=\"img-circle\" src=\"assets/a3.jpg\">\r\n                <img alt=\"logo\" class=\"img-circle\" src=\"assets/a4.jpg\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"panel-footer\">\r\n          Last Activity: {{team.modified}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/teams/team-list/team-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__team_service_team_service__ = __webpack_require__("../../../../../src/app/home/teams/team-service/team.service.ts");
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
    function TeamListComponent(_teamService) {
        this._teamService = _teamService;
    }
    TeamListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._teamService.getTeams()
            .subscribe(function (_teams) {
            for (var i = 0; i < _teams.length; i++) {
                _teams[i].created = new Date();
                _teams[i].modified = new Date();
                _teams[i].modified_str = _teams[i].modified.toISOString().substring(0, 10);
                _teams[i].tag ? _teams[i].tags = _teams[i].tag.split(" ") : null;
                _teams[i].s_str = _teams[i].tid + " " + _teams[i].oid + " " + _teams[i].name + " " + _teams[i].owner + " " + _teams[i].email + " " + _teams[i].tag;
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__team_service_team_service__["a" /* TeamService */]])
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

module.exports = "<div class=\"small-header transition\">\r\n    <div class=\"hpanel\">\r\n        <div class=\"panel-body\">\r\n\r\n\r\n            <div id=\"hbreadcrumb\" class=\"pull-right\">\r\n                <ol class=\"hbreadcrumb breadcrumb\">\r\n                    <li>\r\n                        <a [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n                    </li>\r\n                    <li>\r\n                        <span>Tables</span>\r\n                    </li>\r\n                    <li class=\"active\">\r\n                        <span>Team detail</span>\r\n                    </li>\r\n                </ol>\r\n            </div>\r\n            <h2 class=\"font-light m-b-xs\">\r\n                Team detail\r\n            </h2>\r\n            <!-- <button type=\"button\" class=\"btn btn-default btn-sm\">Request to join</button> -->\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"hpanel\">\r\n                        <div class=\"panel-body text-center\">\r\n                            <!-- <img alt=\"logo\" class=\"img-circle img-small\" src=\"assets/a1.jpg\"> -->\r\n                            <div class=\"m-t-sm\">\r\n                                <strong>Mark Newon</strong>\r\n                                <p class=\"small\">UI Designer</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"hpanel\">\r\n                        <div class=\"panel-body text-center\">\r\n                            <!-- <img alt=\"logo\" class=\"img-circle img-small\" src=\"assets/a2.jpg\"> -->\r\n                            <div class=\"m-t-sm\">\r\n                                <strong>Anna Smith</strong>\r\n                                <p class=\"small\">JS Developer</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"hpanel\">\r\n                        <div class=\"panel-body text-center\">\r\n                            <!-- <img alt=\"logo\" class=\"img-circle img-small\" src=\"assets/a3.jpg\"> -->\r\n                            <div class=\"m-t-sm\">\r\n                                <strong>John Smith</strong>\r\n                                <p class=\"small\">CEO X company</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"hpanel\">\r\n                        <div class=\"panel-body text-center\">\r\n                            <!-- <img alt=\"logo\" class=\"img-circle img-small\" src=\"assets/a1.jpg\"> -->\r\n                            <div class=\"m-t-sm\">\r\n                                <strong>Max Simson</strong>\r\n                                <p class=\"small\">UI Designer</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"hpanel\">\r\n                <div class=\"panel-body\">\r\n\r\n                    <div class=\"pull-right\">\r\n                        <button class=\"btn  btn-default\">\r\n                            <i class=\"fa fa-plus-square\"></i> Join</button>\r\n                        <button class=\"btn  btn-default\">\r\n                            <i class=\"fa fa-thumbs-up\"></i> Like</button>\r\n                        <!-- <button class=\"btn btn-success btn-xs\"> Active</button> -->\r\n                        <button class=\"btn btn-default \">\r\n                            <i class=\"fa fa-pencil\"></i> Edit</button>\r\n                    </div>\r\n                    <h2 class=\"m-t-none\">{{team.name}}</h2>\r\n                    <div class=\"m-t-xs\">\r\n                        <div style=\"word-wrap: break-word;\">\r\n                            <small style=\"margin-right:2%\" *ngFor='let tag of team.tags'>{{tag}}</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"progress m-t-xs full progress-striped active\" style=\"margin-top:2%\">\r\n                        <div [ngStyle]=\"{'width': team.status + '%'}\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"25\" role=\"progressbar\"\r\n                            class=\" progress-bar progress-bar-warning\">\r\n                            <span class=\"sr-only\">35% Complete (success)</span>\r\n                        </div>\r\n                    </div>\r\n                    <p style=\"margin-top:2%\">\r\n                        {{team.about}}\r\n                    </p>\r\n\r\n\r\n\r\n\r\n                    <div class=\"m-t-md\">\r\n                        <canvas id=\"lineOptions\" height=\"60\"></canvas>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"hpanel\">\r\n\r\n                <div class=\"panel-body\">\r\n\r\n                    <p>\r\n                        <strong>Involved Project</strong>\r\n                    </p>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"project-label\">_project.name</div>\r\n                            <small>hello moto gaasd asddas</small>\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n                            <div class=\"project-label\">Initiator</div>\r\n                            <small>{{team.owner}}</small>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-3\">\r\n                            <div class=\"project-label\">Progress</div>\r\n                            <div class=\"progress m-t-xs full progress-small\">\r\n                                <div style=\"width: 50%\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"12\" role=\"progressbar\" class=\" progress-bar progress-bar-info\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"hpanel\">\r\n\r\n                <div class=\"panel-body\">\r\n\r\n                    <p>\r\n                        <strong>Interested Projects</strong>\r\n                    </p>\r\n\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-hover table-bordered table-striped\">\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>\r\n                                        <span class=\"label label-success\">available</span>\r\n                                    </td>\r\n                                    <td class=\"issue-info\">\r\n                                        <a href=\"#\">\r\n                                            _Project_Name\r\n                                        </a>\r\n                                        <br/>\r\n                                        <small>\r\n                                            angular web node\r\n                                        </small>\r\n                                    </td>\r\n                                    <td>\r\n                                        _owner_name\r\n                                    </td>\r\n                                    <td>\r\n                                        _last modified time\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <span class=\"label label-success\">Full</span>\r\n                                    </td>\r\n                                    <td class=\"issue-info\">\r\n                                        <a href=\"#\">\r\n                                            _Project_Name\r\n                                        </a>\r\n                                        <br/>\r\n                                        <small>\r\n                                            angular web node\r\n                                        </small>\r\n                                    </td>\r\n                                    <td>\r\n                                        _owner_name\r\n                                    </td>\r\n                                    <td>\r\n                                        _last modified time\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <span class=\"label label-success\">Closed</span>\r\n                                    </td>\r\n                                    <td class=\"issue-info\">\r\n                                        <a href=\"#\">\r\n                                            _Project_Name\r\n                                        </a>\r\n                                        <br/>\r\n                                        <small>\r\n                                            angular web node\r\n                                        </small>\r\n                                    </td>\r\n                                    <td>\r\n                                        _owner_name\r\n                                    </td>\r\n                                    <td>\r\n                                        _last modified time\r\n                                    </td>\r\n                                </tr>\r\n\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/teams/team-profile/team-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_user_service_user_service__ = __webpack_require__("../../../../../src/app/home/users/user-service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_service_team_service__ = __webpack_require__("../../../../../src/app/home/teams/team-service/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projects_project_service_project_service__ = __webpack_require__("../../../../../src/app/home/projects/project-service/project.service.ts");
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
    function TeamProfileComponent(_userService, _teamService, _projectService) {
        this._userService = _userService;
        this._teamService = _teamService;
        this._projectService = _projectService;
    }
    TeamProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._teamService.getTeam()
            .subscribe(function (_team) {
            _team.created = new Date();
            _team.modified = new Date();
            _team.modified_str = _team.modified.toISOString().substring(0, 10);
            _team.tag ? _team.tags = _team.tag.split(" ") : null;
            _this.team = _team;
        });
    };
    TeamProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-team-profile',
            template: __webpack_require__("../../../../../src/app/home/teams/team-profile/team-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/teams/team-profile/team-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__users_user_service_user_service__["a" /* UserService */],
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
        this.url = 'http://192.168.0.14:8000';
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
        return this._http.get('http://api.ece496.com/team_finder/teams/' + tid)
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

module.exports = "<div class=\"small-header\">\r\n  <div class=\"small-header\">\r\n    <div class=\"hpanel\">\r\n      <div class=\"panel-body\">\r\n        <div id=\"hbreadcrumb\" class=\"pull-right\">\r\n          <ol class=\"hbreadcrumb breadcrumb\">\r\n            <li>\r\n              <a [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['/users/user-profile',uid]\">My Profile</a>\r\n            </li>\r\n            <li class=\"active\">\r\n              <span>Edit my profile </span>\r\n            </li>\r\n          </ol>\r\n        </div>\r\n        <h2 class=\"font-light m-b-xs\">\r\n          Edit User Profile : {{user.uid}}\r\n        </h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"content\" >\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"hpanel\">\r\n\r\n          <div class=\"panel-body\">\r\n\r\n            <form (ngSubmit)=\"save()\" #userForm=\"ngForm\">\r\n\r\n              <div class=\"text-center m-b-md\" id=\"wizardControl\">\r\n\r\n\r\n              </div>\r\n\r\n              <div  class=\"tab-content\">\r\n                <div >\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-12\">\r\n                      <div class=\"row\">\r\n                        <div class=\"form-group col-lg-6\" [ngClass]=\"{'has-error': (v_ufirst.touched || v_ufirst.dirty) && !v_ufirst.valid}\">\r\n                          <label>First Name *</label>\r\n                          <span class=\"text-danger\" *ngIf=\"(v_ufirst.touched || v_ufirst.dirty) && v_ufirst.errors?.required\">\r\n                        <i class=\"fa fa-exclamation-triangle\"></i> Please enter a your first name</span>\r\n                          <span class=\"text-danger\" *ngIf=\"(v_ufirst.touched || v_ufirst.dirty) && v_ufirst.errors?.minlength\">\r\n                        <i class=\"fa fa-exclamation-triangle\"></i> Please enter minimum 2 character</span>\r\n                          <input #v_ufirst=\"ngModel\" required minlength=\"2\" [(ngModel)]='user.first' type=\"text\" class=\"form-control\" placeholder=\"Please enter a your first name\"\r\n                                 disabled   name=\"first\">\r\n                        </div>\r\n                        <div class=\"form-group col-lg-6\" [ngClass]=\"{'has-error': (v_ulast.touched || v_ulast.dirty) && !v_ulast.valid}\">\r\n                          <label>Last Name *</label>\r\n                          <span class=\"text-danger\" *ngIf=\"(v_ulast.touched || v_ulast.dirty) && v_ulast.errors?.required\">\r\n                        <i class=\"fa fa-exclamation-triangle\"></i> Please enter a your last name</span>\r\n                          <span class=\"text-danger\" *ngIf=\"(v_ulast.touched || v_ulast.dirty) && v_ulast.errors?.minlength\">\r\n                        <i class=\"fa fa-exclamation-triangle\"></i> Please enter minimum 2 character</span>\r\n                          <input #v_ulast=\"ngModel\" required minlength=\"2\" [(ngModel)]='user.last' type=\"text\" class=\"form-control\" placeholder=\"Please enter a your last name\"\r\n                                 disabled  name=\"last\">\r\n                        </div>\r\n                        <div class=\"form-group col-lg-6\">\r\n                          <label>User ID</label>\r\n                          <input type=\"text\" [(ngModel)]='user.uid' [readonly]=\"inpudisable\" class=\"form-control\" placeholder=\"UtorID\" disabled name=\"uid\">\r\n                        </div>\r\n\r\n                        <div class=\"form-group col-lg-6\" [ngClass]=\"{'has-error': (v_uemail.touched || v_uemail.dirty) && !v_uemail.valid}\">\r\n                          <label>Contact Email *</label>\r\n                          <span class=\"text-danger\" *ngIf=\"(v_uemail.touched || v_uemail.dirty) && v_uemail.errors?.required\">\r\n                        <i class=\"fa fa-exclamation-triangle\"></i> Please enter a contact email</span>\r\n                          <span class=\"text-danger\" *ngIf=\"(v_uemail.touched || v_uemail.dirty) && v_uemail.errors?.pattern\">\r\n                        <i class=\"fa fa-exclamation-triangle\"></i> Please input a valid email address</span>\r\n                          <input #v_uemail=\"ngModel\" required [pattern]=\"email_pattern\" type=\"email\" [(ngModel)]='user.email' class=\"form-control\"\r\n                                 placeholder=\"user@email.com\" name=\"email\">\r\n                        </div>\r\n                        <div class=\"form-group col-lg-12\">\r\n                          <label class=\"control-label\">Interested Areas</label>\r\n                          <br>\r\n                          <div *ngFor=\"let area of user.areas\" class=\"col-lg-3\">\r\n                            <div class=\"checkbox checkbox-success checkbox-inline\">\r\n                              <input type=\"checkbox\" [(ngModel)]='area.value' [name]=\"area.tag_name\">\r\n                              <label> {{area.tag_name}} </label>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-lg-12\">\r\n                          <div class=\"hpanel\">\r\n                            <label>Description</label>\r\n                            <textarea style=\"resize:none;\" #v_pabs=\"ngModel\" required minlength=\"20\" rows=\"10\" required maxlength=\"2000\" id=\"longdes\" [(ngModel)]='user.about'\r\n                                      type=\"text\" class=\"form-control\" placeholder=\" Introduce yourself\"\r\n                                      name=\"about\"></textarea>\r\n                          </div>\r\n                        </div>\r\n\r\n\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"text-right m-t-xs\">\r\n\r\n                  <a class=\"btn btn-info\" [ngClass]=\"{'disabled':!userForm.valid}\" >Submit</a>\r\n\r\n                </div>\r\n\r\n              </div>\r\n            </form>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n"

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
    }
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ready = false;
        this._homeService.get4id().subscribe(function (_data) {
            _this.currentuid = _data;
            _this.currentuid = _this.currentuid.profile;
            //console.log('heyuid', this.uid);
            _this._userService.getProfile(_this.currentuid)
                .subscribe(function (_user) {
                _user.uid = _this.currentuid;
                _user.modified = new Date();
                _user.modified_str = _user.modified.toISOString().substring(0, 10);
                _user.first = _user.user.first_name;
                _user.last = _user.user.last_name;
                //_user.tag ? _user.tags = _user.tag.split(" ") : null;
                _user.about = _user.about;
                // _user.team.tags = _user.team.tag.split(" ");
                _this.user = _user;
                _this.interested_areas = _user.related_areas;
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
exports.push([module.i, ".glyphicon-refresh-animate {\r\n  -animation: spin .7s infinite linear;\r\n  -webkit-animation: spin2 .7s infinite linear;\r\n}\r\n\r\n@-webkit-keyframes spin2 {\r\n  from { -webkit-transform: rotate(0deg);}\r\n  to { -webkit-transform: rotate(360deg);}\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\r\n  to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\r\n}\r\n\r\n@keyframes spin {\r\n  from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\r\n  to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\r\n}\r\n\r\n.btn-static {\r\n  background-color: white;\r\n  border: 1px solid white;\r\n  cursor: default;\r\n}\r\n.btn-static:active {\r\n  box-shadow:         inset 0 0 0px white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/users/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"small-header \">\r\n  <div class=\"hpanel\">\r\n    <div class=\"panel-body\">\r\n      <div id=\"hbreadcrumb\" class=\"pull-right\">\r\n        <ol class=\"hbreadcrumb breadcrumb\">\r\n          <li>\r\n            <a [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n          </li>\r\n          <li class=\"active\">\r\n            <span>Users</span>\r\n          </li>\r\n        </ol>\r\n      </div>\r\n      <h2 class=\"font-light m-b-xs\">\r\n        Users\r\n      </h2>\r\n      <!-- <button class=\"btn btn-default btn-sm\">Show Available Only</button> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"content\">\r\n  <div style=\"margin-bottom:2%\">\r\n    <div class=\"input-group\">\r\n      <input id=\"search_str\" [(ngModel)]=\"s_search\" class=\"form-control\" type=\"text\" placeholder=\"\">\r\n      <div class=\"input-group-btn\">\r\n        <button (click)=\"str_filter()\" class=\"btn btn-default\">\r\n          <i class=\"fa fa-search\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"content\" *ngIf=\"!data_to_render\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-md-12\">\r\n\r\n        <div class=\"hpanel\">\r\n          <div class=\"panel-body\">\r\n            <button  class=\"btn btn-static\"><span class=\"glyphicon glyphicon-refresh glyphicon-refresh-animate\"></span> Loading...Please wait.</button>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-3\" *ngFor=\"let user of data_to_render\">\r\n      <div class=\"hpanel  contact-panel\">\r\n        <div class=\"panel-body\">\r\n          <small *ngIf=\"user.status < 50\" class=\"label label-success pull-right\">AVAILABLE</small>\r\n          <small *ngIf=\"user.status >= 50 && user.status < 100\" class=\"label label-warning pull-right\">IN A TEAM</small>\r\n          <small *ngIf=\"user.status==100\" class=\"label label-info pull-right\">IN A PROJECT</small>\r\n\r\n          <!-- <img alt=\"logo\" class=\"img-circle m-b\" src=\"assets/profile.jpg\"> -->\r\n          <h3 style=\"margin-top:2%\">\r\n            <a [routerLink]=\"['/users', user.uid]\"> {{user.first}} {{user.last}}</a>\r\n          </h3>\r\n          <div class=\"text-muted font-bold m-b-xs\">{{user.email}}</div>\r\n          <!-- <p>\r\n            <span style=\"margin-right:3%\" *ngFor=\"let tag of user.tags\"> #{{tag}} </span>\r\n          </p> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
        this._userService.getRealUsers()
            .subscribe(function (_users) {
            _this.users = [];
            for (var i = 0; i < _users.length; i++) {
                var item = {};
                item.first = _users[i].first_name;
                item.last = _users[i].last_name;
                item.email = _users[i].email;
                item.uid = _users[i].id;
                item.status = 25;
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

module.exports = "<div class=\"small-header\">\r\n    <div class=\"small-header\">\r\n      <div class=\"hpanel\">\r\n        <div class=\"panel-body\">\r\n          <div id=\"hbreadcrumb\" class=\"pull-right\">\r\n            <ol class=\"hbreadcrumb breadcrumb\">\r\n              <li>\r\n                <a [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n              </li>\r\n              <li>\r\n                <a [routerLink]=\"['/users/user-profile',uid]\">My Profile</a>\r\n              </li>\r\n              <li class=\"active\">\r\n                <span>New Profile </span>\r\n              </li>\r\n            </ol>\r\n          </div>\r\n          <h2 class=\"font-light m-b-xs\">\r\n            New Profile\r\n          </h2>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n  \r\n    <div class=\"content\" >\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n          <div class=\"hpanel\">\r\n  \r\n            <div class=\"panel-body\">\r\n  \r\n              <form (ngSubmit)=\"save()\" #userForm=\"ngForm\">\r\n  \r\n                <div class=\"text-center m-b-md\" id=\"wizardControl\">\r\n  \r\n  \r\n                </div>\r\n  \r\n                <div  class=\"tab-content\">\r\n                  <div >\r\n                    <div class=\"row\">\r\n                      <div class=\"col-lg-12\">\r\n                        <div class=\"row\">\r\n                          <div class=\"form-group col-lg-6\" [ngClass]=\"{'has-error': (v_ufirst.touched || v_ufirst.dirty) && !v_ufirst.valid}\">\r\n                            <label>First Name *</label>\r\n                            <span class=\"text-danger\" *ngIf=\"(v_ufirst.touched || v_ufirst.dirty) && v_ufirst.errors?.required\">\r\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter a your first name</span>\r\n                            <span class=\"text-danger\" *ngIf=\"(v_ufirst.touched || v_ufirst.dirty) && v_ufirst.errors?.minlength\">\r\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter minimum 2 character</span>\r\n                            <input #v_ufirst=\"ngModel\" required minlength=\"2\" [(ngModel)]='user_form.first_name' type=\"text\" class=\"form-control\" placeholder=\"Please enter a your first name\"\r\n                                   disabled   name=\"first\">\r\n                          </div>\r\n                          <div class=\"form-group col-lg-6\" [ngClass]=\"{'has-error': (v_ulast.touched || v_ulast.dirty) && !v_ulast.valid}\">\r\n                            <label>Last Name *</label>\r\n                            <span class=\"text-danger\" *ngIf=\"(v_ulast.touched || v_ulast.dirty) && v_ulast.errors?.required\">\r\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter a your last name</span>\r\n                            <span class=\"text-danger\" *ngIf=\"(v_ulast.touched || v_ulast.dirty) && v_ulast.errors?.minlength\">\r\n                          <i class=\"fa fa-exclamation-triangle\"></i> Please enter minimum 2 character</span>\r\n                            <input #v_ulast=\"ngModel\" required minlength=\"2\" [(ngModel)]='user_form.last_name' type=\"text\" class=\"form-control\" placeholder=\"Please enter a your last name\"\r\n                                   disabled  name=\"last\">\r\n                          </div>\r\n                          <div class=\"form-group col-lg-12\">\r\n                            <label class=\"control-label\">Interested Areas</label>\r\n                            <br>\r\n                            <div *ngFor=\"let area of profile_form.related_areas\" class=\"col-lg-3\">\r\n                              <div class=\"checkbox checkbox-success checkbox-inline\">\r\n                                <input type=\"checkbox\" [(ngModel)]='area.value' [name]=\"area.tag_name\">\r\n                                <label> {{area.tag_name}} </label>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n  \r\n                          <div class=\"col-lg-12\">\r\n                            <div class=\"hpanel\">\r\n                              <label>Description</label>\r\n                              <textarea style=\"resize:none;\" #v_pabs=\"ngModel\" required minlength=\"20\" rows=\"10\" required maxlength=\"2000\" id=\"longdes\" [(ngModel)]='profile_form.about'\r\n                                        type=\"text\" class=\"form-control\" placeholder=\" Introduce yourself\"\r\n                                        name=\"about\"></textarea>\r\n                            </div>\r\n                          </div>\r\n  \r\n  \r\n  \r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n  \r\n  \r\n                  <div class=\"text-right m-t-xs\">\r\n  \r\n                    <!-- <a class=\"btn btn-info\" [ngClass]=\"{'disabled':!userForm.valid}\" >Submit</a> -->\r\n                    <a class=\"btn btn-info\" (click)=\"save()\" >Submit</a>\r\n  \r\n                  </div>\r\n  \r\n                </div>\r\n              </form>\r\n  \r\n            </div>\r\n          </div>\r\n        </div>\r\n  \r\n      </div>\r\n    </div>\r\n  "

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
                    _this.profile_form.user = _this.user_form;
                    _this.profile_form.related_areas = arr;
                    _this.profile_form.about = "";
                    // unused data
                    _this.profile_form.utorid = "";
                    _this.profile_form.gender = "";
                    _this.profile_form.branch = "",
                        _this.profile_form.views = 0,
                        _this.profile_form.linkedin = "",
                        _this.profile_form.status = 0,
                        _this.profile_form.team = 0,
                        _this.profile_form.created_team = {};
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
        console.log("wocao zheme niubi ne", this.profile_form);
        this._userService.postRealProfile(this.profile_form).subscribe(function (_data) {
            console.log("shuo de dui", _data);
            swal({
                title: "Good Job!",
                type: "success"
            });
            _this._router.navigate(['/dashboard']);
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
exports.push([module.i, ".glyphicon-refresh-animate {\r\n  -animation: spin .7s infinite linear;\r\n  -webkit-animation: spin2 .7s infinite linear;\r\n}\r\n\r\n@-webkit-keyframes spin2 {\r\n  from { -webkit-transform: rotate(0deg);}\r\n  to { -webkit-transform: rotate(360deg);}\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\r\n  to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\r\n}\r\n\r\n@keyframes spin {\r\n  from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg);}\r\n  to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg);}\r\n}\r\n\r\n.btn-static {\r\n  background-color: white;\r\n  border: 1px solid white;\r\n  cursor: default;\r\n}\r\n.btn-static:active {\r\n  box-shadow:         inset 0 0 0px white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/users/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"small-header \">\r\n  <div class=\"hpanel\">\r\n    <div class=\"panel-body\">\r\n      <div id=\"hbreadcrumb\" class=\"pull-right\">\r\n        <ol class=\"hbreadcrumb breadcrumb\">\r\n          <li>\r\n            <a [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n          </li>\r\n          <li class=\"active\">\r\n            <span>\r\n              Profile\r\n            </span>\r\n          </li>\r\n        </ol>\r\n      </div>\r\n      <h2 class=\"font-light m-b-xs\">\r\n        Profile\r\n      </h2>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"content\" *ngIf=\"!user\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-md-12\">\r\n\r\n      <div class=\"hpanel\">\r\n        <div class=\"panel-body\">\r\n          <button  class=\"btn btn-static\"><span class=\"glyphicon glyphicon-refresh glyphicon-refresh-animate\"></span> Loading...Please wait.</button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"content\">\r\n\r\n  <div class=\"row\" *ngIf=\"user\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"hpanel hgreen\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"pull-right text-right\">\r\n\r\n            <div class=\"project-info\">\r\n              <div class=\"project-value\">\r\n                <h2 class=\"text-success\">\r\n                  {{user.views}} Views\r\n                </h2>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"btn-group\">\r\n              <button class=\"btn btn-xs btn-default\" [routerLink]=\"['/users', user.uid, 'edit']\"> Edit</button>\r\n              <i class=\"fa fa-linkedin btn btn-default btn-xs\"></i>\r\n            </div>\r\n\r\n          </div>\r\n          <!-- <img alt=\"logo\" class=\"img-circle m-b m-t-md\" src=\"assets/profile.jpg\"> -->\r\n\r\n          <h3>\r\n            <a href=\"\">{{user.first}} {{user.last}}</a>\r\n          </h3>\r\n          <div class=\"text-muted font-bold m-b-xs\">{{user.branch}}</div>\r\n         <div style=\"word-wrap: break-word;margin-bottom:1%\">\r\n            <small style=\"margin-right:3%\" *ngFor='let tag of user.tags'>{{tag}}</small>\r\n\r\n          </div>\r\n          <p>\r\n            <span class=\"text-muted font-bold m-b-xs\"> Areas</span>\r\n            <br>\r\n            <span style=\"margin-right:2%\" *ngFor='let area of user.areas'>{{area.tag_name}}</span>\r\n          </p>\r\n          <!-- <div class=\"progress m-t-xs full progress-small\"> -->\r\n          <div class=\"progress m-t-xs full progress-striped active\">\r\n            <div [ngStyle]=\"{'width': user_status + '%'}\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"user_status\" role=\"progressbar\"\r\n              class=\" progress-bar progress-bar-success\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- <div class=\"panel-footer contact-footer\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 border-right\">\r\n                <div class=\"contact-stat\">\r\n                  <span>{{user.status}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"contact-stat\">\r\n                  <span>\r\n                    <strong>{{user.views}}</strong> views\r\n                  </span>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n        <!-- <div class=\"panel-body\">\r\n            <p>\r\n              {{user.about}}\r\n            </p>\r\n          </div> -->\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"hpanel\">\r\n        <div class=\"hpanel\">\r\n\r\n          <ul class=\"nav nav-tabs\">\r\n            <li class=\"active\">\r\n              <a data-toggle=\"tab\" href=\"#tab-1\">About Me</a>\r\n            </li>\r\n            <li class=\"\">\r\n              <a data-toggle=\"tab\" href=\"#tab-2\">Interested Teams</a>\r\n            </li>\r\n            <li class=\"\">\r\n              <a data-toggle=\"tab\" href=\"#tab-3\">Interested Projects</a>\r\n            </li>\r\n          </ul>\r\n          <div class=\"tab-content\">\r\n            <div id=\"tab-1\" class=\"tab-pane active\">\r\n              <div class=\"panel-body\">\r\n\r\n                <div class=\"col-lg-12\">\r\n                  <div class=\"row projects\">\r\n                    <div class=\"hpanel hgreen\">\r\n                      <div class=\"panel-body\">\r\n                        <div class=\"row\">\r\n                          <div *ngIf=\"user.about\" class=\"col-sm-12\">\r\n                            <p>\r\n                              {{user.about}}\r\n                            </p>\r\n                          </div>\r\n                          <div *ngIf=\"!user.about\" class=\"col-sm-12\">\r\n\r\n                            <p>\r\n                              自我介绍一下这位选手。\r\n                            </p>\r\n\r\n\r\n                              <button class=\"btn btn-xs btn-default\" [routerLink]=\"['/users', user.uid, 'edit']\"> Edit</button>\r\n\r\n\r\n                          </div>\r\n\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"panel-footer\">\r\n                        Additional information about project in footer\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div  class=\"col-lg-12\">\r\n                  <div  class=\"row projects\">\r\n                    <div *ngIf=\"user.team\" class=\"hpanel hyellow\">\r\n                      <div class=\"panel-body\">\r\n                        <div class=\"row\">\r\n                          <div  class=\"col-sm-8\">\r\n                            <span>Your Team:</span>\r\n                            <h4>\r\n                              <a   href=\"#\"> {{user.team.name}}</a>\r\n                            </h4>\r\n                            <!--<div style=\"word-wrap: break-word;margin-bottom:5%\">\r\n                              <small style=\"margin-right:3%\" *ngFor=\"let tag of user.team.tags\"> {{tag}} </small>\r\n                            </div>-->\r\n                            <div class=\"row\">\r\n                              <div class=\"col-sm-3\">\r\n                                <div class=\"project-label\">Initiator</div>\r\n                                <small>{{user.team.owner}}</small>\r\n                              </div>\r\n                              <!-- <div class=\"col-sm-3\">\r\n                                <div class=\"project-label\">Modifed</div>\r\n                                <small>{{user.team.modifed}}</small>\r\n                              </div>\r\n                              <div class=\"col-sm-3\">\r\n                                <div class=\"project-label\">Created</div>\r\n                                <small>{{user.team.created}}</small>\r\n                              </div> -->\r\n                              <div class=\"col-sm-3\">\r\n                                <div class=\"project-label\">Progress</div>\r\n                                <div class=\"progress m-t-xs full progress-small\">\r\n                                  <div style=\"width: 100%\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"100\" role=\"progressbar\" class=\" progress-bar progress-bar-warning\">\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-4 project-info\">\r\n                            <div class=\"project-value\">\r\n                              <h2 class=\"text-warning\">\r\n                                {{user.team.views}} Views\r\n                              </h2>\r\n                            </div>\r\n                            <!-- <div class=\"project-people\">\r\n                                <img alt=\"logo\" class=\"img-circle\" src=\"assets/a7.jpg\">\r\n                                <img alt=\"logo\" class=\"img-circle\" src=\"assets/a8.jpg\">\r\n                                <img alt=\"logo\" class=\"img-circle\" src=\"assets/a3.jpg\">\r\n                                <img alt=\"logo\" class=\"img-circle\" src=\"assets/a2.jpg\">\r\n                              </div> -->\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"panel-footer\">\r\n                        Additional information about project in footer\r\n                      </div>\r\n                    </div>\r\n\r\n\r\n                  </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"!user.team\" class=\"col-lg-12\">\r\n                  <div class=\"row projects\">\r\n                    <div class=\"hpanel hblue\">\r\n                      <div class=\"panel-body\">\r\n                        <div class=\"row\">\r\n                          <span>Your Team:</span>\r\n                          <h4>你是一个孤苦伶仃的人。</h4>\r\n                          <button [routerLink]=\"['/teams']\" class=\"btn btn-xs btn-default\">View </button>\r\n                        </div>\r\n                      </div>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"user.project\" class=\"col-lg-12\">\r\n                  <div class=\"row projects\">\r\n                    <div class=\"hpanel hblue\">\r\n                      <div class=\"panel-body\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-8\">\r\n                            <span>Your Project:</span>\r\n                            <h4>\r\n                              <a [routerLink]=\"['/projects', user.project.project_id]\"> {{user.project.project_title}}</a>\r\n                            </h4>\r\n\r\n                            <p>\r\n                              {{user.project.abs}}\r\n                            </p>\r\n\r\n                            <div class=\"row\">\r\n                              <div class=\"col-sm-3\">\r\n                                <div class=\"project-label\">Initiator</div>\r\n                                <small>{{user.project.created_by.first_name}} {{user.project.created_by.first_name}}</small>\r\n                              </div>\r\n                              <!-- <div class=\"col-sm-3\">\r\n                                <div class=\"project-label\">Modified</div>\r\n                                <small>{{user.project.modified}}</small>\r\n                              </div>\r\n                              <div class=\"col-sm-3\">\r\n                                <div class=\"project-label\">Created</div>\r\n                                <small>{{user.project.created}}</small>\r\n                              </div> -->\r\n                              <div class=\"col-sm-3\">\r\n                                <div class=\"project-label\">Status</div>\r\n                                <small *ngIf=\"user.project.project_status=='Open'\" class=\"label label-success \">OPEN</small>\r\n                                <small *ngIf=\"user.project.project_status == 'Closed'\" class=\"label label-warning \">Closed</small>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-4 project-info\">\r\n                            <!-- <div class=\"project-value\">\r\n                              <h2 class=\"text-info\">\r\n                                {{user.project.views}} Views\r\n                              </h2>\r\n                            </div> -->\r\n                            <!-- <div class=\"project-people\">\r\n                                          <img alt=\"logo\" class=\"img-circle\" src=\"assets/a1.jpg\">\r\n                                          <img alt=\"logo\" class=\"img-circle\" src=\"assets/a2.jpg\">\r\n                                          <img alt=\"logo\" class=\"img-circle\" src=\"assets/a3.jpg\">\r\n                                          <img alt=\"logo\" class=\"img-circle\" src=\"assets/a4.jpg\">\r\n                                        </div> -->\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"panel-footer\">\r\n                        Additional information about project in footer\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n\r\n                <div *ngIf=\"!user.project\" class=\"col-lg-12\">\r\n                  <div class=\"row projects\">\r\n                    <div class=\"hpanel hblue\">\r\n                      <div class=\"panel-body\">\r\n                        <div class=\"row\">\r\n                          <span>Your Project:</span>\r\n                          <h4>没有。</h4>\r\n                          <button [routerLink]=\"['/projects']\" class=\"btn btn-xs btn-default\">View </button>\r\n                        </div>\r\n                      </div>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n\r\n\r\n                <div class=\"col-lg-12\">\r\n                  <div class=\"row projects\">\r\n                    <div class=\"hpanel hviolet\">\r\n                      <div class=\"panel-body \">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12\">\r\n                            <h4>\r\n                              <a href=\"#\"> Experiences</a>\r\n                            </h4>\r\n\r\n                            <div class=\"table-responsive\">\r\n                              <table class=\"table table-bordered table-hover\">\r\n                                <thead>\r\n                                  <tr>\r\n\r\n                                    <th>Company</th>\r\n                                    <th>Title</th>\r\n                                    <th>Date</th>\r\n                                  </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                  <tr>\r\n                                    <td>ABC Electric Canada Inc</td>\r\n                                    <td>Office asistant - CO-OP Intern\r\n                                    </td>\r\n\r\n                                    <td>\r\n                                      2011/10/01 - 2012/02/01\r\n                                    </td>\r\n                                  </tr>\r\n                                  <tr>\r\n                                    <td>Tesla Beijing Inc</td>\r\n                                    <td>Software Engineer - Summer Intern\r\n                                    </td>\r\n\r\n                                    <td>\r\n                                      2015/05/13 - 2015/08/15\r\n                                    </td>\r\n                                  </tr>\r\n                                  <tr>\r\n                                    <td>IBM Canada Lab</td>\r\n                                    <td>Support Engineer - PEY Intern\r\n                                    </td>\r\n\r\n                                    <td>\r\n                                      2017/05/02 - Present\r\n                                    </td>\r\n                                  </tr>\r\n                                </tbody>\r\n                              </table>\r\n                            </div>\r\n                          </div>\r\n\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"panel-footer\">\r\n                        Additional information about project in footer\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n            <div id=\"tab-2\" class=\"tab-pane\">\r\n              <div class=\"panel-body\">\r\n                <div class=\"col-lg-12\">\r\n                  <div class=\"row projects\">\r\n                    <div class=\"hpanel hyellow\">\r\n                      <div class=\"panel-body\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-8\">\r\n                            <h4>\r\n                              <a href=\"#\"> {{user.team.name}}</a>\r\n                            </h4>\r\n                            <!--<div style=\"word-wrap: break-word;margin-bottom:5%\">\r\n                              <small style=\"margin-right:1%\" *ngFor=\"let tag of user.team.tags\"> {{tag}} </small>\r\n                            </div>-->\r\n                            <div class=\"row\">\r\n                              <div class=\"col-sm-3\">\r\n                                <div class=\"project-label\">Initiator</div>\r\n                                <small>{{user.team.owner}}</small>\r\n                              </div>\r\n                              <!-- <div class=\"col-sm-3\">\r\n                                <div class=\"project-label\">Modifed</div>\r\n                                <small>{{user.team.modifed}}</small>\r\n                              </div>\r\n                              <div class=\"col-sm-3\">\r\n                                <div class=\"project-label\">Created</div>\r\n                                <small>{{user.team.created}}</small>\r\n                              </div> -->\r\n                              <div class=\"col-sm-3\">\r\n                                <div class=\"project-label\">Progress</div>\r\n                                <div class=\"progress m-t-xs full progress-small\">\r\n                                  <div style=\"width: 100%\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"100\" role=\"progressbar\" class=\" progress-bar progress-bar-warning\">\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-4 project-info\">\r\n                            <div class=\"project-value\">\r\n                              <h2 class=\"text-warning\">\r\n                                {{user.team.views}} Views\r\n                              </h2>\r\n                            </div>\r\n                            <!-- <div class=\"project-people\">\r\n                                <img alt=\"logo\" class=\"img-circle\" src=\"assets/a7.jpg\">\r\n                                <img alt=\"logo\" class=\"img-circle\" src=\"assets/a8.jpg\">\r\n                                <img alt=\"logo\" class=\"img-circle\" src=\"assets/a3.jpg\">\r\n                                <img alt=\"logo\" class=\"img-circle\" src=\"assets/a2.jpg\">\r\n                              </div> -->\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"panel-footer\">\r\n                        Additional information about project in footer\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div id=\"tab-3\" class=\"tab-pane\">\r\n              <div class=\"panel-body\">\r\n                <div class=\"col-lg-12\">\r\n                  <div class=\"row projects\">\r\n                    <div class=\"hpanel hblue\" *ngFor='let proj of likedp'>\r\n                      <div class=\"panel-body\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-8\">\r\n                            <h4>\r\n                              <a [routerLink]=\"['/projects', proj.pid]\"> {{proj.name}}</a>\r\n                            </h4>\r\n\r\n                            <p>\r\n                              {{proj.abs}}\r\n                            </p>\r\n\r\n                            <div class=\"row\">\r\n                              <div class=\"col-sm-3\">\r\n                                <div class=\"project-label\">Initiator</div>\r\n                                <small>{{proj.owner_first_name}} {{proj.owner_last_name}}</small>\r\n                              </div>\r\n\r\n                              <!-- <div class=\"col-sm-3\">\r\n                                <div class=\"project-label\">Modified</div>\r\n                                <small>{{user.project.modified}}</small>\r\n                              </div>\r\n                              <div class=\"col-sm-3\">\r\n                                <div class=\"project-label\">Created</div>\r\n                                <small>{{user.project.created}}</small>\r\n                              </div> -->\r\n\r\n                              <div class=\"col-sm-3\">\r\n                                <div class=\"project-label\">Status</div>\r\n                                <small *ngIf=\"proj.status=='Open'\" class=\"label label-success \">OPEN</small>\r\n                                <small *ngIf=\"proj.status == 'Closed'\" class=\"label label-warning \">Closed</small>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-4 project-info\">\r\n                            <!-- <div class=\"project-value\">\r\n                              <h2 class=\"text-info\">\r\n                                {{user.project.views}} Views\r\n                              </h2>\r\n                            </div> -->\r\n                            <!-- <div class=\"project-people\">\r\n                                            <img alt=\"logo\" class=\"img-circle\" src=\"assets/a1.jpg\">\r\n                                            <img alt=\"logo\" class=\"img-circle\" src=\"assets/a2.jpg\">\r\n                                            <img alt=\"logo\" class=\"img-circle\" src=\"assets/a3.jpg\">\r\n                                            <img alt=\"logo\" class=\"img-circle\" src=\"assets/a4.jpg\">\r\n                                          </div> -->\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/users/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_user_service_user_service__ = __webpack_require__("../../../../../src/app/home/users/user-service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teams_team_service_team_service__ = __webpack_require__("../../../../../src/app/home/teams/team-service/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projects_project_service_project_service__ = __webpack_require__("../../../../../src/app/home/projects/project-service/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
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
    function UserProfileComponent(_userService, _teamService, _projectService, _route) {
        this._userService = _userService;
        this._teamService = _teamService;
        this._projectService = _projectService;
        this._route = _route;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user_status = 0;
        var uid = +this._route.snapshot.paramMap.get('uid');
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
                    if (_user.tid === 2017646) {
                        //get actual pid later
                        _this._projectService.getProject(2017505)
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
                        _this.user = _user;
                        // })
                    }
                });
            }
            else {
                _user.team = null;
                _this.user = _user;
            }
            console.log('user staus', _this.user_status);
        });
    };
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-profile',
            template: __webpack_require__("../../../../../src/app/home/users/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/users/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__users_user_service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__teams_team_service_team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_4__projects_project_service_project_service__["a" /* ProjectService */],
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
        this.url = 'http://api.ece496.com';
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
    UserService.prototype.postRealProfile = function (_payload) {
        return this._http.post(this.url + this.rest + 'profiles/', _payload, this.httpOptions())
            .do(function (data) { return console.log("Post Profile", data); })
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