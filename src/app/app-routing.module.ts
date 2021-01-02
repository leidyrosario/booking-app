import { AuthGuard } from './core/services/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
  { path: 'search', loadChildren: './features/search/search.module#SearchModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './features/login/login.module#LoginModule' },
  { path: 'cart', loadChildren: './features/cart/cart.module#CartModule', canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'search' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
