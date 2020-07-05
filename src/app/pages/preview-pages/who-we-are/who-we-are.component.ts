import { Component, OnInit } from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss']
})
export class WhoWeAreComponent implements OnInit {

  constructor() { }
  index;
  config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1,
    watchSlidesProgress: true,
    navigation: true,
    keyboard: true,
    pagination: false,
    centeredSlides: true,
    loop: true,
    roundLengths: true,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 100,
    spaceBetween: 0,
  };
  ngOnInit(): void {
  }
}
