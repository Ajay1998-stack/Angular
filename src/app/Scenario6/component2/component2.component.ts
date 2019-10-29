import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() 
  c2event = new EventEmitter();

  public sendtoc1(value){
    this.c2event.emit(value);
  }

  

}
