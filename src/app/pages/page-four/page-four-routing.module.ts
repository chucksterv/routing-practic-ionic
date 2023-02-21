import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageFourPage } from './page-four.page';

const routes: Routes = [
  {
    path: '',
    component: PageFourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageFourPageRoutingModule {}
