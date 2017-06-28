webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_q_new_q_component__ = __webpack_require__("../../../../../src/app/new-q/new-q.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_a_new_a_component__ = __webpack_require__("../../../../../src/app/new-a/new-a.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__show_show_component__ = __webpack_require__("../../../../../src/app/show/show.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */], pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'newQ', component: __WEBPACK_IMPORTED_MODULE_4__new_q_new_q_component__["a" /* NewQComponent */] },
    { path: 'answers/:id', component: __WEBPACK_IMPORTED_MODULE_5__new_a_new_a_component__["a" /* NewAComponent */] },
    { path: 'questions/:id', component: __WEBPACK_IMPORTED_MODULE_6__show_show_component__["a" /* ShowComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

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

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__new_q_new_q_component__ = __webpack_require__("../../../../../src/app/new-q/new-q.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__new_a_new_a_component__ = __webpack_require__("../../../../../src/app/new-a/new-a.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__show_show_component__ = __webpack_require__("../../../../../src/app/show/show.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__new_q_new_q_component__["a" /* NewQComponent */],
            __WEBPACK_IMPORTED_MODULE_10__new_a_new_a_component__["a" /* NewAComponent */],
            __WEBPACK_IMPORTED_MODULE_11__show_show_component__["a" /* ShowComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_2__question_service__["a" /* QuestionService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

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

module.exports = "<button (click)='signOut()' type=\"button\" name=\"button\">Logout</button>\n\n<h1>Hi, {{currentUser.name}}!</h1>\n\n<button (click)='newQuestion()' type=\"button\" name=\"button\">Add a Question</button>\n\n<table>\n  <tr>\n    <th>Question</th>\n    <th>Answers</th>\n    <th>Action</th>\n  </tr>\n  <tr *ngFor='let question of questions'>\n    <td>{{question.content}}</td>\n    <td>{{question.answers.length}}</td>\n    <td><a [routerLink]=\"['/questions', question._id]\">Show</a><a [routerLink]=\"['/answers', question._id]\">Answer</a></td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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
    function HomeComponent(_questionservice, _router) {
        var _this = this;
        this._questionservice = _questionservice;
        this._router = _router;
        this.currentUser = { name: "" };
        this.questions = [];
        this._questionservice.getCurrentUser()
            .then(function (data) { return _this.currentUser = data; })
            .catch(function (data) {
            console.log("no user found");
            _this._router.navigate(['/']);
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getQuestionsFromService();
    };
    HomeComponent.prototype.getQuestionsFromService = function () {
        var _this = this;
        this._questionservice.getQuestions()
            .then(function (data) {
            _this.questions = data;
        })
            .catch(function (err) { console.log(err); });
    };
    HomeComponent.prototype.newQuestion = function () {
        this._router.navigate(['newQ']);
    };
    HomeComponent.prototype.signOut = function () {
        var _this = this;
        this._questionservice.logout()
            .then(function (data) { return _this._router.navigate(['/']); })
            .catch(function (data) { return _this._router.navigate(['/']); });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Q&A</h1>\n<form (submit)=\"onSubmit()\">\n\t<p>Name: <input type=\"text\" name=\"name\" [(ngModel)]=\"user.name\" #name=\"ngModel\"></p>\n\t<input type=\"submit\" name=\"\" value=\"Enter\">\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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
    function LoginComponent(_questionservice, _router) {
        this._questionservice = _questionservice;
        this._router = _router;
        this.user = { name: '' };
        this.errors = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.user);
        this._questionservice.login(this.user)
            .then(function (data) {
            console.log("then");
            var arr = [];
            if (data.errors) {
                for (var key in data.errors) {
                    arr.push(data.errors[key].message);
                    _this.errors = arr;
                }
            }
            else {
                // route to our success page
                console.log("rerouting to bids page");
                _this._router.navigate(['/home']);
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/new-a/new-a.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-a/new-a.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)='signOut()' type=\"button\" name=\"button\">Logout</button>\n<a [routerLink]=\"['/home']\">Home</a>\n<a [routerLink]=\"['/questions', question._id]\">Go Back to Question</a>\n\n<h1>{{question.content}}</h1>\n<h3>{{question.description}}</h3>\n<form (submit)='addAnswer(question._id)'>\n  <p class='error' *ngIf='!text.pristine && text.invalid'>Answer must be at least 5 characters</p>\n  Your Answer: <textarea [(ngModel)]='answer.text' #text='ngModel' name=\"text\" rows=\"8\" cols=\"80\" minlength=5></textarea><br>\n  Supporting details for your answer (optional) <textarea [(ngModel)]='answer.details' #details='ngModel' name=\"details\" rows=\"8\" cols=\"80\"></textarea>\n  <input type=\"submit\" name=\"submit\" value=\"Submit\">\n  <button (click)='goHome()' type=\"button\" name=\"button\">Cancel</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/new-a/new-a.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewAComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewAComponent = (function () {
    function NewAComponent(_router, _route, _questionservice) {
        var _this = this;
        this._router = _router;
        this._route = _route;
        this._questionservice = _questionservice;
        this.question = {};
        this.currentUser = { name: '' };
        this.answer = { text: '', details: '', };
        this._questionservice.getCurrentUser()
            .then(function (data) { return _this.currentUser = data; })
            .catch(function (data) {
            console.log("no user found");
            _this._router.navigate(['/']);
        });
        this._route.params.subscribe(function (param) {
            _this._questionservice.getQuestion(param.id)
                .then(function (data) {
                _this.question = data;
            })
                .catch(function (err) {
                if (err.status == 401) {
                    _this._router.navigate(['/']);
                }
            });
        });
    }
    NewAComponent.prototype.ngOnInit = function () {
    };
    NewAComponent.prototype.goHome = function () {
        this._router.navigate(['home']);
    };
    NewAComponent.prototype.addAnswer = function (data) {
        var _this = this;
        var newObj = { text: this.answer.text, details: this.answer.details, _question: data };
        this._questionservice.addAnswer(newObj)
            .then(function (data) {
            _this._router.navigate(['home']);
        })
            .catch(function (err) { console.log(err); });
    };
    NewAComponent.prototype.signOut = function () {
        var _this = this;
        this._questionservice.logout()
            .then(function (data) { return _this._router.navigate(['/']); })
            .catch(function (data) { return _this._router.navigate(['/']); });
    };
    return NewAComponent;
}());
NewAComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-new-a',
        template: __webpack_require__("../../../../../src/app/new-a/new-a.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-a/new-a.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]) === "function" && _c || Object])
], NewAComponent);

var _a, _b, _c;
//# sourceMappingURL=new-a.component.js.map

/***/ }),

/***/ "../../../../../src/app/new-q/new-q.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-q/new-q.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)='goHome()' type=\"button\" name=\"button\">Home</button>\n\n<button (click)='signOut()' type=\"button\" name=\"button\">Logout</button>\n\n<h1>New Question</h1>\n\n<form (submit)='addQuestion()'>\n  <p class='error' *ngIf='!content.pristine && content.invalid'>Question must be at least 10 characters</p>\n  Question: <textarea name=\"content\" [(ngModel)]='question.content' #content='ngModel' rows=\"8\" cols=\"80\" minlength=10></textarea><br>\n  Description (optional) <textarea name=\"description\" [(ngModel)]='question.description' #description='ngModel' rows=\"8\" cols=\"80\"></textarea>\n  <input type=\"submit\" name=\"submit\" value=\"Submit\">\n  <button (click)='goHome()' type=\"button\" name=\"button\">Cancel</button>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/new-q/new-q.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewQComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewQComponent = (function () {
    function NewQComponent(_questionservice, _router) {
        var _this = this;
        this._questionservice = _questionservice;
        this._router = _router;
        this.question = { content: '', description: '' };
        this.currentUser = { name: '' };
        this._questionservice.getCurrentUser()
            .then(function (data) { return _this.currentUser = data; })
            .catch(function (data) {
            console.log("no user found");
            _this._router.navigate(['/']);
        });
    }
    NewQComponent.prototype.ngOnInit = function () {
    };
    NewQComponent.prototype.addQuestion = function () {
        var _this = this;
        this._questionservice.addQuestion(this.question)
            .then(function (data) {
            _this._router.navigate(['home']);
        })
            .catch(function (err) { console.log(err); });
    };
    NewQComponent.prototype.signOut = function () {
        var _this = this;
        this._questionservice.logout()
            .then(function (data) { return _this._router.navigate(['/']); })
            .catch(function (data) { return _this._router.navigate(['/']); });
    };
    NewQComponent.prototype.goHome = function () {
        this._router.navigate(['home']);
    };
    return NewQComponent;
}());
NewQComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-new-q',
        template: __webpack_require__("../../../../../src/app/new-q/new-q.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-q/new-q.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NewQComponent);

var _a, _b;
//# sourceMappingURL=new-q.component.js.map

/***/ }),

