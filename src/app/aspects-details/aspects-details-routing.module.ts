import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AspectsDetailsPage } from './aspects-details.page';

const routes: Routes = [
  {
    path: '',
    component: AspectsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AspectsDetailsPageRoutingModule {}
