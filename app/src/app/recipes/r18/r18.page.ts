import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-r18',
  templateUrl: './r18.page.html',
  styleUrls: ['./r18.page.scss'],
})
export class R18Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }
  
  c2(){
    this.router.navigate(['c2'])
  }

}
