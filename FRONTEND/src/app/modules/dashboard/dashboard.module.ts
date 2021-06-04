import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DataDashboardComponent } from './data-dashboard/data-dashboard.component';
import { TargetDashboardComponent } from './target-dashboard/target-dashboard.component';




@NgModule({
  declarations: [
    DataDashboardComponent,
    TargetDashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
    DataDashboardComponent
  ]
})
export class DashboardModule { }
