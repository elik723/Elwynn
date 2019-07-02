import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController,
              public toastController: ToastController) {}

  public myDateOfBirth: String;

  ionViewDidEnter() {
    this.myDateOfBirth = "1994-10-03";
  }

  pressMe() {
    alert("Hi!!");
  }

  async funAlert() {
    const alert = await this.alertController.create({
      header: 'Fun Alert',
      subHeader: 'fun alert (but smaller)',
      message: 'Bang bang you just clicked a fun alert',
      buttons: [{
        text: 'Wow thats sick dawg',
        handler: () => {
          this.openToast();
        }
        }]
    });

    await alert.present();
  }

  async openToast() {
    const toast = await this.toastController.create({
      message: 'You just got toasted, within an alert. Thats showbiz baby',
      duration: 2000
    });
    toast.present();
  }

}
