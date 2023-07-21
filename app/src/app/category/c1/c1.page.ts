import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-c1',
  templateUrl: './c1.page.html',
  styleUrls: ['./c1.page.scss'],
})
export class C1Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  tab2(){
    this.router.navigate(['tabs/tab2'])
  }

  r1(){
    this.router.navigate(['r1'])
  }

  r2(){
    this.router.navigate(['r2'])
  }

  r3(){
    this.router.navigate(['r3'])
  }

  r4(){
    this.router.navigate(['r4'])
  }

  r5(){
    this.router.navigate(['r5'])
  }

  r6(){
    this.router.navigate(['r6'])
  }

  r7(){
    this.router.navigate(['r7'])
  }

  r8(){
    this.router.navigate(['r8'])
  }

  r9(){
    this.router.navigate(['r9'])
  }

  r10(){
    this.router.navigate(['r10'])
  }

}
