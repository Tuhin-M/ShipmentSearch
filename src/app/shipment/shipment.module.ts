import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentSearchResultsComponent } from './shipment-search-results/shipment-search-results.component';
import { ShipmentDetailsComponent } from './shipment-details/shipment-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'search-results', component: ShipmentSearchResultsComponent },
  { path: ':id', component: ShipmentDetailsComponent } // Dynamic route for details
];

@NgModule({
  declarations: [ShipmentSearchResultsComponent, ShipmentDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [ShipmentSearchResultsComponent, ShipmentDetailsComponent] // Export for lazy loading
})
export class ShipmentModule { }