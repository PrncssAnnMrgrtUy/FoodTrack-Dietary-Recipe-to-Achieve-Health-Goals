import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-r29',
  templateUrl: './r29.page.html',
  styleUrls: ['./r29.page.scss'],
})
export class R29Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  c3(){
    this.router.navigate(['c3'])
  }

}
