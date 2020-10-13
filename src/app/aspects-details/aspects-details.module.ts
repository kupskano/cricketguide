import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AspectsDetailsPageRoutingModule } from './aspects-details-routing.module';

import { AspectsDetailsPage } from './aspects-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AspectsDetailsPageRoutingModule
  ],
  declarations: [AspectsDetailsPage]
})
export class AspectsDetailsPageModule {}
