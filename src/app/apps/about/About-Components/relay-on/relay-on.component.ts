import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relay-on',
  templateUrl: './relay-on.component.html',
  styleUrls: ['./relay-on.component.css']
})
export class RelayOnComponent implements OnInit {

  relayOn = [
    {
      icon: 'sl-icon-globe text-info-gradiant',
      field: 'DELIVERY',
      contact: false,
      fieldText: 'Free delivery on orders above Rs. 20000/- Anywhere in Bangalore. Guaranteed on time delivery before Diwali.'
    },
    {
      icon: 'sl-icon-earphones-alt text-info-gradiant',
      field: '24/7 SUPPORT',
      contact: true,
      fieldText: 'We are just a call away. But remember, if it is season time, we may not answer the calls immediately. But will definitely call back! '
    },
    {
      icon: 'sl-icon-settings text-info-gradiant',
      field: 'Price & Quality',
      contact: false,
      fieldText: 'No compromise on quality. Lowest price guaranteed. Prices lower than all other place like Hosur and Sivakasi. Crackers available all 365 days of the year!'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
