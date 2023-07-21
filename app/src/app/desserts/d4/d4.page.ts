import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-d4',
  templateUrl: './d4.page.html',
  styleUrls: ['./d4.page.scss'],
})
export class D4Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  c4(){
    this.router.navigate(['c4'])
  }

}
