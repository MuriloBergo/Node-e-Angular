import { Component, OnInit, Input } from '@angular/core';
import {Lane} from '../lane';
import {Card} from '../card';

@Component({
  selector: 'app-lanes',
  templateUrl: './lanes.component.html',
  styleUrls: ['./lanes.component.scss']
})
export class LanesComponent implements OnInit {


  @Input() lanes: Lane[] = [];
  @Input() cards: Card[] = [];

  constructor() { }

  ngOnInit() {
  }

}
