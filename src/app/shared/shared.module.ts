import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { IntToArrayPipe } from './pipes/int-to-array.pipe';
const components = [
    SeparatorComponent,
    IntToArrayPipe,
    CardComponent,
];
@NgModule({
    declarations: [
        ...components
    ],
    exports: [
        ...components
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule {}
