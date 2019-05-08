import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { createCustomElement } from '@angular/elements';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatIconModule, MatButtonModule } from '@angular/material';
import { ProductListComponent } from './product-list/product-list.component';
import { SliderService } from './slider/slider.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SliderComponent } from './slider/slider.component';
import { TranslationLoaderService } from './services/translation-loader.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

import { locale as germanLocale } from '../assets/i18n/de';
import { locale as englishLocale } from '../assets/i18n/en';
import { GlobalErrorHandler } from './services/error-handler';


@NgModule({
  declarations: [
    ProductListComponent,
    SliderComponent
  ],
  entryComponents: [
    ProductListComponent,
    SliderComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    TranslateModule.forRoot(),
    CarouselModule,
    RouterModule.forRoot([])
  ],
  providers: [
      SliderService,
      TranslationLoaderService,
      {
        provide: ErrorHandler,
        useClass: GlobalErrorHandler
      }
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

  constructor(
    private injector: Injector,
    private translateService: TranslateService,
    private translationLoaderService: TranslationLoaderService
    ) {

       /* Config translation in root module */
      this.translateService.addLangs(['en', 'de']);
      this.translateService.setDefaultLang(environment.defaultLanguage);
      this.translateService.use(environment.defaultLanguage);

      this.translationLoaderService.loadTranslations(germanLocale, englishLocale);

      // const scriptTag = document
      //     .createElement(`script`);
      // scriptTag.setAttribute('src', '/custom-element.js');
      // scriptTag.setAttribute('type', 'text/javascript');

      // document.body.appendChild(scriptTag);


    }

  ngDoBootstrap() {
    const sliderEl = createCustomElement( SliderComponent, { injector: this.injector } );

    if (!customElements.get('custom-slider')) {
      customElements.define('custom-slider', sliderEl);
    }
  }

}
