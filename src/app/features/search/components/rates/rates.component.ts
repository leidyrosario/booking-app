import { Hotel } from './../../../../model/hotel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rates',
  template: `
    <div class="font-superbig">
      {{active?.rate}}
      <i class="ion-ios-person"></i>
    </div>
  `,
  styles: []
})
export class RatesComponent {
@Input() active: Hotel;

}



