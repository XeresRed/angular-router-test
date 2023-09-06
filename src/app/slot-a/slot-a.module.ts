import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MiembroComponent } from './miembro/miembro.component';
import { SlotARoutingModule } from './slot-a.routes';

@NgModule({
  declarations: [DashboardComponent, MiembroComponent],
  imports: [CommonModule, SlotARoutingModule],
})
export class SlotAModule {}
