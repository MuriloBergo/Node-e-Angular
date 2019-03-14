//import { Component, OnInit } from '@angular/core';
import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  @Input() title: string;
// como default variaveis em typescript sao declaradas como protected
 subtitle: string = 'ABAP factory Team IBM';
 @Input() description: string;
  constructor() { }

  ngOnInit() {
  }

  handleClick(){
    alert("Hello from " + this.title);
  }

}
