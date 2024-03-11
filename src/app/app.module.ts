import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShipmentSearchComponent } from './home/shipment-search/shipment-search.component';
import { ShipmentSearchResultsComponent } from './shipment/shipment-search-results/shipment-search-results.component';
import { ShipmentDetailsComponent } from './shipment/shipment-details/shipment-details.component';

const routes: Routes = [
  // Lazy-loaded routes for Shipment and Home modules
  {
    path: 'shipments',
    loadChildren: () => import('./shipment/shipment.module').then(m => m.ShipmentModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  // Add a default route if needed
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    // ShipmentSearchComponent,
    // ShipmentSearchResultsComponent,
    // ShipmentDetailsComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
