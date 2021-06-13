import { Component } from '@angular/core';
import { CARD_DATA } from './data/card-data';
import { CardData } from './model/CardData';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cards-angular-demo-app';
  cardData: CardData[] = CARD_DATA;

  selectedPlace: string;

  onPlaceSelected(place: string) {
    this.selectedPlace = place;
  }
}
