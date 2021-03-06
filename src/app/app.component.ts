import { Component, OnInit } from '@angular/core';
import { CommunicationService } from './communication.service';
import { CountriesService } from './countries-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(
    private countriesService: CountriesService,
    private communicationService: CommunicationService
  ) {}
  
  ngOnInit(): void{
    this.communicationService.messageSubject.subscribe((message: string) => {
      console.log("App component receives:", message);
    });
  }
}
