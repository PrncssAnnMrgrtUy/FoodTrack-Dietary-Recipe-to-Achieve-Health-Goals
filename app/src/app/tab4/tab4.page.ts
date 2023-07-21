import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  tab1(){
    this.router.navigate(['tabs/tab1'])
  }

  public alertButtons = [
    { text     : 'No',
    role     : 'cancel',
    cssClass : 'danger',
    handler: () => {
      this.router.navigate(['tabs/tab1']);
        console.log('Confirm Logout: ok');
    }
  },
  { text    : 'Yes',
    handler: () => {
        console.log('Confirm Okay');
    }
  }
  ];
}