/***/ "../../../../../src/app/question.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionService = (function () {
    function QuestionService(_http) {
        this._http = _http;
    }
    QuestionService.prototype.login = function (newUser) {
        console.log(newUser);
        return this._http.post('/api/login', newUser).map(function (response) { return response.json(); }).toPromise();
    };
    QuestionService.prototype.getCurrentUser = function () {
        return this._http.get('/api/current_user').map(function (response) { return response.json(); }).toPromise();
    };
    QuestionService.prototype.logout = function () {
        return this._http.get('/api/logout').map(function (response) { return response.json(); }).toPromise();
    };
    QuestionService.prototype.getQuestions = function () {
        return this._http.get('/api/questions').map(function (response) { return response.json(); }).toPromise();
    };
    QuestionService.prototype.addQuestion = function (newQuestion) {
        return this._http.post('/api/questions', newQuestion).map(function (response) { return response.json(); }).toPromise();
    };
    QuestionService.prototype.getQuestion = function (questionId) {
        return this._http.get('/api/questions/' + questionId).map(function (response) { return response.json(); }).toPromise();
    };
    QuestionService.prototype.addAnswer = function (newAnswer) {
        return this._http.post('/api/answers', newAnswer).map(function (response) { return response.json(); }).toPromise();
    };
    QuestionService.prototype.addLike = function (newLike) {
        return this._http.post('/api/likes', newLike).map(function (response) { return response.json(); }).toPromise();
    };
    return QuestionService;
}());
QuestionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], QuestionService);

