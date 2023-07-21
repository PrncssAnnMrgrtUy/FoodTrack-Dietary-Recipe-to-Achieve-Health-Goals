import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private navCtrl: NavController, private router: Router) {}

  c1(){
    this.router.navigate(['c1'])
  }

  c2(){
    this.router.navigate(['c2'])
  }

  c3(){
    this.router.navigate(['c3'])
  }

  c4(){
    this.router.navigate(['c4'])
  }

}
