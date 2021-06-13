import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CardData } from '../model/CardData';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  cardData: CardData

  @Output()
  selectedPlace = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onPlaceSelected() {
    this.selectedPlace.emit(this.cardData.name)
  }

}
