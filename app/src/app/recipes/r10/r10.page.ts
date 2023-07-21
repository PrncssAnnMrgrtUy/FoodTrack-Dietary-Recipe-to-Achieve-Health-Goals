import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-r10',
  templateUrl: './r10.page.html',
  styleUrls: ['./r10.page.scss'],
})
export class R10Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  c1(){
    this.router.navigate(['c1'])
  }

}
