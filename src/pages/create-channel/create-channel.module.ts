import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateChannelPage } from './create-channel';

@NgModule({
  declarations: [
    CreateChannelPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateChannelPage),
  ],
})
export class CreateChannelPageModule {}
