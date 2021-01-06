import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  template: `
    <!--navigation bar-->
  <div class="navigation" *ngIf="auth.isLogged()">
    <div class="horiz-grid">
      <div class="logo">GOING PLACES</div>
      <strong>{{auth.data.name}}</strong>
      <div class="menu">
        <span class="btn" routerLink="search" routerLinkActive="active">SEARCH</span>
        <span class="btn" routerLink="cart" routerLinkActive="active">
          CART ({{cart.items.length}})
        </span>
        <span class="btn" (click)="auth.logout()">LOGOUT</span>
      </div>
    </div>
  </div>
  `,
  styles: []
})
export class NavbarComponent {

  constructor(
    public cart: CartService,
    public auth: AuthService
    ) {}

}
