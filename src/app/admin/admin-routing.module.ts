import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminhomeComponent } from './adminhome.component';
import { AdminComponent } from './admin/admin.component';
import { AdminListComponent } from './admin-list/admin-list.component';

const routes:Routes = [
                       {
    path: '',
    component: AdminhomeComponent,
    children : [
		{ path: '', component: AdminComponent },
		{ path: 'orders', component: AdminListComponent }
		],
    }
    ];

@NgModule({
	 imports: [RouterModule.forChild(routes)],
	 exports: [RouterModule]
})
export class AdminRoutingModule { }
