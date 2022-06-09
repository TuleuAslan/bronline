import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { ClickOutsideModule } from 'ng-click-outside';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon/icon.component';
import {InputDirective} from "./directives/input.directive";
import { SelectComponent } from './components/select/select.component';


const sharedComponents = [
  ButtonComponent,
  IconComponent,
  InputDirective,
  SelectComponent
];

@NgModule({
  declarations: [...sharedComponents, ButtonComponent, IconComponent, SelectComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatSelectModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgxDaterangepickerMd.forRoot(),
    MatAutocompleteModule,
    MatCheckboxModule,
    MatInputModule,
    MatProgressSpinnerModule,
    ClickOutsideModule,
  ],
  exports: [...sharedComponents],
})
export class SharedModule {}
