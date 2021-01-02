import { SearchRoutingModule } from './search-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { GmapComponent } from './components/gmap/gmap.component';
import { HotelFormComponent } from './components/hotel-form/hotel-form.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { RatesComponent } from './components/rates/rates.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ServicesComponent } from './components/services/services.component';
import { StarsComponent } from './components/stars/stars.component';
import { NoResultsComponent } from './no-results.component';
import { SearchComponent } from './search.component';

@NgModule({
  declarations: [
    SearchComponent,
    HotelListComponent,
    HotelFormComponent,
    GmapComponent,
    ContactFormComponent,
    RatesComponent,
    ReservationComponent,
    ServicesComponent,
    ImageGalleryComponent,
    StarsComponent,
    NoResultsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
