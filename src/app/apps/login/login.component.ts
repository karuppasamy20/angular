import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { OnlineserviceService } from '../shared/service/onlineservice.service';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	
	loginForm: FormGroup;
	loading = false;
	submitted = false;
	returnUrl: string = "";
	@Output() close: EventEmitter<any> = new EventEmitter();

	constructor(private formBuilder: FormBuilder,
	private route: ActivatedRoute,
	public onlineservice: OnlineserviceService) { 
		this.loginForm = this.formBuilder.group({
		username: ['', Validators.required],
		email_id: ['', Validators.required],
		mobilenumber: ['', Validators.required],
		address: ['', Validators.required]
		});
	}

	ngOnInit(): void {

      // get return url from route parameters or default to '/'
      //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
	}
  
//convenience getter for easy access to form fields
	get f() { return this.loginForm.controls;
	}

	onSubmit() {
		this.submitted = true;
		

      // stop here if form is invalid
		if (this.loginForm.invalid) {
			return;
		}

		this.onlineservice.saveUser(this.loginForm.value).subscribe((data:any ) => {
	      
			if(data.status){
				this.close.emit(data.status);
			}
			
		}
		);
	}

}
