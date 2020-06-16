import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as  jsPDF from 'jspdf';
import { ApiCallsService } from '../services/api-calls.service';
@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
  providers: [ApiCallsService]
})
export class LoginComponent {
  public base;
  public valid = false;
  public baseErr;
  private todo: FormGroup;
  constructor(private formBuilder: FormBuilder, public api: ApiCallsService) {
    this.todo = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  ngOnInit() {

  }
  login() {

    this.valid = true;
    const username = this.todo.value.username;
    const password = this.todo.value.password;
    this.api.signIn(username, password);
    this.valid = this.api.loginButton;

  }
}

// ns-352.awsdns-44.com
// ns-1182.awsdns-19.org
// ns-969.awsdns-57.net
// ns-1950.awsdns-51.co.uk
