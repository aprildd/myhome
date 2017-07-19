import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  BANNER_IMAGE = "/assets/images/test.jpg";

  constructor() { }

  ngOnInit() {
  }
}
