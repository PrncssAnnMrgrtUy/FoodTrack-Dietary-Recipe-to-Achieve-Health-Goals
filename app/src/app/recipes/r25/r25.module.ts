import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { R25PageRoutingModule } from './r25-routing.module';

import { R25Page } from './r25.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    R25PageRoutingModule
  ],
  declarations: [R25Page]
})
export class R25PageModule {}
