import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipmentSearchComponent } from './home/shipment-search/shipment-search.component';
import { ShipmentSearchResultsComponent } from './shipment/shipment-search-results/shipment-search-results.component';
import { ShipmentDetailsComponent } from './shipment/shipment-details/shipment-details.component';

const routes: Routes = [
  { path: '', component: ShipmentSearchComponent },
  { path: 'result', component: ShipmentSearchResultsComponent },
  { path: 'details', component: ShipmentDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
