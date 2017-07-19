import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { PublicRoutingModule } from './public.routing.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BannerComponent } from './banner/banner.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  declarations: [HeaderComponent, FooterComponent, CarouselComponent, BannerComponent],
  exports: [HeaderComponent, FooterComponent, CarouselComponent, BannerComponent]
})
export class PublicModule { }
