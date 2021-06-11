import { Component, Input, OnInit } from '@angular/core';
import { CardData } from '../model/CardData';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  cardData: CardData

  constructor() { }

  ngOnInit(): void {
  }

}
