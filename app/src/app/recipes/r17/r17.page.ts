import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-r17',
  templateUrl: './r17.page.html',
  styleUrls: ['./r17.page.scss'],
})
export class R17Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  c2(){
    this.router.navigate(['c2'])
  }

}
