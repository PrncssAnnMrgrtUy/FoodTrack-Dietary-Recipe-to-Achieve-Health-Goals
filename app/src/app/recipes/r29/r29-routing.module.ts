import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R29Page } from './r29.page';

const routes: Routes = [
  {
    path: '',
    component: R29Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class R29PageRoutingModule {}
