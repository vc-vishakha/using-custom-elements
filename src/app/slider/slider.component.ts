import { AfterViewInit, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { Product } from './slider';
import { SliderService } from './slider.service';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class SliderComponent implements OnInit, AfterViewInit {
  @Input() productDetail: any;
  public products: Product[] = [];

  customOptions: any = {
    loop: true,
    // mouseDrag: false,
    // touchDrag: false,
    // pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      },
      1100: {
        items: 4
      }
    }
  };

  constructor(
    public sliderService: SliderService,
  ) {
  }

  ngOnInit() {
    console.log('slide', this.productDetail);
  }

  ngAfterViewInit(): any {
    this.getSlider();
  }

  trackByFn(index, item) {
    return item.productId;
  }

  getSlider(): any {
    this.sliderService.getSlider().then((res: Product[]) => {
      this.products = res;
    });
  }
}
