import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserProvider } from '../user/user';
import { Http, RequestOptions, Headers } from '../../../node_modules/@angular/http';
import { UrlProvider } from '../url/url';

/*
  Generated class for the ChannelProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChannelProvider {


  public channel = { "id": 1 };

  public userChannels = [];
  public allChannels = [];
  

  constructor(
    public http: Http,
    public userProvider: UserProvider,
    public urlProvider: UrlProvider
  ) {
    //console.log('Hello ChannelProvider Provider');
  }

  /////////////////////////////////////
  getUserChannels(){
    return this.userChannels;
  }

  setUserChannels(userChannels){
    this.userChannels = userChannels;
  }

  getAllChannels() {
    return this.allChannels;
  }
  
  setAllChannels(allChannels){
    this.allChannels = allChannels;
  }
  ///////////////////////////////////


  create(name: string, callback) {
    var url: string = this.urlProvider.getBaseUrl() + "/post_channel";
    var header = new Headers({
      'Authorization': this.userProvider.getToken(),
      'Content-Type': 'application/json'
      
    });
    let options = new RequestOptions({headers: header});
 
    var body = {
      "purpose": "test",
      "private": true,
      "name": name,
    };
 
    this.http.post(url, body, options).subscribe( result => {
      console.log(result);
      this.fetch();
      callback(result);
    });

  }

  fetch(){
    this.fetchUserChannels(userChannels => {
      this.userChannels = userChannels;
      this.fetchAllChannels( allChannels => {
        this.allChannels = allChannels;
        console.log(allChannels);
        console.log(userChannels);
      });
    });
  }

  fetchUserChannels(callback){
    var url: string = this.urlProvider.getBaseUrl() + "/user_channels";
    var header = new Headers({
      'Authorization': this.userProvider.getToken(),
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({headers: header});
    this.http.get(url,options).subscribe(result =>{
      //console.log(result);
      callback(result.json());
    });
  }

  fetchAllChannels(callback){
    var url: string = this.urlProvider.getBaseUrl() + "/get_channels";
    var header = new Headers({
      'Authorization': this.userProvider.getToken(),
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({headers: header});
    this.http.get(url,options).subscribe(result =>{
      //console.log(result);
      callback(result.json());
    });
  }

  join(channel, callback){

    var url: string = this.urlProvider.getBaseUrl() + "/add_user";
    var header = new Headers({
      'Authorization': this.userProvider.getToken(),
      'Content-Type': 'application/json'
      
    });
    let options = new RequestOptions({headers: header});
 
    var body = {
      "id": channel.id,
    };
 
    this.http.post(url, body, options).subscribe( result => {
      console.log(result);
      this.fetch();
      callback(result);
    });

  }

  // post(channelId: number, message: string, callback){
  //   var url: string = "http://localhost:8080/post";
  //   var header = new Headers({
  //     'Authorization': this.userProvider.getToken(),
  //     'Content-Type': 'application/json'
      
  //   });
  //   let options = new RequestOptions({headers: header});
 
  //   var body = {
  //     "channelId": channelId,
  //     "message": message
  //   };
 
  //   this.http.post(url, body,options).subscribe( (result : Response) => {
  //     console.log(result);
  //     this.get(channelId, after => {
  //       callback();
  //     })
  //   })
  // }

}
