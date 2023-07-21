import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R30Page } from './r30.page';

const routes: Routes = [
  {
    path: '',
    component: R30Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class R30PageRoutingModule {}
