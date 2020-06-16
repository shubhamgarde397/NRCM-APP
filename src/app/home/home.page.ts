import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as  jsPDF from 'jspdf';
import { ApiCallsService } from '../services/api-calls.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [ApiCallsService]
})
export class HomePage {
  public base;
  public baseErr;
  public users = ['nrcm'];
  public userAccess = false;
  public usernameDetails
  private todo: FormGroup;
  private todoName: FormGroup;
  public parties = []
  file: any;
  constructor(private formBuilder: FormBuilder, public api: ApiCallsService, public router: Router) {
    this.todo = this.formBuilder.group({
      party: ['', Validators.required],
      date: ['', Validators.required],
      month: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.usernameDetails = this.api.getAuthenticatedUser();
    this.usernameDetails = this.usernameDetails['username'];
    if (this.users.includes(this.usernameDetails)) {
      this.userAccess = true;
    } else {
      this.userAccess = false;
    }
  }
  logout() {
    this.api.logout();
    this.router.navigate(['']);
  }
  tab(data) {
    this.router.navigate([data]);
  }
}

// ns-352.awsdns-44.com
// ns-1182.awsdns-19.org
// ns-969.awsdns-57.net
// ns-1950.awsdns-51.co.uk






// import { Component } from '@angular/core';

// import { Platform } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import * as  jsPDF from 'jspdf';
// import { ApiCallsService } from '../services/api-calls.service';
// import { Router } from '@angular/router';
// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
//   providers: [ApiCallsService]
// })
// export class HomePage {
//   public base;
//   public baseErr;
//   private todo: FormGroup;
//   private todoName: FormGroup;
//   public parties = []
//   file: any;
//   constructor(private formBuilder: FormBuilder, public api: ApiCallsService, public router: Router) {
//     this.todo = this.formBuilder.group({
//       party: ['', Validators.required],
//       date: ['', Validators.required],
//       month: ['', Validators.required]
//     });

//     this.todoName = this.formBuilder.group({
//       party: ['', Validators.required]
//     });

//   }

//   ngOnInit() {

//   }
//   tab(data) {
//     switch (data) {
//       case 'pan':
//         this.router.navigate(['pan'])
//     }
//   }

//   logout() {
//     this.api.logout();
//   }

// }

// // ns-352.awsdns-44.com
// // ns-1182.awsdns-19.org
// // ns-969.awsdns-57.net
// // ns-1950.awsdns-51.co.uk