var _a;
//# sourceMappingURL=question.service.js.map

/***/ }),

/***/ "../../../../../src/app/show/show.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/show/show.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/home']\">Home</a>\n<a [routerLink]=\"['/answers', question._id]\">Answer the Question</a>\n\n<button (click)='signOut()' type=\"button\" name=\"button\">Logout</button>\n<div class=\"question\">\n  <h1>{{question.content}}</h1>\n  <h3>{{question.description}}</h3>\n  <div class=\"answer\" *ngFor='let answer of question.answers'>\n    <p>{{answer._user.name}}:</p>\n    <p>{{answer.text}}</p>\n    <p>{{answer.details}}</p>\n    <p>{{answer._likes.length}} likes</p><button (click)='answerLiked(answer._id)' type=\"button\" name=\"button\">Like</button>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/show/show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowComponent = (function () {
    function ShowComponent(_router, _route, _questionservice) {
        var _this = this;
        this._router = _router;
        this._route = _route;
        this._questionservice = _questionservice;
        this.question = {};
        this.currentUser = { name: '' };
        this.like = { count: 1 };
        this.disabled = false;
        this._questionservice.getCurrentUser()
            .then(function (data) { return _this.currentUser = data; })
            .catch(function (data) {
            console.log("no user found");
            _this._router.navigate(['/']);
        });
        this._route.params.subscribe(function (param) {
            _this._questionservice.getQuestion(param.id)
                .then(function (data) {
                _this.question = data;
            })
                .catch(function (err) {
                if (err.status == 401) {
                    _this._router.navigate(['/']);
                }
            });
        });
    }
    ShowComponent.prototype.ngOnInit = function () {
    };
    ShowComponent.prototype.signOut = function () {
        var _this = this;
        this._questionservice.logout()
            .then(function (data) { return _this._router.navigate(['/']); })
            .catch(function (data) { return _this._router.navigate(['/']); });
    };
    ShowComponent.prototype.answerLiked = function (data) {
        var _this = this;
        var newObj = { count: this.like.count, _answer: data };
        this._questionservice.addLike(newObj)
            .then(function (data) {
            _this._route.params.subscribe(function (param) {
                _this._questionservice.getQuestion(param.id)
                    .then(function (data) {
                    _this.question = data;
                })
                    .catch(function (err) {
                    if (err.status == 401) {
                        _this._router.navigate(['/']);
                    }
                });
            });
        })
            .catch(function (err) { console.log(err); });
    };
    return ShowComponent;
}());
ShowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-show',
        template: __webpack_require__("../../../../../src/app/show/show.component.html"),
        styles: [__webpack_require__("../../../../../src/app/show/show.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]) === "function" && _c || Object])
], ShowComponent);

var _a, _b, _c;
//# sourceMappingURL=show.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map