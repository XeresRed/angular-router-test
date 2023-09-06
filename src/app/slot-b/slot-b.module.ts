import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { SlotBRoutingModule } from './slot-b.routes';

@NgModule({
  declarations: [RegistroComponent, LoginComponent],
  imports: [CommonModule, SlotBRoutingModule],
})
export class SlotBModule {}
