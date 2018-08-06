webpackJsonp([0],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateChannelPageModule", function() { return CreateChannelPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_channel__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateChannelPageModule = /** @class */ (function () {
    function CreateChannelPageModule() {
    }
    CreateChannelPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_channel__["a" /* CreateChannelPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_channel__["a" /* CreateChannelPage */]),
            ],
        })
    ], CreateChannelPageModule);
    return CreateChannelPageModule;
}());

//# sourceMappingURL=create-channel.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateChannelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
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
            selector: 'page-create-channel',template:/*ion-inline-start:"/Users/jaehoonp/ZipTeamPurple-FrontEnd/src/pages/create-channel/create-channel.html"*/'\n\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>createChannel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content text-center>\n\n    <br><br><br><br>\n\n    <h1>Create a channel</h1>\n    <br>\n    <h3>Channels are where your members communicate.</h3>\n\n    <br><br><br>\n    <h2>Name</h2>\n    <ion-item >\n\n        <ion-input\n        type="text"\n        placeholder="# e.g. ZipTeam Study Room"\n        [(ngModel)]="message"\n        (keyup.enter)="sendMessage()"\n        >\n        </ion-input>\n        \n\n      </ion-item>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jaehoonp/ZipTeamPurple-FrontEnd/src/pages/create-channel/create-channel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CreateChannelPage);
    return CreateChannelPage;
}());

//# sourceMappingURL=create-channel.js.map

/***/ })

});
//# sourceMappingURL=0.js.map