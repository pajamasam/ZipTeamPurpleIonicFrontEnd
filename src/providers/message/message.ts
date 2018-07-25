import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { UserProvider } from '../user/user';
import { UrlProvider } from '../url/url';

/*
  Generated class for the MessageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MessageProvider {

  constructor(
    public http: Http,
    public userProvider: UserProvider,
    public urlProvider: UrlProvider
  ) {
    console.log('Hello MessageProvider Provider');
  }

  getAll(){
    var url: string = this.urlProvider.getBaseUrl() + "/get_messages";
    var header = new Headers({
      'Authorization': this.userProvider.getToken()
    })
    let options = new RequestOptions({headers: header})
    this.http.get(url, options).subscribe( (result : Response) => {
      console.log(result);
    })
  }
 
  post(channelId: number, message: string, callback){
    var url: string = this.urlProvider.getBaseUrl() + "/post";
    var header = new Headers({
      'Authorization': this.userProvider.getToken(),
      'Content-Type': 'application/json'
      
    });
    let options = new RequestOptions({headers: header});
 
    var body = {
      "channelId": channelId,
      "message": message
    };
 
    this.http.post(url, body,options).subscribe( (result : Response) => {
      console.log(result);
      this.get(channelId, after => {
        callback();
      })
    })
  }
 
  get(channelId: number, callback){
    var url: string = this.urlProvider.getBaseUrl() + "/messages?channelid=" + channelId ;
    var header = new Headers({
      'Authorization': this.userProvider.getToken(),
      'Content-Type': 'application/json'
      
    });
    let options = new RequestOptions({headers: header});
 
    this.http.get(url,options).subscribe(result =>{
      console.log(result);
      callback(result);
    })
  }
 
  delete(messageId: number, callback){
    var url: string = this.urlProvider.getBaseUrl() + "/delete?messageId=" +messageId;
    
    var header = new Headers({
      'Authorization': this.userProvider.getToken(),
      'Content-Type': 'application/json'
      
    });
 
    let options = new RequestOptions({headers: header});
 
    this.http.delete(url,options).subscribe(result => {
      console.log(result);
      callback();
    })
  }




}
