import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R27Page } from './r27.page';

const routes: Routes = [
  {
    path: '',
    component: R27Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class R27PageRoutingModule {}
