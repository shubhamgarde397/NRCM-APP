import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { getFullApi } from './services/getFullApi.service';
import { HttpClientModule } from '@angular/common/http';
import { MainPipe } from './pipes/telephone/telephone.module';
import { HeaderPageComponent } from './pages/header-page/header-page.component'
@NgModule({
  declarations: [AppComponent, HeaderPageComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), HttpModule, HttpClientModule, AppRoutingModule, CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, MainPipe],
  providers: [
    StatusBar,
    SplashScreen,
    getFullApi,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
