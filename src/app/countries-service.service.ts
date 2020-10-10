import { Injectable } from '@angular/core';
import { AppServiceService } from './app-service.service';
import { CountryButton } from './countries/country-button.interface';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class CountriesService {

  constructor(private appService: AppServiceService) { }

  public getCountryButtons(): Observable<CountryButton[]> {
    return this.appService.getCountries()
    .pipe(     
      map((countries: string[]) => countries.map(countryName => ({
        name: countryName,
        link: "https://www.google.com/search?q=" + countryName
      })))
      );    
  
  }
}
