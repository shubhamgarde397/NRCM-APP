import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as  jsPDF from 'jspdf';
import { ApiCallsService } from './services/api-calls.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [ApiCallsService]
})
export class AppComponent {
  private todo: FormGroup;
  public btn = false;
  constructor(private formBuilder: FormBuilder, public api: ApiCallsService, public alertBox: AlertController) {
    this.todo = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
  login() {
    const username = this.todo.value.username;
    const password = this.todo.value.password;
    this.api.signIn(username, password);
  }

  async logout() {
    const alert = await this.alertBox.create({
      header: 'Logout',
      message: 'Do you want to Logout?',
      buttons: [
        {
          text: 'Confirm',
          handler: (res) => {
            this.api.logout();
          }
        },
        {
          text: 'Cancel',
          handler: (res) => {
          }
        }
      ]
    });
    await alert.present();
    await alert.onDidDismiss();
  }


  ngOnInit() {

  }


}