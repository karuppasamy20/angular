import { Component, OnInit } from '@angular/core';
import { Blog } from './blog-type';
import { Crackers } from './crackers-datamodel';
import { ServiceblogService } from './blog-service.service';
import { OnlineserviceService } from '../shared/service/onlineservice.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogsDetail: Blog[] = [];
  crackerdetails:Crackers[] = [];
  noofproduct: number = 0;
  totalorderamount: number = 0;
  totaldiscount: number = 0;
  orderDetails:{ [key: string]: any } = {};
  orderList:any[] = [];
  loginflag:boolean = false;


  constructor(
    public service: ServiceblogService,
    public onlineservice: OnlineserviceService,
    public router: Router,
    public http: HttpClient,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {
    this.service.showEdit = false;
    this.getAllCrackers();
  }

  ngOnInit(): void {
    if (this.service.Blogs.length === 0)
      this.service.getBlog().subscribe((d: any) => (this.service.Blogs = d));
  }
  
  openDialog() {
	  this.loginflag = false;
	  this.dialog.open(ImageDialogComponent,{ data :{loginflag:this.loginflag}});
	  }

  loginClick() {
    this.router.navigate(['/login']);
  }

  newPost() {
    this.router.navigate(['/post']);
  }

  viewDetail(id: number) {
    this.service.detailId = id;

    if (this.service.loginStatusService) this.service.showEdit = true;

    this.router.navigate(['/blogDetail', id]);
  }
  
  getAllCrackers() {
	  this.onlineservice.getAllCrackers().subscribe((data:any ) => {
		  this.crackerdetails = data;
		  console.log(this.crackerdetails);
		    });
  }
  
  calPrice(event:any,selectData:{ [key: string]: any }) {
	  if(!this.orderList.includes(selectData)){
		  this.orderList.push(selectData)
	  }
	  console.log(this.orderList);
	 this.orderDetails[selectData['id']] = selectData;
	  this.noofproduct = 0;
	  this.totalorderamount = 0;
	  this.totaldiscount = 0;
	  for(let data of this.crackerdetails) {
		  if(data.quantity !=0){
			  this.noofproduct += 1;
			  data.totalprice = data.quantity*data.price;
			  this.totalorderamount += data.totalprice;
			  this.totaldiscount += data.quantity*data.offerprice;
		  }
	  }
  }
  
  addToCard(cracker:any) {
	  if(!this.orderList.includes(cracker)){
		  this.orderList.push(cracker)
	  }
  }
  
  onSubmit() {
	  this.onlineservice.addOrderCart(this.orderList);
	  if(localStorage.getItem("username") == null) {
		  this.loginflag = true;
		  let dialogRef = this.dialog.open(ImageDialogComponent,{ data :{loginflag:this.loginflag}});
		  dialogRef.afterClosed().subscribe(result => {
			  this.router.navigate(['/']);
		    });
	  }
  }
  
}
