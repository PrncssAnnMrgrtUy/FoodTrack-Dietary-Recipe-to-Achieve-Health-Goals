import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-r8',
  templateUrl: './r8.page.html',
  styleUrls: ['./r8.page.scss'],
})
export class R8Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  c1(){
    this.router.navigate(['c1'])
  }
  

}
