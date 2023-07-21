import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-d7',
  templateUrl: './d7.page.html',
  styleUrls: ['./d7.page.scss'],
})
export class D7Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  c4(){
    this.router.navigate(['c4'])
  }

}
