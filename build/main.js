webpackJsonp([3],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
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
 * Generated class for the GraphPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GraphPage = /** @class */ (function () {
    function GraphPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GraphPage.prototype.getDataArrays = function () {
        return;
    };
    GraphPage.prototype.loadChart = function () {
        var timeFormat = 's';
        this.chart1canvas = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.chart1canvas.nativeElement, {
            type: 'line',
            data: {
                datasets: [
                    {
                        label: "US Dates",
                        data: [1, 5, 3, 4, 10, 2],
                        fill: false,
                        borderColor: 'red'
                    },
                    {
                        label: "UK Dates",
                        data: [4, 2, 7, 1, 3, 5],
                        fill: false,
                        borderColor: 'blue'
                    }
                ],
                labels: [1, 2, 3, 4, 5, 6]
            },
            options: {
                // elements: {
                //   line: {
                //     tension: 0
                //   }
                // },
                responsive: true,
                scales: {
                    xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Time'
                            },
                            ticks: {
                                callback: function (dataLabel, index) {
                                    // Hide the label of every 2nd dataset
                                    return index % 2 === 0 ? dataLabel : '';
                                }
                            }
                        }],
                    yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'PV'
                            }
                        }]
                }
            }
        });
        // this.chart1canvas = new Chart(this.chart1canvas.nativeElement, {
        //   type: 'line',
        //   data: {
        //     datasets: [
        //       {
        //         label: "US Dates",
        //         data: [{
        //           x: 1, y: 175
        //         }, {
        //           x: 2, y: 175
        //         }, {
        //           x: 3, y: 178
        //         }, {
        //           x: 4, y: 178
        //         }],
        //         fill: false,
        //         borderColor: 'red'
        //       },
        //       {
        //         label: "UK Dates",
        //         data: [{
        //           x: 1, y: 175
        //         }, {
        //           x: 2, y: 175
        //         }, {
        //           x: 3, y: 178
        //         }, {
        //           x: 4, y: 178
        //         }],
        //         fill: false,
        //         borderColor: 'blue'
        //       }
        //     ]
        //   },
        //   options: {
        //     responsive: true,
        //     title: {
        //       display: true,
        //       text: "Chart.js Time Scale"
        //     },
        //     scales: {
        //       xAxes: [{
        //         type: "time",
        //         distribution: 'series',
        //         time: {
        //           format: 's',
        //           unit: 'second'
        //         },
        //         scaleLabel: {
        //           display: true,
        //           labelString: 'Date'
        //         }
        //       }],
        //       yAxes: [{
        //         scaleLabel: {
        //           display: true,
        //           labelString: 'value'
        //         }
        //       }]
        //     }
        //   }
        // });
        console.log('Loaded Chart');
    };
    GraphPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GraphPage');
        this.loadChart();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('chart1canvas'),
        __metadata("design:type", Object)
    ], GraphPage.prototype, "chart1canvas", void 0);
    GraphPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-graph',template:/*ion-inline-start:"/Users/dom/IonicProjects/Looptune/src/pages/graph/graph.html"*/'<!--\n  Generated template for the GraphPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Graph</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header>\n      Line Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #chart1canvas></canvas>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/dom/IonicProjects/Looptune/src/pages/graph/graph.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], GraphPage);
    return GraphPage;
}());

