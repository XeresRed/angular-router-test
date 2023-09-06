import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlotBComponent } from './slot-b/slot-b.component';
import { SlotAComponent } from './slot-a/slot-a.component';

const routes: Routes = [
  {
    path: '',
    component: SlotBComponent,
    loadChildren: () =>
      import('./slot-b/slot-b.module').then((m) => m.SlotBModule),
  },
  {
    path: 'index',
    component: SlotAComponent,
    loadChildren: () =>
      import('./slot-a/slot-a.module').then((m) => m.SlotAModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
