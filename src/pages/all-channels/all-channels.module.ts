import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllChannelsPage } from './all-channels';

@NgModule({
  declarations: [
    AllChannelsPage,
  ],
  imports: [
    IonicPageModule.forChild(AllChannelsPage),
  ],
})
export class AllChannelsPageModule {}
