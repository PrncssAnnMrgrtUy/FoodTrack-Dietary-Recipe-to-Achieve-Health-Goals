import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R25Page } from './r25.page';

const routes: Routes = [
  {
    path: '',
    component: R25Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class R25PageRoutingModule {}
