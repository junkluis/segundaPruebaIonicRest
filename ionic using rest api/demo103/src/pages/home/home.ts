import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	users: Array<any> = [];

  constructor(
  	public navCtrl: NavController,
  	public userService: UserServiceProvider
  	) {}

  ionViewDidLoad(){

    this.userService.getUsers()
    .subscribe(
      (data) => { // Success
        this.users = data;
        console.log(data);
      },
      (error) =>{
        console.log(error);
        console.error(error);
      }
    )
  }

}
