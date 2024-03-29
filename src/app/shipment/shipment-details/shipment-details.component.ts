import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Shipment {
  shipmentNumber: string;
  status: string;
  customerInfo: {
    name: string;
    address: string;
    email: string;
  };
  assignedTo: string;
  carrier: string;
  expectedShipDate: Date;
  products: {
    id: number;
    name: string;
    quantity: number;
  }[];
}

@Component({
  selector: 'app-shipment-details',
  templateUrl: './shipment-details.component.html',
  styleUrls: ['./shipment-details.component.scss']
})
export class ShipmentDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {

  }
  shipments = [
    {
      "AssignedToUserId": "amgr",
      "Status": "Ready for Backroom Pick",
      "DeliveryMethod": "PICK",
      "ExpectedShipmentDate": "27-10-2018",
      "OrderNo": "PICK1000001",
      "ScacAndService": "",
      "ShipmentKey": "PICK1000001SHPKEY",
      "ShipmentNo": "PICK1000001SHPNO",
      "BillToAddress": {
        "FirstName": "John",
        "LastName": "Parks",
        "EmailID": "john@example.com",
        "Phonenumber": "1234567890",
        "AddressID": "200001",
        "AddressLine1": "987, Broadview Avenue",
        "AddressLine2": "",
        "City": "Omaha",
        "Country": "US",
        "State": "NE",
        "ZipCode": "68101",
        "PersonInfoKey": "1000002"
      },
      "ToAddress": {
        "FirstName": "Abby",
        "LastName": "Doyle",
        "EmailID": "adoyle@example.com",
        "DayPhone": "6478390821",
        "AddressID": "200002",
        "AddressLine1": "6849, Wolfe Road",
        "AddressLine2": "123",
        "City": "Sunnydale",
        "Country": "US",
        "State": "CA",
        "ZipCode": "94049",
        "PersonInfoKey": "100001"
      },
      "ShipmentLines": {
        "TotalNumberOfRecords": "2",
        "ShipmentLine": [
          {
            "Quantity": "2",
            "ShipmentLineKey": "PICK100001SHPLINEKEY",
            "OrderLine": {
              "ItemDetails": {
                "DisplayUnitOfMeasure": "Each",
                "Description": "Frigidaire Window Air Conditioner 1200-BTU",
                "ImageUrl": "<PATH_TO_IMAGE>",
                "ItemID": "100001"
              }
            }
          },
          {
            "Quantity": "2",
            "ShipmentLineKey": "PICK100002SHPLINEKEY",
            "OrderLine": {
              "ItemDetails": {
                "DisplayUnitOfMeasure": "Each",
                "Description": "Hunter Regalia 60-in New Bronze Ceiling Fan",
                "ImageUrl": "<PATH_TO_IMAGE>",
                "ItemID": "100002   "
              }
            }
          }
        ]
      }
    }

  ]
  ngOnInit() {
    // Replace with your logic to fetch shipment details based on route parameter
    const shipmentId = this.route.snapshot.paramMap.get('id');
    // Simulate fetching data here (replace with actual data retrieval)
  }

  onClose() {
    this.router.navigate(['/shipments/search-results']);
  }
}
