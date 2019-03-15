import { Component, OnInit } from '@angular/core';
import { Lane} from '../lane';
import {Card} from '../card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  newCardDescription: '';
  newCardTitle: '';

  lanes: Lane[] = [
    {
      title: 'to-Do',
      cards: []
    },

    {
      title: 'Doing',
      cards: []
    },

    {
      title: 'Done',
      cards: []
    }
  ];

  constructor() { }

  ngOnInit() { }

createCard() {

  const card: Card = {
  name: this.newCardTitle,
  description: this.newCardTitle,
  created: new Date()
  };

  this.lanes[0].cards.push(card);
  this.newCardTitle = '';
  this.newCardDescription = '';
}

}
