import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageFourPageRoutingModule } from './page-four-routing.module';

import { PageFourPage } from './page-four.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageFourPageRoutingModule
  ],
  declarations: [PageFourPage]
})
export class PageFourPageModule {}
