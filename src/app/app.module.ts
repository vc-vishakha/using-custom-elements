import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { createCustomElement } from '@angular/elements';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
// import { SliderComponent } from './slider/slider.component';
import { TranslationLoaderService } from './services/translation-loader.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';

import { locale as germanLocale } from '../assets/i18n/de';
import { locale as englishLocale } from '../assets/i18n/en';
import { GlobalErrorHandler } from './services/error-handler';
// import { SliderModule } from './slider/slider.module';
import { NguCarouselModule } from '@ngu/carousel';
import { CustomSliderComponent } from './custom-slider/custom-slider.component';
import { SliderService } from './slider/slider.service';

@NgModule({
  declarations: [CustomSliderComponent],
  entryComponents: [
    // SliderComponent,
    CustomSliderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    RouterModule.forRoot([]),
    NguCarouselModule
    // SliderModule
  ],
  providers: [
    TranslationLoaderService,
    SliderService,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // bootstrap: [CustomSliderComponent]
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


  }

  ngDoBootstrap() {
    const sliderEl = createCustomElement(CustomSliderComponent, { injector: this.injector });

    if (!customElements.get('custom-slider')) {
      customElements.define('custom-slider', sliderEl);
    }

  }

}
