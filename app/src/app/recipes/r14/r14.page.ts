import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-r14',
  templateUrl: './r14.page.html',
  styleUrls: ['./r14.page.scss'],
})
export class R14Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  c2(){
    this.router.navigate(['c2'])
  }

}
