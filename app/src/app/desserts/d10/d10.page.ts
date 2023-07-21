import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-d10',
  templateUrl: './d10.page.html',
  styleUrls: ['./d10.page.scss'],
})
export class D10Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  c4(){
    this.router.navigate(['c4'])
  }

}
