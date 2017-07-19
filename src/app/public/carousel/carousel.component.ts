import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent implements OnInit {
  
  articleImage1 = "/assets/images/iphone_7_large.jpg";
  articleImage2 = "/assets/images/hero_large.jpg";
  articleImage3 = "/assets/images/watch_large.jpg";
  
  constructor() { }

  ngOnInit() {
  }
}
