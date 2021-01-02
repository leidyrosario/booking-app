import { Hotel } from './../../../../model/hotel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  template: `
    <img [src]="activeImage" width="100%" height="150">
    <div class="nested">
      <div *ngFor="let img of active?.images"
           (click)="activeImage = img">
        <img [src]="img" width="100%">
      </div>
    </div>
  `,
  styles: []
})
export class ImageGalleryComponent {

  @Input() active: Hotel;
  @Input() activeImage: string;

}
