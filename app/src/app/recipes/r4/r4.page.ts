import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-r4',
  templateUrl: './r4.page.html',
  styleUrls: ['./r4.page.scss'],
})
export class R4Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  c1(){
    this.router.navigate(['c1'])
  }

}
