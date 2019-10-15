import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule, MatButtonModule } from '@angular/material';
import { SliderService } from '../slider/slider.service';

@NgModule({
  imports: [
      CommonModule,
      CarouselModule,
      TranslateModule,
      MatIconModule,
      MatButtonModule
  ],
  entryComponents: [ ProductListComponent ],
  declarations: [
      SliderComponent,
      ProductListComponent
  ],
  providers: [ SliderService ],
  exports: [
    SliderComponent
  ]
})

export class SliderModule { }
