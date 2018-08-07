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

  public message: any;

  private timerToken: number;

  private currentChannel = {"id":1};

  setCurrentChannel(currentChannel){
    this.currentChannel = currentChannel;
  }

  getCurrentChannelId(){
    return this.currentChannel.id;
  }
  

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private alertController: AlertController,
    private messageProvider: MessageProvider,
    private channelProvider: ChannelProvider
  ) {
      //this.getMessages();
      this.messageProvider.get(result =>{

      });
      //this.getChannels();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChannelPage');
    //this.start();
  }


  start() {
    this.timerToken = setInterval( ()=> this.runningLoopOfMessages(this.channelProvider), 5000);
  }

  getMessages(){
    this.messageProvider.get(result =>{
      
    });
  }

  // getChannels(){
  //   this.timerToken = setInterval(this.channelProvider.getuser(channels => {
  //     this.channels = channels;
  //   }), 5000);
  // }
  
  runningLoopOfMessages(channelProvider: ChannelProvider) {
    this.messageProvider.get( after => {
      this.messages = after.json();
    });
  }
  deleteMessage(messageId: number){
    this.messageProvider.delete(messageId, after =>{
      this.messageProvider.get(callback => {
        console.log(callback);
      })
    });
  }

  // sendMessage(){
  //   let addTodoAlert = this.alertController.create({
  //     title: "Send Message",
  //     message: "Enter a message:",
  //     inputs: [
  //       {
  //         type: "text",
  //         name: "addTodoInput"
  //       }
  //     ],
  //     buttons: [
  //         {
  //           text: "Cancel"
  //         },
  //         {
  //           text: "Send",
  //           handler: (inputData) => {
  //             let todoText;
  //             todoText = inputData.addTodoInput;
  //             //this.messageProider.getAll();
  //             this.messageProvider.post(1, todoText, after => {
  //               this.getMessages();
  //             });
              
  //             //this.todos.push(todoText);
  //             //this.todoProvider.addTodo(todoText);
  //           }
  //         }
  //     ]
  //   });
  //   addTodoAlert.present();
  // }

  sendMessage(){
    if (!this.message.trim()) return;
    this.messageProvider.post(this.channelProvider.channel.id, this.message, after => {
      this.message = '';
      this.getMessages();
    });
  }





}




