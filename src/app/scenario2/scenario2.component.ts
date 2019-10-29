import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario2',
  template: `
  <input [(ngModel)] = "text" type = "text" value="Scenario2">
  {{text}}

  <input #myInput type="text">
  <button (click)= "fireEvent(myInput.value)" > Child entry </button>
  
  <app-scenario3 (child3Event)= "child2($event)"></app-scenario3>
  
  `,
  styleUrls: ['./scenario2.component.css']
})
export class Scenario2Component implements OnInit {

  
  public text="";

  constructor() { }

  ngOnInit() {
  }
  @Output()
  public childEvent = new EventEmitter;

  fireEvent(value){
    this.childEvent.emit(value);
  }

  
  child2($event){
    this.childEvent.emit($event);
  }



}
