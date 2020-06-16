import { Injectable } from '@angular/core';

@Injectable()
export class getFullApi {

    public data: any;

    public awsLink: string = 'https://wxbwagxbqh.execute-api.ap-south-1.amazonaws.com/dev/';
    constructor() { }


    getFullAPI(data) {
        return this.awsLink + data;
    }
}
