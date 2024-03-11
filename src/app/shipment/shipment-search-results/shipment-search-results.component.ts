import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shipment-search-results',
  templateUrl: './shipment-search-results.component.html',
  styleUrls: ['./shipment-search-results.component.scss']
})
export class ShipmentSearchResultsComponent {
  constructor(private router: Router) {

  }
  // Implement logic to display search results
  shipments = [
    // {
    //     "TotalNumberOfRecords": "2",
    //     "Shipment": [
    {
      "AssignedToUserId": "abrooks",
      "DeliveryMethod": "SHP",
      "ExpectedShipmentDate": "27-10-2017",
      "OrderNo": "SFS1000001",
      "ScacAndService": "UPSNGround",
      "ShipNode": "Mtrx_Store_1",
      "ShipmentKey": "SFS1000001_SHPKEY",
      "ShipmentNo": "SFS1000001SHPNO",
      "Status": "Cancelled",
      "BillToAddress": {
        "DayPhone": "123456789",
        "EMailID": "Zymer@org.com",
        "FirstName": "Ben",
        "LastName": "Zymer",
        "PersonInfoKey": "1000001"
      },
      "ShipmentLines": {
        "TotalNumberOfRecords": "4"
      }
    },
    //         {
    //             "AssignedToUserId": "amgr",
    //             "DeliveryMethod": "PICK",
    //             "ExpectedShipmentDate": "28-10-2017",
    //             "OrderNo": "PICK1000001",
    //             "ScacAndService": "",
    //             "ShipNode": "Mtrx_Store_1",
    //             "ShipmentKey": "PICK1000001_SHPKEY",
    //             "ShipmentNo": "PICK1000001SHPNO",
    //             "Status": "Ready for Backroom Pick",
    //             "BillToAddress": {
    //                 "DayPhone": "1234567890",
    //                 "EMailID": "adoyle@org.com",
    //                 "FirstName": "Abby",
    //                 "LastName": "Doyle",
    //                 "PersonInfoKey": "2000001"
    //             },
    //             "ShipmentLines": {
    //                 "TotalNumberOfRecords": "6"
    //             }
    //         }
    //     ]
    // },
    // Add more sample data as needed
  ];

  onClose() {
    this.router.navigate(['/shipment-search']);
  }
}
