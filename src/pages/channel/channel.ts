import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessageProvider } from '../../providers/message/message';

/**
 * Generated class for the ChannelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channel',
  templateUrl: 'channel.html',
})
export class ChannelPage {


  public messages=[
    {
      message: "Hello"
    },
    {
      message: "sup"
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private messageProvider: MessageProvider) {

      this.getMessages();
      

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChannelPage');
  }




  getMessages(){
    this.messageProvider.get(1, after => {
      this.messages = after;
    });
  }
 
  deleteMessage(messageId: number){
    this.messageProvider.delete(messageId, after =>{
      this.getMessages();
    });
  }











}




