import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { R29PageRoutingModule } from './r29-routing.module';

import { R29Page } from './r29.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    R29PageRoutingModule
  ],
  declarations: [R29Page]
})
export class R29PageModule {}
