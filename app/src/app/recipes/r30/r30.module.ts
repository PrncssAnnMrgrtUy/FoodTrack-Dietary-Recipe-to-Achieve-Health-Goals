import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { R30PageRoutingModule } from './r30-routing.module';

import { R30Page } from './r30.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    R30PageRoutingModule
  ],
  declarations: [R30Page]
})
export class R30PageModule {}
