import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ChannelPage } from '../pages/channel/channel';
import { CreateChannelPage } from '../pages/create-channel/create-channel';
import { AllChannelsPage } from '../pages/all-channels/all-channels';
import { ChannelProvider } from '../providers/channel/channel';
import { MessageProvider } from '../providers/message/message';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public channelProvider: ChannelProvider,
    public messageProvider: MessageProvider
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Channel', component: ChannelPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.channelProvider.userChannels;
  }

  setChannel(channel){
    this.channelProvider.channel = channel;
    console.log(this.channelProvider.channel);
    this.messageProvider.get( result => {
    })
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  openChannelPage(){
    this.nav.setRoot(ChannelPage);
  }


  backToLoginPage(){
    this.nav.setRoot(HomePage);
  }

  openCreateChannelPage(){
    this.nav.push(CreateChannelPage);
  }


  openAllChannelsPage(){
    this.nav.push(AllChannelsPage);
  }











    
}
