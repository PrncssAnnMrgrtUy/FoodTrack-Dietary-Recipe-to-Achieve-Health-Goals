import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R26Page } from './r26.page';

const routes: Routes = [
  {
    path: '',
    component: R26Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class R26PageRoutingModule {}
