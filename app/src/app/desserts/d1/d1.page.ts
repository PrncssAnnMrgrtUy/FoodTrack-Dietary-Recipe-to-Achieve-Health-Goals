import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-d1',
  templateUrl: './d1.page.html',
  styleUrls: ['./d1.page.scss'],
})
export class D1Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  c4(){
    this.router.navigate(['c4'])
  }

}
