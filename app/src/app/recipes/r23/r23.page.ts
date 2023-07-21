import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-r23',
  templateUrl: './r23.page.html',
  styleUrls: ['./r23.page.scss'],
})
export class R23Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  c3(){
    this.router.navigate(['c3'])
  }

}
