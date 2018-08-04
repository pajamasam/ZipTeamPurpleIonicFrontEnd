import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UrlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UrlProvider {

  // constructor(public http: HttpClient) {
  //   console.log('Hello UrlProvider Provider');
  // }

  //private baseUrl = "http://localhost:8080";
  private baseUrl = "https://zipteampurple.herokuapp.com";

  setBaseUrl(baseUrl: string){
    this.baseUrl = baseUrl;
  }

  getBaseUrl(){
    return this.baseUrl;
  }

}
