webpackJsonp([4],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllChannelsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AllChannelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllChannelsPage = /** @class */ (function () {
    function AllChannelsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AllChannelsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllChannelsPage');
    };
    AllChannelsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-all-channels',template:/*ion-inline-start:"/Users/jaehoonp/ZipTeamPurple-FrontEnd/src/pages/all-channels/all-channels.html"*/'\n\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>All Available Channels</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jaehoonp/ZipTeamPurple-FrontEnd/src/pages/all-channels/all-channels.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AllChannelsPage);
    return AllChannelsPage;
}());

//# sourceMappingURL=all-channels.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateChannelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CreateChannelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateChannelPage = /** @class */ (function () {
    function CreateChannelPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CreateChannelPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateChannelPage');
    };
    CreateChannelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-channel',template:/*ion-inline-start:"/Users/jaehoonp/ZipTeamPurple-FrontEnd/src/pages/create-channel/create-channel.html"*/'\n\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>createChannel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content text-center>\n\n    <br><br><br><br>\n\n    <h1>Create a channel</h1>\n    <br>\n    <h3>Channels are where your members communicate.</h3>\n\n    <br><br><br>\n    <h2>Name</h2>\n    <ion-item >\n\n        <ion-input\n        type="text"\n        placeholder="# e.g. ZipTeam Study Session"\n        [(ngModel)]="message"\n        (keyup.enter)="sendMessage()"\n        >\n        </ion-input>\n        \n\n      </ion-item>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jaehoonp/ZipTeamPurple-FrontEnd/src/pages/create-channel/create-channel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CreateChannelPage);
    return CreateChannelPage;
}());

//# sourceMappingURL=create-channel.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.cancel = function () {
        this.navCtrl.popToRoot();
    };
    RegisterPage.prototype.register = function () {
        this.navCtrl.popToRoot();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/jaehoonp/ZipTeamPurple-FrontEnd/src/pages/register/register.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content text-center class="register">\n\n    <br><br><br><br><br>\n\n  <ion-list>\n    <ion-item>\n      <ion-label fixed>Username</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label fixed>First Name</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label fixed>Last Name</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label fixed>Password</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label fixed>Email</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n  </ion-list>\n  <button ion-button color="danger" round (click)="register()">Confirm</button>\n  <br>\n  <button ion-button color="danger" round (click)="cancel()">Cancel</button>\n</ion-content>'/*ion-inline-end:"/Users/jaehoonp/ZipTeamPurple-FrontEnd/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/all-channels/all-channels.module": [
		284,
		3
	],
	"../pages/channel/channel.module": [
		286,
		2
	],
	"../pages/create-channel/create-channel.module": [
		285,
		1
	],
	"../pages/register/register.module": [
		287,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__url_url__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the MessageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MessageProvider = /** @class */ (function () {
    function MessageProvider(http, userProvider, urlProvider) {
        this.http = http;
        this.userProvider = userProvider;
        this.urlProvider = urlProvider;
        console.log('Hello MessageProvider Provider');
    }
    MessageProvider.prototype.getAll = function () {
        var url = this.urlProvider.getBaseUrl() + "/get_messages";
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': this.userProvider.getToken()
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(url, options).subscribe(function (result) {
            console.log(result);
        });
    };
    MessageProvider.prototype.post = function (channelId, message, callback) {
        var _this = this;
        var url = this.urlProvider.getBaseUrl() + "/post";
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': this.userProvider.getToken(),
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        var body = {
            "channelId": channelId,
            "message": message
        };
        this.http.post(url, body, options).subscribe(function (result) {
            console.log(result);
            _this.get(channelId, function (after) {
                callback();
            });
        });
    };
    MessageProvider.prototype.get = function (channelId, callback) {
        var url = this.urlProvider.getBaseUrl() + "/messages?channelid=" + channelId;
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': this.userProvider.getToken(),
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(url, options).subscribe(function (result) {
            console.log(result);
            callback(result);
        });
    };
    MessageProvider.prototype.delete = function (messageId, callback) {
        var url = this.urlProvider.getBaseUrl() + "/delete?messageId=" + messageId;
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': this.userProvider.getToken(),
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.delete(url, options).subscribe(function (result) {
            console.log(result);
            callback();
        });
    };
    MessageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_3__url_url__["a" /* UrlProvider */]])
    ], MessageProvider);
    return MessageProvider;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_http__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ChannelProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ChannelProvider = /** @class */ (function () {
    function ChannelProvider(http, userProvider) {
        this.http = http;
        this.userProvider = userProvider;
        this.baseUrl = "https://zipteampurple.herokuapp.com";
        console.log('Hello ChannelProvider Provider');
    }
    ChannelProvider.prototype.get = function (callback) {
        var url = this.baseUrl + "/user_channels";
        var header = new __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_http__["a" /* Headers */]({
            'Authorization': this.userProvider.getToken(),
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(url, options).subscribe(function (result) {
            //console.log(result);
            callback(result.json());
        });
    };
    ChannelProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__node_modules_angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1__user_user__["a" /* UserProvider */]])
    ], ChannelProvider);
    return ChannelProvider;
}());

