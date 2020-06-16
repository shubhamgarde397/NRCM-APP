import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

import { getFullApi } from './getFullApi.service';
import { HttpClient } from '@angular/common/http';
import {
  CognitoUser, CognitoUserPool,
  CognitoUserSession, AuthenticationDetails
} from 'amazon-cognito-identity-js'
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

const PoolData = {
  UserPoolId: 'ap-south-1_ZzgcCts3f',
  ClientId: '7bkru6bi0c03bm2280b38tv5da'
};
const userPoolData = new CognitoUserPool(PoolData);


@Injectable()
export class ApiCallsService {
  private partyService = new BehaviorSubject([{ 'pandetails': [], 'gstdetails': [] }]);
  public partyData = this.partyService.asObservable();
  public headerPost: HttpHeaders;
  public loginButton = false;
  public URL = '';
  public partyDataTemp = []
  public serviceTemp = [];
  constructor(public http: Http, public getfullapi: getFullApi, public router: Router, public httpClient: HttpClient,) { }
  handleData(method, api, formBody = {}) {
    this.getAuthenticatedUser().getSession((err, session) => {
      let headers = new Headers({ 'Authorization': session.getIdToken().getJwtToken() })
      if (err) { alert(err); return err; }
      else {
        switch (method) {
          case 0:
            return this.http.get(this.getfullapi.getFullAPI(api), { headers: headers })
              .subscribe((res) => {
                this.serviceTemp = [];
                this.partyData.pipe().subscribe((resInner) => {
                  resInner[0][api] = [];
                  resInner[0][api] = res.json();
                  this.serviceTemp = resInner;
                });
                this.partyService.next(this.serviceTemp);
              }, (err) => { alert(err) });
          case 1:
            return this.http.post(this.getfullapi.getFullAPI(api), formBody, { headers: headers })
              .subscribe((res: any) => {
                this.serviceTemp = [];
                this.partyData.pipe().subscribe((resInner) => {
                  resInner[0][api].push(formBody);
                  this.serviceTemp = resInner;
                });
                this.partyService.next(this.serviceTemp);
                alert('Added!');
              }, (err) => { alert(err) });
          case 2:
            const urlParam = '/' + formBody;
            return this.http.delete(this.getfullapi.getFullAPI(api) + urlParam, { headers: headers })
              .subscribe((res: any) => {
                this.handleData(0, api);
                alert('Deleted!');
              }, (err) => { alert(err) });
          case 3:
            return this.http.put(this.getfullapi.getFullAPI(api), formBody, { headers: headers })
              .subscribe((res: any) => {
                this.handleData(0, api);
                alert('Updated!')
              }, (err) => { alert(err) });
        }
      }
    })
  }

  signIn(username: string, password: string): void {
    const authData = {
      Username: username,
      Password: password
    };
    const authDetails = new AuthenticationDetails(authData);
    const userData = {
      Username: username,
      Pool: userPoolData
    }
    const cognitoUSer = new CognitoUser(userData);
    const that = this;
    cognitoUSer.authenticateUser(authDetails, {
      onSuccess(res: CognitoUserSession) {
        that.router.navigate(['home']);
        that.isAuthenticated();
      }, onFailure(err) {
        alert('Contact 9766707061 for registeration');
      }
    })
    return;
  }
  getAuthenticatedUser() {
    return userPoolData.getCurrentUser();
  }
  logout() {
    this.getAuthenticatedUser().signOut();
    this.router.navigate(['']);
  }
  isAuthenticated(): Observable<boolean> {
    const user = this.getAuthenticatedUser();
    console.log(user['username']);

    const obs = Observable.create((observer) => {
      if (!user) {
        observer.next(false);
      } else {
        user.getSession((err, session) => {
          if (err) {
            observer.next(false);
          } else {

            if (session.isValid()) {
              observer.next(true);
            } else {
              observer.next(false);
            }
          }
        })
      }
      observer.complete();
    });
    return obs;
  }






}

