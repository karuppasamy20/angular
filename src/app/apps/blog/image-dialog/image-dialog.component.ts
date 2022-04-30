import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.css']
})
export class ImageDialogComponent implements OnInit {
	
	loginflag:boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, 
		  public dialogRef: MatDialogRef<ImageDialogComponent>,
  private router: Router) {

	  this.loginflag = data.loginflag;
  }

  ngOnInit(): void {
  }
  
  onClose(event:any) {
	  console.log("data",event);
	  this.dialogRef.close();

	  setTimeout(() => {this.router.navigate(['/order'])},100);
  }

}
