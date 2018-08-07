import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChannelProvider } from '../../providers/channel/channel';

/**
 * Generated class for the AllChannelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-channels',
  templateUrl: 'all-channels.html',
})
export class AllChannelsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public channelProvider: ChannelProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllChannelsPage');
  }

  joinChannel(channel){
    this.channelProvider.join(channel, result => {
        this.navCtrl.remove(1);
    });
  }

}
