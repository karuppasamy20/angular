import { Component, OnInit } from '@angular/core';
import { OnlineserviceService } from '../../shared/service/onlineservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent implements OnInit {
	
  ordersList:any;
  orderCount:number = 0;
  totalorderamount = 0;
  totaldiscount = 0;
  orders: {[key: string]: string} = {};

  constructor(public onlineservice: OnlineserviceService,
		  public router: Router) { }

  ngOnInit(): void {
	  this.ordersList = this.onlineservice.getOrder();
	  this.orderCount = this.ordersList.length;
	  this.calculatePrice();
  }
  
  publishOrder() {
	  console.log(this.ordersList);
	  this.orders = {
			  name : "karuppasamy",
			  mobilenumber : "9790219145",
			  orderdetails : this.ordersList,
			  emailid : "karuppasamy1194@gmail.com",
			  address : "Nadur"
	  };
	  
	  this.onlineservice.saveOrder(this.orders).subscribe((data:any ) => {
		  console.log("save response",data);
		  this.onlineservice.addOrderCart(data.orderdetails);
		  this.router.navigate(['/confirmorder']);
		    });
  }
  
  calculatePrice() {
	  this.totalorderamount = 0;
	  this.totaldiscount = 0;
	  for(let data of this.ordersList) {
			  data.totalprice = data.quantity*data.price;
			  this.totalorderamount += data.totalprice;
			  this.totaldiscount += data.quantity*data.offerprice;
	  }
  }

}
