import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedMetric: string = '';
  selectedFromUnit: string = '';
  selectedToUnit: string = '';
  fromUnits: string[] = [];
  toUnits: string[] = [];
  inputValue: number = 0;
  result: number | string = '';

  constructor() {}

  updateUnits() {
    if (this.selectedMetric === 'length') {
      this.fromUnits = ['Meter', 'Centimeter', 'Kilometer'];
      this.toUnits = ['Meter', 'Centimeter', 'Kilometer'];
    } else if (this.selectedMetric === 'weight') {
      this.fromUnits = ['Gram', 'Kilogram', 'Milligram'];
      this.toUnits = ['Gram', 'Kilogram', 'Milligram'];
    }
  }

  convert() {
    if (isNaN(this.inputValue)) {
      this.result = 'Nilai input harus numerik';
      return;
    }

    if (this.selectedMetric === 'length') {
      const conversionRates: { [key: string]: number } = {
        Meter: 1,
        Centimeter: 100,
        Kilometer: 0.001
      };

      if (this.selectedFromUnit && this.selectedToUnit) {
        const fromRate = conversionRates[this.selectedFromUnit];
        const toRate = conversionRates[this.selectedToUnit];
        this.result = (this.inputValue * fromRate) / toRate;
      }
    } else if (this.selectedMetric === 'weight') {
      const conversionRates: { [key: string]: number } = {
        Gram: 1,
        Kilogram: 0.001,
        Milligram: 1000
      };

      if (this.selectedFromUnit && this.selectedToUnit) {
        const fromRate = conversionRates[this.selectedFromUnit];
        const toRate = conversionRates[this.selectedToUnit];
        this.result = (this.inputValue * fromRate) / toRate;
      }
    }
  }
}
