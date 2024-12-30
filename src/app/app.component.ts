import { Component, OnInit } from '@angular/core';
import { CountryService } from './country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  countries: any[] = []; 
  selectedCountry: any | null = null;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.getCountries().subscribe((data) => {
      this.countries = data; 
    });
  }

  onCountrySelected(country: any): void {
    this.selectedCountry = country; 
  }
}
