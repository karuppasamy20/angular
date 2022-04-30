import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin/admin.component';
import { AdminhomeComponent } from './adminhome.component';
import { AdminListComponent } from './admin-list/admin-list.component';



@NgModule({
  declarations: [
    AdminComponent,
    AdminhomeComponent,
    AdminListComponent
  ],
  imports: [
    AdminRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ]
})
export class AdminModule { }
