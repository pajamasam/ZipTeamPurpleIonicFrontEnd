import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ChannelPage } from '../pages/channel/channel';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserProvider } from '../providers/user/user';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MessageProvider } from '../providers/message/message';
import { ChannelProvider } from '../providers/channel/channel';
import { UrlProvider } from '../providers/url/url';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ChannelPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ChannelPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    MessageProvider,
    ChannelProvider,
    UrlProvider
  ]
})
export class AppModule {}
