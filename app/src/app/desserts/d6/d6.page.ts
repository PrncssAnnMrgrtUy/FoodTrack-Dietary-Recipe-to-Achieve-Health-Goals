import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-d6',
  templateUrl: './d6.page.html',
  styleUrls: ['./d6.page.scss'],
})
export class D6Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  c4(){
    this.router.navigate(['c4'])
  }

}
