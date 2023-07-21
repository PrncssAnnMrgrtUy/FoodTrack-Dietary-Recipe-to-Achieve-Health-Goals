import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-r3',
  templateUrl: './r3.page.html',
  styleUrls: ['./r3.page.scss'],
})
export class R3Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  c1(){
    this.router.navigate(['c1'])
  }

}
