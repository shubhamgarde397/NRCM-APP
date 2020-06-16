import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as  jsPDF from 'jspdf';
import { ApiCallsService } from '../../services/api-calls.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-truck-details',
  templateUrl: './truck-details.component.html',
  styleUrls: ['./truck-details.component.scss'],
  providers: [ApiCallsService],


})
export class TruckDetailsComponent implements OnInit {
  public base;
  public driver1 = false;
  public driver2 = false;
  public baseErr;
  private owner: FormGroup;
  private driver1todo: FormGroup;
  private driver2todo: FormGroup;
  public owners = []
  public switcher = true;
  file: any;
  newtruckNo = '';
  public trErr: boolean = true;
  public truckErr: boolean = false;
  constructor(private formBuilder: FormBuilder, public api: ApiCallsService, public router: Router, public alertBox: AlertController) {
    this.owner = this.formBuilder.group({
      truckNo: ['', [Validators.required, Validators.pattern('^[A-Z]{2}&[0-9]{1|2}&[A-Z]{0|1|2}&[0-9]{1|2|3|4}')]],
      name: [''],
      pan: [''],
      village: '',
      mobileNo1: '',
      mobileNo2: '',
      mobileNo3: ''
    });
    this.driver1todo = this.formBuilder.group({
      drivername: ['', Validators.required],
      drivermobileNo1: '',
      drivermobileNo2: '',
      drivermobileNo3: ''
    });
    this.driver2todo = this.formBuilder.group({
      drivername: ['', Validators.required],
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
        mobileNo1: '',
        mobileNo2: '',
        mobileNo3: '',
        truckNo: '',
      })
      this.owners = msg[0]['pandetails'].sort((a, b) => { if (a.truckNo < b.truckNo) { return -1; } else if (a.truckNo > b.truckNo) { return 1; } else { return 0; } });
      this.owners = this.owners.filter(el => Object.keys(el).length > 0);
    })
  }

  driver(data) {
    switch (data) {
      case '1':
        this.driver1 = !this.driver1;
        this.driver1todo.patchValue({
          drivername: '',
          drivermobileNo1: '',
          drivermobileNo2: '',
          drivermobileNo3: '',
        })
        break;
      case '2':
        this.driver2 = !this.driver2;
        this.driver2todo.patchValue({
          drivername: '',
          drivermobileNo1: '',
          drivermobileNo2: '',
          drivermobileNo3: '',
        })
        break;
    }

  }

  hey() {
    let tn = this.owner.value.truckNo.toLocaleUpperCase();
    let startfour = tn.slice(0, 4);

    if (isNaN(tn.slice(2))) {
      if (tn.length == 10) {
        this.newtruckNo = startfour.concat(' ').concat(tn.slice(4, 6)).concat(' ').concat(tn.slice(6))
      } else {
        if (tn.length == 6) {
          this.newtruckNo = startfour.concat(' ').concat(tn.slice(4, 5)).concat(' ').concat(tn.slice(-1));
        } else if (tn.length == 7) {
          if (this.isNaan(tn)) {
            this.newtruckNo = startfour.concat(' ').concat(tn.slice(4, 6)).concat(' ').concat(tn.slice(-(tn.length - 6)));
          } else {
            this.newtruckNo = startfour.concat(' ').concat(tn.slice(4, 5)).concat(' ').concat(tn.slice(-(tn.length - 5)));
          }
        } else if (tn.length == 8) {
          if (this.isNaan(tn)) {
            this.newtruckNo = startfour.concat(' ').concat(tn.slice(4, 6)).concat(' ').concat(tn.slice(-(tn.length - 6)));
          } else {
            this.newtruckNo = startfour.concat(' ').concat(tn.slice(4, 5)).concat(' ').concat(tn.slice(-(tn.length - 5)));
          }
        } else if (tn.length == 9) {
          if (this.isNaan(tn)) {
            this.newtruckNo = startfour.concat(' ').concat(tn.slice(4, 6)).concat(' ').concat(tn.slice(-(tn.length - 6)));
          } else {
            this.newtruckNo = startfour.concat(' ').concat(tn.slice(4, 5)).concat(' ').concat(tn.slice(-(tn.length - 5)));
          }
        }
      }
    } else {
      this.newtruckNo = startfour.concat(' ').concat(tn.slice(4));
    }
    let a = this.owners.filter((r) => { if (r.truckNo === this.newtruckNo) { return true; } })
    if (tn.length > 10) { this.truckErr = true; this.trErr = true; } else {
      this.truckErr = false;
      this.trErr = true;
      if (a.length > 0) {
        this.trErr = false;
      } else {
        this.trErr = true;
      }
    }
  }
  details() {
    this.switcher = !this.switcher;
  }
  async presentAlert(data, j) {
    const alert = await this.alertBox.create({
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
            this.updateAlert(data)
          }
        }, {
          text: 'Delete',
          handler: dataD => {
            if (confirm('Do you want to Delete?')) {
              this.api.handleData(2, 'pandetails', data.truckNo)
            } else { }
          }
        }
      ]
    });
    await alert.present();
    await alert.onDidDismiss();
  }

  async updateAlert(data) {
    const alert = await this.alertBox.create({

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
                  body['mobileNo'] = 'Empty'
                } else {
                  body['mobileNo'] = dataU.mobileNo
                }

                this.api.handleData(3, 'pandetails', body)
              } else { }
            } else {
              confirm('Enter correct Mobile Number');
            }
          }
        }
      ]
    });
    await alert.present();
    await alert.onDidDismiss();
  }


  async addPan() {

    const alert = await this.alertBox.create({
      header: this.owner.value.truckNo,
      message: this.owner.value.name + ' : \n' + this.owner.value.mobileNo1,
      subHeader: this.owner.value.pan,
      buttons: [
        {
          text: 'Add',
          handler: data => {
            const formbody = {};
            const driver = [];
            this.owner.value.truckNo = this.newtruckNo;
            formbody['owner'] = this.owner.value;
            const formbodyDriver1 = {}
            const formbodyDriver2 = {}
            const formBodyOwner = {};
            const number1 = [];
            const number2 = [];
            const number3 = [];

            if (this.condition(this.driver1todo.value.drivermobileNo1)) {
              number1.push(String(this.driver1todo.value.drivermobileNo1))
            }
            if (this.condition(this.driver1todo.value.drivermobileNo2)) {
              number1.push(String(this.driver1todo.value.drivermobileNo2))
            }
            if (this.condition(this.driver1todo.value.drivermobileNo3)) {
              number1.push(String(this.driver1todo.value.drivermobileNo3))
            }
            if (this.condition(this.driver2todo.value.drivermobileNo1)) {
              number2.push(String(this.driver2todo.value.drivermobileNo1))
            }
            if (this.condition(this.driver2todo.value.drivermobileNo2)) {
              number2.push(String(this.driver2todo.value.drivermobileNo2))
            }
            if (this.condition(this.driver2todo.value.drivermobileNo3)) {
              number2.push(String(this.driver2todo.value.drivermobileNo3))
            }
            if (this.condition(this.owner.value.mobileNo1)) {
              number3.push(String(this.owner.value.mobileNo1))
            }
            if (this.condition(this.owner.value.mobileNo2)) {
              number3.push(String(this.owner.value.mobileNo2))
            }
            if (this.condition(this.owner.value.mobileNo3)) {
              number3.push(String(this.owner.value.mobileNo3))
            }

            formbodyDriver1['name'] = this.driver1todo.value.drivername;
            formbodyDriver1['driverNumber'] = number1;
            formbodyDriver2['name'] = this.driver2todo.value.drivername;
            formbodyDriver2['driverNumber'] = number2;
            formBodyOwner['truckNo'] = this.owner.value.truckNo;
            formBodyOwner['name'] = this.owner.value.name;
            formBodyOwner['pan'] = this.owner.value.pan;
            formBodyOwner['village'] = this.owner.value.village;
            formBodyOwner['mobileNo'] = number3;

            driver.push(formbodyDriver1)
            driver.push(formbodyDriver2)
            formbody['owner'] = formBodyOwner;
            formbody['driver'] = driver;


            this.api.handleData(1, 'truckdetails', formbody);
          }
        }, {
          text: 'Cancel',
          handler: data1 => {

          }
        }
      ]
    });
    await alert.present();
    await alert.onDidDismiss();
  }
  condition(data) {

    if (data === null) {

      return false;
    } else {
      if (String(data).length > 0) {

        return true;
      } else {
        return false;
      }
    }
  }

  getday(data) {
    if (data == 1) {
      return data + 'st';
    } else if (data == 2) {
      return data + 'nd';
    } else if (data == 3) {
      return data + 'rd';
    } else {
      return data + 'th';
    }
  }

  logout() {
    this.api.logout();
    this.router.navigate(['']);
  }
  isNaan(data) {
    let length = data.length;
    let index = length - 5
    let text = data.slice(-index)
    return isNaN(text)
  }
}

// ns-352.awsdns-44.com
// ns-1182.awsdns-19.org
// ns-969.awsdns-57.net
// ns-1950.awsdns-51.co.uk