//# sourceMappingURL=channel.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__channel_channel__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, formbuilder, userprovider) {
        this.navCtrl = navCtrl;
        this.formbuilder = formbuilder;
        this.userprovider = userprovider;
        this.formgroup = this.formbuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
        this.username = this.formgroup.controls['username'];
        this.password = this.formgroup.controls['password'];
    }
    HomePage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__channel_channel__["a" /* ChannelPage */]);
    };
    HomePage.prototype.sendLogin = function (loginForm) {
        var _this = this;
        this.userprovider.login(loginForm.username, loginForm.password, function (result) {
            if (result.status == 200) {
                console.log("Success!");
                _this.userprovider.setToken(result.headers.get("authorization"));
                console.log(_this.userprovider.getToken());
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__channel_channel__["a" /* ChannelPage */]);
            }
            else {
                console.log("invalid login attempt");
            }
        });
    };
    HomePage.prototype.registerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */]);
    };
    HomePage.prototype.setLoginForm = function () {
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/jaehoonp/ZipTeamPurple-FrontEnd/src/pages/home/home.html"*/'<ion-header>\n</ion-header>\n\n\n\n<ion-content text-center class = "login">\n\n  <br><br><br><br><br>\n  <img src="../assets/imgs/fullLogo.png" alt="SLACK" class="rounded-corners">\n\n  <br><br><br><br>\n  \n\n\n  <form [formGroup]="formgroup" (ngSubmit)="sendLogin(formgroup.value)">\n\n<ion-list>\n\n  <ion-item text-center>\n\n\n    <ion-label fixed>Username</ion-label>\n    <ion-input type="text" formControlName="username"></ion-input>\n  </ion-item>\n\n  <ion-item text-center *ngIf="username.hasError(\'required\') && username.touched">\n    <p> *Please enter your username</p>\n  </ion-item>\n\n  <ion-item text-center>\n    <ion-label fixed>Password</ion-label>\n    <ion-input type="password" formControlName="password"></ion-input>\n  </ion-item>\n\n  <ion-item text-center *ngIf="password.hasError(\'required\') && password.touched">\n      <p> *Please enter your password</p>\n    </ion-item>\n\n\n</ion-list>\n\n\n\n\n<button ion-button color="danger" round type="submit">Login</button>\n\n<!-- line break -->\n<br>\n\n<button ion-button color="danger" (click)="registerPage()" round>Sign Up</button>\n\n\n</form>\n\n\n  <form [formGroup]="loginform" (ngSubmit)="sendLogin(loginForm.value)" *ngIf="loginForm">\n\n    <ion-label fixed>Username</ion-label>\n    <input type="text" name="name" formControlName="username">\n\n    <ion-label fixed>Password</ion-label>\n    <input type="text" name="name" formControlName="password">\n\n    <input type="submit" class="cta-btn filled" value="Submit" [disabled]="!loginForm.valid">\n   </form>\n\n\n\n\n\n  <!-- Toggle menu button -->\n  <!-- <br> -->\n  <button ion-button secondary menuToggle>Toggle Menu</button> \n  \n</ion-content>\n'/*ion-inline-end:"/Users/jaehoonp/ZipTeamPurple-FrontEnd/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/jaehoonp/ZipTeamPurple-FrontEnd/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jaehoonp/ZipTeamPurple-FrontEnd/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_channel_channel__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_user_user__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_message_message__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_channel_channel__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_url_url__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_register_register__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_create_channel_create_channel__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_all_channels_all_channels__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_channel_channel__["a" /* ChannelPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_create_channel_create_channel__["a" /* CreateChannelPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_all_channels_all_channels__["a" /* AllChannelsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/all-channels/all-channels.module#AllChannelsPageModule', name: 'AllChannelsPage', segment: 'all-channels', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-channel/create-channel.module#CreateChannelPageModule', name: 'CreateChannelPage', segment: 'create-channel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/channel/channel.module#ChannelPageModule', name: 'ChannelPage', segment: 'channel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_channel_channel__["a" /* ChannelPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_create_channel_create_channel__["a" /* CreateChannelPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_all_channels_all_channels__["a" /* AllChannelsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_message_message__["a" /* MessageProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_channel_channel__["a" /* ChannelProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_url_url__["a" /* UrlProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_channel_channel__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_create_channel_create_channel__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_all_channels_all_channels__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Channel', component: __WEBPACK_IMPORTED_MODULE_6__pages_channel_channel__["a" /* ChannelPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.openChannelPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_channel_channel__["a" /* ChannelPage */]);
    };
    MyApp.prototype.backToLoginPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.openCreateChannelPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_create_channel_create_channel__["a" /* CreateChannelPage */]);
    };
    MyApp.prototype.openAllChannelsPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_all_channels_all_channels__["a" /* AllChannelsPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jaehoonp/ZipTeamPurple-FrontEnd/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Zip-Slack</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n\n      \n\n      <button menuClose ion-item *ngFor="" (click)="openPage(p)">\n        \n      </button>\n\n      \n\n      <ion-list-header>\n          <h2>Channels</h2>\n        </ion-list-header>\n\n        <!-- <ion-item (click)="openPage(ChannelPage)">General Channel</ion-item> -->\n        <ion-item menuClose (click)="openChannelPage()">General Channel</ion-item>\n\n        <button menuClose ion-button color="light" type="button"(click)="openCreateChannelPage()" round>+ New Channel</button>\n        \n\n        <!-- View All Channels button -->\n        <button menuClose ion-button color="light" type="button"(click)="openAllChannelsPage()" round>\n          <div><ion-icon name="eye" style="padding-right: 5px;"></ion-icon>  </div> \n          View All Channels\n        </button>\n\n\n        <ion-list-header>\n            Direct messages\n          </ion-list-header>\n\n          <ion-item (click)="openPage(ChannelPage)">nmaidanos</ion-item>\n          <ion-item (click)="openPage(ChannelPage)">Small_Wrld</ion-item>\n\n          <button ion-button color="light" type="button" (click)="openPage(Channel)">+ New Direct Message</button>\n          \n\n\n\n          <ion-footer text-center>\n\n              <button menuClose ion-button color="danger" type="submit" (click)="backToLoginPage()" round>Logout</button>\n\n          </ion-footer>\n\n\n\n          \n    </ion-list>\n\n\n\n\n\n\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/jaehoonp/ZipTeamPurple-FrontEnd/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__url_url__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = /** @class */ (function () {
    function UserProvider(http, urlProvider) {
        this.http = http;
        this.urlProvider = urlProvider;
        console.log('Hello UserProvider Provider');
    }
    UserProvider.prototype.getToken = function () { return this.token; };
    UserProvider.prototype.setToken = function (token) { this.token = token; };
    UserProvider.prototype.login = function (username, password, callback) {
        var url = this.urlProvider.getBaseUrl() + "/login";
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'content-type': 'application/json',
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        var body = {
            "username": username,
            "password": password
        };
        this.http.post(url, body, options).subscribe(function (result) {
            callback(result);
            //console.log(result.headers.get("authorization"));
        });
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__url_url__["a" /* UrlProvider */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_message_message__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_channel_channel__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ChannelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChannelPage = /** @class */ (function () {
    function ChannelPage(navCtrl, navParams, alertController, messageProvider, channelProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.messageProvider = messageProvider;
        this.channelProvider = channelProvider;
        this.messages = [];
        this.channels = [];
        this.currentChannel = { "id": 1 };
        this.getMessages();
        this.getChannels();
    }
    ChannelPage.prototype.setCurrentChannel = function (currentChannel) {
        this.currentChannel = currentChannel;
    };
    ChannelPage.prototype.getCurrentChannelId = function () {
        return this.currentChannel.id;
    };
    ChannelPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChannelPage');
        this.start();
    };
    ChannelPage.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.runningLoopOfMessages(_this.channelProvider); }, 5000);
    };
    ChannelPage.prototype.getMessages = function () {
        var _this = this;
        this.messageProvider.get(1, function (after) {
            _this.messages = after.json();
        });
    };
    ChannelPage.prototype.getChannels = function () {
        var _this = this;
        this.timerToken = setInterval(this.channelProvider.get(function (channels) {
            _this.channels = channels;
        }), 5000);
    };
    ChannelPage.prototype.runningLoopOfMessages = function (channelProvider) {
        var _this = this;
        this.messageProvider.get(1, function (after) {
            _this.messages = after.json();
        });
    };
    ChannelPage.prototype.deleteMessage = function (messageId) {
        var _this = this;
        this.messageProvider.delete(messageId, function (after) {
            _this.getMessages();
        });
    };
    // sendMessage(){
    //   let addTodoAlert = this.alertController.create({
    //     title: "Send Message",
    //     message: "Enter a message:",
    //     inputs: [
    //       {
    //         type: "text",
    //         name: "addTodoInput"
    //       }
    //     ],
    //     buttons: [
    //         {
    //           text: "Cancel"
    //         },
    //         {
    //           text: "Send",
    //           handler: (inputData) => {
    //             let todoText;
    //             todoText = inputData.addTodoInput;
    //             //this.messageProider.getAll();
    //             this.messageProvider.post(1, todoText, after => {
    //               this.getMessages();
    //             });
    //             //this.todos.push(todoText);
    //             //this.todoProvider.addTodo(todoText);
    //           }
    //         }
    //     ]
    //   });
    //   addTodoAlert.present();
    // }
    ChannelPage.prototype.sendMessage = function () {
        var _this = this;
        if (!this.message.trim())
            return;
        this.messageProvider.post(1, this.message, function (after) {
            _this.message = '';
            _this.getMessages();
        });
    };
    ChannelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-channel',template:/*ion-inline-start:"/Users/jaehoonp/ZipTeamPurple-FrontEnd/src/pages/channel/channel.html"*/'\n\n\n<!-- <ion-buttons start>\n\n  <button ion-button icon-only menuToggle>\n\n    <ion-icon name="menu"></ion-icon>\n\n  </button>\n\n</ion-buttons> -->\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Channel</ion-title>\n\n    <ion-buttons start>\n\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <!-- <button ion-button (click)="sendMessage()">\n          <ion-icon name="add"></ion-icon>\n        </button> -->\n        <button ion-button (click)="getMessages()">\n          <ion-icon name="refresh"></ion-icon>\n        </button>\n      \n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n    <!-- <ion-list padding>\n        <h1>Channels</h1>\n        <ion-item-sliding *ngFor="let channel of channels">\n            <ion-item>{{channel.name}}</ion-item>\n\n          <ion-item-options side="right">\n              <button ion-button>\n                  <ion-icon name="settings"></ion-icon>\n                </button>\n              <button color="danger" ion-button (click)="deleteMessage(message.id)">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n     \n          </ion-item-options>\n        </ion-item-sliding>\n\n        <button>Create new Channel</button>\n        \n        <ion-item>Todo 2</ion-item>\n        <ion-item>Todo 3</ion-item>\n      </ion-list> -->\n\n    <ion-list padding>\n      <ion-item-sliding *ngFor="let message of messages">\n          <ion-item>{{message.user.username}} - {{message.message}}</ion-item>\n    \n        <ion-item-options side="right">\n            <button ion-button>\n                <ion-icon name="settings"></ion-icon>\n              </button>\n            <button color="danger" ion-button (click)="deleteMessage(message.id)">\n              <ion-icon name="trash"></ion-icon>\n            </button>\n   \n        </ion-item-options>\n      </ion-item-sliding>\n\n\n\n\n\n\n      <ion-footer>\n\n        <ion-item >\n\n          <ion-input #chat_input\n          type="text"\n          placeholder="Text Input"\n          [(ngModel)]="message"\n          (keyup.enter)="sendMessage()"\n          >\n\n          </ion-input>\n\n        </ion-item>\n\n\n\n          <!-- <textarea #chat_input\n          placeholder="Text Input"\n          [(ngModel)]="message"\n          (keyup.enter)="sendMessage()"\n          >\n          </textarea> -->\n  \n\n\n          <!-- Do we need to keep this button?\n          <button ion-button clear icon-only item-right (click)="sendMessage()">\n          <ion-icon name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n          </button> -->\n  \n      </ion-footer>\n\n\n\n\n    </ion-list>\n\n\n    \n   \n   </ion-content>\n\n\n'/*ion-inline-end:"/Users/jaehoonp/ZipTeamPurple-FrontEnd/src/pages/channel/channel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_message_message__["a" /* MessageProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_channel_channel__["a" /* ChannelProvider */]])
    ], ChannelPage);
    return ChannelPage;
}());

//# sourceMappingURL=channel.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
  Generated class for the UrlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UrlProvider = /** @class */ (function () {
    function UrlProvider() {
        // constructor(public http: HttpClient) {
        //   console.log('Hello UrlProvider Provider');
        // }
        //private baseUrl = "http://localhost:8080";
        this.baseUrl = "https://zipteampurple.herokuapp.com";
    }
    UrlProvider.prototype.setBaseUrl = function (baseUrl) {
        this.baseUrl = baseUrl;
    };
    UrlProvider.prototype.getBaseUrl = function () {
        return this.baseUrl;
    };
    UrlProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], UrlProvider);
    return UrlProvider;
}());

//# sourceMappingURL=url.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map