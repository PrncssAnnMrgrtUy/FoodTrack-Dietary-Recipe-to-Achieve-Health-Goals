import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-r20',
  templateUrl: './r20.page.html',
  styleUrls: ['./r20.page.scss'],
})
export class R20Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }
  
  c2(){
    this.router.navigate(['c2'])
  }

}
