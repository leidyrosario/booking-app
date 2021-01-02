import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService, private router: Router) {}
    path: ActivatedRouteSnapshot[];
    route: ActivatedRouteSnapshot;
    canActivate() {
        const isAuth = this.auth.isLogged();
        if (!isAuth) {
            this.router.navigateByUrl('login');
        }
        return isAuth;
    }
}
