import { Component, OnInit } from '@angular/core';
import { OnlineserviceService } from '../../apps/shared/service/onlineservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	
  product:any[] = [];

  constructor(public onlineservice: OnlineserviceService) { }

  ngOnInit(): void {
	  this.getAllCrackers();
  }
  
  getAllCrackers() {
	  this.onlineservice.getAllCrackers().subscribe((data:any ) => {
		  this.product = data;
		  console.log(this.product);
		    });
  }

}
