import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { R27PageRoutingModule } from './r27-routing.module';

import { R27Page } from './r27.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    R27PageRoutingModule
  ],
  declarations: [R27Page]
})
export class R27PageModule {}
