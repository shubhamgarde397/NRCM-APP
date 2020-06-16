import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

import { LoginPageRoutingModule } from './login-routing.module';
import { getFullApi } from '../services/getFullApi.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginPageRoutingModule],
  declarations: [LoginComponent],
  providers: [getFullApi]
})
export class LoginPageModule { }
