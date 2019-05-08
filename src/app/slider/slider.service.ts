import { Injectable } from '@angular/core';
import { SliderFakeDb } from './slider';

@Injectable()
export class SliderService {
  constructor() {}

  getSlider(): any {
    return new Promise((resolve: any) => {
      resolve(SliderFakeDb.data);
    });
  }
}
