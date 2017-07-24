import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { PublicComponent } from './public.component';
//import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  /*
  {
    path: 'public/carousel',
    component: CarouselComponent
  }
  */
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class PublicRoutingModule { }