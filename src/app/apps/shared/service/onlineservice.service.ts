import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OnlineserviceService {
	
	baseUrl = "http://localhost:8080/crackers/"
	orders:any[]=[]; 
  constructor(private http: HttpClient) { }
  
  getAllCrackers() {
	  return this.http.get(this.baseUrl+"alldetails");
  }
  
  getOrders() {
	  return this.http.get(this.baseUrl+"orders");
  }
  
  saveOrder(data:any) {
	  return this.http.put(this.baseUrl+"saveorder",data);
  }
  
  saveUser(data:any) {
	  return this.http.post(this.baseUrl+"saveuser",data);
  }
  
  addOrderCart(orders:any) {
	  this.orders = orders;
  }
  
  getOrder() {
	  return this.orders;
  }
}
