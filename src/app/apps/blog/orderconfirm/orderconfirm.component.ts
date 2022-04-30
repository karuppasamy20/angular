import { Component, OnInit } from '@angular/core';
import { OnlineserviceService } from '../../shared/service/onlineservice.service';
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-orderconfirm',
  templateUrl: './orderconfirm.component.html',
  styleUrls: ['./orderconfirm.component.css']
})
export class OrderconfirmComponent implements OnInit {
	
	orders:any;
	totalamount = 0;

  constructor(public onlineservice: OnlineserviceService) { }

  ngOnInit(): void {
	  this.orders = this.onlineservice.getOrder();
	  this.calculatePrice();
	  this.captureScreen();
  }
  
  calculatePrice() {
	  for(let data of this.orders) {
			  this.totalamount += data.totalprice;
	  }
  }
  
  captureScreen() {
	    let data = document.getElementById('invoice');
	    html2canvas(data as any).then(canvas => {
	        var imgWidth = 210;
	        var pageHeight = 295;
	        var imgHeight = canvas.height * imgWidth / canvas.width;
	        var heightLeft = imgHeight;
	        const contentDataURL = canvas.toDataURL('image/png');
	        let pdfData = new jsPDF('p', 'mm', 'a4');
	        var position = 0;
	        pdfData.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
	        pdfData.save(`MyPdf.pdf`);
	    });
	}

}
