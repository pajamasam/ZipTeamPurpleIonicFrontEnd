import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChannelProvider } from '../../providers/channel/channel';

/**
 * Generated class for the CreateChannelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-channel',
  templateUrl: 'create-channel.html',
})
export class CreateChannelPage {

  private channel: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public channelProvider: ChannelProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateChannelPage');
  }

  createChannel(){
    console.log(this.channel)
    if(this.channel.trim()){
      this.channelProvider.create(this.channel, result => {
        this.navCtrl.remove(1);
      });
    }
  }

}
