import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-r13',
  templateUrl: './r13.page.html',
  styleUrls: ['./r13.page.scss'],
})
export class R13Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  c2(){
    this.router.navigate(['c2'])
  }

}
