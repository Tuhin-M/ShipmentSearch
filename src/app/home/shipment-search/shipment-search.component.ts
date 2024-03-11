import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipment-search',
  templateUrl: './shipment-search.component.html',
  styleUrl: './shipment-search.component.scss'
})
export class ShipmentSearchComponent {
  constructor(private router: Router) {

  }

  onSearch() {
    this.router.navigate(['/shipments/search-results']);
  }
}
