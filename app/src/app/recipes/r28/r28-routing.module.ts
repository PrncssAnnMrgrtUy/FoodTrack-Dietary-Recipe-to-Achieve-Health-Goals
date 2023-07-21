import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R28Page } from './r28.page';

const routes: Routes = [
  {
    path: '',
    component: R28Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class R28PageRoutingModule {}
