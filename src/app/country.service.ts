import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


interface Country {
  name: { common: string };
  capital: string[];
  region: string;
  population: number;
  flags: { png: string };
}

interface SimplifiedCountry {
  name: string;
  capital: string;
  region: string;
  population: number;
  flag: string;
}

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((data) =>
        data.map((country) => ({
          name: country.name.common,
          capital: country.capital?.[0] || 'N/A',
          region: country.region,
          population: country.population,
          flag: country.flags?.png || 'default-flag-url.png',
        }))
      )
    );
  }
}
