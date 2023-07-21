import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-r16',
  templateUrl: './r16.page.html',
  styleUrls: ['./r16.page.scss'],
})
export class R16Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  c2(){
    this.router.navigate(['c2'])
  }

}
