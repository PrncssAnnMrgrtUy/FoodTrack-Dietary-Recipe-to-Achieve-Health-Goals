import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-r24',
  templateUrl: './r24.page.html',
  styleUrls: ['./r24.page.scss'],
})
export class R24Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  c3(){
    this.router.navigate(['c3'])
  }

}
