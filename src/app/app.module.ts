import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlotAComponent } from './slot-a/slot-a.component';
import { SlotBComponent } from './slot-b/slot-b.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, SlotAComponent, SlotBComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
