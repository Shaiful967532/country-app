import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent {
  @Input() country: any;

  getCurrencyInfo(currencies: any): string {
    const currencyKey = Object.keys(currencies)?.[0];
    return currencyKey
      ? `${currencies[currencyKey].name} (${currencies[currencyKey].symbol})`
      : 'N/A';
  }
}
