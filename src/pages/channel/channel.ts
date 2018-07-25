import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  AlertController } from 'ionic-angular';
import { MessageProvider } from '../../providers/message/message';
import { ChannelProvider } from '../../providers/channel/channel';

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


  public messages=[];
  public channels=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private alertController: AlertController,
    private messageProvider: MessageProvider,
    private channelProvider: ChannelProvider
  ) {
      this.getMessages();
      this.getChannels();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChannelPage');
  }

  getMessages(){
    this.messageProvider.get(1, after => {
      this.messages = after.json();
    });
  }

  getChannels(){
    this.channelProvider.get(channels => {
      this.channels = channels;
    });
  }
 
  deleteMessage(messageId: number){
    this.messageProvider.delete(messageId, after =>{
      this.getMessages();
    });
  }

  sendMessage(){
    let addTodoAlert = this.alertController.create({
      title: "Send Message",
      message: "Enter a message:",
      inputs: [
        {
          type: "text",
          name: "addTodoInput"
        }
      ],
      buttons: [
          {
            text: "Cancel"
          },
          {
            text: "Send",
            handler: (inputData) => {
              let todoText;
              todoText = inputData.addTodoInput;
              //this.messageProider.getAll();
              this.messageProvider.post(1, todoText, after => {
                this.getMessages();
              });
              
              //this.todos.push(todoText);
              //this.todoProvider.addTodo(todoText);
            }
          }
      ]
    });
    addTodoAlert.present();
  }










}




