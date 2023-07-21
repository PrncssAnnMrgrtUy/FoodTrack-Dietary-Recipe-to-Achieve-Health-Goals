import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-r11',
  templateUrl: './r11.page.html',
  styleUrls: ['./r11.page.scss'],
})
export class R11Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  c2(){
    this.router.navigate(['c2'])
  }

}
