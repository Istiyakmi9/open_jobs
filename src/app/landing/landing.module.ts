import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { LandingRoutingModule } from './landing-routing.module';
import { UtilModule } from '../util/util.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobpostComponent } from './jobpost/jobpost.component';
import { AccountSetupComponent } from './account-setup/account-setup.component';

@NgModule({
  declarations: [
    IndexComponent,
    JobpostComponent,
    AccountSetupComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UtilModule
  ]
})
export class LandingModule { }
