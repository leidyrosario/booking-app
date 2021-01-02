import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [NavbarComponent],
    exports: [NavbarComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class CoreModule {}
