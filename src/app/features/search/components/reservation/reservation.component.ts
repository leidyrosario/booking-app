import { Hotel, Room } from './../../../../model/hotel';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reservation',
  template: `
    <div class="horiz-grid separator"
         *ngFor="let room of active?.rooms"
         (click)="addToCart.emit(room)"
    >
      <div>{{room.label}}</div>
      <div>
        {{room.price}}
        <i class="ion-ios-cart"></i>
      </div>
    </div>

  `,
  styles: [],
})
export class ReservationComponent {
  @Input() active: Hotel;
  @Output() addToCart: EventEmitter<Room> = new EventEmitter<Room>();
}
