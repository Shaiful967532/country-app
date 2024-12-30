import { ChangeDetectorRef, Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnChanges {
  @Input() countries: any[] = [];  
  @Output() countrySelected = new EventEmitter<any>();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(): void {
    console.log('Countries Input:', this.countries);
    this.cdr.detectChanges(); 
  }

  selectCountry(country: any): void {
    this.countrySelected.emit(country);
  }

  getLanguages(country: any): string {
    return country.languages ? Object.values(country.languages).join(', ') : 'N/A';
  }  

  getFlagUrl(country: any): string {
    return country.flags?.png || 'default-flag-url.png';
  }
}
