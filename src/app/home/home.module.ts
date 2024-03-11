import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentSearchComponent } from './shipment-search/shipment-search.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: ShipmentSearchComponent }
];

@NgModule({
    declarations: [ShipmentSearchComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [ShipmentSearchComponent] // Export for lazy loading
})
export class HomeModule { }
