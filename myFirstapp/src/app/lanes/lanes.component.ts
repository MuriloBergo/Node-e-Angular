import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lanes',
  templateUrl: './lanes.component.html',
  styleUrls: ['./lanes.component.scss']
})
export class LanesComponent implements OnInit {

  @Input() lanes: string[];
  constructor() { }

  ngOnInit() {
  }

}
