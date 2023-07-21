import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-r28',
  templateUrl: './r28.page.html',
  styleUrls: ['./r28.page.scss'],
})
export class R28Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  c3(){
    this.router.navigate(['c3'])
  }

}
