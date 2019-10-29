import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario1',
  // templateUrl: './scenario1.component.html',
  template:  
  `<h2>
      Type Something
  </h2>
  <input #myInput type = "text" >

  <br>
  <button (click)= "onClick(myInput.value)">Enter</button>  



  {{message}}

  <app-scenario2 (childEvent)="message = $event"></app-scenario2>

  `,
  styles: []
})
export class Scenario1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  public childText;
  
  public message;

  onClick(value){
        console.log(value);
  }




}
