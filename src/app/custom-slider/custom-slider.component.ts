import { Component, OnInit, AfterViewInit, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { SliderService } from './../slider/slider.service';

@Component({
  selector: 'app-custom-slider',
  templateUrl: './custom-slider.component.html',
  styleUrls: ['./custom-slider.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CustomSliderComponent implements OnInit, AfterViewInit {

  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 5, all: 0 },
    speed: 250,
    point: {
      visible: true
    },
    touch: true,
    loop: false,
    interval: { timing: 1500 },
    animation: 'lazy'
  };
  public carouselTileItems: Array<any> = [];

  constructor(
    private cdRef: ChangeDetectorRef,
    public sliderService: SliderService,
  ) { }

  ngOnInit() {
    this.getSlider();
  }

  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }

  getSlider(): any {
    this.sliderService.getSlider().then((res) => {
      console.log(res);
      this.carouselTileItems = res;
    });
  }

}
