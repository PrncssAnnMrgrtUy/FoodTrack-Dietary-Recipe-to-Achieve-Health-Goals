import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-c2',
  templateUrl: './c2.page.html',
  styleUrls: ['./c2.page.scss'],
})
export class C2Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  tab2(){
    this.router.navigate(['tabs/tab2'])
  }

  r11(){
    this.router.navigate(['r11'])
  }

  r12(){
    this.router.navigate(['r12'])
  }

  r13(){
    this.router.navigate(['r13'])
  }

  r14(){
    this.router.navigate(['r14'])
  }

  r15(){
    this.router.navigate(['r15'])
  }

  r16(){
    this.router.navigate(['r16'])
  }

  r17(){
    this.router.navigate(['r17'])
  }

  r18(){
    this.router.navigate(['r18'])
  }

  r19(){
    this.router.navigate(['r19'])
  }

  r20(){
    this.router.navigate(['r20'])
  }

}
