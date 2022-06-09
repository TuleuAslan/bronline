import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageRoutingModule } from './admin-page-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { OrderVerificationComponent } from './order-verification/order-verification.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { SharedModule } from '../shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import {ClubMapComponent} from "./club-map/club-map.component";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ClubMapComponent,
    ProfileComponent,
    OrderVerificationComponent,
    AdminDetailsComponent
  ],
  imports: [
    CommonModule, FormsModule, AdminPageRoutingModule, SharedModule, MatTabsModule, MatTableModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule
  ]
})
export class AdminPageModule { }
