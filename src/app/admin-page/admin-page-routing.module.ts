import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminDetailsComponent } from "./admin-details/admin-details.component";
import { OrderVerificationComponent } from "./order-verification/order-verification.component";
import { ProfileComponent } from "./profile/profile.component";
import {ClubMapComponent} from "./club-map/club-map.component";


const routes: Routes= [
  {
    path: 'info/:adminId',
    component: AdminDetailsComponent,
    // resolve: {
    //   master: AdminResolver,
    // },
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'club-map',
        component: ClubMapComponent,
      },
      {
        path: 'order-verification',
        component: OrderVerificationComponent,
      },
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
