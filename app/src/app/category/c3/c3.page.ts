import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-c3',
  templateUrl: './c3.page.html',
  styleUrls: ['./c3.page.scss'],
})
export class C3Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  tab2(){
    this.router.navigate(['tabs/tab2'])
  }

  r21(){
    this.router.navigate(['r21'])
  }

  r22(){
    this.router.navigate(['r22'])
  }

  r23(){
    this.router.navigate(['r23'])
  }

  r24(){
    this.router.navigate(['r24'])
  }

  r25(){
    this.router.navigate(['r25'])
  }

  r26(){
    this.router.navigate(['r26'])
  }

  r27(){
    this.router.navigate(['r27'])
  }

  r28(){
    this.router.navigate(['r28'])
  }

  r29(){
    this.router.navigate(['r29'])
  }

  r30(){
    this.router.navigate(['r30'])
  }

}
