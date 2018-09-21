webpackJsonp([3],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chart1canvas'),
        __metadata("design:type", Object)
    ], GraphPage.prototype, "chart1canvas", void 0);
    GraphPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-graph',template:/*ion-inline-start:"/Users/dom/IonicProjects/Looptune/src/pages/graph/graph.html"*/'<!--\n  Generated template for the GraphPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Graph</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header>\n      Line Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #chart1canvas></canvas>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/dom/IonicProjects/Looptune/src/pages/graph/graph.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__);
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
        this.gain.custom = this.calcGainForTuning(this.CLTimeConstant.custom);
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
    };
    // function for calculating recommended gain for tuning
    InputPage.prototype.calcGainForTuning = function (cl) {
        if (this.unit == 'sec') {
            if (cl > 100)
                console.log(this.CLTimeConstant.custom);
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
        console.log('Process Gain: ' + this.processGain + '\nTime Const: '
            + this.OLTimeConstant + '\nDead Time: ' + this.deadTime);
        console.log('Conservative\nGain: ' + this.gain.conservative + '\nReset: '
            + this.reset + '\nCL: ' + this.CLTimeConstant.conservative);
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
        this.CLTimeConstant.conservative = 3;
        // this.inputGain = 3;
    };
    InputPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-input',template:/*ion-inline-start:"/Users/dom/IonicProjects/Looptune/src/pages/input/input.html"*/'<!--\n  Generated template for the InputPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Input</ion-title>\n    <!-- <ion-buttons end>\n      <button ion-button icon-only (click)="alert()">\n        <ion-icon name="checkmark-circle-outline"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card class="bg">\n    <ion-card-header>\n      Controller Variable Ranges\n    </ion-card-header>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>CO Min</ion-label>\n            <ion-input type="number" [(ngModel)]="minCO">0</ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>CO Max</ion-label>\n            <ion-input type="number" [(ngModel)]="maxCO">100</ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>PV Min</ion-label>\n            <ion-input type="number" [(ngModel)]="minPV">0</ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>PV Max</ion-label>\n            <ion-input type="number" [(ngModel)]="maxPV">100</ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card class="bg">\n    <ion-card-header>\n      Open Loop Observations\n    </ion-card-header>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>Units</ion-label>\n            <ion-select [(ngModel)]="unit" interface="popover">\n              <ion-option value="sec">sec</ion-option>\n              <ion-option value="min">min</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>CO Step Change</ion-label>\n            <ion-input type="number" [(ngModel)]="deltaCO"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Process Dead Time</ion-label>\n            <ion-input type="number" [(ngModel)]="inputDeadTime"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Elapsed Time</ion-label>\n            <ion-input type="number" [(ngModel)]="elapsedTime"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Initial SS PV Value</ion-label>\n            <ion-input type="number" [(ngModel)]="initialPV"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Final SS PV Value</ion-label>\n            <ion-input type="number" [(ngModel)]="finalPV"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-row center>\n    <ion-col text-center>\n      <button ion-button color="purple" (click)="alert()">Submit</button>\n    </ion-col>\n  </ion-row>\n\n  <ion-card *ngIf="tuningCalculated" class="bg">\n    <ion-card-header>\n      Recommended Tuning Settings\n    </ion-card-header>\n    <ion-grid text-center class="white">\n      <ion-row>\n        <ion-col><b>Type</b></ion-col>\n        <ion-col><b>Gain</b></ion-col>\n        <ion-col><b>Reset</b></ion-col>\n        <ion-col><b>CL Time Constant</b></ion-col>\n      \n      </ion-row>\n      <ion-row>\n        <ion-col>Conservative</ion-col>\n        <ion-col>{{gain.conservative.toFixed(2)}}</ion-col>\n        <ion-col>{{reset.toFixed(1)}}</ion-col>\n        <ion-col>{{CLTimeConstant.conservative.toFixed(1)}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Moderate</ion-col>\n        <ion-col>{{gain.moderate.toFixed(2)}}</ion-col>\n        <ion-col>{{reset.toFixed(1)}}</ion-col>\n        <ion-col>{{CLTimeConstant.moderate.toFixed(1)}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Aggressive</ion-col>\n        <ion-col>{{gain.aggressive.toFixed(2)}}</ion-col>\n        <ion-col>{{reset.toFixed(1)}}</ion-col>\n        <ion-col>{{CLTimeConstant.aggressive.toFixed(1)}}</ion-col>\n      </ion-row>\n      <!-- <ion-row>\n        <ion-col>Custom</ion-col>\n        <ion-col>{{gain.custom.toFixed(2)}}</ion-col>\n        <ion-col>{{reset.toFixed(1)}}</ion-col>\n        <ion-col>\n          <ion-input [(ngModel)]="CLTimeConstant.custom"></ion-input>\n        </ion-col>\n      </ion-row> -->\n      <ion-row>\n        <ion-col>Cohen Coon</ion-col>\n        <ion-col>{{gain.cohenCoon.toFixed(2)}}</ion-col>\n        <ion-col>{{cohenCoonReset.toFixed(1)}}</ion-col>\n        <ion-col>N/A</ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n\n  <ion-card *ngIf="tuningCalculated" class="bg">\n    <ion-card-header>\n      Closed Loop Controller Settings\n    </ion-card-header>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>SP Change</ion-label>\n            <ion-input type="number" [(ngModel)]="inputSetpoint">0</ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Gain</ion-label>\n            <ion-input type="number" [(ngModel)]="inputGain">100</ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Reset</ion-label>\n            <ion-input type="number" [(ngModel)]="inputReset">0</ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n</ion-content>\n\n<!-- <ion-row>\n  <ion-col>\n    <ion-item>\n      <ion-label>Controller Output</ion-label>\n\n      <ion-badge color="purple" item-right>{{this.COMin2}}</ion-badge>\n      <ion-badge color="purple" item-right>{{this.COMax2}}</ion-badge>\n    </ion-item>\n    <ion-item>\n      <ion-range color="purple" dualKnobs="true" [min]=COMin [max]=COMax step="3" [(ngModel)]="CO" (ionChange)="setBadge(time)"></ion-range>\n    </ion-item>\n  </ion-col>\n</ion-row> -->'/*ion-inline-end:"/Users/dom/IonicProjects/Looptune/src/pages/input/input.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], InputPage);
    return InputPage;
}());

//# sourceMappingURL=input.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tutorial',template:/*ion-inline-start:"/Users/dom/IonicProjects/Looptune/src/pages/tutorial/tutorial.html"*/'<!--\n  Generated template for the TutorialPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Tutorial</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dom/IonicProjects/Looptune/src/pages/tutorial/tutorial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/dom/IonicProjects/Looptune/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Input" tabIcon="calculator"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Graph" tabIcon="analytics"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Tutorial" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n\n<style>\n  \n</style>'/*ion-inline-end:"/Users/dom/IonicProjects/Looptune/src/pages/tabs/tabs.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(357);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["platformBrowserDynamic"])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_input_input__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_graph_graph__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tutorial_tutorial__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_input_input__["a" /* InputPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_graph_graph__["a" /* GraphPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/graph/graph.module#GraphPageModule', name: 'GraphPage', segment: 'graph', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/input/input.module#InputPageModule', name: 'InputPage', segment: 'input', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_input_input__["a" /* InputPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_graph_graph__["a" /* GraphPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["StatusBar"],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["SplashScreen"],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/dom/IonicProjects/Looptune/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/dom/IonicProjects/Looptune/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["StatusBar"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["SplashScreen"]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[334]);
//# sourceMappingURL=main.js.map