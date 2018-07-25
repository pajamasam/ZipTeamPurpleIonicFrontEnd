import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserProvider } from '../user/user';
import { Http, RequestOptions, Headers } from '../../../node_modules/@angular/http';

/*
  Generated class for the ChannelProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChannelProvider {

  constructor(
    public http: Http,
    public userProvider: UserProvider
  ) {
    console.log('Hello ChannelProvider Provider');
  }

  private baseUrl = "https://zipteampurple.herokuapp.com";

  get(callback){
    var url: string = this.baseUrl + "/user_channels";
    var header = new Headers({
      'Authorization': this.userProvider.getToken(),
      'Content-Type': 'application/json'
      
    });
    let options = new RequestOptions({headers: header});
 
    this.http.get(url,options).subscribe(result =>{
      //console.log(result);
      callback(result.json());
    })
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
