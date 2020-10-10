import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
public countries: string[] = [
  "Poland",
  "Rohan",
  "Deutchland"
];

public getCountries(): Observable<string[]> {
return of(this.countries)
.pipe(
  delay(1000)
);
}

  constructor() { }
}
