import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component3',
  template:`
  {{c3outcome}}
  `,
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  public c3outcome;
  
  }

