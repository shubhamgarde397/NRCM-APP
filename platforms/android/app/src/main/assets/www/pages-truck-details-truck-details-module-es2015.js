(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-truck-details-truck-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/truck-details/truck-details.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/truck-details/truck-details.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"pageHeader\">\n      <ion-icon name=\"arrow-back-outline\" style=\"float: left;font-size: 20px;\" routerLink=\"/home\"> </ion-icon>\n      Truck Details\n      <ion-icon name=\"list-outline\" style=\"float: right;font-size: 20px;\" (click)=\"details()\" *ngIf=\"switcher\">\n      </ion-icon>\n      <ion-icon name=\"return-up-back-outline\" style=\"float: right;font-size: 20px;\" (click)=\"details()\"\n        *ngIf=\"!switcher\">\n      </ion-icon>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"switcher\">\n  <ion-card>\n    <ion-card-header>\n      Owner Details\n    </ion-card-header>\n    <form [formGroup]=\"owner\">\n      <ion-item>\n        <ion-label>TruckNumber</ion-label>\n        <ion-input type=\"text\" formControlName=\"truckNo\" (change)=\"hey()\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"truckErr\">\n        <h6 style=\"color: red;\">Invalid number</h6>\n      </ion-item>\n      <ion-item *ngIf=\"!trErr\">\n        <h6 style=\"color: red;\">Already Present</h6>\n      </ion-item>\n      <ion-item>\n        <ion-label>Name</ion-label>\n        <ion-input type=\"text\" formControlName=\"name\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>PAN</ion-label>\n        <ion-input type=\"text\" formControlName=\"pan\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Mobile Number</ion-label>\n        <ion-input type=\"number\" formControlName=\"mobileNo\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Village</ion-label>\n        <ion-input type=\"text\" formControlName=\"village\"></ion-input>\n      </ion-item>\n      <ion-button expand=\"block\" *ngIf=\"!driver1\" (click)=\"driver('1')\">Add Driver</ion-button>\n      <ion-button expand=\"block\" *ngIf=\"!driver1\" (click)=\"addPan()\">Submit</ion-button>\n    </form>\n  </ion-card>\n  <ion-card *ngIf=\"driver1\">\n    <ion-card-header>\n      Driver Details\n    </ion-card-header>\n\n    <form [formGroup]=\"driver1todo\">\n\n      <ion-item>\n        <ion-label>Name</ion-label>\n        <ion-input type=\"text\" formControlName=\"drivername\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Mobile 1</ion-label>\n        <ion-input type=\"number\" formControlName=\"drivermobileNo1\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Mobile 2</ion-label>\n        <ion-input type=\"number\" formControlName=\"drivermobileNo2\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Village</ion-label>\n        <ion-input type=\"number\" formControlName=\"drivermobileNo3\"></ion-input>\n      </ion-item>\n      <ion-button expand=\"block\" *ngIf=\"!driver2\" (click)=\"driver('2')\">Add More</ion-button>\n      <ion-button expand=\"block\" *ngIf=\"!driver2\" (click)=\"addPan()\">Submit</ion-button>\n      <ion-button expand=\"block\" *ngIf=\"!driver2\" (click)=\"driver('1')\">Cancel</ion-button>\n    </form>\n  </ion-card>\n\n  <ion-card *ngIf=\"driver2\">\n    <ion-card-header>\n      Driver Details\n    </ion-card-header>\n\n    <form [formGroup]=\"driver2todo\">\n\n      <ion-item>\n        <ion-label>Name</ion-label>\n        <ion-input type=\"text\" formControlName=\"drivername\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Mobile 1</ion-label>\n        <ion-input type=\"number\" formControlName=\"drivermobileNo1\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Mobile 2</ion-label>\n        <ion-input type=\"number\" formControlName=\"drivermobileNo2\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Village</ion-label>\n        <ion-input type=\"number\" formControlName=\"drivermobileNo3\"></ion-input>\n      </ion-item>\n      <ion-button expand=\"block\" (click)=\"addPan()\">Submit</ion-button>\n      <ion-button expand=\"block\" (click)=\"driver('2')\">Cancel</ion-button>\n    </form>\n  </ion-card>\n\n</ion-content>\n\n<ion-content *ngIf=\"!switcher\">\n  <ion-list>\n    <ion-item *ngFor=\"let i of owners;let j =index;\">\n      <ion-label (click)=\"presentAlert(i,j)\">{{i.truckNo}} <a class=\"phone-call\" href={{i.mobileNo|telephone}}>\n          <ion-icon name=\"call-outline\" *ngIf=\"((i.mobileNo!='tel:+91Empty')&&(i.mobileNo!='Empty'))\"></ion-icon>\n        </a>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/truck-details/truck-details-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/truck-details/truck-details-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: TruckPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckPageRoutingModule", function() { return TruckPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _truck_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./truck-details.component */ "./src/app/pages/truck-details/truck-details.component.ts");




const routes = [
    {
        path: '',
        component: _truck_details_component__WEBPACK_IMPORTED_MODULE_3__["TruckDetailsComponent"],
    }
];
let TruckPageRoutingModule = class TruckPageRoutingModule {
};
TruckPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TruckPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/truck-details/truck-details.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/truck-details/truck-details.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pageHeader {\n  font-size: 15px;\n  text-align: center;\n  font-weight: bold;\n  margin-right: 3%;\n}\n\n.phone-call {\n  float: right;\n  font-size: 4vh;\n  margin-right: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHJ1Y2stZGV0YWlscy9FOlxcUHJvamVjdHNcXElvbmljXFxDb3ZpZC9zcmNcXGFwcFxccGFnZXNcXHRydWNrLWRldGFpbHNcXHRydWNrLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RydWNrLWRldGFpbHMvdHJ1Y2stZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFBZ0Isa0JBQUE7RUFBbUIsaUJBQUE7RUFBa0IsZ0JBQUE7QUNJekQ7O0FEREE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90cnVjay1kZXRhaWxzL3RydWNrLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZUhlYWRlcntcclxuICAgIGZvbnQtc2l6ZTogMTVweDt0ZXh0LWFsaWduOiBjZW50ZXI7Zm9udC13ZWlnaHQ6IGJvbGQ7bWFyZ2luLXJpZ2h0OiAzJTtcclxufVxyXG5cclxuLnBob25lLWNhbGx7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDR2aDtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuIiwiLnBhZ2VIZWFkZXIge1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1yaWdodDogMyU7XG59XG5cbi5waG9uZS1jYWxsIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDR2aDtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/truck-details/truck-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/truck-details/truck-details.component.ts ***!
  \****************************************************************/
/*! exports provided: TruckDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckDetailsComponent", function() { return TruckDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_api_calls_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api-calls.service */ "./src/app/services/api-calls.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let TruckDetailsComponent = class TruckDetailsComponent {
    constructor(formBuilder, api, router, alertBox) {
        this.formBuilder = formBuilder;
        this.api = api;
        this.router = router;
        this.alertBox = alertBox;
        this.driver1 = false;
        this.driver2 = false;
        this.owners = [];
        this.switcher = true;
        this.newtruckNo = '';
        this.trErr = true;
        this.truckErr = false;
        this.owner = this.formBuilder.group({
            truckNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[A-Z]{2}&[0-9]{1|2}&[A-Z]{0|1|2}&[0-9]{1|2|3|4}')]],
            name: [''],
            pan: [''],
            village: '',
            mobileNo: ['Empty']
        });
        this.driver1todo = this.formBuilder.group({
            drivername: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            drivermobileNo1: '',
            drivermobileNo2: '',
            drivermobileNo3: ''
        });
        this.driver2todo = this.formBuilder.group({
            drivername: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            drivermobileNo1: '',
            drivermobileNo2: '',
            drivermobileNo3: ''
        });
    }
    ngOnInit() {
        this.api.handleData(0, 'pandetails');
        this.api.partyData.subscribe(msg => {
            this.owner.patchValue({
                pan: '',
                name: '',
                mobileNo: 'Empty',
                truckNo: '',
            });
            this.owners = msg[0]['pandetails'].sort((a, b) => { if (a.truckNo < b.truckNo) {
                return -1;
            }
            else if (a.truckNo > b.truckNo) {
                return 1;
            }
            else {
                return 0;
            } });
            this.owners = this.owners.filter(el => Object.keys(el).length > 0);
        });
    }
    driver(data) {
        switch (data) {
            case '1':
                this.driver1 = !this.driver1;
                this.driver1todo.patchValue({
                    drivername: '',
                    drivermobileNo1: '',
                    drivermobileNo2: '',
                });
                break;
            case '2':
                this.driver2 = !this.driver2;
                this.driver2todo.patchValue({
                    drivername: '',
                    drivermobileNo1: '',
                    drivermobileNo2: '',
                });
                break;
        }
    }
    hey() {
        let tn = this.owner.value.truckNo.toLocaleUpperCase();
        let startfour = tn.slice(0, 4);
        if (isNaN(tn.slice(2))) {
            if (tn.length == 10) {
                this.newtruckNo = startfour.concat(' ').concat(tn.slice(4, 6)).concat(' ').concat(tn.slice(6));
            }
            else {
                if (tn.length == 6) {
                    this.newtruckNo = startfour.concat(' ').concat(tn.slice(4, 5)).concat(' ').concat(tn.slice(-1));
                }
                else if (tn.length == 7) {
                    if (this.isNaan(tn)) {
                        this.newtruckNo = startfour.concat(' ').concat(tn.slice(4, 6)).concat(' ').concat(tn.slice(-(tn.length - 6)));
                    }
                    else {
                        this.newtruckNo = startfour.concat(' ').concat(tn.slice(4, 5)).concat(' ').concat(tn.slice(-(tn.length - 5)));
                    }
                }
                else if (tn.length == 8) {
                    if (this.isNaan(tn)) {
                        this.newtruckNo = startfour.concat(' ').concat(tn.slice(4, 6)).concat(' ').concat(tn.slice(-(tn.length - 6)));
                    }
                    else {
                        this.newtruckNo = startfour.concat(' ').concat(tn.slice(4, 5)).concat(' ').concat(tn.slice(-(tn.length - 5)));
                    }
                }
                else if (tn.length == 9) {
                    if (this.isNaan(tn)) {
                        this.newtruckNo = startfour.concat(' ').concat(tn.slice(4, 6)).concat(' ').concat(tn.slice(-(tn.length - 6)));
                    }
                    else {
                        this.newtruckNo = startfour.concat(' ').concat(tn.slice(4, 5)).concat(' ').concat(tn.slice(-(tn.length - 5)));
                    }
                }
            }
        }
        else {
            this.newtruckNo = startfour.concat(' ').concat(tn.slice(4));
        }
        let a = this.owners.filter((r) => { if (r.truckNo === this.newtruckNo) {
            return true;
        } });
        if (tn.length > 10) {
            this.truckErr = true;
            this.trErr = true;
        }
        else {
            this.truckErr = false;
            this.trErr = true;
            if (a.length > 0) {
                this.trErr = false;
            }
            else {
                this.trErr = true;
            }
        }
    }
    details() {
        this.switcher = !this.switcher;
    }
    presentAlert(data, j) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertBox.create({
                header: data.truckNo,
                message: data.name + ' : \n' + data.mobileNo,
                subHeader: data.pan,
                buttons: [
                    {
                        text: 'Close',
                        handler: dataC => {
                        }
                    }, {
                        text: 'Update',
                        handler: dataU => {
                            this.updateAlert(data);
                        }
                    }, {
                        text: 'Delete',
                        handler: dataD => {
                            if (confirm('Do you want to Delete?')) {
                                this.api.handleData(2, 'pandetails', data.truckNo);
                            }
                            else { }
                        }
                    }
                ]
            });
            yield alert.present();
            yield alert.onDidDismiss();
        });
    }
    updateAlert(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertBox.create({
                header: data.truckNo,
                inputs: [
                    {
                        name: 'name',
                        placeholder: 'NAME',
                        value: data.name
                    },
                    {
                        name: 'pan',
                        placeholder: 'PAN',
                        value: data.pan
                    },
                    {
                        name: 'mobileNo',
                        type: 'number',
                        placeholder: 'Mobile',
                        value: data.mobileNo
                    }
                ],
                buttons: [
                    {
                        text: 'Close',
                        handler: dataC => {
                        }
                    }, {
                        text: 'Update',
                        handler: dataU => {
                            if ((dataU.mobileNo.length === 10) || (dataU.mobileNo.length === 0)) {
                                if (confirm('Do you want to Update?')) {
                                    const body = {};
                                    body['name'] = dataU.name;
                                    body['pan'] = dataU.pan;
                                    body['truckNo'] = data.truckNo;
                                    if (dataU.mobileNo.length === 0) {
                                        body['mobileNo'] = 'Empty';
                                    }
                                    else {
                                        body['mobileNo'] = dataU.mobileNo;
                                    }
                                    this.api.handleData(3, 'pandetails', body);
                                }
                                else { }
                            }
                            else {
                                confirm('Enter correct Mobile Number');
                            }
                        }
                    }
                ]
            });
            yield alert.present();
            yield alert.onDidDismiss();
        });
    }
    addPan() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.driver1todo.value);
            console.log(this.driver2todo.value);
            const alert = yield this.alertBox.create({
                header: this.owner.value.truckNo,
                message: this.owner.value.name + ' : \n' + this.owner.value.mobileNo,
                subHeader: this.owner.value.pan,
                buttons: [
                    {
                        text: 'Add',
                        handler: data => {
                            const formbody = {};
                            const driver = [];
                            this.owner.value.truckNo = this.newtruckNo;
                            formbody['owner'] = this.owner.value;
                            const formbodyDriver1 = {};
                            const formbodyDriver2 = {};
                            const number1 = [];
                            const number2 = [];
                            if (this.condition(this.driver1todo.value.drivermobileNo1)) {
                                console.log(this.condition(this.driver1todo.value.drivermobileNo1));
                                number1.push(this.driver1todo.value.drivermobileNo1);
                            }
                            if (this.condition(this.driver1todo.value.drivermobileNo2)) {
                                console.log(this.condition(this.driver1todo.value.drivermobileNo2));
                                number1.push(this.driver1todo.value.drivermobileNo2);
                            }
                            if (this.condition(this.driver1todo.value.drivermobileNo3)) {
                                console.log(this.condition(this.driver1todo.value.drivermobileNo3));
                                number1.push(this.driver1todo.value.drivermobileNo3);
                            }
                            if (this.condition(this.driver2todo.value.drivermobileNo1)) {
                                console.log(this.condition(this.driver2todo.value.drivermobileNo1));
                                number2.push(this.driver2todo.value.drivermobileNo1);
                            }
                            if (this.condition(this.driver2todo.value.drivermobileNo2)) {
                                console.log(this.condition(this.driver2todo.value.drivermobileNo2));
                                number2.push(this.driver2todo.value.drivermobileNo2);
                            }
                            if (this.condition(this.driver2todo.value.drivermobileNo3)) {
                                console.log(this.condition(this.driver2todo.value.drivermobileNo3));
                                number2.push(this.driver2todo.value.drivermobileNo3);
                            }
                            formbodyDriver1['name'] = this.driver1todo.value.drivername;
                            formbodyDriver1['driverNumber'] = number1;
                            formbodyDriver2['name'] = this.driver2todo.value.drivername;
                            formbodyDriver2['driverNumber'] = number2;
                            driver.push(formbodyDriver1);
                            driver.push(formbodyDriver2);
                            formbody['driver'] = driver;
                            console.log(formbody);
                            this.api.handleData(1, 'pandetails', this.owner.value);
                        }
                    }, {
                        text: 'Cancel',
                        handler: data1 => {
                        }
                    }
                ]
            });
            yield alert.present();
            yield alert.onDidDismiss();
        });
    }
    condition(data) {
        console.log(data);
        if (data === null) {
            console.log('null');
            return false;
        }
        else {
            if (String(data).length > 0) {
                console.log('length more');
                return true;
            }
            else {
                console.log('length less');
                return false;
            }
        }
    }
    getday(data) {
        if (data == 1) {
            return data + 'st';
        }
        else if (data == 2) {
            return data + 'nd';
        }
        else if (data == 3) {
            return data + 'rd';
        }
        else {
            return data + 'th';
        }
    }
    logout() {
        this.api.logout();
        this.router.navigate(['']);
    }
    isNaan(data) {
        let length = data.length;
        let index = length - 5;
        let text = data.slice(-index);
        return isNaN(text);
    }
};
TruckDetailsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_api_calls_service__WEBPACK_IMPORTED_MODULE_4__["ApiCallsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
TruckDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-truck-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./truck-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/truck-details/truck-details.component.html")).default,
        providers: [_services_api_calls_service__WEBPACK_IMPORTED_MODULE_4__["ApiCallsService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./truck-details.component.scss */ "./src/app/pages/truck-details/truck-details.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_api_calls_service__WEBPACK_IMPORTED_MODULE_4__["ApiCallsService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], TruckDetailsComponent);

// ns-352.awsdns-44.com
// ns-1182.awsdns-19.org
// ns-969.awsdns-57.net
// ns-1950.awsdns-51.co.uk


/***/ }),

/***/ "./src/app/pages/truck-details/truck-details.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/truck-details/truck-details.module.ts ***!
  \*************************************************************/
/*! exports provided: TruckDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckDetailsPageModule", function() { return TruckDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _truck_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./truck-details.component */ "./src/app/pages/truck-details/truck-details.component.ts");
/* harmony import */ var _truck_details_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./truck-details-routing.module */ "./src/app/pages/truck-details/truck-details-routing.module.ts");
/* harmony import */ var _services_getFullApi_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/getFullApi.service */ "./src/app/services/getFullApi.service.ts");
/* harmony import */ var src_app_pipes_telephone_telephone_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pipes/telephone/telephone.module */ "./src/app/pipes/telephone/telephone.module.ts");









let TruckDetailsPageModule = class TruckDetailsPageModule {
};
TruckDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _truck_details_routing_module__WEBPACK_IMPORTED_MODULE_6__["TruckPageRoutingModule"],
            src_app_pipes_telephone_telephone_module__WEBPACK_IMPORTED_MODULE_8__["MainPipe"]
        ],
        declarations: [_truck_details_component__WEBPACK_IMPORTED_MODULE_5__["TruckDetailsComponent"]],
        providers: [_services_getFullApi_service__WEBPACK_IMPORTED_MODULE_7__["getFullApi"]],
    })
], TruckDetailsPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-truck-details-truck-details-module-es2015.js.map