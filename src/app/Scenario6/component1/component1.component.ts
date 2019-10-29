import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html'
})
export class Component1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public message;

}
