import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
   <button nbButton *ngIf="!value">{{value}}</button>
   <button nbButton hero status="success" *ngIf="value == 'X'">{{value}}</button>
   <button nbButton hero status="info" *ngIf="value == 'O'">{{value}}</button>
  `,
  styles: [
    "button{ width:100% !important;height:100% !important;font-size: 100px !important;}"

  ]
})
export class SquareComponent {
@Input() value: "X" | "O" | undefined;
 
}
