import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-c4',
  templateUrl: './c4.page.html',
  styleUrls: ['./c4.page.scss'],
})
export class C4Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  tab2(){
    this.router.navigate(['tabs/tab2'])
  }

  d1(){
    this.router.navigate(['d1'])
  }

  d2(){
    this.router.navigate(['d2'])
  }

  d3(){
    this.router.navigate(['d3'])
  }

  d4(){
    this.router.navigate(['d4'])
  }

  d5(){
    this.router.navigate(['d5'])
  }

  d6(){
    this.router.navigate(['d6'])
  }

  d7(){
    this.router.navigate(['d7'])
  }

  d8(){
    this.router.navigate(['d8'])
  }

  d9(){
    this.router.navigate(['d9'])
  }

  d10(){
    this.router.navigate(['d10'])
  }

}
