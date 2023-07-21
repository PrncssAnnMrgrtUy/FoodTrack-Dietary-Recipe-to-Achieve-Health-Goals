import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'r1',
    loadChildren: () => import('./recipes/r1/r1.module').then( m => m.R1PageModule)
  },
  {
    path: 'r2',
    loadChildren: () => import('./recipes/r2/r2.module').then( m => m.R2PageModule)
  },
  {
    path: 'r3',
    loadChildren: () => import('./recipes/r3/r3.module').then( m => m.R3PageModule)
  },
  {
    path: 'r4',
    loadChildren: () => import('./recipes/r4/r4.module').then( m => m.R4PageModule)
  },
  {
    path: 'r5',
    loadChildren: () => import('./recipes/r5/r5.module').then( m => m.R5PageModule)
  },
  {
    path: 'r6',
    loadChildren: () => import('./recipes/r6/r6.module').then( m => m.R6PageModule)
  },
  {
    path: 'r7',
    loadChildren: () => import('./recipes/r7/r7.module').then( m => m.R7PageModule)
  },
  {
    path: 'r8',
    loadChildren: () => import('./recipes/r8/r8.module').then( m => m.R8PageModule)
  },
  {
    path: 'r9',
    loadChildren: () => import('./recipes/r9/r9.module').then( m => m.R9PageModule)
  },
  {
    path: 'r10',
    loadChildren: () => import('./recipes/r10/r10.module').then( m => m.R10PageModule)
  },
  {
    path: 'c1',
    loadChildren: () => import('./category/c1/c1.module').then( m => m.C1PageModule)
  },
  {
    path: 'c2',
    loadChildren: () => import('./category/c2/c2.module').then( m => m.C2PageModule)
  },
  {
    path: 'c3',
    loadChildren: () => import('./category/c3/c3.module').then( m => m.C3PageModule)
  },
  {
    path: 'c4',
    loadChildren: () => import('./category/c4/c4.module').then( m => m.C4PageModule)
  },
  {
    path: 'r11',
    loadChildren: () => import('./recipes/r11/r11.module').then( m => m.R11PageModule)
  },
  {
    path: 'r12',
    loadChildren: () => import('./recipes/r12/r12.module').then( m => m.R12PageModule)
  },
  {
    path: 'r13',
    loadChildren: () => import('./recipes/r13/r13.module').then( m => m.R13PageModule)
  },
  {
    path: 'r14',
    loadChildren: () => import('./recipes/r14/r14.module').then( m => m.R14PageModule)
  },
  {
    path: 'r15',
    loadChildren: () => import('./recipes/r15/r15.module').then( m => m.R15PageModule)
  },
  {
    path: 'r16',
    loadChildren: () => import('./recipes/r16/r16.module').then( m => m.R16PageModule)
  },
  {
    path: 'r17',
    loadChildren: () => import('./recipes/r17/r17.module').then( m => m.R17PageModule)
  },
  {
    path: 'r18',
    loadChildren: () => import('./recipes/r18/r18.module').then( m => m.R18PageModule)
  },
  {
    path: 'r19',
    loadChildren: () => import('./recipes/r19/r19.module').then( m => m.R19PageModule)
  },
  {
    path: 'r20',
    loadChildren: () => import('./recipes/r20/r20.module').then( m => m.R20PageModule)
  },
  {
    path: 'r21',
    loadChildren: () => import('./recipes/r21/r21.module').then( m => m.R21PageModule)
  },
  {
    path: 'r22',
    loadChildren: () => import('./recipes/r22/r22.module').then( m => m.R22PageModule)
  },
  {
    path: 'r23',
    loadChildren: () => import('./recipes/r23/r23.module').then( m => m.R23PageModule)
  },
  {
    path: 'r24',
    loadChildren: () => import('./recipes/r24/r24.module').then( m => m.R24PageModule)
  },
  {
    path: 'r25',
    loadChildren: () => import('./recipes/r25/r25.module').then( m => m.R25PageModule)
  },
  {
    path: 'r26',
    loadChildren: () => import('./recipes/r26/r26.module').then( m => m.R26PageModule)
  },
  {
    path: 'r27',
    loadChildren: () => import('./recipes/r27/r27.module').then( m => m.R27PageModule)
  },
  {
    path: 'r28',
    loadChildren: () => import('./recipes/r28/r28.module').then( m => m.R28PageModule)
  },
  {
    path: 'r29',
    loadChildren: () => import('./recipes/r29/r29.module').then( m => m.R29PageModule)
  },
  {
    path: 'r30',
    loadChildren: () => import('./recipes/r30/r30.module').then( m => m.R30PageModule)
  },
  {
    path: 'd1',
    loadChildren: () => import('./desserts/d1/d1.module').then( m => m.D1PageModule)
  },
  {
    path: 'd2',
    loadChildren: () => import('./desserts/d2/d2.module').then( m => m.D2PageModule)
  },
  {
    path: 'd3',
    loadChildren: () => import('./desserts/d3/d3.module').then( m => m.D3PageModule)
  },
  {
    path: 'd4',
    loadChildren: () => import('./desserts/d4/d4.module').then( m => m.D4PageModule)
  },
  {
    path: 'd5',
    loadChildren: () => import('./desserts/d5/d5.module').then( m => m.D5PageModule)
  },
  {
    path: 'd6',
    loadChildren: () => import('./desserts/d6/d6.module').then( m => m.D6PageModule)
  },
  {
    path: 'd7',
    loadChildren: () => import('./desserts/d7/d7.module').then( m => m.D7PageModule)
  },
  {
    path: 'd8',
    loadChildren: () => import('./desserts/d8/d8.module').then( m => m.D8PageModule)
  },
  {
    path: 'd9',
    loadChildren: () => import('./desserts/d9/d9.module').then( m => m.D9PageModule)
  },
  {
    path: 'd10',
    loadChildren: () => import('./desserts/d10/d10.module').then( m => m.D10PageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
