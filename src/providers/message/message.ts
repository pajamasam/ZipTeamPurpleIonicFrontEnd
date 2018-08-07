import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { UserProvider } from '../user/user';
import { UrlProvider } from '../url/url';
import { ChannelProvider } from '../channel/channel';

/*
  Generated class for the MessageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MessageProvider {

  public messages = [];

  constructor(
    public http: Http,
    public userProvider: UserProvider,
    public urlProvider: UrlProvider,
    public channelProvider: ChannelProvider
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
    });
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
      this.get(after => {
        callback();
      })
    })
  }
 
  get(callback){
    var url: string = this.urlProvider.getBaseUrl() + "/messages?channelId=" + this.channelProvider.channel.id ;
    var header = new Headers({
      'Authorization': this.userProvider.getToken(),
      'Content-Type': 'application/json'
      
    });

    console.log(url);
    let options = new RequestOptions({headers: header});
 
    this.http.get(url,options).subscribe(result =>{
      console.log(result);
      this.messages = result.json();
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
