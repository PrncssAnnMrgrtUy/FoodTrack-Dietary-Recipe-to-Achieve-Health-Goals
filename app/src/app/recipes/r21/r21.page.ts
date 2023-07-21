import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-r21',
  templateUrl: './r21.page.html',
  styleUrls: ['./r21.page.scss'],
})
export class R21Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  c3(){
    this.router.navigate(['c3'])
  }

}