//# sourceMappingURL=graph.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
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
 * Generated class for the InputPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InputPage = /** @class */ (function () {
    function InputPage(navCtrl, navParams, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.minCO = 0;
        this.maxCO = 100;
        this.minPV = 0;
        this.maxPV = 100;
        this.unit = 'sec';
        this.deltaCO = 3;
        this.inputDeadTime = 6;
        this.elapsedTime = 37;
        this.initialPV = 13.5;
        this.finalPV = 16;
        this.scaledKc = 1;
        this.rate = 0;
        this.gain = {
            conservative: 1,
            moderate: 2,
            aggressive: 3,
            custom: 4,
            cohenCoon: 'N/A'
        };
        this.CLTimeConstant = {
            conservative: 1,
            moderate: 2,
            aggressive: 3,
            custom: 31
        };
        this.inputReset = 31;
        this.reset = 31;
        this.tuningCalculated = false;
    }
    InputPage.prototype.roundUp = function (num, precision) {
        precision = Math.pow(10, precision);
        return Math.ceil(num * precision) / precision;
    };
    InputPage.prototype.openLoopCalcs = function () {
        // calc process gain
        this.processGain = (this.finalPV - this.initialPV) / this.deltaCO;
        // calc time constant
        this.OLTimeConstant = this.elapsedTime - this.inputDeadTime;
        // calc dead time
        if (this.elapsedTime * 4 < 30) {
            this.deadTime = this.roundUp(this.inputDeadTime, 2);
        }
        else if (this.elapsedTime * 4 < 300) {
            this.deadTime = this.roundUp(this.inputDeadTime, 1);
        }
        else {
            this.deadTime = Math.round(this.inputDeadTime);
        }
    };
    InputPage.prototype.miscellaneousCalcs = function () {
        // calc unscaled process gain
        if (this.processGain <= 0) {
            this.unscaledKc = this.scaledKc * (this.maxCO - this.minCO) /
                (this.maxPV - this.minPV);
        }
        else {
            this.unscaledKc = -1 * this.scaledKc * (this.maxCO - this.minCO) /
                (this.maxPV - this.minPV);
        }
        // calc final time
        if (this.unit == 'sec') {
            this.finalTime = this.OLTimeConstant * 12 + this.deadTime;
        }
        else {
            this.finalTime = 60 * (this.OLTimeConstant * 12 + this.deadTime);
        }
        // calc time step
        this.timeStep = this.finalTime / 2000;
        // calc adjusted time constant & dead time
        this.adjustedOLTimeConstant = this.OLTimeConstant;
        this.adjustedDeadTime = this.deadTime;
        if (this.unit != 'sec') {
            this.adjustedOLTimeConstant = this.OLTimeConstant * 60;
            this.adjustedDeadTime = this.deadTime * 60;
        }
        if (this.deadTime == 0) {
            this.adjustedDeadTime = this.timeStep;
        }
    };
    InputPage.prototype.tuningCalcs = function () {
        // calc reset
        this.reset = this.adjustedOLTimeConstant;
        // calc recommended closed loop time constants
        if (this.unit == 'sec') {
            this.CLTimeConstant.conservative = this.adjustedOLTimeConstant;
            this.CLTimeConstant.moderate = this.adjustedOLTimeConstant * 0.8;
            this.CLTimeConstant.aggressive = this.adjustedOLTimeConstant * 0.65;
        }
        else {
            this.CLTimeConstant.conservative = this.adjustedOLTimeConstant / 60;
            this.CLTimeConstant.moderate = this.adjustedOLTimeConstant * 0.8 / 60;
            this.CLTimeConstant.aggressive = this.adjustedOLTimeConstant * 0.65 / 60;
        }
        // calc recommended gains
        this.gain.conservative = this.calcGainForTuning(this.CLTimeConstant.conservative);
        this.gain.moderate = this.calcGainForTuning(this.CLTimeConstant.moderate);
        this.gain.aggressive = this.calcGainForTuning(this.CLTimeConstant.aggressive);
        // Cohen Coon
        if (this.deadTime == 0) {
            this.gain.cohenCoon = 'N/A';
            this.cohenCoonReset = 'N/A';
        }
        else {
            this.gain.cohenCoon = 0.45 / Math.abs(this.processGain) *
                (this.adjustedOLTimeConstant / this.adjustedDeadTime + 0.092) *
                ((this.maxPV - this.minPV) / this.maxCO - this.minCO);
            this.cohenCoonReset = 3.33 * this.adjustedDeadTime * (this.adjustedOLTimeConstant +
                0.092 * this.adjustedDeadTime) / (this.adjustedOLTimeConstant + 2.22 *
                this.adjustedDeadTime);
        }
        this.gain.custom = this.calcGainForTuning(this.CLTimeConstant.custom);
    };
    // function for calculating recommended gain for tuning
    InputPage.prototype.calcGainForTuning = function (cl) {
        if (this.unit == 'sec') {
            return Math.abs(this.adjustedOLTimeConstant /
                (this.processGain * (cl + this.adjustedDeadTime) *
                    ((this.maxPV - this.minPV) / (this.maxCO - this.minCO))));
        }
        else {
            return Math.abs(this.adjustedOLTimeConstant /
                (this.processGain * (cl * 60 + this.adjustedDeadTime) *
                    ((this.maxPV - this.minPV) / (this.maxCO - this.minCO))));
        }
    };
    InputPage.prototype.alert = function () {
        this.openLoopCalcs();
        this.miscellaneousCalcs();
        this.tuningCalcs();
        console.log('Custom\nGain: ' + this.gain.custom + '\nReset: '
            + this.reset + '\nCL: ' + this.CLTimeConstant.custom);
        this.tuningCalculated = true;
        this.presentToast('Tuning parameters calculated. Scroll down to enter.');
    };
    InputPage.prototype.presentToast = function (message) {
        var toast = this.toast.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    InputPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InputPage');
    };
    InputPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-input',template:/*ion-inline-start:"/Users/dom/IonicProjects/Looptune/src/pages/input/input.html"*/'<!--\n  Generated template for the InputPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Input</ion-title>\n    <!-- <ion-buttons end>\n      <button ion-button icon-only (click)="alert()">\n        <ion-icon name="checkmark-circle-outline"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card class="bg">\n    <ion-card-header>\n      Controller Variable Ranges\n    </ion-card-header>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>CO Min</ion-label>\n            <ion-input type="number" [(ngModel)]="minCO">0</ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>CO Max</ion-label>\n            <ion-input type="number" [(ngModel)]="maxCO">100</ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>PV Min</ion-label>\n            <ion-input type="number" [(ngModel)]="minPV">0</ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>PV Max</ion-label>\n            <ion-input type="number" [(ngModel)]="maxPV">100</ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card class="bg">\n    <ion-card-header>\n      Open Loop Observations\n    </ion-card-header>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>Units</ion-label>\n            <ion-select [(ngModel)]="unit" interface="popover">\n              <ion-option value="sec">sec</ion-option>\n              <ion-option value="min">min</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>CO Step Change</ion-label>\n            <ion-input type="number" [(ngModel)]="deltaCO"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Process Dead Time</ion-label>\n            <ion-input type="number" [(ngModel)]="inputDeadTime"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Elapsed Time</ion-label>\n            <ion-input type="number" [(ngModel)]="elapsedTime"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Initial SS PV Value</ion-label>\n            <ion-input type="number" [(ngModel)]="initialPV"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Final SS PV Value</ion-label>\n            <ion-input type="number" [(ngModel)]="finalPV"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-row center>\n    <ion-col text-center>\n      <button ion-button color="purple" (click)="alert()">Submit</button>\n    </ion-col>\n  </ion-row>\n\n  <ion-card *ngIf="tuningCalculated" class="bg">\n    <ion-card-header>\n      Recommended Tuning Settings\n    </ion-card-header>\n    <ion-grid text-center class="white">\n      <ion-row>\n        <ion-col><b>Type</b></ion-col>\n        <ion-col><b>Gain</b></ion-col>\n        <ion-col><b>Reset</b></ion-col>\n        <ion-col><b>CL Time Constant</b></ion-col>\n      \n      </ion-row>\n      <ion-row>\n        <ion-col>Conservative</ion-col>\n        <ion-col>{{gain.conservative.toFixed(2)}}</ion-col>\n        <ion-col>{{reset.toFixed(1)}}</ion-col>\n        <ion-col>{{CLTimeConstant.conservative.toFixed(1)}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Moderate</ion-col>\n        <ion-col>{{gain.moderate.toFixed(2)}}</ion-col>\n        <ion-col>{{reset.toFixed(1)}}</ion-col>\n        <ion-col>{{CLTimeConstant.moderate.toFixed(1)}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Aggressive</ion-col>\n        <ion-col>{{gain.aggressive.toFixed(2)}}</ion-col>\n        <ion-col>{{reset.toFixed(1)}}</ion-col>\n        <ion-col>{{CLTimeConstant.aggressive.toFixed(1)}}</ion-col>\n      </ion-row>\n      <!-- <ion-row>\n        <ion-col>Custom</ion-col>\n        <ion-col>{{gain.custom.toFixed(2)}}</ion-col>\n        <ion-col>{{reset.toFixed(1)}}</ion-col>\n        <ion-col>\n          <ion-input [(ngModel)]="CLTimeConstant.custom"></ion-input>\n        </ion-col>\n      </ion-row> -->\n      <ion-row>\n        <ion-col>Cohen Coon</ion-col>\n        <ion-col>{{gain.cohenCoon.toFixed(2)}}</ion-col>\n        <ion-col>{{cohenCoonReset.toFixed(1)}}</ion-col>\n        <ion-col>N/A</ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n\n  <ion-card *ngIf="tuningCalculated" class="bg">\n    <ion-card-header>\n      Closed Loop Controller Settings\n    </ion-card-header>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>SP Change</ion-label>\n            <ion-input type="number" [(ngModel)]="inputSetpoint">0</ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Gain</ion-label>\n            <ion-input type="number" [(ngModel)]="inputGain">100</ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Reset</ion-label>\n            <ion-input type="number" [(ngModel)]="inputReset">0</ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n</ion-content>\n\n<!-- <ion-row>\n  <ion-col>\n    <ion-item>\n      <ion-label>Controller Output</ion-label>\n\n      <ion-badge color="purple" item-right>{{this.COMin2}}</ion-badge>\n      <ion-badge color="purple" item-right>{{this.COMax2}}</ion-badge>\n    </ion-item>\n    <ion-item>\n      <ion-range color="purple" dualKnobs="true" [min]=COMin [max]=COMax step="3" [(ngModel)]="CO" (ionChange)="setBadge(time)"></ion-range>\n    </ion-item>\n  </ion-col>\n</ion-row> -->'/*ion-inline-end:"/Users/dom/IonicProjects/Looptune/src/pages/input/input.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]) === "function" && _c || Object])
    ], InputPage);
    return InputPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=input.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
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
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TutorialPage = /** @class */ (function () {
    function TutorialPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TutorialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TutorialPage');
    };
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"/Users/dom/IonicProjects/Looptune/src/pages/tutorial/tutorial.html"*/'<!--\n  Generated template for the TutorialPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Tutorial</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dom/IonicProjects/Looptune/src/pages/tutorial/tutorial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/graph/graph.module": [
		455,
		2
	],
	"../pages/input/input.module": [
		456,
		1
	],
	"../pages/tutorial/tutorial.module": [
		457,
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
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input_input__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__graph_graph__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tutorial_tutorial__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__input_input__["a" /* InputPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__graph_graph__["a" /* GraphPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__tutorial_tutorial__["a" /* TutorialPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/dom/IonicProjects/Looptune/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Input" tabIcon="calculator"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Graph" tabIcon="analytics"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Tutorial" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n\n<style>\n  \n</style>'/*ion-inline-end:"/Users/dom/IonicProjects/Looptune/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(357);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_input_input__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_graph_graph__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tutorial_tutorial__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(332);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_input_input__["a" /* InputPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_graph_graph__["a" /* GraphPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/graph/graph.module#GraphPageModule', name: 'GraphPage', segment: 'graph', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/input/input.module#InputPageModule', name: 'InputPage', segment: 'input', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_input_input__["a" /* InputPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_graph_graph__["a" /* GraphPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 167,
	"./af.js": 167,
	"./ar": 168,
	"./ar-dz": 169,
	"./ar-dz.js": 169,
	"./ar-kw": 170,
	"./ar-kw.js": 170,
	"./ar-ly": 171,
	"./ar-ly.js": 171,
	"./ar-ma": 172,
	"./ar-ma.js": 172,
	"./ar-sa": 173,
	"./ar-sa.js": 173,
	"./ar-tn": 174,
	"./ar-tn.js": 174,
	"./ar.js": 168,
	"./az": 175,
	"./az.js": 175,
	"./be": 176,
	"./be.js": 176,
	"./bg": 177,
	"./bg.js": 177,
	"./bm": 178,
	"./bm.js": 178,
	"./bn": 179,
	"./bn.js": 179,
	"./bo": 180,
	"./bo.js": 180,
	"./br": 181,
	"./br.js": 181,
	"./bs": 182,
	"./bs.js": 182,
	"./ca": 183,
	"./ca.js": 183,
	"./cs": 184,
	"./cs.js": 184,
	"./cv": 185,
	"./cv.js": 185,
	"./cy": 186,
	"./cy.js": 186,
	"./da": 187,
	"./da.js": 187,
	"./de": 188,
	"./de-at": 189,
	"./de-at.js": 189,
	"./de-ch": 190,
	"./de-ch.js": 190,
	"./de.js": 188,
	"./dv": 191,
	"./dv.js": 191,
	"./el": 192,
	"./el.js": 192,
	"./en-au": 193,
	"./en-au.js": 193,
	"./en-ca": 194,
	"./en-ca.js": 194,
	"./en-gb": 195,
	"./en-gb.js": 195,
	"./en-ie": 196,
	"./en-ie.js": 196,
	"./en-il": 197,
	"./en-il.js": 197,
	"./en-nz": 198,
	"./en-nz.js": 198,
	"./eo": 199,
	"./eo.js": 199,
	"./es": 200,
	"./es-do": 201,
	"./es-do.js": 201,
	"./es-us": 202,
	"./es-us.js": 202,
	"./es.js": 200,
	"./et": 203,
	"./et.js": 203,
	"./eu": 204,
	"./eu.js": 204,
	"./fa": 205,
	"./fa.js": 205,
	"./fi": 206,
	"./fi.js": 206,
	"./fo": 207,
	"./fo.js": 207,
	"./fr": 208,
	"./fr-ca": 209,
	"./fr-ca.js": 209,
	"./fr-ch": 210,
	"./fr-ch.js": 210,
	"./fr.js": 208,
	"./fy": 211,
	"./fy.js": 211,
	"./gd": 212,
	"./gd.js": 212,
	"./gl": 213,
	"./gl.js": 213,
	"./gom-latn": 214,
	"./gom-latn.js": 214,
	"./gu": 215,
	"./gu.js": 215,
	"./he": 216,
	"./he.js": 216,
	"./hi": 217,
	"./hi.js": 217,
	"./hr": 218,
	"./hr.js": 218,
	"./hu": 219,
	"./hu.js": 219,
	"./hy-am": 220,
	"./hy-am.js": 220,
	"./id": 221,
	"./id.js": 221,
	"./is": 222,
	"./is.js": 222,
	"./it": 223,
	"./it.js": 223,
	"./ja": 224,
	"./ja.js": 224,
	"./jv": 225,
	"./jv.js": 225,
	"./ka": 226,
	"./ka.js": 226,
	"./kk": 227,
	"./kk.js": 227,
	"./km": 228,
	"./km.js": 228,
	"./kn": 229,
	"./kn.js": 229,
	"./ko": 230,
	"./ko.js": 230,
	"./ky": 231,
	"./ky.js": 231,
	"./lb": 232,
	"./lb.js": 232,
	"./lo": 233,
	"./lo.js": 233,
	"./lt": 234,
	"./lt.js": 234,
	"./lv": 235,
	"./lv.js": 235,
	"./me": 236,
	"./me.js": 236,
	"./mi": 237,
	"./mi.js": 237,
	"./mk": 238,
	"./mk.js": 238,
	"./ml": 239,
	"./ml.js": 239,
	"./mn": 240,
	"./mn.js": 240,
	"./mr": 241,
	"./mr.js": 241,
	"./ms": 242,
	"./ms-my": 243,
	"./ms-my.js": 243,
	"./ms.js": 242,
	"./mt": 244,
	"./mt.js": 244,
	"./my": 245,
	"./my.js": 245,
	"./nb": 246,
	"./nb.js": 246,
	"./ne": 247,
	"./ne.js": 247,
	"./nl": 248,
	"./nl-be": 249,
	"./nl-be.js": 249,
	"./nl.js": 248,
	"./nn": 250,
	"./nn.js": 250,
	"./pa-in": 251,
	"./pa-in.js": 251,
	"./pl": 252,
	"./pl.js": 252,
	"./pt": 253,
	"./pt-br": 254,
	"./pt-br.js": 254,
	"./pt.js": 253,
	"./ro": 255,
	"./ro.js": 255,
	"./ru": 256,
	"./ru.js": 256,
	"./sd": 257,
	"./sd.js": 257,
	"./se": 258,
	"./se.js": 258,
	"./si": 259,
	"./si.js": 259,
	"./sk": 260,
	"./sk.js": 260,
	"./sl": 261,
	"./sl.js": 261,
	"./sq": 262,
	"./sq.js": 262,
	"./sr": 263,
	"./sr-cyrl": 264,
	"./sr-cyrl.js": 264,
	"./sr.js": 263,
	"./ss": 265,
	"./ss.js": 265,
	"./sv": 266,
	"./sv.js": 266,
	"./sw": 267,
	"./sw.js": 267,
	"./ta": 268,
	"./ta.js": 268,
	"./te": 269,
	"./te.js": 269,
	"./tet": 270,
	"./tet.js": 270,
	"./tg": 271,
	"./tg.js": 271,
	"./th": 272,
	"./th.js": 272,
	"./tl-ph": 273,
	"./tl-ph.js": 273,
	"./tlh": 274,
	"./tlh.js": 274,
	"./tr": 275,
	"./tr.js": 275,
	"./tzl": 276,
	"./tzl.js": 276,
	"./tzm": 277,
	"./tzm-latn": 278,
	"./tzm-latn.js": 278,
	"./tzm.js": 277,
	"./ug-cn": 279,
	"./ug-cn.js": 279,
	"./uk": 280,
	"./uk.js": 280,
	"./ur": 281,
	"./ur.js": 281,
	"./uz": 282,
	"./uz-latn": 283,
	"./uz-latn.js": 283,
	"./uz.js": 282,
	"./vi": 284,
	"./vi.js": 284,
	"./x-pseudo": 285,
	"./x-pseudo.js": 285,
	"./yo": 286,
	"./yo.js": 286,
	"./zh-cn": 287,
	"./zh-cn.js": 287,
	"./zh-hk": 288,
	"./zh-hk.js": 288,
	"./zh-tw": 289,
	"./zh-tw.js": 289
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 411;

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(333);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/dom/IonicProjects/Looptune/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/dom/IonicProjects/Looptune/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[334]);
//# sourceMappingURL=main.js.map