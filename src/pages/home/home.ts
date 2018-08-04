import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChannelPage } from '../channel/channel';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { UserProvider } from '../../providers/user/user';
import { MessageProvider } from '../../providers/message/message';
import { RegisterPage } from '../register/register';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {


  formgroup: FormGroup;

  username: AbstractControl;
  password: AbstractControl;

  constructor(public navCtrl: NavController, private formbuilder: FormBuilder, private userprovider: UserProvider) {

    this.formgroup = this.formbuilder.group(

      {
        username: ['', Validators.required],
        password: ['', Validators.required]
      });

    this.username = this.formgroup.controls['username'];
    this.password = this.formgroup.controls['password'];

  }

  login() {
    this.navCtrl.setRoot(ChannelPage);

  }

  sendLogin(loginForm) {
    this.userprovider.login(loginForm.username, loginForm.password, result => {
      if (result.status == 200) {
        console.log("Success!");
        this.userprovider.setToken(result.headers.get("authorization"));
        console.log(this.userprovider.getToken());
        this.navCtrl.setRoot(ChannelPage);


      } else {
        console.log("invalid login attempt");
      }
    });
  }


  registerPage(){
    this.navCtrl.push(RegisterPage);
  }

  setLoginForm() {
  }

  

}

