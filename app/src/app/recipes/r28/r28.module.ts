import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { R28PageRoutingModule } from './r28-routing.module';

import { R28Page } from './r28.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    R28PageRoutingModule
  ],
  declarations: [R28Page]
})
export class R28PageModule {}
