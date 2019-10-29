import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario3',
  template: `
  <input #child3 type= "text">
  <button (click)= "onclick(child3.value)"> Child3 Enter </button>
  `,
  styleUrls: ['./scenario3.component.css']
})
export class Scenario3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output()
  public child3Event = new EventEmitter;


  onclick(value){
    this.child3Event.emit(value);
  }

}
