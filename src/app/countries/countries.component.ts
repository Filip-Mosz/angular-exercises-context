import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { CountriesService } from '../countries-service.service';
import { CountryButton } from "../countries/country-button.interface"

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  providers: [CountriesService]
})
export class CountriesComponent implements OnInit {
  public countryButtons: CountryButton[];

  constructor(private countriesService: CountriesService,
    private communicationService: CommunicationService) { }

  ngOnInit(): void {
    this.countriesService.getCountryButtons()
    .subscribe((buttons: CountryButton[]) => {
      this.countryButtons = buttons;
    });

    this.communicationService.messageSubject.next("Hello from countries component");
  }

  public onSendMessageClick(): void {
    this.communicationService.messageSubject.next("button clicked");    //  kopia z app.components
    }
  
}
