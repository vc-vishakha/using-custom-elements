import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface ILocale {
  lang: string;
  data: object;
}

@Injectable()
export class TranslationLoaderService {
  constructor(private translate: TranslateService) {}

  public loadTranslations(...args: ILocale[]): void {
    const locales = [...args];
    locales.forEach((locale: any) => {
      this.translate.setTranslation(locale.lang, locale.data, true);
    });
  }
}
