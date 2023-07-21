import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { R26PageRoutingModule } from './r26-routing.module';

import { R26Page } from './r26.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    R26PageRoutingModule
  ],
  declarations: [R26Page]
})
export class R26PageModule {}
